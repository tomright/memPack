import { createStore } from "vuex";

export default createStore({
  state: {
    memes: [
      {
        id: 0,
        src: "./src/assets/Img/testimg0.png",
        like: true,
        likeNumber: 19,
        tags: ["Дэвид Духовны ", "Секретные материалы", "Фокс Малдер"],
        date: 1234,
      },
      {
        id: 1,
        src: "./src/assets/Img/testimg1.png",
        like: false,
        likeNumber: 1999,
        tags: ["Кот", "хмурый кот"],
        date: 12344,
      },
      {
        id: 2,
        src: "./src/assets/Img/testimg2.png",
        like: true,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123444,
      },
      {
        id: 3,
        src: "./src/assets/Img/testimg3.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234444,
      },
      {
        id: 4,
        src: "./src/assets/Img/testimg4.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12344444,
      },
      {
        id: 5,
        src: "./src/assets/Img/testimg5.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123444444,
      },
      {
        id: 6,
        src: "./src/assets/Img/testimg6.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234444444,
      },
      {
        id: 7,
        src: "./src/assets/Img/testimg7.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12344444444,
      },
      {
        id: 8,
        src: "./src/assets/Img/testimg8.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234444444,
      },
      {
        id: 9,
        src: "./src/assets/Img/testimg9.png",
        like: false,
        likeNumber: 99,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12345,
      },
      {
        id: 10,
        src: "./src/assets/Img/testimg10.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123455,
      },
      {
        id: 11,
        src: "./src/assets/Img/testimg11.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234555,
      },
      {
        id: 12,
        src: "./src/assets/Img/testimg12.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12345555,
      },
      {
        id: 13,
        src: "./src/assets/Img/testimg13.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123455555,
      },
      {
        id: 14,
        src: "./src/assets/Img/testimg0.png",
        like: false,
        likeNumber: 999,
        tags: ["Дэвид Духовны ", "Секретные материалы", "Фокс Малдер"],
        date: 12346,
      },
      {
        id: 15,
        src: "./src/assets/Img/testimg1.png",
        like: false,
        likeNumber: 999,
        tags: ["Кот", "хмурый кот"],
        date: 123466,
      },
      {
        id: 16,
        src: "./src/assets/Img/testimg2.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234666,
      },
      {
        id: 17,
        src: "./src/assets/Img/testimg3.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12346666,
      },
      {
        id: 18,
        src: "./src/assets/Img/testimg4.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234666666,
      },
      {
        id: 19,
        src: "./src/assets/Img/testimg8.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234666666,
      },
      {
        id: 20,
        src: "./src/assets/Img/testimg5.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12347,
      },
      {
        id: 21,
        src: "./src/assets/Img/testimg6.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12347777777,
      },
      {
        id: 22,
        src: "./src/assets/Img/testimg7.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234777,
      },
      {
        id: 23,
        src: "./src/assets/Img/testimg9.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12347777,
      },
      {
        id: 24,
        src: "./src/assets/Img/testimg10.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12347777,
      },
      {
        id: 25,
        src: "./src/assets/Img/testimg11.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123477777,
      },
      {
        id: 26,
        src: "./src/assets/Img/testimg12.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234777777,
      },
      {
        id: 27,
        src: "./src/assets/Img/testimg13.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12348,
      },
      {
        id: 28,
        src: "./src/assets/Img/testimg0.png",
        like: false,
        likeNumber: 999,
        tags: ["Дэвид Духовны ", "Секретные материалы", "Фокс Малдер"],
        date: 123488,
      },
      {
        id: 29,
        src: "./src/assets/Img/testimg1.png",
        like: false,
        likeNumber: 999,
        tags: ["Кот", "хмурый кот"],
        date: 1234888,
      },
      {
        id: 30,
        src: "./src/assets/Img/testimg2.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123488888,
      },
      {
        id: 31,
        src: "./src/assets/Img/testimg3.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123488888888,
      },
      {
        id: 32,
        src: "./src/assets/Img/testimg4.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123488888888,
      },
      {
        id: 33,
        src: "./src/assets/Img/testimg5.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12348888888,
      },
      {
        id: 34,
        src: "./src/assets/Img/testimg6.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123488888888,
      },
      {
        id: 35,
        src: "./src/assets/Img/testimg7.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12349,
      },
      {
        id: 36,
        src: "./src/assets/Img/testimg9.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123499,
      },
      {
        id: 37,
        src: "./src/assets/Img/testimg10.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12349999,
      },
      {
        id: 38,
        src: "./src/assets/Img/testimg11.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 1234999999,
      },
      {
        id: 39,
        src: "./src/assets/Img/testimg8.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 12349999999,
      },
      {
        id: 40,
        src: "./src/assets/Img/testimg12.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123499999999,
      },
      {
        id: 41,
        src: "./src/assets/Img/testimg13.png",
        like: false,
        likeNumber: 999,
        tags: ["Дикаприо", "Картинка с текстом", "Леонардо Дикаприо"],
        date: 123499999999,
      },
    ],
    dialogVisible: false,
    memFullScreen: {
      id: 0,
      src: "./src/assets/Img/testimg0.png",
      like: true,
      likeNumber: 999,
      tags: ["Дэвид Духовны ", "Секретные материалы", "Фокс Малдер"],
      date: 12349999999,
    },
    selectedSort: "",
    sortOptions: [
      { value: "likeNumberDec", name: "Лайкам (Убыванию)" },
      { value: "likeNumberInc", name: "Лайкам (Возрастанию)" },
      { value: "dateDec", name: "Дате (Убыванию)" },
      { value: "dateInc", name: "Дате (Возрастанию)" },
    ],
    searchValue: "",
  },
  getters: {
    sortMemes: (state) => {
      switch (state.selectedSort) {
        case "likeNumberDec":
          return [...state.memes].sort((first, second) => {
            return second["likeNumber"] - first["likeNumber"];
          });
        case "likeNumberInc":
          return [...state.memes]
            .sort((first, second) => {
              return second["likeNumber"] - first["likeNumber"];
            })
            .reverse();
        case "dateDec":
          return [...state.memes].sort((first, second) => {
            return second["date"] - first["date"];
          });
        case "dateInc":
          return [...state.memes]
            .sort((first, second) => {
              return second["date"] - first["date"];
            })
            .reverse();
        default:
          break;
      }
      return [...state.memes].sort((first, second) => {
        return first[state.selectedSort] - second[state.selectedSort];
      });
    },
    //TODO переделать, так как нужно будет отправлять запрос на сервер, там все мемы, а в сторе лежит только часть
    searchAndSortMemes: (state, getters) => {
      return [...getters.sortMemes].filter((value) => {
        for (let item of value.tags) {
          console.log(item.toLowerCase().trim());
          if (item.toLowerCase().trim().includes(state.searchValue.toLowerCase().trim())) return true;
        }
      });
    },
  },
  mutations: {
    changeSortOption(state, payload) {
      state.selectedSort = payload;
    },
    likeToggle(state, payload) {
      if (state.memes[payload].like) {
        state.memes[payload].like = false;
        state.memes[payload].likeNumber -= 1;
      } else {
        state.memes[payload].like = true;
        state.memes[payload].likeNumber += 1;
      }
    },
    setDialogVisible(state, idMemes = {}) {
      if (state.dialogVisible) {
        state.dialogVisible = false;
      } else {
        state.memFullScreen = idMemes;
        state.dialogVisible = true;
      }
    },
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
  },
  actions: {
    likeImg({ commit }, payload) {
      // payload {id}
      commit("likeToggle", payload);
      //TODO отправка на сервер
    },
  },
});
