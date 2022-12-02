<script setup lang="ts"></script>

<template>
  <q-header reveal class="main-header" :reveal-offset="10">
    <q-toolbar class="tw-h-full items-center">
      <div class="lg:tw-hidden"></div>
      <q-space class="lg:tw-hidden" />
      <img src="~assets/logo-horizontal.png" alt="logo" class="main-header__logo" />
      <q-space />
      <q-icon name="menu" color="primary" class="lg:tw-hidden" size="24px"></q-icon>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss">
.q-header {
  &--hidden {
    @media (min-width: 1024px) {
      transform: translateY(-135%);
    }
  }
}
</style>
<style scoped lang="scss">
.main-header {
  box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
  @apply tw-bg-light tw-rounded-4px tw-text-dark;
  @apply tw-my-5px tw-mx-8px lg:tw-m-24px;
  @apply tw-px-10px lg:tw-px-30px;
  @apply tw-h-48px lg:tw-h-74px;
  &__logo {
    @apply tw-h-28px;
  }
}
</style>
