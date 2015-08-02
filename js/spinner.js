$(document).ready(function() {

    $('.spinner-wrap').click(function() {
        var $this = $(this),
            audio = $this.siblings('audio')[0];
        if (audio.paused === false) {
            audio.load();
            audio.pause();
            audio.currentTime = 0;
            $this.removeClass('playing');
        } else {
            audio.load();
            audio.play();
            $this.addClass('playing');
        }
    });
});
