<template>
    <v-container class="tw-h-screen">
        <v-card class="tw-mt-28 tw-mx-auto pa-10" height="" width="50%">
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="user.email" label="Email" required></v-text-field>
                    <v-text-field v-model="user.password" label="Password" required type="password"></v-text-field>
                    <v-btn color="primary" @click="login">Login</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import router from '@/router';
import { loginUser } from '@/services/user.service';
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            loginUser(this.user)
                .then(async (response) => {
                    console.log(response.data.user);
                    localStorage.setItem('user', response.data.user.name + ' ' + response.data.user.prenom);
                    localStorage.setItem('user_id', response.data.user.user_id);
                    router.push('dashboard');
                    router.go();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
};
</script>
