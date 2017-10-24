Visibility.onVisible(function() {
    setTimeout(function() {
        $("section > img").addClass("animated fadeInUp");
    }, 400);

    setTimeout(function() {
        $(".tool1").addClass("animated rotateOutUpLeftOne");
    }, 1000);

    setTimeout(function() {
        $(".tool2").addClass("animated rotateOutUpLeftTwo");
    }, 1200);

    setTimeout(function() {
        $(".tool3").addClass("animated rotateOutUpLeftThree");
    }, 1400);

    setTimeout(function() {
        $(".tool4").addClass("animated rotateOutUpRightOne");
    }, 1600);

    setTimeout(function() {
        $(".tool5").addClass("animated rotateOutUpRightTwo");
    }, 1500);

    setTimeout(function() {
        $(".tool6").addClass("animated rotateOutUpRightThree");
    }, 1400);

    setTimeout(function() {
        $(".tool7").addClass("animated rotateOutUpRightFour");
    }, 1300);

    setTimeout(function() {
        $(".tool8").addClass("animated rotateOutUpRightFive");
    }, 1200);
});
