$(document).ready(function(){
    $('.modal').modal();
    $('#about').removeClass('hide');
    $("#about").animate({
        marginTop: "+=30vh",
      }, 500, function() {
        // Animation complete.
      });
    $("#about").animate({
        marginTop: "-=10vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#about").animate({
        marginTop: "+=10vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#about").animate({
        marginTop: "-=5vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#about").animate({
        marginTop: "+=5vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#about").animate({
        marginTop: "-=2vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#about").animate({
        marginTop: "+=2vh",
    }, 200, function() {
    // Animation complete.
    });
    $('#portfolio').removeClass('hide');
    $("#portfolio").animate({
        marginTop: "+=40vh",
      }, 500, function() {
        // Animation complete.
      });
    $("#portfolio").animate({
        marginTop: "-=10vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#portfolio").animate({
        marginTop: "+=10vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#portfolio").animate({
        marginTop: "-=5vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#portfolio").animate({
        marginTop: "+=5vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#portfolio").animate({
        marginTop: "-=2vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#portfolio").animate({
        marginTop: "+=2vh",
    }, 200, function() {
    // Animation complete.
    });
    $('#contact').removeClass('hide');
    $("#contact").animate({
        marginTop: "+=34vh",
      }, 500, function() {
        // Animation complete.
      });
    $("#contact").animate({
        marginTop: "-=10vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#contact").animate({
        marginTop: "+=10vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#contact").animate({
        marginTop: "-=5vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#contact").animate({
        marginTop: "+=5vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#contact").animate({
        marginTop: "-=2vh",
    }, 200, function() {
    // Animation complete.
    });
    $("#contact").animate({
        marginTop: "+=2vh",
    }, 200, function() {
    // Animation complete.
    });
});
  

$("#aboutMenu").click(function(event){
    event.preventDefault;
    if ($('#moon').attr('class') === 'btn-floating btn-large waves-effect waves-light amber pulse scale-transition scale-out amber darken-2 modal-trigger'){
        $('#moon').addClass('scale-in');
        setTimeout(function(){  $('#moon2').addClass('scale-in'); }, 150)
        setTimeout(function(){  $('#moon3').addClass('scale-in'); }, 300)
    } else {
        $('#moon3').removeClass('scale-in');
        setTimeout(function(){  $('#moon2').removeClass('scale-in'); }, 150)
        setTimeout(function(){  $('#moon').removeClass('scale-in'); }, 300)
    }
})

$("#portfolioMenu").click(function(event){
    event.preventDefault;
    if ($('#hcMoon').attr('class') === 'btn-floating btn-large waves-effect waves-light scale-transition pink pulse scale-out pink darken-1'){
        $('#hcMoon').addClass('scale-in');
        setTimeout(function(){  $('#glamMoon').addClass('scale-in'); }, 150)
        setTimeout(function(){  $('#linkMoon').addClass('scale-in'); }, 300)
    } else {
        $('#linkMoon').removeClass('scale-in');
        setTimeout(function(){  $('#glamMoon').removeClass('scale-in'); }, 150)
        setTimeout(function(){  $('#hcMoon').removeClass('scale-in'); }, 300)
    };
});

$("#contactMenu").click(function(event){
    event.preventDefault;
    if ($('#github').attr('class') === 'btn-floating btn-large waves-effect waves-light scale-transition purple pulse scale-out purple accent-2'){
        $('#github').addClass('scale-in');
        setTimeout(function(){  $('#linkedIn').addClass('scale-in'); }, 150)
    } else {
        $('#linkedIn').removeClass('scale-in');
        setTimeout(function(){  $('#github').removeClass('scale-in'); }, 150)
    }
})