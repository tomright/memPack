export default {
  data() {
    return {
      widthWindow: "",
    };
  },
  methods: {
    windowResize(e) {
      this.widthWindow = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.windowResize);
  },
  deactivated() {
    window.addEventListener("resize", this.windowResize);
  },
};
