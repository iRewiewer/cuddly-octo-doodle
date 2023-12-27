function OctopusRotate() {
    let first = true;
    let paused = false;

    $('#octopus_img').on('mouseenter', function() {
        if (first) {
            $(this).addClass('spin');
            first = false;
        }

        if (paused) {
            $(this).removeClass('pause');
            paused = false;
        }
    });

    $('#octopus_img').on('mouseleave', function() {
        $(this).addClass('pause');
        paused = true;
    });
}

$(function () {
    OctopusRotate();
});