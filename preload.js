import dudeImage from "../assets/dude.png";
import starImage from "../assets/star.png";

export default function preload() {
  this.load.image("star", starImage);
  this.load.spritesheet("dude", dudeImage, {
    frameWidth: 32,
    frameHeight: 48,
  });
}
