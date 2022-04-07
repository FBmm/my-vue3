
interface RendererOptions<
  HostNode,
  HostElement
> {
  patchProp(): void,
  insert(): void,
  remove(): void,
  createElement(): void,
}

export function createRenderer<HostNode, HostElement>(options: RendererOptions<HostNode, HostElement>) {
  return baseCreateRenderer<HostNode, HostElement>(options)
}

function baseCreateRenderer<HostNode, HostElement>(options: RendererOptions<HostNode, HostElement>): Renderer<> {

}
