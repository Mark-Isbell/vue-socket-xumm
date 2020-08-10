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
      <button v-on:click="startStoreListening">Start store listening</button>
    </div>
    <br />
    <div>
      <button v-on:click="stopStoreListening">Stop store listening</button>
    </div>
    <br />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",

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
