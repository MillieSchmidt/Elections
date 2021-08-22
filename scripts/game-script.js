let player = document.querySelector('.player');
let rival = document.querySelector('.rival');
let counter = Math.floor(Math.random() * 14);
let playerLife = document.querySelector('.player-life');
let rivalLife = document.querySelector('.rival-life');

rival.style.animation = 'move-npc 12s infinite';

rival.querySelector('.head').children[0].src = charactersArray[counter];
player.querySelector('.head').children[0].src = playerArray[localStorage.getItem('selected')];


// RIVAL CODE //

let rivalInterval = setInterval(() => {
    rival.querySelector('.body').children[0].src = './assets/rival-punch-body.png';
    rival.querySelector('.head').style.marginLeft = 106 + 'px';
    setTimeout(() => {
        rival.querySelector('.body').children[0].src = './assets/rival-body.png';
        rival.querySelector('.head').style.marginLeft = 0;
    }, 1000);
}, 2000);

let rivalSecondInterval = setInterval(() => {
    if (rival.getBoundingClientRect().left <= player.getBoundingClientRect().right) {
        const playerRight = player.getBoundingClientRect().right;
        rival.style.animation = '';
        setTimeout(() => {
            rival.style.left = playerRight + 50 + 'px';
            rival.style.animation = 'move-npc 12s infinite';
        }, 500);
        rival.style.left = playerRight + 'px';
        if (rival.querySelector('.body').children[0].src = './assets/rival-punch-body.png') {
            rival.querySelector('.body').children[0].src = './assets/rival-hit-body.png';
            rival.querySelector('.head').style.marginLeft = 106 + 'px';
            playerLife.style.width = playerLife.getBoundingClientRect().width - 100 + 'px';
            if (playerLife.style.width.length < 5) {
                playerLife.style.display = 'none';
                player.style.display = 'none';
                document.querySelector('.lose-modal').style.backgroundImage = `url(./assets/win/win${counter}.jpg)`;
                document.querySelector('.lose-modal').style.display = 'block';
                clearInterval(rivalInterval);
                clearInterval(rivalSecondInterval);
            }
            setTimeout(() => {
                rival.querySelector('.body').children[0].src = './assets/rival-body.png';
                rival.querySelector('.head').style.marginLeft = 0;
            }, 500);
        }
    }
}, 500);


// PLAYER CODE //

document.addEventListener('keydown', function(e) {
    const playerLeft = player.getBoundingClientRect().left;
    const playerRight = player.getBoundingClientRect().right;

    if (e.key === 'ArrowLeft' && playerLeft > 0) {
        player.style.left = playerLeft - 2 + 'px';
    } else if (e.key === 'ArrowRight' && playerRight < window.innerWidth) {
        player.style.left = playerLeft + 2 + 'px';
    } else if (e.key === ' ') {
        player.querySelector('.body').children[0].src = './assets/player-punch-body.png';
        player.querySelector('.head').style.marginLeft = -106 + 'px';
        if (player.getBoundingClientRect().right >= rival.getBoundingClientRect().left) {
            if (player.querySelector('.body').children[0].src = './assets/player-punch-body.png') {
                player.querySelector('.body').children[0].src = './assets/player-hit-body.png';
                player.querySelector('.head').style.marginLeft = -106 + 'px';
                rivalLife.style.width = rivalLife.getBoundingClientRect().width - 100 + 'px';
                if (rivalLife.style.width.length < 5) {
                    rivalLife.style.display = 'none';
                    rival.style.display = 'none';
                    document.querySelector('.win-modal').style.backgroundImage = `url(./assets/win/win${localStorage.getItem('selected')}.jpg)`;
                    document.querySelector('.win-modal').style.display = 'block';
                    clearInterval(rivalInterval);
                    clearInterval(rivalSecondInterval);
                }
                setTimeout(() => {
                    player.querySelector('.body').children[0].src = './assets/player-body.png';
                    player.querySelector('.head').style.marginLeft = 0;
                }, 500);
            }
        }
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === ' ') {
        player.querySelector('.body').children[0].src = './assets/player-body.png';
        player.querySelector('.head').style.marginLeft = 0;
    }
});


// MODAL EVENTS //

document.querySelector('.win-modal').addEventListener('click', function() {
    location.href='index.html';
});

document.querySelector('.lose-modal').addEventListener('click', function() {
    location.href='index.html';
});