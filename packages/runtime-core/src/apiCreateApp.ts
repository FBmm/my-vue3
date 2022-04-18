import {RootRenderFunction} from "./renderer";
import {CreateAppFunction} from "@vue/runtime-dom";

export interface App {
  [key: string]: any
}

export interface AppConfig {
  [key: string]: any
}

export interface AppContext {
  app: App,
  config: AppConfig,
  mixins: any,
  components: any,
  directives: any,
  provides: any,
}

function createAppContext(): AppContext {
  return {
    app: null as any,
    config: {},
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
  }
}

let uid = 0

export function createAppAPI<HostElement>(
  render: RootRenderFunction
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent, rootProps = null) {
    const context = createAppContext()
    const installedPlugins = new Set()

    let isMounted = false

    const app = (context.app = {
      _uid: uid++
    })

    return app
  }
}
