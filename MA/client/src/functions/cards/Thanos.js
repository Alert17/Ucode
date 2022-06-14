import Card from "./Card.js";

export default class Spider extends Card {
    constructor(scene) {
        super(scene);
        this.name = "thanos"
        this.playerCardSprite = "thanos"
        this.opponentCardSprite = "thanos"
        this.attack = 5
        this.hp = 5
        this.cost = 5
    }
}