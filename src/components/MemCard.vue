<template>
  <div class="memList__memes">
    <div class="memList__img">
      <img class="memList__memes-source" src="@/assets/Img/testimg1.jpg" alt="" />
    </div>
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
  row-gap: 5px;
  padding: 5px;

  width: 250px;
  height: 210px;
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
