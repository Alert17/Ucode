import CardBack from './cards/CardBack';
import Iron from './cards/Iron';
import Spider from './cards/Spider';

export default class DeckHandler {
    constructor(scene) {
        this.dealCard = (x, y, name, type) => {
            let cards = {
                cardBack: new CardBack(scene),
                boolean: new Iron (scene),
                ping: new Spider(scene),
            }
            let newCard = cards[name];
            return(newCard.render(x, y, type));
        }
    }
}