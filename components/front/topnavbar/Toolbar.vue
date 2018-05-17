<template>
    <v-toolbar fixed flat scroll-off-screen>
        <v-icon>public</v-icon>
        <v-toolbar-title>Travelify</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-menu offset-y open-on-hover>
            <v-btn slot="activator" flat hidden-sm-and-down>Devenir Hôte</v-btn>
            <v-card>
            <v-list>
                <v-list-tile  @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Publier un logement
                        </v-list-tile-title>
                        <v-list-tile-sub-title>Gagnez jusqu'à 1 763€ par mois en hébergeant des voyageurs à Paris.</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-icon large color="green darken-2">business</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Créer une expérience</v-list-tile-title>
                            <v-list-tile-sub-title>Gagnez jusqu'à 400€ par mois en proposant des activités.</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon large color="red darken-2">star</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-card>
            
            </v-menu>
            <v-btn flat>Aide</v-btn>
            <v-btn flat>Inscription</v-btn>
            <v-btn flat @click="openSigninDialog">Connexion</v-btn>            
        </v-toolbar-items>
        <SigninDialog :dialog="dialog" v-on:closeSigninDialog="closeSigninDialog" />
    </v-toolbar>
</template>

<script>
import SigninDialog from '~/components/front/form/SigninDialog.vue'
export default {
    components: {
        SigninDialog
    },
    data() {
        return {
            drawer: null,
            dialog: false             
        }
    },
    methods: {
        openSigninDialog: function() {
            this.dialog = true
        },
        closeSigninDialog: function() {
            this.dialog = false
        },
    }
}  
</script>
<style scoped>

</style>