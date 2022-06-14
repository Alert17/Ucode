import Card from "./Card.js";

export default class Iron extends Card {
    constructor(scene) {
        super(scene);
        this.name = "boolean"
        this.playerCardSprite = "iron"
        this.opponentCardSprite = "iron"
        this.attack = 3
        this.hp = 3
        this.cost = 3
    }
}