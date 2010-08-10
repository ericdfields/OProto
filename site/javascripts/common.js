// Center a block element.
// Default is horizontal and vertical. Can boolean one or the other
$.fn.extend({
  center: function (x,y) {
    return this.each(function() {
     if (x == undefined) {
       x = true;
     }
     if (y == undefined) {
       y = true;
     }
     var $this = $(this);
     var $window = $(window);
     $this.css({
       position: "absolute"
     });
     if (x) {
       var left = ($window.width() - $this.outerWidth())/2+$window.scrollLeft();
       $this.css('left',left)
     }
     if (!y == false) {
       var top = ($window.height() - $this.outerHeight())/2+$window.scrollTop(); 
       $this.css('top',top);
     }
      return $(this);
    });
  }
});

// Set up Simplemodal
$.extend($.modal.defaults, {
  // open behavior
  onOpen: function(dialog) {
    dialog.overlay.fadeIn('slow',function() {
      dialog.data.show();
      dialog.container.fadeIn();
    })
  },
  // close behavior
  onClose: function(dialog) {
    dialog.container.fadeOut(function(){
      dialog.data.hide();
      dialog.overlay.fadeOut('slow',function(){
        $.modal.close();
      });
    })
  }
})
// This is how you use simplemodal
// // generic simplemodal click
// $('.overlay').click(function(){
//   $('#modalContent').modal();
//   return false;
// });
// // positioned simplemodal click
// $('.positioned-overlay').click(function(){
//   $('#modalContent').modal({
//     position: ['0px',0]
//   });
//   return false;
// });

// page load scripts

