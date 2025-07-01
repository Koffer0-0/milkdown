import type { EditorView } from '@milkdown/kit/prose/view'

import { defineComponent, type ShallowRef, type VNodeRef, h } from 'vue'

import type { IframeConfig } from '..'

type IframeTooltipProps = {
  config: Partial<IframeConfig>
  innerView: ShallowRef<EditorView | null>
  updateValue: ShallowRef<() => void>
}

h

export const IframeTooltip = defineComponent<IframeTooltipProps>({
  props: {
    config: {
      type: Object,
      required: true,
    },
    innerView: {
      type: Object,
      required: true,
    },
    updateValue: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const innerViewRef: VNodeRef = (el) => {
      if (!el || !(el instanceof HTMLElement)) return
      while (el.firstChild) {
        el.removeChild(el.firstChild)
      }
      if (props.innerView.value) {
        el.appendChild(props.innerView.value.dom)
      }
    }
    const onUpdate = (e: Event) => {
      e.preventDefault()
      props.updateValue.value()
    }

    return () => {
      return (
        <div class="container">
          {props.innerView && <div ref={innerViewRef} />}
          <button onPointerdown={onUpdate}>
            confirm
           </button>
        </div>
      )
    }
  },
})
