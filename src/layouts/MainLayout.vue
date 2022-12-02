<script setup lang="ts">
import MainHeader from 'components/Headers/MainHeader.vue'
</script>

<template>
  <q-layout view="hHh LpR fff" class="tw-bg-[#FBFAFC] -tw-mt-12px lg:-tw-mt-24px">
    <main-header />

    <q-page-container class="tw-mt-24px lg:tw-mt-48px">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
