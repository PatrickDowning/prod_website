<template>
  <v-app>
    <v-tabs>
      <v-tab to ="/">Home</v-tab>
      <v-tab>Notes</v-tab>
      <v-spacer></v-spacer>
      <v-tab to ="Signup">Signup</v-tab>
      <v-tab to ="Login">Login</v-tab>
    </v-tabs>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
