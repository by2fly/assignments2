// Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:

// String
// Number
// Boolean
// Function (called a "method" when it's inside an object like this. Check out an example for help writing your own)

// In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.



const shopper = {
    fNname: 'Sister',
    lName: 'Lucile',
    age: 28,
    isMarried: false,
    groceryCart: ["milk", "ice cream", "meat", "Hostess Twinkes", "People Magazine"],
    fullName: function () {
        return this.fNname + " " + this.lName
    }
}
console.log(shopper.groceryCart);
console.log(shopper.fullName());
