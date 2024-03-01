<template>
  <header class="card">
    <div class="max-layout card__wrapper">
      <h2>{{ title || t('project.title') }}</h2>
      <div
        v-for="user in userList"
        :key="user.name"
        class="card__list"
      >
        <p>{{ user.name }}</p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
/* Imports */
import { useUserStore } from '@/store/user'

/* Props */
interface Props {
  title: string
}

/* Props */
withDefaults(defineProps<Props>(), {
  title: ''
})

/* Data */
const { t } = useI18n()
const userStore = useUserStore()
const userList = computed(() => userStore.userList)

/* Life Cycle Hooks */
userStore.requestUserList()
</script>
<style lang="scss" src="./CardComponent.scss"></style>
