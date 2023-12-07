export default {
  data() {
    return {
      showPass: false,
      regExpEmail:
        //   TODO доделать регулярное выражение, так как пропускает русские буквы
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      minLength: 8,
      maxLenght: 16,
      regData: {
        email: "",
        pass: "",
      },
      showErrorPass: {
        top: "",
        left: "",
      },
    };
  },

  methods: {
    show() {
      this.showPass = !this.showPass;
    },
  },

  computed: {
    typePass() {
      return this.showPass ? "text" : "password";
    },
    emailValidate() {
      return this.regData.email == "" ? true : this.regExpEmail.test(this.regData.email);
    },
    minLengthCheck() {
      return this.regData.pass == "" ? true : this.regData.pass.length >= this.minLength;
    },
    maxLengthCheck() {
      return this.regData.pass.length <= this.maxLenght;
    },
  },
};
