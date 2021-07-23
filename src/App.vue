<template>
  <button @click="onSignup">Signup</button>
</template>

<script>
import AuthService from './services/AuthService';

export default {
  setup() {
    const user = {
      email: 'tham@gmail.com',
      password: 'Tham#123'
    };

    const onSignup = () => {
      AuthService.signupWithEmail(user);
    };

    return {
      onSignup
    }
  },
}
</script>