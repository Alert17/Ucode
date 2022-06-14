import Phaser from "phaser";
import Game from "./scenes/game.js";

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: 2400,
        height: 1560
    },
    scene: [
        Game
    ]
};

const game = new Phaser.Game(config);