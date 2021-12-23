const myShoe = {
    color: "red",
    size: 9,
    price: 20
}


// classes -- blue prints for an object

class Shoe {
    //properties
    constructor(color, size, price) {
        this.color = color;
        this.size = size;
        this.price = price
    }   

    // methods
    onSale() {
        this.price = this.price/2
    }
}

console.log(myShoe)

const myShoe2 = new Shoe("blue", 10, 32);

console.log(myShoe2)

myShoe2.onSale()


console.log(myShoe2)





