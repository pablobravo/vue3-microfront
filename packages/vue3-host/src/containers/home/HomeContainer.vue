<template>
  <HeaderComponent :title="t('pages.home')" />
  <div class="global-container max-layout">
    <h1 class="home__title">
      Hola {{ name }}
    </h1>
    <section class="home">
      <CardComponent title="Vue 3 microfront component" />
      <div class="home__wrapper">
        <h2>Host using microfront store</h2>
        <div
          v-for="user in userList"
          :key="user.name"
          class="home__list"
        >
          <p>{{ user.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/* Imports */
import { useProfileStore } from '@/store/profile'
import { useUserStore } from 'vue3microfront/UserStore'

const CardComponent = defineAsyncComponent(() => import('vue3microfront/CardComponent' as any))

/* Data */
const { t } = useI18n()
const profileStore = useProfileStore()
const userMicrofrontStore = useUserStore()

const userList = computed(() => userMicrofrontStore.userList)
const name = computed(() => profileStore.name)

/* Life Cycle Hooks */
profileStore.requestUserName(1)
</script>
<style lang="scss" src="./HomeContainer.scss"></style>