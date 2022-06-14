import Card from "./Card.js";

export default class Spider extends Card {
    constructor(scene) {
        super(scene);
        this.name = "america"
        this.playerCardSprite = "america"
        this.opponentCardSprite = "america"
        this.attack = 4
        this.hp = 4
        this.cost = 4
    }
}