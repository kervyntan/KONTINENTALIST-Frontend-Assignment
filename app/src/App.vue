<script lang="ts" setup>
import { ref } from 'vue';

const isDrawerOpen: Ref<boolean> = ref(false) 
</script>

<template>
  <VApp>
    <VAppBar :elevation="2" color="primary" scroll-behaviour="elevate" app>
      <VAppBarNavIcon @click.stop="isDrawerOpen = !isDrawerOpen"></VAppBarNavIcon>
      <VAppBarTitle> Assignment Home </VAppBarTitle>
    </VAppBar>
    <VNavigationDrawer v-model="isDrawerOpen" left app>
      <VListItem>
        <VListItemTitle> My Assignment </VListItemTitle>
        <VListItemSubtitle> Done using Vue & Vuetify 3 </VListItemSubtitle>
      </VListItem>
      <VDivider></VDivider>
      <VListItem to="/" exact>
        <VListItemTitle>
          <VIcon>
            mdi-view-dashboard
          </VIcon>
          Stories
        </VListItemTitle>
      </VListItem>
    </VNavigationDrawer>
    <v-main>
      <router-view />
    </v-main>
  </VApp>
</template>