import EventEmitter from 'wolfy87-eventemitter';

/**
 * The DOMWriter class object.
 * @author Rubens Mariuzzo <rubens@mariuzzo.com>
 */
class DOMWriter extends EventEmitter {
  /**
   * Construct a new DOMWriter object.
   * @type {Object}
   */
  constructor(options = {}) {
    super();
    this.width = options.width || 32;
    this.height = options.height || 8;
    this.border = options.border || false;
    this.separator = options.separator || '\n';
    this.element = options.element;
    window.addEventListener('keydown', this.keydownHandler.bind(this));
  }

  /**
   * Clear the output.
   */
  clear() {
    this.element.innerHTML = '';
  }

  /**
   * Handle keydown event on the terminal.
   * @param {String} character - The character pressed.
   * @param {Object} key - The key pressed.
   */
  keydownHandler(character, key) {
    this.emit('keydown', character, key);
  }

  /**
   * Write text contents to the console output.
   * @param {String} contents - The text contents.
   */
  write(contents) {
    if (typeof contents !== 'string') return;
    let lines = contents.split(this.separator);
    lines = lines.splice(0, this.height);
    lines = lines.map((line, row) => {
      const trimmed = line.substr(0, this.width);
      return trimmed.replace(
        /./g,
        (match, col) => `<span id="cell-${row}-${col}">${match}</span>`,
      );
    });
    this.element.innerHTML = lines.join(this.separator);
  }
}

export default DOMWriter;
