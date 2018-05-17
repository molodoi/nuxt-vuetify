<template>
    <v-dialog v-model="dialog" persistent max-width="500px" @click="setSigninDialog(false)">                
        <v-card>
            <v-form @submit.prevent="login">
                <v-card-title>
                    <span class="headline">Connexion</span>
                    <v-alert v-if="alert" :type="alert.type" value="true">{{alert.message}}</v-alert>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>                
                            <v-flex xs12>
                                <v-text-field label="Email" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Password" type="password" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>            
                <v-card-actions> 
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="blue darken-1" flat @click="setSigninDialog(false)">Se connecter</v-btn>
                    <v-btn color="blue darken-1" flat @click="setSigninDialog(false)">Fermer</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    middleware: ['auth'],
    props: {
        dialog: {
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
        email: 'morgan.carles@clc.fr',
        password: 'test',
        alert: null,
        loading: false
        }
    },
    methods: {
        setSigninDialog: function(value) {
            this.$emit('setSigninDialog', value)
        },
        submit(){
            this.alert = null
            this.loading = true
                
        },
        async login() {
            try {
                this.$toast.show('Logging in...', {icon: "fingerprint"});
                await this.$auth.loginWith('local', {
                    data: {
                        "email": this.email,
                        "password": this.password
                    }
                }).catch(e => {
                    this.$toast.error('Failed Logging In', {icon: "error_outline"});
                });
                if (this.$auth.loggedIn) {
                    this.$toast.success('Successfully Logged In', {icon: "done"});
                }
            } catch (e) {   
                console.log('la')
                this.$toast.error('Username or Password wrong', {icon: "error"});
            }
        },
        check(){
            console.log(this.$auth.loggedIn)
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