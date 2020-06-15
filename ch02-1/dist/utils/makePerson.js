"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakePersion = exports.makePerson = void 0;
function makePerson(name, age) {
    return { name: name, age: age };
}
exports.makePerson = makePerson;
function testMakePersion() {
    console.log(makePerson("Jane", 22), makePerson("Jack", 33));
}
exports.testMakePersion = testMakePersion;
//# sourceMappingURL=makePerson.js.map