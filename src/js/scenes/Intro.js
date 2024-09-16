class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'Accueil' });
    }
    preload() {
        this.load.image("bg","./assets/images/bg.png")
        this.load.image("logo","./assets/images/logo.png")
        this.load.image("audio","./assets/images/audio.png")
this.load.image("bouttonCommencer","./assets/images/Start-button.png")
this.load.image("Comment","./assets/images/commentJouer.png")
this.load.image("Credit","./assets/images/credit_button.png")
    }

    create() {
        this.add.image(400, 300, 'bg').setDisplaySize(800, 600);
        this.add.image(400, 80, 'logo');
        this.add.image(20, 50, 'audio').setOrigin(0,0.5).setScale(0.15);
        const startButton = this.add.image(400, 350, 'bouttonCommencer').setInteractive().setScale(0.6);

        startButton.on('pointerdown', () => {
            this.scene.start('Jeu');
        });
        const Comment = this.add.image(435, 450, 'Comment').setInteractive().setScale(0.5);

        Comment.on('pointerdown', () => {
            this.scene.start('Comment');
        });
        const credit_button = this.add.image(485, 500, 'Credit').setInteractive().setScale(0.5).setOrigin(1,0.5);

        credit_button.on('pointerdown', () => {
            this.scene.start('Credit');
        });
    }

    update() {

    }
}