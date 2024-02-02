<template>
  <v-icon :icon="iconSrc" :size="size" :color="color"></v-icon>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: '1.5rem'
  },
  color:{
    type: String,
  }
})

const style = computed(() => ({
  color: props.color
}))

const iconSrc = computed(() => props.icon.replace('mdi:', 'mdi-'))
</script>