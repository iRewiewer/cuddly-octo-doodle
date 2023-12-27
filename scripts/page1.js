$(function () {
    $('body').fadeIn(500);

    $('.gotoPage2').on('click', function() {
        $('button').fadeOut(200, function() {
            window.location.href = 'page2.html';
        });
    });
});