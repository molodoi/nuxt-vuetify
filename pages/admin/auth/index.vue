<template>
    <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">            
            <v-card-text>
                <v-form v-model="valid">
                <v-text-field prepend-icon="person" v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
                <v-text-field prepend-icon="email" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field prepend-icon="lock"  v-model="password" :rules="passwordRules" label="Password" id="password" type="password"></v-text-field>
            </v-form>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">S'enregistrer</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
  export default {
    layout:'admin',
    auth: false,
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 8 || 'Password must be less than 8 characters'
      ],
    })
  }
</script>