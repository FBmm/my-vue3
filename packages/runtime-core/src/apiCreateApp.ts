const isFunction = (val: unknown): val is Function => typeof val === 'function'

function createAppContext(): any {
  return {
    app: null,
    config: {},
    mixins: [],
    components: {},
    provides: Object.create(null),
    directives: {}
  }
}

let uid = 0

export function createAppAPI(
  render: any,
) {
  return function createApp(rootComponent: any, rootProps = null) {

    const context = createAppContext()

    const installedPlugins = new Set()

    const app = (context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,

      use(plugin: any, ...options: any) {
        if (installedPlugins.has(plugin)) {
          console.warn('Plugin has already in app')
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin)
          plugin.install(app, ...options)
        } else if (plugin && isFunction(plugin)) {
          installedPlugins.add(plugin)
          plugin(app, ...options)
        }
        return app
      },

      mixin() {

      },

      component(name: any, component: any) {
        if (!component) {
          return context.components[name]
        }
        context.components[name] = component
        return app
      },

      directive(name: any, directive: any) {
        if (!directive) {
          return context.directives[name]
        }
        context.directives[name] = directive
        return  app
      },

      mount() {

      }


    })

    return app
  }
}
