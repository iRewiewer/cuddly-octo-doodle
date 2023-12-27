function Setup() {
    $('#topButton').on('click', function() {
        $(this).fadeOut(500, function() {
            $('.hidden-buttons').each(function(index) {
                $(this).css('display', 'inline-block').animate({
                    marginLeft: (index * 10) + 'px',
                    opacity: 1
                }, 1000);
            });
        });
    });
}

function Randomness() {
    function selectRandomButton() {
        const buttons = $('.hidden-buttons');
        const randomIndex = Math.floor(Math.random() * buttons.length);
        return buttons.eq(randomIndex);
    }

    const randomButton = selectRandomButton();
    randomButton.addClass("randomButton");

    $('.hidden-buttons').on('click', function() {
        const clickedButton = $(this);
        if (clickedButton.is(randomButton)) {
            $('.hidden-buttons').not(randomButton).fadeOut(500);
        } else {
            clickedButton.fadeOut(500);
        }
    });

    $(randomButton).on('click', function() {
        setTimeout(function() {
            window.location.href = 'page4.html';
        }, 2000);
    });
}

$(function () {
    $('body').fadeIn(500);
    Setup();
    Randomness();
});