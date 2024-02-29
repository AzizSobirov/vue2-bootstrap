<template>
  <b-modal id="modal-center" centered>
    <template #modal-header="{ close }">
      <b-button size="sm" variant="outline-danger" @click="close()">
        Close Modal
      </b-button>
    </template>

    <p class="my-4">Vertically centered modal!</p>
  </b-modal>
</template>
