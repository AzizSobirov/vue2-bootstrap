<template>
  <div>
    <TheModal />
    <TheHeader />

    <main>
      <section class="hero">
        <div class="container">
          <h1 class="text-primary">Vue 2 + Bootstrap Starter Kit</h1>
          <h2>by <a href="https://azizdev.uz">Aziz Sobirov</a></h2>
          <h3>
            <a href="https://github.com/AzizSobirov/vue2-bootstrap">Repo</a>
          </h3>
          <b-button v-b-modal.modal-center>Launch modal</b-button>
        </div>
      </section>
    </main>

    <footer></footer>
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheModal from "./components/TheModal.vue";

export default {
  name: "App",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    TheHeader,
    TheModal,
  },
};
</script>
