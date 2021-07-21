import './style.css';
import listFunction from './displayList.js';

listFunction();

function component() {
  const element = document.createElement('div');

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());