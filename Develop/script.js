var currentTime = $('#currentDay');
 function dispalayTime () {
 
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTime.text(rightNow);

 }setInterval(dispalayTime, 1000);


$(document).ready(function () {
    $('.saveBtn').on('click', function () {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.setItem(time, value);
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, );
    });
    function timeUpdate() {
        var currentTime = moment().hours();
        
        $('.time-block').each(function () {
          var blockTime = parseInt($(this).attr('id').split('')[1]);
          if (blockTime > currentTime) {
            $(this).addClass('past');
            $(this).removeClass('future')
            $(this).removeClass('present')
          } else if (blockTime === currentTime) {
            $(this).removeClass('past');
            $(this).removeClass('future')
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).addClass('future');
            $(this).removeClass('present');
          }
          
        });
      }
      

      $('9am .description').val(localStorage.getItem('9am'));
      $('#10am .description').val(localStorage.getItem('10am'));
      $('#11am .description').val(localStorage.getItem('11am'));
      $('#12pm .description').val(localStorage.getItem('12pm'));
      $('#1pm .description').val(localStorage.getItem('1pm'));
      $('#2pm .description').val(localStorage.getItem('2pm'));
      $('#3pm .description').val(localStorage.getItem('3pm'));
      $('#4pm .description').val(localStorage.getItem('4pm'));
      $('#5pm .description').val(localStorage.getItem('5pm'));
     
     
      timeUpdate();
});