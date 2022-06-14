import io from 'socket.io-client';


export default class SocketHandler {
    constructor(scene) {

        scene.socket = io('https://phaser-tabletop-card-game-2021.herokuapp.com');

        scene.socket.on('connect', () => {
            console.log('Connected!');
            scene.socket.emit('dealDeck', scene.socket.id);

        });

        scene.socket.on('firstTurn', () => {
            scene.GameHandler.changeTurn();
        })

        scene.socket.on('changeGameState', (gameState) => {
            scene.GameHandler.changeGameState(gameState);
            if (gameState === "Initializing") {
                scene.DeckHandler.dealCard(1700, 1400, "cardBack", "playerCard");
                scene.DeckHandler.dealCard(1700, 200, "cardBack", "opponentCard");
                scene.dealCards.setInteractive();
                scene.dealCards.setColor('#00ffff');
            }
        });

        scene.socket.on('changeTurn', () => {
            scene.GameHandler.changeTurn();
            
        })


        scene.socket.on('dealCards', (socketId, cards) => {
            if (socketId === scene.socket.id) {
                for (let i in cards) {
                    let card = scene.GameHandler.playerHand.push(scene.DeckHandler.dealCard(690 + (i * 155), 1400, cards[i], "playerCard"));
                }
            } else {
                for (let i in cards) {
                    let card = scene.GameHandler.opponentHand.push(scene.DeckHandler.dealCard(690 + (i * 155), 200, "cardBack", "opponentCard"));
                }
            }
        })

        scene.socket.on('cardPlayed', (cardName, socketID) => {
            if (socketID !== scene.socket.id) {
                scene.GameHandler.opponentHand.shift().destroy();
                scene.DeckHandler.dealCard((scene.opponentDropZone.x - 350) + (scene.opponentDropZone.data.values.cards * 150), scene.opponentDropZone.y, cardName, "opponentCard");
                scene.opponentDropZone.data.values.cards++;
            }
        })

    }
}