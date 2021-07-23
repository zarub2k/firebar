import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
} from '@firebase/auth';

export default {
  async signupWithEmail(user) {
    console.log('AuthService.signupWithEmail()');
    await createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((credential) => {
      console.log(credential.user);
    })
    .catch((error) => {
      console.error(error);
    })
  }
};