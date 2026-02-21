<script setup lang="ts">
import UserProvider from "../components/fragments/UserProvider.vue";

console.log("UserLayout");
</script>
<template>
  <UserProvider>
    <slot />
  </UserProvider>
</template>
