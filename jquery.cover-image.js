(function ($) {
  $.fn.coverImage = function(contain) {
    this.each(function() {
      var $this = $(this),
        $img    = $this.find('img');

      if (contain) {
        $this.css({
          'background': 'url('+$img.get(0).src+') 50% 50%/cover no-repeat'
        });
      }
      else {
        $this.css({
          'background': 'url('+$img.get(0).src+') 50% 50%/contain no-repeat'
        });
      }
      $img.remove();
    });
    return this;
  };
})(jQuery);