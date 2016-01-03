$(document).ready(function() {
  $("button").click(function() {
    $("#button").hide();

    var moveRobot = $(".robot").attr("src", 'app/images/bb8-r.gif');

    function move(callback) {
      callback;
    }
    move(moveRobot);

    $('#jawa').animate({
      'right': [1400]},
      2300);

    $(document).keydown(function(e) {
      if (!$('.robot').is(':animated')) {
        switch (event.which) {
          case 37:
            moveRobot = $(".robot").attr("src", 'app/images/bb8-l.gif');
            if ($('.robot').position().left === 0) {} else {
              $(".robot").animate({
                'left': '-=100px'
              }, 30);
            }
            break;
          case 38:
            moveRobot = $(".robot").attr("src", 'app/images/bb8-r.gif');
            $(".robot").animate({
              'top': ['-=200px']
            }, 200).animate({
              'top': ['+=200px', 'swing']
            }, 200);
            break;
          case 39:
            moveRobot = $(".robot").attr("src", 'app/images/bb8-r.gif');
            if ($('.robot').position().left >= 1000) {} else {
              $(".robot").animate({
                'left': '+=100px'
              }, 30);
            }
            break;
        }
      }
      return false;

    });
  });




});
