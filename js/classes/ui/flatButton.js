class FlatButton extends Phaser.GameObjects.Container {
  // config = props
  constructor(config) {
    if (!config.scene) {
      console.error('missing scene!');
      return;
    }

    if (!config.key) {
      console.error('missing key!');
      return;
    }

    super(config.scene);
    this.config = config;
    this.scene = config.scene;
    this.background = this.scene.add.image(0, 0, config.key); // x ,y , key

    this.add(this.background);

    if (config.text) {
      this.text1 = this.scene.add.text(0, 0, config.text);
      this.text1.setOrigin(0.5, 0.5);
      this.add(this.text1);
    }

    if (config.x) {
      this.x = config.x;
    }

    if (config.y) {
      this.y = config.y;
    }

    this.scene.add.existing(this);

    if (config.event) {
      this.background.setInteractive();
      this.background.on('pointerdown', this.pressed, this);
    }
  }

  pressed() {
    emitter.emit(this.config.event);
  }
}
