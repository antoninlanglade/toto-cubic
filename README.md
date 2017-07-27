<h1 align="center">toto-cubic</h1>
<h3 align="center">Cubic utils</h3>


## Features
Allow you to get a point along cubic & quadratic bezier curves

<br>

## Installation
```sh
npm install -S antoninlanglade/toto-cubic
```

<br>

## Example
```js
const cubic = Cubic.getCubicBezierXYatPercent({x: 0, y: 0},{x: 0.3, y: 0.1},{x: 0.6, y: 0.8},{x: 1, y: 1}, 0.1);
// return Cubic Bezier 0.0901x 0.04690000000000001y
const quadra = Cubic.getQuadraticBezierXYatPercent({x: 0, y: 0},{x: 0.1, y: 0.9},{x: 1, y: 1}, 0.5);
// return Quadra Bezier 0.3x 0.7y
```

<br>

## License
MIT.
