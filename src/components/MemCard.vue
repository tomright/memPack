<template>
  <div class="memList__memes">
    <div class="memList__img"></div>
    <div class="memList__control">
      <div class="memList__like"></div>
      <div class="memList__share"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemCard",
};
</script>

<style>
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
  background-image: url("@/assets/Img/testimg.jpg");
  background-size: cover;
  width: 200px;
  height: 200px;
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
  justify-content: space-around;
  width: 100%;
}
</style>
