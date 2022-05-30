import {createAppAPI} from "./apiCreateApp";

export function createRenderer(options: any) {
  return baseCreateRenderer(options)
}

function baseCreateRenderer(options: any) {
  const target: any = window
  target.__VUE__ = true

  const render = () => {

  }
  return {
    render,
    createApp: createAppAPI(render)
  }
}
