var game; // game is global object
var model;
var emitter;
var G;
var controller;

window.onload = function () {
  // detect mobile device
  // if text includes Mobile
  var isMobile = navigator.userAgent.includes('Mobile');
  if (!isMobile) {
    // else return if includes Tablet
    isMobile = navigator.userAgent.includes('Tablet');
  }

  if (!isMobile) {
    // if isn't mobile device
    var config = {
      type: Phaser.AUTO,
      width: 480,
      height: 640,
      parent: 'div-tag-name',
      scene: [SceneMain], // game screens for the game
    };
  } else {
    // if is mobile device
    var config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: 'phaser-game',
      scene: [SceneMain],
    };
  }

  G = new Constants();
  model = new Model();
  game = new Phaser.Game(config);
};
