import { Command } from './types/command';
export interface ImageData {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
}
export declare const insertImage: (attrs: ImageData) => Command;
