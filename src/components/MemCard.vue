<template>
  <div class="memList__memes">
    <div class="memList__img">
      <img class="memList__memes-source" src="@/assets/Img/testimg1.jpg" alt="" />
    </div>
    <div class="memList__control">
      <div class="memList__social">
        <div class="memList__like"></div>
        <div class="memList__share"></div>
      </div>
      <!-- TODO сделать загрузку тегов из стора и помечать первые 2 тега видимыми, остальные невидимы -->
      <div class="memList__tags memList__tags--font" :class="memList__tagClass">
        <div class="memList__tag-effect">
          <span>Пираты карибского моря</span>
        </div>
        <div class="memList__tag-effect">
          <span>Джек Воробей</span>
        </div>
        <div
          :class="{ 'memList__tag-effect--displayNone': !memList__tagClass['memList__tags--openned'] }"
          class="memList__tag-effect">
          <span>Пираты карибского моря</span>
        </div>
        <div
          :class="{ 'memList__tag-effect--displayNone': !memList__tagClass['memList__tags--openned'] }"
          class="memList__tag-effect">
          <span>Джек Воробей</span>
        </div>
        <div @click="openTags" class="memList__tag-effect">
          <span>...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemCard",
  data() {
    return {
      memList__tagClass: {
        "memList__tags--openned": false,
      },
    };
  },
  methods: {
    openTags() {
      if (this.memList__tagClass["memList__tags--openned"]) {
        this.memList__tagClass["memList__tags--openned"] = false;
      } else {
        this.memList__tagClass["memList__tags--openned"] = true;
      }
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
  width: 270px;
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
  row-gap: 3px;
  column-gap: 3px;
  align-items: flex-start;
  align-self: flex-start;
  overflow: hidden;
}
.memList__tags--font {
  font-family: Helvetica, sans-serif;
  font-size: 12px;
}
.memList__tags--openned {
  max-width: 230px;
  z-index: 10;
  position: relative;
  background-color: white;
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
}
.memList__tag-effect--displayNone {
  display: none;
}
</style>
