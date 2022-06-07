<template>
    <div>
        <div class="container" v-if="users.length != 0">
        <h1>Usuarios cargados en MockApi</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in users" :key="item.id">
                        <td>{{i}}</td>
                        <td>{{item.username}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                        <td>{{item.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h1>No hay usuarios cargados</h1>
        </div>
        <div class="row">
            <router-link class="btn btn-danger" to="/">Volver</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    mounted() {
        this.getUsersFromAPI();
    },
    computed: {
        ...mapState(['users']),
        ...mapGetters(['getUsers']),
    },
    methods: {
        ...mapActions(['getUsersFromAPI']),
    }
}

</script>

<style scoped>
    .table{
        font-weight: bold;
    }

    .table > thead{
        background-color: #CB88B6;
    }

    .table > tbody{
        background-color: #B6CB88;
    }

    .container {
        margin-top: 20px;
    }
</style>