<template>
    <div>
        <v-navigation-drawer fixed v-model="drawer" app>
            <v-list dense>
                <v-list-tile router nuxt href="/">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>contact_mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Contact</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
    </div>  
</template>
<script>
export default {
    data() {
        return {
           drawer: false 
        }
    }
}  
</script>
<style scoped>
.title {
  text-decoration: none !important;
}
.title:visited{
  color: white;
}
</style>