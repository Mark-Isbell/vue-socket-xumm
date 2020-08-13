<template>
  <div>
    <div>
      <p>Vuex store demonstration for Xumm Payment UUID Socket Listener</p>
    </div>

    <div>
      <p>
        If you have your own UUID to track, replace this one, or press "Start
        Vuex store listening" to start the demonstration with the example UUID.
      </p>
      <p>
        <input type="text" name="uuid" v-model="uuid" style="width: 300px;" />
      </p>
    </div>

    <div>
      <p>
        More about Xumm Payment UUID:
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
      <button v-on:click="otherPage">
        Other Page in One-Page App
      </button>
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
      localComponentMessages: [],
      uuid: "a55feea8-41c2-4974-ba9f-6772eb804025"
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
    ...mapActions(["startListening"]),

    otherPage() {
      this.$router.push({
        name: "OtherPage"
      });
    },

    startStoreListening() {
      this.startListening(this.uuid);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
