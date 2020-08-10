import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    ADD_NEW_MESSAGE_FROM_SOCKET(state, newMessageReceived) {
      state.messages.push(newMessageReceived);
    },
  },
  getters: {
    MESSAGES: state => {
      return state.messages;
    },
    LATEST_MESSAGE: state => {
      return state.messages[state.messages.length - 1];
    },
  },
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
        this.commit("ADD_NEW_MESSAGE_FROM_SOCKET", e.data);
        //this.messages.push(e.data);
        console.log(e.data);
        // do other stuff here
      };
    }
  },
  modules: {}
});
