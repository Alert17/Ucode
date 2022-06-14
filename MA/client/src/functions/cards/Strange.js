import Card from "./Card.js";

export default class Spider extends Card {
    constructor(scene) {
        super(scene);
        this.name = "strange"
        this.playerCardSprite = "strange"
        this.opponentCardSprite = "strange"
        this.attack = 6
        this.hp = 6
        this.cost = 6
    }
}