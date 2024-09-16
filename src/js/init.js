const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    width: 800,
    height: 600,
    scene: [Intro,CommentJouer,Credit,Jeu,PartieTermine,Victoire],
    transparent : true
};
const game = new Phaser.Game(config);