import { Mark } from 'prosemirror-model';
export interface ActiveMarks {
    marks: Mark[];
    hasNodesWithoutMarks: boolean;
}
