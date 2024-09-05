export default function create(setMessage) {
  this.player = this.physics.add.sprite(400, 170, "dude");

  this.tableau1 = this.physics.add.staticGroup();
  this.tableau1.create(100, 90, "star");

  this.physics.add.collider(this.player, this.tableau1, () => {
    setMessage(0);
  });

  this.tableau2 = this.physics.add.staticGroup();
  this.tableau2.create(300, 90, "star");

  this.physics.add.collider(this.player, this.tableau2, () => {
    setMessage(1);
  });

  this.tableau3 = this.physics.add.staticGroup();
  this.tableau3.create(500, 90, "star");

  this.physics.add.collider(this.player, this.tableau3, () => {
    setMessage(2);
  });

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  this.cursors = this.input.keyboard.createCursorKeys();
}
