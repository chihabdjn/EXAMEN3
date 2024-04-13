<template>
  <v-container>
      <v-alert v-if="message">
          {{ message }}
      </v-alert>
      <v-dialog v-model="menu">
        <v-card>
          <v-card-title>
            Créer une commande
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-select :items="restaurants" item-title="name" label="Restaurant"></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="menu = !menu">Annuler</v-btn>
            <v-btn @click="createCmd(cmd)">Créer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card>
          <v-card-title><div>
            Commandes
          </div> <v-btn @click="menu = !menu">Créer une commande</v-btn></v-card-title>
          <v-card-text>
              <v-data-table-server :headers="headers" :items-length="cmds.length" :items="cmds" :loading="loading">
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
import { findAllCmd, deleteCmd, updateCmd, createCmd } from '@/services/cmd.service';
import { findAllRestaurant } from '@/services/restaurant.service';
export default {
  data() {
      return {
          loading: false,
          dialog: false,
          menu: false,
          message: null,
          cmds: [],
          restaurants: [],
          headers: [
              { text: 'Nom', value: 'name' },
              { text: 'Status', value: 'status' },
              { text: 'Catégorie', value: 'catMenu_id' },
              { text: 'Actions', value: 'actions', sortable: false }
          ]
      };
  },
  mounted() {
      this.getAllCmd();
      this.getRestaurant();
  },
  methods: {
      async fireCmd(id) {
          var response = await deleteCmd(id);
          this.message = response.message;
          this.getAllUser();
      },

      async updateCmd(id, cmd) {
          var response = await updateCmd(id, cmd);
          this.message = response.message;
          this.dialog = false;
          this.getAllCmd();
      },

      async createCmd(menu) {
          var response = await createCmd(menu);
          this.message = response.message;
          this.menu = false;
          this.getAllCmd();
      },

      async getAllCmd() {
          var response = await findAllCmd();
          this.menus = response.data;
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
