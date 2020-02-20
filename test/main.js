$(document).ready(function() {
  /*$('section').tooltip({
    'citis' : 'citis.json'
  });*/
});

$(document).on('click', '.map-btn', function(){
  $('section div').remove();

  $('section').tooltip({
    'citis' : 'citis.json'
  });


});


(function( $ ){

  $.fn.tooltip = function( options ) {

    var settings = $.extend( {
      'citis'  : 'file.json'
    }, options);

    return this.each(function() {

      $.getJSON(settings.citis, function(item){
        $(item.items).each(function(index,pic){
          if (!pic.leftCorrect) {
            $('.map-container').append('<div class="map-item" style="left:' + pic.markerX + '%;top:' + pic.markerY + '%"><i></i><span>' + pic.title + '</span></div>');
          } else {
            $('.map-container').append('<div class="map-item map-item--leftCorrect" style="left:' + pic.markerX + '%;top:' + pic.markerY + '%"><i></i><span>' + pic.title + '</span></div>');
          }
        });
        $(item.images).each(function(index,zone){
          for (var i = 1, limit = zone.count+1; i < limit; i++) {
            var ziro = '';
            if (i>=10) {
              ziro = '';
            } else {
              ziro = 0;
            }
            $('.map-container').append('<div class="map-zone map-zone-'+zone.zona+'"><img src="images/cities/' + zone.name + '/'+ziro+i+'.png" alt="' + zone.name + '"></div>');
          }
        });
      }).done(function() {
        setTimeout(function(){$('.map-item').addClass('map-item--active')}, 600);

        var imgBox = $('.map-zone');
        var countImg = imgBox.length+1;
        setInterval(function() {
            $('.map-zone').removeClass('map-zone--active').removeAttr('style');
            for (var i = 1, limit = 6; i < limit; i++) {
              var number = 1 + Math.floor(Math.random() * countImg);
              var number2 = 1 + Math.floor(Math.random() * 100);
              var number3 = 1 + Math.floor(Math.random() * 100);
              console.log(number+'+'+i);
              $('.map-zone').eq(number).addClass('map-zone--active').css({"left":number2+"%","top":number3+"%"});
            }
          },
          3000);
      });

    });

  };
})( jQuery );