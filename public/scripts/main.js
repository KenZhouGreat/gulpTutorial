class Person {
    constructor(name) {
        this.name = name;
    }

    hello() {
        if (typeof this.name === 'string') {
            console.log('Hello, I am ' + this.name + '!');
            return 'Hello, I am ' + this.name + '!';
        } else {
            return 'Hello';
        }
    }


}


var person = new Person('Andy');
var greetHTML = templates.greetings({
    message:person.hello()
})

var name = 'Andrew';

document.write(greetHTML);