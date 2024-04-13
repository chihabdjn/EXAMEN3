<template>
    <v-container>
        <v-alert v-if="message">
            {{ message }}
        </v-alert>
        <v-card>
            <v-card-title>Users</v-card-title>
            <v-card-text>
                <v-data-table-server :headers="headers" :items-length="users.length" :items="users" :loading="loading">
                    <template #item.actions="{ item }">
                        <v-icon class="me-2" size="small" @click="dialog = !dialog"> mdi-pencil </v-icon>
                        <v-icon size="small" @click="fireUser(item.user_id)"> mdi-delete </v-icon>
                        <v-dialog v-model="dialog">
                            <v-card>
                                <v-card-title> Deep </v-card-title>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field v-model="item.name"></v-text-field>
                                        <v-text-field v-model="item.prenom"></v-text-field>
                                        <v-text-field v-model="item.email" type="email"></v-text-field>
                                        <v-date-picker title="Date de naissance"></v-date-picker>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn @click="update(item.user_id, item)"> Mettre à jour </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                </v-data-table-server>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { findAllUsers, deleteUser, updateUser } from '@/services/user.service';
export default {
    data() {
        return {
            loading: false,
            dialog: false,
            message: null,
            users: [],
            headers: [
                { text: 'Nom', value: 'name' },
                { text: 'Prénom', value: 'prenom' },
                { text: 'Email', value: 'email' },
                { text: 'Actions', value: 'actions', sortable: false }
            ]
        };
    },
    mounted() {
        this.getAllUser();
    },
    methods: {
        async fireUser(id) {
            await deleteUser(id);
            console.log("Message");
            this.getAllUser();
        },

        async update(id, user) {
            var response = await updateUser(id, user);
            this.message = response.message;
            this.dialog = false;
            this.getAllUser();
        },

        async getAllUser() {
            var response = await findAllUsers();
            this.users = response.data;
            console.log(response);
        }
    }
};
</script>
