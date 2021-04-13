class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
  getArea() {
    return this.height * this.width
  }
}

let polygon = new Polygon(1, 2)
console.log(polygon.getArea())