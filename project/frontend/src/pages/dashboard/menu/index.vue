<template>
    <v-container>
        <v-alert v-if="message">
            {{ message }}
        </v-alert>
        <v-dialog v-model="menu">
          <v-card>
            <v-card-title>
              Créer un menu
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field v-model="thmenu.name" label="Nom du menu"></v-text-field>
                <v-text-field v-model="thmenu.price" label="Prix du menu"></v-text-field>
                <v-select v-model="thmenu.restaurant_id" :items="restaurants" item-title="name" label="Restaurant"></v-select>
                <v-select v-model="thmenu.catMenu_id" :items="categories" item-title="name" label="Catégorie"></v-select>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="createMenu(thmenu)">
                Créer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-card>
            <v-card-title><div>
              Menus
            </div> <v-btn @click="menu = !menu">Créer un menu</v-btn></v-card-title>
            <v-card-text>
                <v-data-table-server :headers="headers" :items-length="menus.length" :items="menus" :loading="loading">
                    <template #item.actions="{ item }">
                        <v-icon class="me-2" size="small" @click="dialog = !dialog"> mdi-pencil </v-icon>
                        <v-icon size="small" @click="fireMenu(item.menu_id)"> mdi-delete </v-icon>
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
import { findAllMenu, deleteMenu, updateMenu, createMenu } from '@/services/menu.service';
import { findAllCatMenu } from '@/services/catmenu.service'
import { findAllRestaurant } from '@/services/restaurant.service';
export default {
    data() {
        return {
            loading: false,
            dialog: false,
            menu: false,
            thmenu: {
              name: "",
              price: "",
              restaurant_id: null,
              catMenu_id: null,
            },
            message: null,
            menus: [],
            categories: [],
            restaurants: [],
            headers: [
                { text: 'Nom', value: 'name' },
                { text: 'Prix', value: 'price' },
                { text: 'Catégorie', value: 'catMenu_id' },
                { text: 'Actions', value: 'actions', sortable: false }
            ]
        };
    },
    mounted() {
        this.getAllMenu();
        this.getCategorie();
        this.getRestaurant();
    },
    methods: {
        async fireMenu(id) {
            var response = await deleteMenu(id);
            this.message = response.message;
            this.getAllUser();
        },

        async update(id, menu) {
            var response = await updateMenu(id, menu);
            this.message = response.message;
            this.dialog = false;
            this.getAllMenu();
        },

        async createMenu(menu) {
            var response = await createMenu(menu);
            this.message = response.message;
            this.menu = false;
            this.getAllMenu();
        },

        async getAllMenu() {
            var response = await findAllMenu();
            this.menus = response.data;
            console.log(response);
        },

        async getCategorie()
        {
            var response = await findAllCatMenu();
            this.categories = response.data;
            console.log(response);
        },

        async getRestaurant()
        {
            var response = await findAllRestaurant();
            this.restaurants = response.data;
            console.log(response);
        }
    }
};
</script>
