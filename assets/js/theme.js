jQuery(document).ready(function($) {

  "use strict";

  function larguraAltura() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    
    if( w < 425 ) return;
    if( w > 900 ) return;
    
    if( w > h ) {
      $('#avisoModoRetrato').modal('show');
    }
  }
  larguraAltura();
  
  $(window).resize(function () {
    larguraAltura()
  });

  //*======================================================*/
  
  new fullpage('#fullpage', {
    verticalCentered: true,
    scrollBar: true,
    anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7'],
    onLeave: function(origin, destination, direction){
      var leavingSection = this;
      if( window.innerWidth < 768 ) return;
  
      if(origin.index == 5 && direction =='down'){
        fullpage_api.setFitToSection(false);
        fullpage_api.setAutoScrolling(false);
        // fullpage_api.setResponsive(true);
      }
  
      else if(origin.index == 6 && direction == 'up'){
        fullpage_api.setFitToSection(true);
        fullpage_api.setAutoScrolling(true);
        // fullpage_api.setResponsive(false);
      }
    },
    responsiveWidth: 768,
    afterResponsive: function(isResponsive){
      fullpage_api.destroy();
    }
  });

});