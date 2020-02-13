class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function IsInTriangle(triangle, p) {
  let v0 = triangle[0],
    v1 = triangle[1],
    v2 = triangle[2];
  let s = v0.y * v2.x - v0.x * v2.y + (v2.y - v0.y) * p.x + (v0.x - v2.x) * p.y;
  let t = v0.x * v1.y - v0.y * v1.x + (v0.y - v1.y) * p.x + (v1.x - v0.x) * p.y;

  if (s < 0 !== t < 0) {
    return false;
  }

  let a =
    -v1.y * v2.x + v0.y * (v2.x - v1.x) + v0.x * (v1.y - v2.y) + v1.x * v2.y;

  return a < 0 ? s <= 0 && s + t >= a : s >= 0 && s + t <= a;
}

function main() {
  let p = new Point(
    document.getElementById("PointX").value,
    document.getElementById("PointY").value
  );
  let v0 = new Point(
    document.getElementById("Vertice1X").value,
    document.getElementById("Vertice1Y").value
  );
  let v1 = new Point(
    document.getElementById("Vertice2X").value,
    document.getElementById("Vertice2Y").value
  );
  let v2 = new Point(
    document.getElementById("Vertice3X").value,
    document.getElementById("Vertice3Y").value
  );
  let triangle = [v0, v1, v2];

  document.getElementById("Result").innerHTML = IsInTriangle(triangle, p);
}
