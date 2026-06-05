const person = {
    firstName: 'Sifat',
    lastName: 'Dev',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);
person.fullName = 'John Doe';
console.log(person.fullName);
