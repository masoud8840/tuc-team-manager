<template>
  <dialog class="modal" v-if="props.modelValue" @click="toggleModal">
    <transition name="modal">
      <section class="modal-inner" v-if="modalVisibilityInstance">
        <div class="modal-header">
          <h4>{{ props.modalTitle }}</h4>
          <button @click="toggleModal">
            <Plus class="close-btn" />
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </section>
    </transition>
  </dialog>
</template>

<script setup>
import { ref, watch } from "vue";
import Plus from "../icon/Plus.vue";
const props = defineProps(["modalTitle", "modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const modalVisibilityInstance = ref(false);

function toggleModal(e) {
  if (e.srcElement.localName === "dialog") {
    emits("update:modelValue", false);
  }
}

// watch for modal visibility to change it's instance
watch(props, (newVal) => {
  setTimeout(() => {
    modalVisibilityInstance.value = newVal.modelValue;
  }, 100);
});
</script>
