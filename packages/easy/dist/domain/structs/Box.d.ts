import { Struct } from '../Struct';
import { Dimension } from './Dimension';
export declare class Box extends Struct {
    readonly l: Dimension;
    readonly w: Dimension;
    readonly h: Dimension;
    private sorted;
    lowestDim: Dimension;
    medianDim: Dimension;
    maxDim: Dimension;
    get isValid(): boolean;
    static with: (l: Dimension, w: Dimension, h: Dimension) => Box;
    stack: (qty: number) => Box;
    fits: (contents: Box, qty?: number) => boolean;
}
