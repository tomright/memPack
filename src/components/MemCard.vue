<template>
  <div class="memList__memes">
    <div class="memList__img">
      <img class="memList__memes-source" :src="item.src" alt="" />
    </div>
    <div class="memList__control">
      <div class="memList__social">
        <div class="memList__like"></div>
        <div class="memList__share"></div>
      </div>
      <!-- TODO сделать загрузку тегов из стора и помечать первые 2 тега видимыми, остальные невидимы -->
      <div class="memList__tags memList__tags--font">
        <span v-for="(tag, index) in mainTags" :key="index" class="memList__tag-effect">{{ tag }}</span>
        <TransitionGroup
          name="showTags"
          @before-enter="toggle('hiddenButton')"
          @after-enter="toggle('hiddenButton')"
          @before-leave="toggle('hiddenButton')"
          @after-leave="toggle('hiddenButton')">
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
    item: Object,
    required: true,
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

<style>
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
  object-fit: cover;
}
.memList__like {
  background-image: url("@/assets/ui-img/noLike.svg");
  background-size: contain;
  width: 30px;
  height: 30px;
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
