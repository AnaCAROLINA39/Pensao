  $(document).ready(function() {
   $('#mobile_btn').on('click', function(){
      $('#mobile_menu').toggleClass('active');
      $('#mobile_btn').find('span').toggleClass('fa-x');
   });
  });