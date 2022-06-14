import Card from "./Card.js";

export default class Spider extends Card {
    constructor(scene) {
        super(scene);
        this.name = "thor"
        this.playerCardSprite = "thor"
        this.opponentCardSprite = "thor"
        this.attack = 7
        this.hp = 7
        this.cost = 7
    }
}