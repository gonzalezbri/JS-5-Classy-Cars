class Shape {

    constructor(height, width) {
      this.height = height
      this.width = width
    }
    printBoth()
    {
      console.log(`Height: ${this.height}, Width: ${this.width}`)
    }
  }
  
  class Square extends Shape {
    constructor(length) {
      super(length, length)
    } 
  }
  
  class Rectangle extends Shape {
    constructor(height, width)
    {
      super(height, width)
    }  
  }
  
  let square = new Square(15)
  square.printBoth()
  
  let rectangle = new Rectangle(5, 20)
  rectangle.printBoth()