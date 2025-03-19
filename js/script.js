const vue_app = Vue.createApp({
  data() {
    return {
      settings: [
        { name: 'left-controller-container', image: 'Photos/Left hand.JPG'},
        { name: 'default-controller-container', image: 'Photos/Default.JPG'},
        { name: 'right-controller-container', image: 'Photos/Right hand.JPG'},
      ],
    }
  },
  methods: {
    receiveEmit(settingsId) {
      const elementId1 = document.getElementsByClassName(settings[0].name).id
      const elementId2 = document.getElementsByClassName(settings[1].name).id;
      const elementId3 = document.getElementsByClassName(settings[2].name).id;
      console.log('Toggle settings:', settingsId);
    }
  },
  // computed: {
  //   image() {
  //     return this.settings[index].image[0];
  //   }
  // }


})

vue_app.mount("#vue_app")