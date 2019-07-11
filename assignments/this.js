/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

// Principle 1
// Global Object Binding: The value of "this" in the global scope is window/console Object.

// code example:

    console.log(this);


// Principle 2
// Implicit Binding: When a function is called by a preceding dot, The value of "this" is the
// element before said dot.

// code example:

    let variable = {
        function func() {
            console.log(this);
        }
    };

    variable.func();


// Principle 3
// New binding: If a constructor function is used, "this" refers to the that is created and 
// returned by the constructor function.

// code example:

    function GameObject(attrs) {
        this.createdAt = attrs.createdAt; 
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    }

    const mage = new GameObject(mage);


// Principle 4
// Explicit binding: When you use the "call" or "apply" method, "this" is explicitly defined.

// code example:

    mage.speak.call(archer);
*/