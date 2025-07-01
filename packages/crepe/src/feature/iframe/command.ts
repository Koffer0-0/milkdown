import { $command } from '@milkdown/kit/utils'

export const toggleIframeCommand = $command('ToggleIframe', () => {
  return () => (state, dispatch) => {
    const inputText = '::iframe{src="https://example.com"}'

    const tr = state.tr.insertText(
      inputText,
      state.selection.from,
      state.selection.to
    )

    if (dispatch) {
      dispatch(tr)
    }

    // Apply input rule directly (in case text insertion isn't enough)
    // iframeInputRule(ctx)
    return true
  }
})
