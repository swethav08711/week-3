class Rectangle{
    constructor(l,b){
        this.length = l
        this.width = b
    }
    area(){
        return this.length * this.width
    }
}
const res = new Rectangle (2,4)
console.log(res.area());
class square extends Rectangle{
    constructor(l){
        super(l,l)
        this.squ = l*l
    }
}
const res1 = new square (2)
console.log(res1.squ);