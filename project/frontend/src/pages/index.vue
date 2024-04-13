<template> 
    <div v-if="getUser === undefined" class="tw-h-screen tw-items-center tw-flex tw-flex-col tw-justify-center">
        <v-card width="500px" class="tw-h-max tw-flex tw-flex-col tw-justify-center">
            <v-card-title> Accéder au dashboard </v-card-title>
            <v-card-text>
                Vous êtes connecté en tant que {{ getUser() }}. Vous pouvez accéder à votre tableau de bord pour gérer vos commandes,
                restaurants et les différents utilisateur sur la plateforme.
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
const getUser = () => {
    return localStorage.getItem('user');
};
</script>
