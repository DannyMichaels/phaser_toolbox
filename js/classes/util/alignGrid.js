/*
  one of the challenges is that with mobile devices is that we don't know the screen size before we start the game.
  and it makes it difficult to lay-out assets without knowing the screen size.

  this way allows us to lay things out in a grid with an x and y.
*/

class AlignGrid {
  constructor(config) {
    this.config = config;

    if (!config.scene) {
      console.log('missing scene');
      return;
    }

    if (!config.rows) {
      config.rows = 5;
    }

    if (!config.cols) {
      config.cols = 5;
    }

    if (!config.height) {
      config.height = game.config.height;
    }

    if (!config.width) {
      config.width = game.config.width;
    }

    this.scene = config.scene;
    this.cellWidth = config.width / config.cols;
    this.cellHeight = config.height / config.rows;
  }

  show() {
    this.graphics = this.scene.add.graphics();

    this.graphics.lineStyle(2, 0xff0000); // thickness, color

    // divide it into x equal columns
    for (let i = 0; i < this.config.width; i += this.cellWidth) {
      this.graphics.moveTo(i, 0); // x , y
      this.graphics.lineTo(i, this.config.height);
    }

    // divide into x equal rows;
    for (let i = 0; i < this.config.height; i += this.cellHeight) {
      this.graphics.moveTo(0, i); // x , y
      this.graphics.lineTo(this.config.width, i);
    }

    // will get us a x by x grid

    this.graphics.strokePath();
  }
}
