<template>
    <v-dialog v-model="dialog" persistent max-width="500px" @click="closeSigninDialog()">                
        <v-card>
            <v-card-title>
            <span class="headline">Connexion</span>
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
            <v-btn color="blue darken-1" flat @click="closeSigninDialog()">Fermer</v-btn>
            <v-btn color="blue darken-1" flat @click="">Se connecter</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        dialog: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeSigninDialog: function() {
            this.$emit('closeSigninDialog')
        }
    }
}  
</script>
<style scoped>

</style>