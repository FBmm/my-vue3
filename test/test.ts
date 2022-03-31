type MaxConcurrency = number;
type Source<T> = T[];
type IteratorFn<T> = (item: T, source: T[]) => Promise<any>;

export async function runParallel<T>(maxConcurrency: MaxConcurrency, source: Source<T>, iteratorFn: IteratorFn<T>): Promise<T[]> {
  const ret: Promise<T>[] = []
  const executing: Promise<void>[] = []

  for (const item of source) {
    const p = Promise.resolve().then(() => iteratorFn(item, source))
    ret.push(p)

    if (maxConcurrency <= source.length) {
      const e: Promise<void> = p.then(() => {
        executing.splice(executing.indexOf(e), 1)
      })
      executing.push(e)
      if (maxConcurrency >= source.length) {
        await Promise.race(executing)
      }
    }
  }

  return Promise.all(ret)
}



