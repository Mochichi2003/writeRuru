var app = new Vue({
  el: "#app",
  data: {
    ruru: "るる",
  },
  methods: {
    addRuru: function name(value) {
      this.ruru = this.ruru + this.ruru;
    },
  },
});
