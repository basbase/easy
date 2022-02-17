"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.we = exports.Sentence = void 0;
const types_1 = require("../types");
class Sentence {
    constructor(word, pre, sentence = (pre?.sentence ?? []).concat(word)) {
        this.sentence = sentence;
    }
    toString() {
        return (0, types_1.text)(this.sentence.join(' ')).sentence.toString();
    }
}
exports.Sentence = Sentence;
class Topic extends Sentence {
    constructor() {
        super(...arguments);
        this.it = new Sentence('it', this);
        this.anything = new Sentence('anything', this);
        this.id = (id) => new Sentence(`id '${id}'`, this);
        this.your = (subject) => new Sentence(`your ${subject ?? 'item'}`, this);
        this.a = (subject) => new Sentence(subject ? `a ${subject}` : 'an item', this);
        this.an = (subject) => new Sentence(`an ${subject ?? 'item'}`, this);
        this.any = (subjects) => new Sentence(`any ${subjects ?? 'items'}`, this);
    }
}
class Verb extends Sentence {
    constructor() {
        super(...arguments);
        this.add = new Topic('add', this);
        this.check = new Topic('check', this);
        this.fetch = new Topic('fetch', this);
        this.find = new Topic('find', this);
        this.like = new Topic('like', this);
        this.process = new Topic('process', this);
        this.remove = new Topic('remove', this);
        this.update = new Topic('update', this);
        this.validate = new Topic('validate', this);
    }
}
class Not extends Verb {
}
class SupportVerb extends Verb {
    constructor() {
        super(...arguments);
        this.not = new Not('not', this);
    }
}
class We extends Sentence {
    constructor() {
        super(...arguments);
        this.could = new SupportVerb('could', this);
        this.did = new SupportVerb('did', this);
    }
}
exports.we = new We('we');
//# sourceMappingURL=Sentence.js.map