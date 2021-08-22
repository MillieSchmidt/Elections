const characters = document.querySelector('.characters').children;
let counter = 0;

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'ArrowLeft') {
        if (counter === characters.length - 1) {
            return;
        } else {
            characters[counter].id = '';
            counter++;
            characters[counter].id = 'selected';
        }
    } else if (e.key === 'ArrowRight') {
        if (counter === 0) {
            return;
        } else {
            characters[counter].id = '';
            counter--;
            characters[counter].id = 'selected';
        }
    } else if (e.key === 'Enter') {
        localStorage.setItem('selected', counter);
        location.href='game.html';
    }
});

// ABOUT EVENTS //

document.querySelector('header').children[0].addEventListener('click', function() {
    document.querySelector('.about').style.display = 'block';
});

document.querySelector('.about').children[0].addEventListener('click', function() {
    document.querySelector('.about').style.display = 'none';
});