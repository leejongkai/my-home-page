// service section

$('.icon1').hover(function() {
    $(".show").addClass("fadein");
    $(".icon-topic").addClass("fadein");
    $(".icon-topic").text("Project");
    $(".icon-topic").css("background-color", "#0D47A1")
    $(".show").html("this is icon1 <br> Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer.").css("background-color", "white");
    $(".icon1").addClass("big");
}, function() {
    $(".show").removeClass("fadein");
    $(".icon-topic").removeClass("fadein");
})
$('.icon2').hover(function() {
    $(".icon1").removeClass("big");
    $(".show").addClass("fadein");
    $(".icon-topic").addClass("fadein");
    $(".icon-topic").text("Order");
    $(".icon-topic").css("background-color", "#0D47A1")
    $(".show").html("this is icon2 <br> Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer.").css("background-color", "white");
    $(".icon2").addClass("big");
}, function() {
    $(".show").removeClass("fadein");
    $(".icon-topic").removeClass("fadein");
})
$('.icon3').hover(function() {
    $(".icon1").removeClass("big");
    $(".show").addClass("fadein");
    $(".icon-topic").addClass("fadein");
    $(".icon-topic").text("Quotation");
    $(".icon-topic").css("background-color", "#0D47A1")
    $(".show").html("this is icon3 <br> Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer.").css("background-color", "white");
    $(".icon3").addClass("big");
}, function() {
    $(".show").removeClass("fadein");
    $(".icon-topic").removeClass("fadein");
})
$('.icon4').hover(function() {
    $(".icon1").removeClass("big");
    $(".show").addClass("fadein");
    $(".icon-topic").addClass("fadein");
    $(".icon-topic").text("Issue");
    $(".icon-topic").css("background-color", "#0D47A1")
    $(".show").html("this is icon4 <br> Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer.").css("background-color", "white");
    $(".icon4").addClass("big");
}, function() {
    $(".show").removeClass("fadein");
    $(".icon-topic").removeClass("fadein");
})
$('.icon5').hover(function() {
    $(".icon1").removeClass("big");
    $(".show").addClass("fadein");
    $(".icon-topic").addClass("fadein");
    $(".icon-topic").text("Shipment");
    $(".icon-topic").css("background-color", "#0D47A1")
    $(".show").html("this is icon5 <br> Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer.").css("background-color", "white");
    $(".icon5").addClass("big");
}, function() {
    $(".show").removeClass("fadein");
    $(".icon-topic").removeClass("fadein");
})
$('.icon6').hover(function() {
    $(".icon1").removeClass("big");
    $(".show").addClass("fadein");
    $(".icon-topic").addClass("fadein");
    $(".icon-topic").text("E-mail");
    $(".icon-topic").css("background-color", "#0D47A1")
    $(".show").html("this is icon6 <br> Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer.").css("background-color", "white");
    $(".icon6").addClass("big");
}, function() {
    $(".show").removeClass("fadein");
    $(".icon-topic").removeClass("fadein");
})
$('.icon7').hover(function() {
    $(".icon1").removeClass("big");
    $(".show").addClass("fadein");
    $(".icon-topic").addClass("fadein");
    $(".icon-topic").text("International Form");
    $(".icon-topic").css("background-color", "#0D47A1")
    $(".show").html("this is icon7 <br> Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer.").css("background-color", "white");
    $(".icon7").addClass("big");
}, function() {
    $(".show").removeClass("fadein");
    $(".icon-topic").removeClass("fadein");
})


$(".icon").mouseout(function() {
    $(".icon").removeClass("big");
    $(".show").text("").css("background-color", "");
    $(".icon-topic").text("").css("background-color", "");
})


$(window).scroll(function() {
    if ($(window).scrollTop() > 1305) {
        $(".show-wrapper").addClass("scale");
    }
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 1305) {
        $(".icon1").addClass("big-for-icon1");
    }
});

