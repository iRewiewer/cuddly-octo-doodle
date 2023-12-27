function runAway(event) {
    const button = event.target;
    button.classList.add("run-away");

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxHorizontal = windowWidth * 0.8;
    const maxVertical = windowHeight * 0.66;

    const halfScreenWidth = windowWidth / 2;
    const halfScreenHeight = windowHeight / 2;

    const randomX = ((Math.random() * maxHorizontal) - halfScreenWidth);
    const randomY = ((Math.random() * maxVertical) - halfScreenHeight);

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

$(function () {
    $('body').fadeIn(500);

    $('#yes').on('click', function() {
        $('button').fadeOut(200, function() {
            window.location.href = 'page2.html';
        });
    });
});