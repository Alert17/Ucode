import io from 'socket.io-client';
import socket from 'socket.io-client/lib/socket';

socket.on('battle', () => {

});
    
socket.on('attackHero', (player, card) => {
    player.hp -= card.attack
})

if (player.hp <= 0) {
    socket.emit('lose', (player))
}

