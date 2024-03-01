<template>
  <header class="header header--public">
    <div class="max-layout header__wrapper">
      <div class="header__logo">
        <router-link :to="'/'">
          Logo
        </router-link>
        <h2>{{ title || t('project.title') }}</h2>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const { t } = useI18n()
interface Props {
  title: string
}

/* Props */
withDefaults(defineProps<Props>(), {
  title: ''
})

</script>
<style lang="scss" src="./HeaderComponent.scss"></style>
