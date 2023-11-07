<template>
  <div class="memList__memes">
    <div class="memList__img">
      <img class="memList__memes-source" src="@/assets/Img/testimg2.jpg" alt="" />
    </div>
    <div class="memList__control">
      <div class="memList__social">
        <div class="memList__like"></div>
        <div class="memList__share"></div>
      </div>
      <div class="memList__tags">
        <div class="memList__tag-effect">
          <span>Пираты карибского моря</span>
        </div> 
        <div class="memList__tag-effect">
          <span>Джек Воробей</span>
        </div> 
        <div class="memList__tag-effect">
          <span>...</span>
        </div> 
      </div>
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

  width: 270px;
  height: 250px;
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
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  overflow: hidden;
}
.memList__tag-effect {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 7px;
  background-color: rgba(128, 128, 128, 0.274);
  border-radius: 10px;
}
</style>
