<script setup>
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <iconify-icon icon="mdi:home"></iconify-icon>
      <v-btn prepend-icon="mdi-ab-testing" class="mt-10">
        Hey
      </v-btn>
      <v-icon icon="mdi-account"/>
      <v-radio-group>
        <v-radio label="Hey"/>
      </v-radio-group>
    </v-main>

  </v-app>
</template>
