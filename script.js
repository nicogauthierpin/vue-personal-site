Vue.component('intro', {
  methods : {
    toggleAbout: function (event) {
      app.isAboutOpen = app.isAboutOpen ? false : true;
    },
  },
  template : '\
    <section id="intro">\
      <img id="logo" src="img/ngp-logo.svg" alt="Nicolas Gauthier-Pin">\
      <button v-on:click="toggleAbout" id="toggle-about" class="inset"><img src="img/info-with-circle.svg" alt="About"></button>\
    </section>'
});


Vue.component('about-page', {
  template : '\
    <section id="about">\
      <div class="section-border">\
        <img class="section-border-icon" src="img/info.svg" alt="" aria-hidden="true">\
        <div class="section-border-top"></div>\
        <div class="section-border-circle"></div>\
        <div class="section-border-bottom"></div>\
      </div>\
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\
    </section>'
});

Vue.component('social', {
  template: '\
    <aside id="social" class="inset">\
      <a href="#"><img src="img/facebook-with-circle.svg" alt="Facebook"></a>\
      <a href="#"><img src="img/instagram-with-circle.svg" alt="Instagram"></a>\
      <a href="#"><img src="img/github-with-circle.svg" alt="Github"></a>\
      <a href="#"><img src="img/linkedin-with-circle.svg" alt="LInkedin"></a>\
    </aside>'
});


Vue.component('back-home', {
  methods : {
    closeSections: function (event) {
      app.isAboutOpen = false;
    },
  },
  template: '\
    <button v-on:click="closeSections" id="back-home" class="inset"><img src="img/home-with-circle.svg" alt="Home"></button>'
});



var app = new Vue({
  el: '#app',
  data : {
    isAboutOpen : false,
  },
  methods: {
    toggleAbout: function (event) {
      this.isAboutOpen = this.isAboutOpen ? false : true;
    },
    backHome: function (event) {
      this.isAboutOpen = false;
    }

  }
});
