class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload() {
    // load our images or sounds
    // this.load.image('face', 'images/face.png');
    this.load.image('button1', 'images/ui/buttons/round/1.png');
    this.load.image('button2', 'images/ui/buttons/round/5.png');
  }
  create() {
    // define our objects
    emitter = new Phaser.Events.EventEmitter();
    // // model.score = 100;
    // controller = new Controller();
    // // this.scoreBox = new ScoreBox({ scene: this });
    // // this.scoreBox.x = game.config.width / 2;
    // // this.scoreBox.y = 50; // 50px down from y 0
    // // numbered grid system
    // let gridConfig = { rows: 5, cols: 5, scene: this };
    // let alignGrid = new AlignGrid(gridConfig);
    // // alignGrid.show(); // shows the grid and cells with no numbers
    // alignGrid.showNumbers(); // shows the grid and cells with numbers for placeAtIndex.
    // this.face = this.add.sprite(0, 0, 'face');
    // // alignGrid.placeAt(2, 2, this.face); // center
    // alignGrid.placeAtIndex(16, this.face);
    // Align.scaleToGameWidth(this.face, 0.2); // obj, percent

    let flatButton = new FlatButton({
      scene: this,
      key: 'button1',
      text: 'Press ME!',
      x: 240,
      y: 100,
      event: 'BUTTON_PRESSED',
    });

    let flatButton2 = new FlatButton({
      scene: this,
      key: 'button2',
      text: 'Press ME!',
      x: 240,
      y: 300,
      event: 'BUTTON_PRESSED',
    });

    emitter.on('BUTTON_PRESSED', this.buttonPressed, this);
  }

  buttonPressed() {
    console.log('button pressed');
  }
  update() {
    // constant running loop
  }

  // we can also add our own custom functions
}
