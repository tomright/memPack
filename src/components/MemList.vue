<template>
  //TODO передалть в компонент дизайн мемов
  <div class="memList">
    <div v-for="item in 30">
      <div class="memList__memes">
        <div class="memList__img"></div>
        <div class="memList__control">
          <div class="memList__like"></div>
          <div class="memList__share"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemList",
};
</script>

<style>
.memList {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
.memList__memes {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  column-gap: 5px;

  width: 210px;
  height: 250px;
  border: 2px solid green;
}
.memList__img {
  background-image: url("@/assets/Img/AssCraving.jpg");
  background-size: cover;
  width: 200px;
  height: 200px;
}
.memList__like {
  background-image: url("@/assets/Img/noLike.svg");
  background-size: contain;
  width: 30px;
  height: 30px;
}
.memList__share {
  background-image: url("@/assets/Img/share.svg");
  background-size: contain;
  width: 30px;
  height: 30px;
}
.memList__control {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
