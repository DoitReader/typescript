let person: object = { name: "Jack", age: 32 };
const personName = (<{ name: string }>person).name;

console.log(personName);
