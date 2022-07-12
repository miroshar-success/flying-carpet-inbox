export const insertText = (attrs) => (state, dispatch) => {
    dispatch(state.tr.insertText(attrs.text, attrs.from, attrs.to));
};
