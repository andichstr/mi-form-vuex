<template>
    <div class="container">
        <router-link class="btn btn-info" to="/users">Ver usuarios cargados</router-link>
        <form class="form" action="">
            <div class="row">
                <div class="col-3">
                    <label for="username">Nombre de usuario: </label>
                </div>
                <div class="col-9">
                    <input type="text" id="username" placeholder="Tu nombre de usuario" class="form-control" @keyup="validateUsername" v-model="usuario.username"/>
                </div>
            </div>
            <div class="row" v-if='validUsername != ""'>
                <p class="errorForm">{{ validUsername }}</p>
            </div>
            <div class="row">
                <div class="col-3">
                    <label for="name">Nombre y apellido: </label>
                </div>
                <div class="col-9">
                    <input type="text" id="name" placeholder="Tu nombre y apellido" class="form-control" @keyup="validateName" v-model="usuario.name"/>
                </div>
            </div>
            <div class="row" v-if='validName != ""'>
                <p class="errorForm">{{ validName }}</p>
            </div>
            <div class="row">
                <div class="col-3">
                    <label for="username">Mail: </label>
                </div>
                <div class="col-9">
                    <input type="text" id="email" placeholder="Tu email" class="form-control" @keyup="validateEmail" v-model="usuario.email"/>
                </div>
            </div>
            <div class="row" v-if='validMail != ""'>
                <p class="errorForm">{{ validMail }}</p>
            </div>
            <div class="row">
                <div class="col-3">
                    <label for="username">Edad: </label>
                </div>
                <div class="col-9">
                    <input type="number" id="edad" placeholder="Tu edad" class="form-control" @keyup="validateAge" v-model="usuario.age"/>
                </div>
            </div>
            <div class="row" v-if='validAge != ""'>
                <p class="errorForm">{{ validAge }}</p>
            </div>
            <div class="row">
                <div class="col-3">
                    <label for="password">Contraseña: </label>
                </div>
                <div class="col-9">
                    <input type="password" id="password" placeholder="Tu contraseña" class="form-control" @keyup="validatePassword" v-model="usuario.password"/>
                </div>
            </div>
            <div class="row" v-if='validPassword != ""'>
                <p class="errorForm">{{ validPassword }}</p>
            </div>
            <div class="row">
                <input type="button" class="btn btn-agregar" value="Agregar" @click="agregarUsuario"/>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            usuario: {
                username: "",
                name: "",
                password: "",
                email: "",
                age: "",
            },
            validUsername: "",
            validName: "",
            validPassword: "",
            validMail: "",
            validAge: "",
        }
    },
    methods: {
        ...mapActions(['addUser']),
        agregarUsuario() {
            if (this.checkForm()){
                this.addUser(this.usuario);
                this.usuario.username = "";
                this.usuario.name = "";
                this.usuario.password = "";
                this.usuario.email = "";
                this.usuario.age = "";
            } else {
                alert("Por favor, corrija los errores del formulario y vuelva a intentarlo");
            }
        },
        checkForm () {
            return (this.validateUsername() && this.validateName() && this.validateEmail() && this.validateAge() && this.validatePassword())
            },
        validateUsername(){
            let reg_ex_username = /[a-zA-Z]{4,}/g;
            if (reg_ex_username.test(this.usuario.username)){
                this.validUsername = "";
                return true;
            } else {
                this.validUsername = "Su nombre de usuario debe contener al menos 4 caracteres";
                return false;
            }
        },
        validateName(){
            let reg_ex_nombre = /[a-zA-Z]{2,}\s[a-zA-Z]{2,}/g;
            if (reg_ex_nombre.test(this.usuario.name)){
                this.validName = "";
                return true;
            } else {
                this.validName = "Debe escribir su nombre y apellido, y deben contener al menos dos letras cada uno.";
                return false;
            }
        },
        validateEmail(){
            let reg_ex_mail = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
            if (reg_ex_mail.test(this.usuario.email)){
                this.validMail = "";
                return true;
            } else {
                this.validMail = "Mail inválido";
                return false;
            }
        },
        validateAge(){
            if (this.usuario.age >= 18 && this.usuario.age <= 100){
                this.validAge = "";
                return true;
            } else {
                this.validAge = "Debe ingresar una edad entre 18 y 100 años.";
                return false;
            }
        },
        validatePassword(){
            let reg_ex_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
            if (reg_ex_password.test(this.usuario.password)){
                this.validPassword = "";
                return true;
            } else {
                this.validPassword = "La contraseña debe contener al menos 8 caracteres, una mayúscula, un caracter especial y un número."
                return false;
            }
        }
    }
}
</script>

<style scoped>

    input{
        width: 100%;
    }

    .col-3{
        text-align: right;
    }

    .form{
        border: 1px solid #88B6CB;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .errorForm{
        color: red;
        font-size: small;
    }

    .btn-agregar{
        background-color: #88B6CB;
    }

</style>