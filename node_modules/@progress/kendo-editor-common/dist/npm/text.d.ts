import { Command } from './types/command';
export interface TextData {
    text: string;
    from?: number;
    to?: number;
}
export declare const insertText: (attrs: TextData) => Command;
