var app = new Vue({
  el: "#app",
  data: {
    ruru: "るる",
    kekka : ""
  },
  methods: {
    addRuru: function name(value) {
      this.kekka = this.kekka + this.kekka + this.ruru;
    },
  },
});
