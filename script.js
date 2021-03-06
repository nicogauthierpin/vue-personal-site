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
      <div class="section-content">\
      <h2>Who am I</h2>\
      <p>I am a self-taught front-end web developer, with a background on graphic design.</p>\
      <p>My schooling background is in Engineering. I was one of those kids who liked to disassemble things to see how they work. I still like to do it, but I quickly realized I didn’t want to make a career out of it. Instead, the web allowed me to merge my passion for building things and creating graphics.</p>\
      <p>I was born and raised in Argentina, and lived in London, Montréal, San Francisco, and now LA. I’ve also spent significant time in New York and Toronto. I am 100% bilingual in english and spanish, and I can speak beginner italian and just a tiny little bit of french.</p>\
      <p class="funfacts">Other things I like: <span class="funfact"><span class="tooltip"><img src="img/bikes.jpg"></span>Things</span> <span class="funfact"><span class="tooltip"><img src="img/bmw.jpg"></span>with</span> <span class="funfact"><span class="tooltip"><img src="img/saab.jpg"></span>wheels</span>, <span class="funfact"><span class="tooltip"><img src="img/books.jpg"></span>books</span>, <span class="funfact"><span class="tooltip"><img src="img/coffee.jpg"></span>coffee</span>, <span class="funfact"><span class="tooltip"><img src="img/beer.jpg"></span>good beer<span>.</p>\
      <h2>What am I up to</h2>\
      <p>I am currently the Technical Project Manager at <a href="https://wearesparks.com">Sparks</a>, where we build live and digital brand experiences. Prior to that I worked as Web Developer and Interactive Manager at <a href="https://gunnjerkens.com/">Gunn | Jerkens</a>, a marketing agency in Long Beach, CA, and I freelanced as a web and graphic designr for over 10 years. <a href="http://2016.nicolas.gauthier-pin.com/">My freelance portfolio is still online.</a></p>\
      <p>On the side, I am active in the local Wordpress and developer community in Long Beach. I am one of the organizers of the Long Beach chapter of the <a href="https://www.meetup.com/WPLosAngeles/">Wordpress Los Angeles</a> meetup, I was part of the organizing team of <a href="https://2019.longbeach.wordcamp.org/">WordCamp Long Beach 2019</a>, and I am a regular attendant of the <a href="http://codeandcoffeelb.org/">Code&&Coffee meetup</a>. I\'m also involved in the <a href="http://longbeachcommunitytheater.com/">Long Beach Community Theater</a>, lending a hand with everything web and whatever else is needed.</p>\
      </div>\
    </section>'
});

Vue.component('social', {
  template: '\
    <aside id="social" class="inset">\
      <a href="https://www.facebook.com/nicolaspin"><img src="img/facebook-with-circle.svg" alt="Facebook"></a>\
      <a href="https://www.instagram.com/nicogauthierpin/"><img src="img/instagram-with-circle.svg" alt="Instagram"></a>\
      <a href="https://www.goodreads.com/user/show/5498039-nico"><img src="img/goodreads-with-circle.svg" alt="Goodreads"></a>\
      <a href="https://github.com/nicogauthierpin"><img src="img/github-with-circle.svg" alt="Github"></a>\
      <a href="https://www.linkedin.com/in/nicogauthierpin"><img src="img/linkedin-with-circle.svg" alt="Linkedin"></a>\
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
