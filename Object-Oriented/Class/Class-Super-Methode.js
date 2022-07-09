

class Shape{
    paint(){
        console.log("Paint Shape");
    }
}

class Circle extends Shape{
    paint(){
        // how to acces paint Shape
        super.paint();
        console.log("Paint Circle");
    }
}


const circle = new Circle();
circle.paint();