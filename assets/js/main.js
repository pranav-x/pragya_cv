!(function($) {
     
    //navigation Bar toggle in mobile view
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    });
    
    $('.mynav a').on('click', function(){
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    });
    ///////////////////////////
    //Typed Text
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 5) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    //////////////////////////////////////

    $('#skills').waypoint(function () {

      $('.progress-bar').each(function () {

          $(this).animate({
              width: $(this).attr('aria-valuenow') + "%"
          }, 1000);
      });
      this.destroy();

    }, {
        offset: 'bottom-in-view'
    });
    ///////////////////////////////////////
    // Close Navbar on click
    // var navMain = $(".nav-collapse"); // avoid dependency on #id
    // // "a:not([data-toggle])" - to avoid issues caused
    // // when you have dropdown inside navbar
    // navMain.on("click", "a", null, function () {
    //      navMain.collapse('hide');
    // });

    // Initi AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back"
    });

})(jQuery);
