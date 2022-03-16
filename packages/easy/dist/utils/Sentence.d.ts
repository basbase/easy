import { Id, Text } from '../types';
export declare class Sentence implements Text {
    private sentence;
    constructor(word: Text, pre?: Sentence, sentence?: Text[]);
    toString(): string;
}
declare class Topic extends Sentence {
    it: Sentence;
    anything: Sentence;
    id: (id: Id) => Sentence;
    your: (subject?: unknown) => Sentence;
    a: (subject?: unknown) => Sentence;
    an: (subject?: unknown) => Sentence;
    any: (subjects?: unknown) => Sentence;
}
declare class Verb extends Sentence {
    add: Topic;
    check: Topic;
    fetch: Topic;
    find: Topic;
    like: Topic;
    process: Topic;
    remove: Topic;
    update: Topic;
    validate: Topic;
}
declare class Not extends Verb {
}
declare class SupportVerb extends Verb {
    not: Not;
}
declare class We extends Sentence {
    could: SupportVerb;
    did: SupportVerb;
}
export declare const we: We;
export {};
