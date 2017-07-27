import Cubic from '../src/index.js';

const cubic = Cubic.getCubicBezierXYatPercent({x: 0, y: 0},{x: 0.3, y: 0.1},{x: 0.6, y: 0.8},{x: 1, y: 1}, 0.1);
const quadra = Cubic.getQuadraticBezierXYatPercent({x: 0, y: 0},{x: 0.1, y: 0.9},{x: 1, y: 1}, 0.5);

console.log(`Cubic Bezier ${cubic.x}x ${cubic.y}y`);
console.log(`Quadra Bezier ${quadra.x}x ${quadra.y}y`);