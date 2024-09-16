class PartieTermine extends Phaser.Scene {
    constructor() {
        super({ key: 'PartieFini' });
    }
    preload() {
        this.load.image("recommence_button","./assets/images/recommence_button.png")
        this.load.image("menu_button","./assets/images/menu_button.png")
        this.load.image("bg","./assets/images/bg.png")
    }

    create() {
        this.add.image(400, 300, 'bg').setDisplaySize(800, 600);
        const recommence_button = this.add.image(100, 100, 'recommence_button').setInteractive().setScale(0.3);

        recommence_button.on('pointerdown', () => {
            this.scene.start('Jeu');
        });
        const menu_button = this.add.image(750, 100, 'menu_button').setInteractive().setScale(0.5);

        menu_button.on('pointerdown', () => {
            this.scene.start('Accueil');
        });



    }

    update() {

    }
}