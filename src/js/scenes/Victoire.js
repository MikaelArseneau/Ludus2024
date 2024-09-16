class Victoire extends Phaser.Scene {
    constructor() {
        super({ key: 'Victoire' });
    }
    preload() {
        this.load.image("menu_button","./assets/images/menu_button.png")
        this.load.image("bg","./assets/images/bg.png")
    }

    create() {
        this.add.image(400, 300, 'bg').setDisplaySize(800, 600);
        const menu_button = this.add.image(400, 100, 'menu_button').setInteractive().setScale(0.5);

        menu_button.on('pointerdown', () => {
            this.scene.start('Accueil');
        });



    }

    update() {

    }
}