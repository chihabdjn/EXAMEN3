<template>
  <v-container>
      <v-alert v-if="message">
          {{ message }}
      </v-alert>
      <v-dialog v-model="menu">
        <v-card>
          <v-card-title>
            Créer un Orders
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-select v-model="order.cmd_id" :items="cmds" item-title="cmd_id" label="Commandes"></v-select>
              <v-select v-model="order.menu_id" :items="menus" item-title="menu_id" label="Menus"></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="createOrder(order)">
              Créer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card>
          <v-card-title><div>
            Orders
          </div> <v-btn @click="menu = !menu">Créer un Order</v-btn></v-card-title>
          <v-card-text>
              <v-data-table-server :headers="headers" :items-length="orders.length" :items="orders" :loading="loading">
                  <template #item.actions="{ item }">
                      <v-icon class="me-2" size="small" @click="dialog = !dialog"> mdi-pencil </v-icon>
                      <v-icon size="small" @click="fireOrder(item.order_id)"> mdi-delete </v-icon>
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
import { findAllOrder, deleteOrder, updateOrder, createOrder } from '@/services/order.service';
import { findAllMenu } from '@/services/menu.service'
import { findAllCmd } from '@/services/cmd.service';
export default {
  data() {
      return {
          loading: false,
          dialog: false,
          menu: false,
          message: null,
          order: {
            cmd_id: null,
            menu_id: null,
          },
          menus: [],
          cmds: [],
          orders: [],
          headers: [
              { text: 'Commande', value: 'cmd_id' },
              { text: 'Menu', value: 'menu_id' },
              { text: 'Actions', value: 'actions', sortable: false }
          ]
      };
  },
  mounted() {
      this.getMenu();
      this.getCmd();
      this.getAllOrder();
  },
  methods: {
      async fireOrder(id) {
          var response = await deleteOrder(id);
          this.message = response.message;
          this.getAllUser();
      },

      async update(id, order) {
          var response = await updateMenu(id, order);
          this.message = response.message;
          this.dialog = false;
          this.getAllOrder();
      },

      async createOrder(order) {
          var response = await createMenu(order);
          this.message = response.message;
          this.menu = false;
          this.getAllOrder();
      },

      async getMenu() {
          var response = await findAllMenu();
          this.menus = response.data;
          console.log(response);
      },

      async getAllOrder()
      {
          var response = await findAllOrder();
          this.orders = response.data;
          console.log(response);
      },

      async getCmd()
      {
          var response = await findAllCmd();
          this.cmds = response.data;
          console.log(response);
      }
  }
};
</script>
