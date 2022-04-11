import {CreateAppFunction} from "@vue/runtime-dom";

interface RendererOptions<
  HostNode,
  HostElement
> {
  patchProp(): void,
  insert(): void,
  remove(): void,
  createElement(): void,
}

type VNode = any

export interface RendererNode {
  [key: string]: any
}
export interface RenderElement extends RendererNode {}

type PatchFn = (
  n1: VNode | null,
  n2: PatchFn,
  container: RenderElement
) => void

export interface Renderer<HostElement> {
  render: any,
  createApp: CreateAppFunction<HostElement>,
}

export function createRenderer<HostNode, HostElement>(options: RendererOptions<HostNode, HostElement>) {
  return baseCreateRenderer<HostNode, HostElement>(options)
}

function baseCreateRenderer<HostNode, HostElement>(options: RendererOptions<HostNode, HostElement>): any {
  const target: any = window
  target.__VUE__ = true

  const {
    insert,
    remove
  } = options

  const patch: PatchFn = (
    n1,
    n2,
    container
  ) => {
    if (n1 === n2) return
  }
}
