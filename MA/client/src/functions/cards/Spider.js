import Card from "./Card.js";

export default class Spider extends Card {
    constructor(scene) {
        super(scene);
        this.name = "ping"
        this.playerCardSprite = "spider"
        this.opponentCardSprite = "spider"
        this.attack = 2
        this.hp = 2
        this.cost = 2
    }
}