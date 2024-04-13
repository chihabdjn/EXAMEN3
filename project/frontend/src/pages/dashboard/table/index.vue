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
                        <v-text-field v-model="table.number" label="Numéro de la table" type="number"></v-text-field>
                        <v-text-field v-model="table.capacite" label="Capacité de la table" type="number"></v-text-field>
                        <v-select
                            v-model="table.restaurant_id"
                            :items="restaurants"
                            item-text="name"
                            label="Restaurant"
                        ></v-select>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="createRole(table)"> Créer </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card>
            <v-card-title
                ><div>Tables</div>
                <v-btn @click="menu = !menu">Ajouter une table</v-btn></v-card-title
            >
            <v-card-text>
                <v-data-table-server :headers="headers" :items-length="tables.length" :items="tables" :loading="loading">
                    <template #item.actions="{ item }">
                        <v-icon class="me-2" size="small" @click="dialog = !dialog"> mdi-pencil </v-icon>
                        <v-icon size="small" @click="fireRestaurant(item.place_id)"> mdi-delete </v-icon>
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
import { findAllRestaurant } from '@/services/restaurant.service';
import { createTable, deleteTable, findAllTable, updateTable } from '@/services/table.service';
export default {
    data() {
        return {
            loading: false,
            dialog: false,
            menu: false,
            message: null,
            table: {
                capacite: null,
                number: null,
                restaurant_id: null
            },
            tables: [],
            restaurants: [],
            headers: [
                { text: 'Id du restaurant', value: 'restaurant_id' },
                { text: 'Numero de la table', value: 'number' },
                { text: 'Capacité de la table', value: 'capacite' },
                { text: 'Actions', value: 'actions', sortable: false }
            ]
        };
    },
    mounted() {
        this.getAllTable();
        this.getAllRestaurant();
    },
    methods: {
        async fireTable(id) {
            var response = await deleteTable(id);
            this.message = response.message;
            this.getAllRole();
        },

        async update(id, menu) {
            var response = await updateTable(id, menu);
            this.message = response.message;
            this.dialog = false;
            this.getAllRole();
        },

        async createTable(menu) {
            var response = await createTable(menu);
            this.message = response.message;
            this.menu = false;
            this.getAllRole();
        },

        async getAllTable() {
            var response = await findAllTable();
            this.tables = response.data;
            console.log(this.tables);
        },

        async getAllRestaurant() {
            var response = await findAllRestaurant();
            this.restaurants = response.data;
            console.log(this.restaurants);
        }
    }
};
</script>
