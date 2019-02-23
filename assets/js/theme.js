jQuery(document).ready(function($) {

  "use strict";

  //*======================================================*/

  $('#fullpage').fullpage();

  function larguraAltura() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    if( w < 425 ) return;
    if( w > 768 ) return;

    if( w > h ) {
      $('#avisoModoRetrato').modal('show');
    }
  }
  larguraAltura();
  
  $(window).resize(function () {
    larguraAltura()
  });

});