<template>
    <v-container>
        <v-alert v-if="error">
            {{ error }}
        </v-alert>
        <v-card class="tw-mt-28 tw-mx-auto pa-10" height="" width="50%">
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="user.email" label="Email" required type="email"></v-text-field>
                    <v-text-field v-model="user.name" label="Nom" required></v-text-field>
                    <v-text-field v-model="user.prenom" label="Prenom" required></v-text-field>
                    <v-text-field v-model="user.telephone" label="Telephone" required type="tel"></v-text-field>
                    <v-date-picker v-model="user.naissance" title="Date de naissance"></v-date-picker>
                    <v-text-field v-model="user.password" label="Password" required type="password"></v-text-field>
                    <v-btn color="primary" @click="login">S'incrire</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { createUser } from '@/services/user.service.js';
export default {
    data() {
        return {
            error: null,
            user: {
                email: '',
                password: '',
                name: '',
                prenom: '',
                telephone: '',
                naissance: null,
            }
        };
    },
    methods: {
        login() {
            createUser(this.user)
                .then((response) => {
                    // console.log(response);
                    localStorage.setItem('user', response.data.user);
                    this.$router.push({ name: 'home' });
                })
                .catch((error) => {
                    // console.error(error.response.message);
                    this.error = error.response.message;
                });
        }
    }
};
</script>
