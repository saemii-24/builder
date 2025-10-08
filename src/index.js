import { add, multiply } from './math.js';
import { delayedHello, sayHello } from './new.js';
import './style.css';
import logo from './logo.png';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);

sayHello('김철수');
delayedHello();

console.log('2 + 3 =', add(2, 3));
console.log('2 * 3 =', multiply(2, 3));
