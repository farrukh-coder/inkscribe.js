class Typewriter {
  constructor(elementSelector) {
    this.element = document.querySelector(elementSelector);
    this.receivedText = this.element.textContent;
    this.textInterval = null;
    this.index = 0;
  }

  clearText() {
    this.element.innerHTML = '';
  }

  typeText() {
    this.element.innerHTML += this.receivedText[this.index];
    this.index++;

    if (this.index === this.receivedText.length) {
      clearInterval(this.textInterval);
    }
  }

  startTyping() {
    this.textInterval = setInterval(this.typeText.bind(this), randomInteger(50, 200));
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Typewriter;
