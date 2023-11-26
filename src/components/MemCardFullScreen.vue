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
        <div class="memList__share" ref="shareElement" @click="shareList">
          <div @click.stop class="memList__share-list" :style="shareActive" v-show="activateShare">
            <BaseButton @click="copyClipboard" class="memList__social-button memList__social-button--copy"></BaseButton>
            <BaseButton @click="downloadMemes" class="memList__social-button memList__social-button--download"> </BaseButton>
          </div>
        </div>
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
import BaseButton from "@/components/UI/BaseButton.vue";
import MemCardBase from "@/mixins/MemCardBase.js";
export default {
  components: { BaseButton },
  name: "MemCardFullScreen",
  mixins: [MemCardBase],
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
  height: 80vh;
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
  cursor: pointer;
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
  cursor: pointer;
}
.memList__share-list {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
  border-radius: 5px;
}
.memList__social-button {
  width: 30px;
  height: 30px;
}
.memList__social-button--download {
  background-image: url("@/assets/ui-img/download1.svg");
  background-size: contain;
}
.memList__social-button--copy {
  background-image: url("@/assets/ui-img/copy.svg");
  background-size: contain;
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
