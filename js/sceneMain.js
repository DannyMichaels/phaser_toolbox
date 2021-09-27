class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload() {
    // load our images or sounds
    this.load.image('face', 'images/face.png');
  }
  create() {
    // define our objects
    let face = this.add.sprite(0, 0, 'face');
    Align.center(face);
  }
  update() {
    // constant running loop
  }

  // we can also add our own custom functions
}
