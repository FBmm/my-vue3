import { createRenderer } from '@vue/runtime-core'
import {extend} from "@vue/shared";
import {nodeOps} from "./nodeOps";
import {patchProp} from "./patchProp";
import {Renderer} from "../../runtime-core/src/renderer";

export type CreateAppFunction<HostElement> = any

let renderer: Renderer<Element | ShadowRoot>

const renderOptions = extend({ patchProp }, nodeOps)

function ensureRenderer() {
  return renderer || (renderer = createRenderer(renderOptions))
}

export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  return app
}) as CreateAppFunction

export * from '@vue/runtime-dom'

