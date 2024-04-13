<template>
    <v-container>
        <v-alert v-if="message">
            {{ message }}
        </v-alert>
        <v-dialog v-model="menu">
            <v-card>
                <v-card-title> Créer un role </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model="role.name" label="Nom du role"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="createRole(role.name)"> Ajouter une table </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card>
            <v-card-title
                ><div>Rôles</div>
                <v-btn @click="menu = !menu">Créer un role</v-btn></v-card-title
            >
            <v-card-text>
                <v-data-table-server :headers="headers" :items-length="roles.length" :items="roles" :loading="loading">
                    <template #item.actions="{ item }">
                        <v-icon class="me-2" size="small" @click="dialog = !dialog"> mdi-pencil </v-icon>
                        <v-icon size="small" @click="fireRole(item.role_id)"> mdi-delete </v-icon>
                        <v-dialog v-model="dialog">
                            <v-card>
                                <v-card-title> Edit </v-card-title>
                                <v-card-text> </v-card-text>
                                <v-card-actions>
                                    <v-btn> Mettre à jour </v-btn>
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
import { createRole, findAllRole, updateRole, deleteRole } from '@/services/role.service';
export default {
    data() {
        return {
            loading: false,
            dialog: false,
            menu: false,
            message: null,
            role: {
              name: '',
            },
            roles: [],
            headers: [
                { text: 'Nom', value: 'name' },
                { text: 'Actions', value: 'actions', sortable: false }
            ]
        };
    },
    mounted() {
        this.getAllRole();
    },
    methods: {
        async fireRole(id) {
            var response = await deleteRole(id);
            this.message = response.message;
            this.getAllRole();
        },

        async update(id, role) {
            var response = await updateRole(id, role);
            this.message = response.message;
            this.dialog = false;
            this.getAllRole();
        },

        async createRole(role) {
            var response = await createRole(role);
            this.message = response.message;
            this.menu = false;
            this.getAllRole();
        },

        async getAllRole() {
            var response = await findAllRole();
            this.roles = response.data;
            console.log(this.roles);
        }
    }
};
</script>
