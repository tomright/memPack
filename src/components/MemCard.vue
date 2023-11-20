<template>
  <div class="memList__memes">
    <div class="memList__img" @click="fullScreen">
      <img class="memList__memes-source" :src="item.src" alt="" />
    </div>
    <div class="memList__control">
      <div class="memList__social">
        <div class="memList__likes">
          <div @click="like" class="memList__like-button" :class="{ 'memList__like-button--liked': item.like }"></div>
          <span class="memList__likeNumber--font">{{ item.likeNumber }}</span>
        </div>
        <div class="memList__share"></div>
      </div>
      <div class="memList__tags memList__tags--font">
        <span v-for="(tag, index) in mainTags" :key="index" class="memList__tag-effect">{{ tag }}</span>
        <TransitionGroup
          name="showTags"
          @before-enter="hiddenButton = true"
          @after-enter="hiddenButton = false"
          @before-leave="hiddenButton = true"
          @after-leave="hiddenButton = false">
          <!-- не работает если использовать функцию toggle -->
          <span ref="hiddenTags" v-for="(tag, index) in otherTags" :key="index" v-show="showAllTag" class="memList__tag-effect">
            {{ tag }}
          </span>
        </TransitionGroup>
        <div @click="toggle('showAllTag')" class="memList__tag-effect" :class="{ 'memList__tag-effect--hidden': hiddenButton }">
          <!-- Если Скрывать через v-show='hiddenButton', то исчезает не сразу, дергается, поэтому делаем через класс -->
          <span>...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemCard",
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
    },
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
</script>

<style scoped>
.memList__memes {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  row-gap: 5px;
  padding: 5px;
  border-radius: 10px;
  height: auto;
  border: 2px solid green;
  background-color: white;
  max-width: 90vw;
  max-height: 90vh;
}
.memList__img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.memList__memes-source {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: contain;
}
.memList__likes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.memList__likeNumber--font {
  font-family: Helvetica, sans-serif;
  font-size: 12px;
}
.memList__like-button {
  background-image: url("@/assets/ui-img/noLike.svg");
  background-size: contain;
  width: 30px;
  height: 30px;
}
.memList__like-button--liked {
  background-image: url("@/assets/ui-img/like.svg");
}
.memList__share {
  background-image: url("@/assets/ui-img/share.svg");
  background-size: contain;
  width: 30px;
  height: 30px;
}
.memList__control {
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;
  align-items: center;
  width: 100%;
}
.memList__social {
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
}
.memList__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  align-items: flex-start;
  align-self: flex-start;
  overflow: hidden;
}
.memList__tags--font {
  font-family: Helvetica, sans-serif;
  font-size: 12px;
}
.memList__tag-effect {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 7px;
  background-color: rgba(128, 128, 128, 0.274);
  border-radius: 10px;
  cursor: pointer;
  white-space: pre;
}

.showTags-enter-from {
  opacity: 0;
}
.showTags-enter-active {
  transition: opacity 0.5s ease;
}
.showTags-leave-to {
  opacity: 0;
}
.showTags-leave-active {
  transition: opacity 0.5s ease;
}
.memList__tag-effect--hidden {
  opacity: 0;
}
</style>
