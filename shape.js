class Shape{
  constructor(color){
    this.color="transparent";
    this.type="Shape";
  }
  describe(){
    console.log(`A ${this.color} ${this.type}`);
  }

}
const obj=new Shape();
obj.describe();

class Square extends Shape{
  constructor(color,sidelength){
    super(color);
    this.color=color;
    this.sidelength=sidelength;
    this.type="Square";
  }
    area(sidelength){
      return this.sidelength*this.sidelength ;
     
    }
}
class Rectangle extends Shape{
  constructor(color,width,height)
  {
    super(color);
    this.width=width;
    this.height=height;
    this.color=color;
    this.type="Rectangle";
  }
  area(height,width){
    return  this.width*this.height;
  }
}
const square=new Square("blue",5);
const rect=new Rectangle("red",5,6);
console.log(square.area());
console.log(rect.area());
 for(const shape of [square,rect])
  console.log(shape.describe());
