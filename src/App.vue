<template>
  <p>Current user: {{ email }}</p>
  <button @click="onSignup">Signup</button>
  <button @click="onSignin">Signin</button>
</template>

<script>
import { ref } from 'vue';
import { auth } from './services/firebase';
import { onAuthStateChanged } from "firebase/auth";

import AuthService from './services/AuthService';

export default {
  setup() {
    let email = ref('')
    onAuthStateChanged(auth, (user) => {
      console.log('User auth changed');
      email.value = user.email;
    });

    const user = {
      email: 'tham@gmail.com',
      password: 'Tham#123'
    };

    AuthService.currentUser()
    .then((user) => {
      email.value = user.email;
    });

    const onSignup = () => {
      AuthService.signUpWithEmail(user);
    };

    const onSignin = () => {
      AuthService.signInWithEmail(user);
    }

    return {
      email,
      onSignup,
      onSignin
    }
  },
}
</script>