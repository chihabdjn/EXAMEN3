<template>
  <v-container>
      <v-alert v-if="message">
          {{ message }}
      </v-alert>
      <v-dialog v-model="menu">
        <v-card>
          <v-card-title>
            Créer un restaurant
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="restaurant.name" label="Nom du restaurant"></v-text-field>
              <v-text-field v-model="restaurant.adresse" label="Adresse du restaurant"></v-text-field>
              <v-text-field v-model="restaurant.telephone" label="Telephone du restaurant"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="createRestaurant(restaurant)">
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
              <v-data-table-server :headers="headers" :items-length="restaurants.length" :items="restaurants" :loading="loading">
                  <template #item.actions="{ item }">
                      <v-icon class="me-2" size="small" @click="dialog = !dialog"> mdi-pencil </v-icon>
                      <v-icon size="small" @click="fireRestaurant(item.restaurant_id)"> mdi-delete </v-icon>
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
import { findAllRestaurant, deleteRestaurant, updateRestaurant, createRestaurant } from '@/services/restaurant.service';
export default {
  data() {
      return {
          loading: false,
          dialog: false,
          menu: false,
          message: null,
          restaurant: {
            name: "",
            adresse: "",
            telephone: "",
          },
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
      this.getAllRestaurant();
  },
  methods: {
      async fireRestaurant(id) {
          var response = await deleteRestaurant(id);
          this.message = response.message;
          this.getAllRestaurant();
      },

      async update(id, menu) {
          var response = await updateRestaurant(id, menu);
          this.message = response.message;
          this.dialog = false;
          this.getAllRestaurant();
      },

      async createRestaurant(menu) {
          var response = await createRestaurant(menu);
          this.message = response.message;
          this.menu = false;
          this.getAllRestaurant();
      },

      async getAllRestaurant()
      {
          var response = await findAllRestaurant();
          this.restaurants = response.data;
          console.log(response);
      }
  }
};
</script>
