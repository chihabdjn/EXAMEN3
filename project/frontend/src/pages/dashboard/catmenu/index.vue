<template>
    <v-container>
        <v-alert v-if="message">
            {{ message }}
        </v-alert>
        <v-dialog v-model="menu">
            <v-card>
                <v-card-title> Créer un menu </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Nom de la catégorie" v-model="catmenu.name"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="menu = !menu"> Annuler </v-btn>
                    <v-btn @click="createCategorie(catmenu)"> Créer </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card>
            <v-card-title class="tw-flex">
                <div>Catégorie du menus</div>
                <v-btn @click="menu = !menu">Créer une catégorie</v-btn>
            </v-card-title>
            <v-card-text>
                <v-data-table-server :headers="headers" :items-length="categories.length" :items="categories" :loading="loading">
                    <template #item.actions="{ item }">
                        <v-icon class="me-2" size="small" @click="dialog = !dialog"> mdi-pencil </v-icon>
                        <v-icon size="small" @click="fireCatMenu(item.catMenu_id)"> mdi-delete </v-icon>
                        <v-dialog v-model="dialog">
                            <v-card>
                                <v-card-title> Edit </v-card-title>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field label="Nom de la catégorie" v-model="item.name"></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn @click="update(item.catMenu_id, item)"> Mettre à jour </v-btn>
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
import { findAllCatMenu, deleteCatMenu, updateCatMenu, createCatMenu } from '@/services/catmenu.service';
export default {
    data() {
        return {
            loading: false,
            dialog: false,
            menu: false,
            message: null,
            catmenu: {
                name: ''
            },
            categories: [],
            headers: [
                { text: 'Id', value: 'catMenu_id' },
                { text: 'Nom', value: 'name' },
                { text: 'Actions', value: 'actions', sortable: false }
            ]
        };
    },
    mounted() {
        this.getAllCategorie();
    },
    methods: {
        async fireCatMenu(id) {
            var response = await deleteCatMenu(id);
            this.message = response.message;
            this.getAllCategorie();
        },

        async update(id, catmenu) {
            var response = await updateCatMenu(id, catmenu);
            this.message = response.message;
            this.dialog = false;
            this.getAllMenu();
        },

        async createCategorie(catmenu) {
            var response = await createCatMenu(catmenu);
            this.message = response.message;
            this.menu = false;
            this.getAllCategorie();
        },

        async getAllCategorie() {
            var response = await findAllCatMenu();
            this.categories = response.data;
            console.log(response);
        }
    }
};
</script>
