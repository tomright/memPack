export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showAllTag: false,
      hiddenButton: false,
      activateShare: false,
      shareActive: {
        top: "",
        left: "",
      },
    };
  },
  methods: {
    toggle(variable) {
      this[variable] = !this[variable];
    },
    like() {
      this.$store.dispatch("likeImg", this.item.id);
    },
    fullScreen() {
      this.$store.commit("setDialogVisible", this.item);
      this.activateShare = false;
    },
    shareList() {
      this.shareActive.top = `0px`;
      this.shareActive.left = `0px`;
      this.activateShare = true;
      let coordinate = this.$refs.shareElement.getBoundingClientRect();
      if (this.$store.state.dialogVisible) {
        this.shareActive.top = `${coordinate.y - 30}px`;
        this.shareActive.left = `${coordinate.x}px`;
      } else {
        this.shareActive.top = `${coordinate.y - 30 + window.scrollY}px`;
        this.shareActive.left = `${coordinate.x + window.scrollX}px`;
      }
      // setTimeout(() => {
      //   this.activateShare = false;
      // }, 5000);
    },
    async copyClipboard() {
      this.activateShare = false;
      if (!("ClipboardItem" in window)) {
        return alert(
          "Ваш браузер не поддерживает копирование изображений в буфер обмена." +
            " Если вы используете Firefox, вы можете включить его" +
            " установив для dom.events.asyncClipboard.clipboardItem значение true."
        );
      }
      try {
        const data = await fetch(this.item.src);
        const blobImg = await data.blob();

        await navigator.clipboard.write([
          new window.ClipboardItem({
            "image/png": blobImg,
          }),
        ]);
      } catch (error) {
        console.error(error.name, error.message);
      }
    },
    downloadMemes() {
      this.activateShare = false;
      let downloadMem = document.createElement("a");
      downloadMem.setAttribute("href", this.item.src);
      downloadMem.setAttribute("download", this.mainTags[0]);
      downloadMem.click();
    },
    // clearOptions() {
    //   this.shareActive.top = `0px`;
    //   this.shareActive.left = `0px`;
    //   this.activateShare = false;
    // },
  },
  computed: {
    mainTags() {
      return [this.item.tags[0], this.item.tags[1]];
    },
    otherTags() {
      return this.item.tags.slice(2);
    },
  },
};