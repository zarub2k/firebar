import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';

export default {
  async currentUser() {
    console.log('AuthService.currentUser()')
    const currentUser = auth.currentUser;
    console.log(currentUser);

    return currentUser;
  },
  async signUpWithEmail(user) {
    console.log('AuthService.signUpWithEmail()');
    await createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((credential) => {
      console.log(credential.user);
    })
    .catch((error) => {
      console.error(error);
    })
  },
  async signInWithEmail(user) {
    console.log('AuthService.signInWithEmail');
    await signInWithEmailAndPassword(auth, user.email, user.password)
    .then((credential) => {
      console.log('Auth successful');
    })
  }
};