import { createStore } from "vuex";

export default createStore({
  state: {
    memes: [
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg1.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
      {
        src: "./src/assets/Img/testimg2.jpg",
        like: false,
        tags: ["Джек Воробей", "Пираты карбиского моря", "Джонни Депп", "Смекаешь?"],
      },
    ],
  },
  getters: {
    //TODO Сделать сортировку и поиск мемов
  },
  mutations: {
    likeToggle(state, payload) {
      if (state.payload) {
        state.payload = false;
      } else {
        state.payload = true;
      }
    },
  },
});
