class Jeu extends Phaser.Scene {
    constructor() {
        super({ key: 'Jeu' });
    }
    preload() {
        this.load.image("bouttonQuit","./assets/images/QuitButton.png")
        this.load.image("restart","./assets/images/recommence_button.png");
        this.load.image("bg","./assets/images/bg.png")
        this.load.image("victoire","./assets/images/victory_button.png")
        this.load.image("fini","./assets/images/boutton_fini.png")
        
    }

    create() {
        this.add.image(400, 300, 'bg').setDisplaySize(800, 600);
        const bouttonQuit = this.add.image(770, 550, 'bouttonQuit').setInteractive().setScale(0.1).setOrigin(1,0.5);

        bouttonQuit.on('pointerdown', () => {
            this.scene.start('Accueil');
        });
        const restart = this.add.image(300, 250, 'restart').setInteractive().setScale(0.4);

        restart.on('pointerdown', () => {
            this.scene.start('Jeu');
        });
        const victoire = this.add.image(600, 250, 'victoire').setInteractive().setScale(0.4);

        victoire.on('pointerdown', () => {
            this.scene.start('Victoire');
        });
        const fini = this.add.image(400, 500, 'fini').setInteractive().setScale(0.4);

        fini.on('pointerdown', () => {
            this.scene.start('PartieFini');
        });



    }

    update() {

    }
}