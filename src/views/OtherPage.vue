<template>
  <div class="about">
    <h1>Other Page</h1>

    <div>
      <button v-on:click="stopStoreListening">Stop Vuex store listening</button>
    </div>
    <p>
      This "Other Page" demonstrates a common scenario in an SPA.
    </p>
    <p>
      In this scenario, the user has navigated to another page in your app. The
      socket listener is still operating in the store and we can access its
      results (wait a few seconds):
    </p>

    <div v-for="message in localComponentMessages" :key="message">
      {{ message }}
    </div>

    <div>
      <p>
        <button v-on:click="homePage">
          Back to Home Page
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapActions } from "vuex";

export default {
  name: "OtherPage",

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
    ...mapActions(["stopListening"]),

    homePage() {
      this.$router.push({
        name: "Home"
      });
    },

    stopStoreListening() {
      this.stopListening();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
