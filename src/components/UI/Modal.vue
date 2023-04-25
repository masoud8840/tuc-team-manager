<template>
  <dialog open class="modal">
    <section class="modal-inner">
      <div class="modal-header">
        <h4>{{ props.modalTitle }}</h4>
        <button>
          <Plus />
        </button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </section>
  </dialog>
</template>

<script setup>
import Plus from "../icon/Plus.vue";
const props = defineProps(["modalTitle"]);
</script>
