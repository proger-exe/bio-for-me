
$(function () {
    var title = document.title,
        animSeq = ["$"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
    $(".typed").typed({
        strings: [ "I see the future...", "No, needn't", "Oh, i see you think you can? Good luck", "Why no.", "It's luck, bro"],
        typeSpeed: 50,
        loop: true,
        cursorChar: "$",
    });
});
