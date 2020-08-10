import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {},
  actions: {
    stopListening() {
      this.connection.close();
    },

    startListening() {
      this.url = "wss://xumm.app/sign/a55feea8-41c2-4974-ba9f-6772eb804025";
      this.connection = new WebSocket(this.url);

      this.connection.onopen = () => {
        // this.connection.send("Message From Client");
      };

      this.connection.onerror = error => {
        console.log(`WebSocket error: ${error}`);
      };

      this.connection.onmessage = e => {
        this.messages.push(e.data);
        console.log(e.data);
        // do other stuff here
      };
    }
  },
  modules: {}
});
