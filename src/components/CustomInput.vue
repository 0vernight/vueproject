<!-- CustomInput.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <!-- <slot>my slot is empty </slot> -->

  <div class="container">
    <header>
      <slot name="header" :count="123"></slot>
    </header>
    <main>
      <slot name="main"></slot>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>


<style>
.pm {
  color: aliceblue;
}
</style>