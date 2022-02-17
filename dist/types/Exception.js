"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isException = exports.Exception = void 0;
const Text_1 = require("./Text");
const Enum_1 = require("./Enum");
const Is_1 = require("./Is");
class Exception extends Enum_1.Enum {
    constructor(message, id, reason) {
        super(message, id ?? (0, Text_1.text)(message).pascal.toString());
        this.message = message;
        this.reason = reason;
        this.because = (reason) => new Exception(this.message, this.id, reason);
    }
}
exports.Exception = Exception;
Exception.AlreadyExists = new Exception('Subject already exists');
Exception.DoesNotExist = new Exception('Does not exist');
Exception.IsMissingId = new Exception('Subject is missing an id');
Exception.IsNotImplemented = new Exception('Is not implemented');
Exception.IsNotValid = new Exception('Is not valid');
Exception.Unknown = new Exception('Unknown error');
Exception.CouldNotExecute = (target) => new Exception(`Could not execute ${target}.`, 'CouldNotExecute');
Exception.CouldNotValidate = (target) => new Exception(`Could not validate ${target}.`, 'CouldNotValidate');
Exception.EnvironmentVariableNotFound = (variable) => new Exception(`Environment variable ${(0, Text_1.text)(variable).upper} could not be found.`, 'EnvironmentVariableNotFound');
const isException = (e, t) => e instanceof Exception && ((0, Is_1.isDefined)(t) ? e.equals((0, Text_1.asString)(t)) : true);
exports.isException = isException;
//# sourceMappingURL=Exception.js.map