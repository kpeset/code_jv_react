import Phaser from "phaser";

export default function playerMove(setMessage) {
  // Réinitialiser la vélocité à zéro au début de chaque frame
  this.player.setVelocity(0);

  // Déplacement à gauche
  if (this.cursors.left.isDown && this.player.x > 20) {
    this.player.setVelocityX(-160);
    this.player.anims.play("left", true);
  }
  // Déplacement à droite
  else if (this.cursors.right.isDown && this.player.x < 780) {
    this.player.setVelocityX(160);
    this.player.anims.play("right", true);
  }

  // Déplacement vers le haut
  if (this.cursors.up.isDown && this.player.y > 20) {
    this.player.setVelocityY(-160);
    this.player.anims.play("turn", true); // Animation de déplacement vers le haut (facultative)
  }
  // Déplacement vers le bas
  else if (this.cursors.down.isDown && this.player.y < 780) {
    // Ajustez 180 selon la hauteur du jeu
    this.player.setVelocityY(160);
    this.player.anims.play("turn", true); // Animation de déplacement vers le bas (facultative)
  }

  // Si aucune touche n'est pressée, on arrête l'animation
  if (
    !this.cursors.left.isDown &&
    !this.cursors.right.isDown &&
    !this.cursors.up.isDown &&
    !this.cursors.down.isDown
  ) {
    this.player.setVelocity(0);
    this.player.anims.play("turn"); // Animation d'arrêt, vous pouvez ajuster si nécessaire
  }

  // Réinitialiser le message si le joueur est loin des tableaux
  const distanceToTableau1 = Phaser.Math.Distance.Between(
    this.player.x,
    this.player.y,
    100,
    90
  );
  const distanceToTableau2 = Phaser.Math.Distance.Between(
    this.player.x,
    this.player.y,
    300,
    90
  );
  const distanceToTableau3 = Phaser.Math.Distance.Between(
    this.player.x,
    this.player.y,
    500,
    90
  );

  const thresholdDistance = 50; // Distance à laquelle le message doit être réinitialisé

  if (
    distanceToTableau1 > thresholdDistance &&
    distanceToTableau2 > thresholdDistance &&
    distanceToTableau3 > thresholdDistance
  ) {
    setMessage(null);
  }
}
