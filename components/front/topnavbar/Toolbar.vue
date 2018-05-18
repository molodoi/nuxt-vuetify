<template>
    <v-toolbar fixed flat scroll-off-screen>
        <v-icon large color="pink">star</v-icon>
        <v-toolbar-title>Travelify</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-menu offset-y open-on-hover>
            <v-btn slot="activator" flat>Devenir Hôte</v-btn>
            <v-card>
                <v-list>
                    <v-list-tile >
                        <v-list-tile-content>
                            <v-list-tile-title>Publier un logement</v-list-tile-title>
                            <v-list-tile-sub-title>Gagnez jusqu'à 1 763€ par mois en hébergeant des voyageurs à Paris.</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon large color="green darken-2">business</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-list-tile >
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
            <v-btn flat router nuxt href="/sejours">Aide</v-btn>
            <nuxt-link to="admin/auth" class="btn btn--flat" tag="button" v-if="!user">
                Inscription
            </nuxt-link>
            <v-btn flat v-if="!user" @click="setSigninDialog(true)">Connexion</v-btn> 
            <v-btn flat v-if="user" @click="logout()">{{ $auth.$state.loggedIn ? 'Logged In' : '' }}</v-btn>           
        </v-toolbar-items>
        <SigninDialog :dialog="dialog" v-on:setSigninDialog="setSigninDialog" />
    </v-toolbar>
</template>

<script>
import SigninDialog from '~/components/front/form/SigninDialogForm.vue'
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
    computed: {
        user () { 
            return (this.$store.state.auth || {}).user || null 
        }
    },
    methods: {
        setSigninDialog: function(value) {
            this.dialog = value
        },        
        logout() {
            this.$toast.show('Logging out...', {icon: "fingerprint"});
            this.$auth.logout()
        },
    }
}  
</script>
<style scoped>

</style>