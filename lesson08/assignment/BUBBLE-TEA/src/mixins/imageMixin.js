// define a mixin object
export const imageMixin = {
    created: function () {
      this.hello()
    },
    data() {
        return {
            toggleBorder: false,
        }
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!');
        console.log(this.toggleBorder);
      },
      toggleShowBorder() {
          console.log('applying the border');
          console.log(this.toggleBorder);
          this.toggleBorder= !this.toggleBorder;
      }

    }
  }