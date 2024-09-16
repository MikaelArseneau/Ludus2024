class CommentJouer extends Phaser.Scene {
    constructor() {
        super({ key: 'Comment' });
    }
    preload() {
        this.load.image("boutton-fermer","./assets/images/fermer-boutton.png")
        this.load.image("bg","./assets/images/bg.png")
    }

    create() {
        this.add.image(400, 300, 'bg').setDisplaySize(800, 600);
        const fermer = this.add.image(780, 50, 'boutton-fermer').setInteractive().setScale(0.2).setOrigin(1,0.5);

        fermer.on('pointerdown', () => {
            this.scene.start('Accueil');
        });



    }

    update() {

    }
}