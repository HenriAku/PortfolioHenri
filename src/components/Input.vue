<template>
  <div class="mb-3">
    <label :for="label" class="form-label text-black fs-5">{{ label }}</label>
    <div class="input-group w-100">
      <input
        :id="label"
        :type="type"
        class="form-control border border-black border-1"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: String,
  label: String,
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>
