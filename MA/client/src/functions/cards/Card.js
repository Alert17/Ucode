export default class Card {
    constructor(scene) {
        this.render = (x, y, type) => {
            let sprite;
            if (type === 'playerCard') {
                sprite = this.playerCardSprite;
            } else {
                sprite = this.opponentCardSprite;
            }
            let card = scene.add.image(x, y, sprite).setScale(0.3, 0.25).setInteractive().setData({
                "name": this.name,
                "type": type,
                "sprite": sprite,
                "attack": this.attack || null,
                "hp": this.hp || null,
                "cost": this.cost || null
            });
            if (type === 'playerCard') {
                scene.input.setDraggable(card);
            }
            return card;
        }
    }
}