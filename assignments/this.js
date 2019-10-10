/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when "this" refers to the window/console object. This is the case when "this" is set in the global scope.
* 2. Implicit Binding is automatic when a function is called using a dot. The function to the left of the dot is what "this" refers too.
* 3. New Binding is when constructor function is used. "This" in this case refers to a specific instance of the object created by the constructor.
* 4. Explicit Binding is when call or apply method are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayAge = function() {
    console.log(this.age);
}

const myAge = {
    age: 26
};

sayAge();

// Principle 2

// code example for Implicit Binding

const dog = {
    name: "Rover",
    age: 7,
    bark: "Woof!",
    speak: function() {
        return console.log(this.bark);
    }
}

dog.speak()

// Principle 3

// code example for New Binding

const Animal = function(type, color) {
    this.type = type;
    this.color = color;
};

const elephant = new Animal("Elephant", "gray");

console.log(elephant);

// Principle 4

// code example for Explicit Binding

const sayName = function() {
    console.log("My name is " + this.name);
};

const brian = {
    name: "Brian",
    age: 26
};

sayName.call(brian);