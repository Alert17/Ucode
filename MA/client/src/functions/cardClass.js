export default class CardHandler {
    constructor() {
        this.flipCard = (card) => {
            if (card.data.values.type === "playerCard") {
                if (card.texture.key === "cardBack1") {
                    card.setTexture(card.data.values.sprite);
                } else {
                    card.setTexture("cardBack1");
                }
            } else if (card.data.values.type === "opponentCard") {
                if (card.texture.key === "cardBack2") {
                    card.setTexture(card.data.values.sprite);
                } else {
                    card.setTexture("cardBack2");
                }
            }
        }

        this.flipBack = (card) => {
            if (card.data.values.type === "opponentCard") {
                if (card.texture.key === "cardBack2") {
                    card.setTexture(card.data.values.sprite);
                } else {
                    card.setTexture("cardBack2");
                }
            } else if (card.data.values.type === "playerCard") {
                if (card.texture.key === "cardBack1") {
                    card.setTexture(card.data.values.sprite);
                } else {
                    card.setTexture("cardBack1");
                }
            }
        }
    }
}
