var app = new Vue({
  el: '#app',
  data : {
    isAboutOpen : false
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
