/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function () {
  jQuery('a[href^="#"]').click(function (e) {
    e.preventDefault();

    jQuery("html,body").animate(
      { scrollTop: jQuery(this.hash).offset().top },
      1000
    );

    return false;
  });

  function addMargin() {
    window.scrollTo(0, window.pageYOffset - 70);
  }

  window.addEventListener("hashchange", addMargin);

});
