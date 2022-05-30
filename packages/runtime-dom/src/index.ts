import { createRenderer } from '@vue/runtime-core'
import {extend} from "@vue/shared";
import {nodeOps} from "./nodeOps";
import {patchProp} from "./patchProp";

let renderer: any

const renderOptions = extend({ patchProp }, nodeOps)

function ensureRenderer() {
  return renderer || (renderer = createRenderer(renderOptions))
}

export const createApp = ((...args: any) => {
  const app = ensureRenderer().createApp(...args)
  return app
})

export * from '@vue/runtime-dom'

