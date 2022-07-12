import { insertNode } from './utils';
export const insertImage = (attrs) => (state, dispatch) => {
    const { image } = state.schema.nodes;
    const commandName = 'insertImage';
    const newImage = image.createAndFill(attrs);
    insertNode(newImage)(state, tr => dispatch(tr.setMeta('commandName', commandName).setMeta('args', attrs)));
};
