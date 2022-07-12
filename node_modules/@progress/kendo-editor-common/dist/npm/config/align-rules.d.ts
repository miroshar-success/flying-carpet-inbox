export interface AlignRule {
    node: string;
    style: Array<{
        name: string;
        value: string;
    }>;
}
export declare const alignLeftRules: Array<AlignRule>;
export declare const alignRightRules: Array<AlignRule>;
export declare const alignCenterRules: Array<AlignRule>;
export declare const alignJustifyRules: Array<AlignRule>;
export declare const alignRemoveRules: Array<AlignRule>;
