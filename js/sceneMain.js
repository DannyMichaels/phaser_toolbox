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
    emitter = new Phaser.Events.EventEmitter();

    model.score = 100;
    controller = new Controller();

    this.scoreBox = new ScoreBox({ scene: this });
    this.scoreBox.x = game.config.width / 2;
    this.scoreBox.y = 50; // 50px down from y 0

    let face = this.add.sprite(0, 0, 'face');
    Align.center(face);

    let gridConfig = { rows: 5, cols: 5, scene: this };
    let alignGrid = new AlignGrid(gridConfig);
    alignGrid.show();
  }
  update() {
    // constant running loop
  }

  // we can also add our own custom functions
}
