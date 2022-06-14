import CardHandler from '../functions/cardClass';
import DeckHandler from '../functions/deckClass';
import GameHandler from '../functions/gameClass';
import InteractiveHandler from '../functions/interacrive';
import SocketHandler from '../functions/sockets';
import UIHandler from '../functions/ui';

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {

        this.load.image('сardBack1', 'src/assets/backCard1.jpg')
        this.load.image('сardBack2', 'src/assets/backCard2.jpg')
        this.load.image('iron', 'src/assets/iron.jpg')
        this.load.image('spider', 'src/assets/spider.jpg')
        this.load.image('background', 'src/assets/background.jpg')
        this.load.image('thor', 'src/assets/thor.jpg')
        this.load.image('america', 'src/assets/america.jpg')
        this.load.image('thanos', 'src/assets/thanos.jpg')
        this.load.image('strange', 'src/assets/strange.jpg')
        
    }

    create() {

        this.CardHandler = new CardHandler(this)
        this.DeckHandler = new DeckHandler(this);
        this.GameHandler = new GameHandler(this);
        this.SocketHandler = new SocketHandler(this);
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        this.InteractiveHandler = new InteractiveHandler(this);

    }

    update() {

    }
}