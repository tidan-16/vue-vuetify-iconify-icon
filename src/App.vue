<script setup>
const test = ref('allo')
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <icon icon="mdi:account" color="primary"></icon>
      <v-btn prepend-icon="mdi-ab-testing" class="mt-10">
        Hey
      </v-btn>
      <v-icon icon="mdi-account"/>
      <v-radio-group>
        <v-radio label="Hey"/>
      </v-radio-group>

      {{test}}
    </v-main>

  </v-app>
</template>
