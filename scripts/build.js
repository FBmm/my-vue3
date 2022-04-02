const fs = require('fs')
const path = require('path')
const execa = require('execa')

const allTargets = fs.readdirSync('packages').filter(f => {
  if (!fs.statSync(`packages/${f}`).isDirectory()) {
    return false
  } else {
    // const pkg = require(`../packages/${f}/package.json`)
    return true
  }
})

console.log(allTargets)

run()
async function run() {
  await buildAll(allTargets)
}

async function buildAll(targets) {
  await runParallel(require('os').cpus().length, targets, build)
}

async function runParallel(maxConcurrency, source, iteratorFn) {
  const ret = []
  const executing = []

  for (const item of source) {
    const p = Promise.resolve().then(() => iteratorFn(item, source))
    ret.push(p)

    if (maxConcurrency <= source) {
      const e = p.then(() => executing.splice(executing.indexOf(p), 1))
      executing.push(e)
      if (maxConcurrency >= source) {
        await Promise.race(executing)
      }
    }
  }

  return Promise.all(ret)
}

async function build(target) {
  const pkgDir = path.resolve(`packages/${target}`)
  const pkg = path.resolve(`${pkgDir}/package.json`)

  const env = pkg.buildOptions && pkg.buildOptions.env

  await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `NODE_ENV:${env}`,
        `TARGET:${target}`
      ].filter(Boolean).join(',')
    ],
    { stdio: 'inherit' }
  )
}



