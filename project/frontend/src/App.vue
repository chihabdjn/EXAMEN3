<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-nav-icon v-if="getUser() != null" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Restaurant app</v-toolbar-title>
            <v-spacer></v-spacer>
            <div>
                <div v-if="getUser() != null" class="tw-mr-10">
                    {{ getUser() }}
                </div>
                <div v-else>
                    <v-btn text to="/login">Login</v-btn>
                    <v-btn text to="/register">Register</v-btn>
                </div>
            </div>
        </v-app-bar>

        <v-navigation-drawer v-if="getUser() != null" v-model="drawer" theme="dark" permanent>
            <v-list color="transparent">
                <v-list-item href="/dashboard/users" prepend-icon="mdi-account" title="Utilisateurs"></v-list-item>
                <v-list-item href="/dashboard/menu" prepend-icon="mdi-silverware-fork-knife" title="Menus"></v-list-item>
                <v-list-item href="/dashboard/restaurant" prepend-icon="mdi-silverware-fork-knife" title="Restaurant"></v-list-item>
                <v-list-item href="/dashboard/reviews" prepend-icon="mdi-message-draw" title="Avis client"></v-list-item>
                <v-list-item href="/dashboard/roles" prepend-icon="mdi-arrange-bring-forward" title="Rôles"></v-list-item>
                <v-list-item href="/dashboard/table" prepend-icon="mdi-table" title="Tables"></v-list-item>
                <v-list-item href="/dashboard/orders" prepend-icon="mdi-orderaccount-alert" title="Orders"></v-list-item>
                <v-list-item href="/dashboard/catmenu" prepend-icon="mdi-book-variant" title="Catégorie du menu"></v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block @click="logout()"> Logout </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup>
import router from './router';

const drawer = ref(false);

const logout = () => {
    localStorage.removeItem('user');
    router.go();
    router.push('/login');
};

const getUser = () => {
    var user = localStorage.getItem('user');
    return user;
};
</script>
