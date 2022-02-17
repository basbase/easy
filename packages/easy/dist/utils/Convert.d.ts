export declare class Convert<From = unknown, To = unknown> {
    readonly from: (f: From) => To;
    readonly to: (t: To) => From;
    constructor(from: (f: From) => To, to: (t: To) => From);
}
export declare const convert: {
    default: Convert<any, any>;
    ignore: Convert<any, any>;
    toBool: {
        fromNumber: Convert<boolean, number>;
        fromString: Convert<boolean, string>;
    };
    toDate: {
        fromString: Convert<string, string>;
    };
    toNumber: {
        fromString: Convert<number, string>;
    };
};
