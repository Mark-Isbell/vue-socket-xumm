<template>
  <div>
    <div>
      <p>(Vuex store configuration) Xumm Payment UUID Socket Listener</p>
    </div>
    <div>
      <p>
        For more information:
        <a href="https://xumm.readme.io/docs/payload-status"
          >Xumm WebSocket Documentation</a
        >
      </p>
    </div>
    <br />
    <div>
      <button v-on:click="startStoreListening">
        Start Vuex store listening
      </button>
    </div>
    <br />
    <div>
      <button v-on:click="stopStoreListening">Stop Vuex store listening</button>
    </div>
    <br />

    <div v-for="message in localComponentMessages" :key="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/store/index";

export default {
  name: "HelloWorld",

  data() {
    return {
      localComponentMessages: []
    };
  },

  watch: {
    messagesFromStore: function() {
      this.localComponentMessages.push(store.getters.LATEST_MESSAGE);
    }
  },

  computed: {
    messagesFromStore() {
      return store.getters.MESSAGES;
    }
  },

  methods: {
    ...mapActions(["startListening", "stopListening"]),

    startStoreListening() {
      this.startListening();
    },

    stopStoreListening() {
      this.stopListening();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
