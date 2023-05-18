class Typewriter {
  constructor(elementSelector) {
    this.typewriterText = document.querySelector(elementSelector);
    this.receivedText = this.typewriterText.textContent;
    this.textInterval = null;
    this.i = 0;
  }

  clearText() {
    this.typewriterText.innerHTML = '';
  }

  typeText() {
    this.typewriterText.innerHTML += this.receivedText[this.i];
    this.i++;
    if (this.i === this.receivedText.length) {
      clearInterval(this.textInterval);
    }
  }

  randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  startTyping() {
    this.clearText();
    this.textInterval = setInterval(() => this.typeText(), this.randomInteger(50, 200));
  }
}

// Пример использования
const typewriter1 = new Typewriter('.typewriter-text');
typewriter1.startTyping();

const typewriter2 = new Typewriter('.typewriter-text2');
typewriter2.startTyping();