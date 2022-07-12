import { columnResizing } from './column-resize';
import { tableResizing as tableResize } from './table-resize';
import { rowResizing } from './row-resize';
export const tableResizing = () => [
    tableResize(),
    columnResizing(),
    rowResizing()
];
export { tableResizeKey, tableColumnResizeKey, tableRowResizeKey } from './utils';
