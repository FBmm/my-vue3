let _uid = 0

function getAppContext() {
  return {
    app: null,
    config: {
      performance: false,
      globalProperties: {},
    },
    components: {},
    mixins: [],
    directives: {},
    provides: {}
  }
}

let renderer
let renderOptions = {}

function createAppApi(render) {
  return function createApp(options) {
    let isMounted = false
    // app context
    const context = getAppContext()
    // 缓存 plugins callback
    const installedPlugins = new Set()
    // 创建 app
    const app: any = (context.app = {
      _uid: _uid++,
      use(plugin: any, ...options: any) {
        if (installedPlugins.has(plugin)) {
          // dev tips
        } else if (typeof plugin === 'function') {
          installedPlugins.add(plugin)
          plugin(app, ...options)
        } else if (plugin && typeof plugin.install === 'function') {
          installedPlugins.add(plugin.install)
          plugin.install(app, ...options)
        }
        return app
      },
      mount(rootContainer: Element) {
        if (!isMounted) {
          // 1. 创建 vnode

        } else if (__DEV__) {
          // dev tips
        }
      }
    })
    return app
  }
}

function createBaseRender(options) {
  const patch = () => {}
  const render = () => {}
  return {
    render,
    createApp: createAppApi(render)
  }
}

function ensureRenderer() {
  return renderer || createBaseRender(renderOptions)
}

export function createApi(...arg) {
  const app = ensureRenderer().createApp(...arg)
  app.mount = () => {}
  return app
}