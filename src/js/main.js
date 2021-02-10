import Create from './components/dom-create';
import Image from './components/image';

import { getRandomInt } from './utils/radom';

import { INSERT_IMAGES, TOTAL_IMAGES } from './constants';

import testImg from '../assets/images/bg-signup.png';
import testSound from '../assets/sounds/correct.mp3';

class Main {
  constructor() {
    const app = new Create ('div', document.body, 'app');
    const firstDiv = new Create ('div', app.node, 'content-div, firstDiv');
    const secondDiv = new Create ('div', app.node, 'content-div, secondDiv');
    const thirdDiv = new Create ('div', app.node, 'content-div, thirdDiv');

    firstDiv.caption = new Create ('h1', firstDiv.node, 'caption', 'Webpack template');
    firstDiv.content = new Create ('p', firstDiv.node, 'content', 'Hello world!');

    secondDiv.image = new Image(testImg, secondDiv.node, 'test-image');
    secondDiv.image.node.addEventListener('click', () => new Audio(testSound).play(), false);

    thirdDiv.images = [];
    for (let i = 1; i <= INSERT_IMAGES; i += 1) {
      const imgName = getRandomInt(1, TOTAL_IMAGES).toString().padStart(2, '0');
      const src = `./static/images/random/${imgName}.jpg`;
      const img = new Image(src, thirdDiv.node, 'random-image');
      const soundSrc = './static/sounds/wrong.mp3';
      img.node.addEventListener('click', () => new Audio(soundSrc).play(), false);
      thirdDiv.images.push(img);
    }
    thirdDiv.images[1].node.style.width = '200px';
  }
}

const main = new Main();
window.main = main;
