import auth from "@react-native-firebase/auth";

interface IBody {
  email: string;
  password: string;
}

export function SignUp(body: IBody) {
  auth()
    .createUserWithEmailAndPassword(body.email, body.password)
    .then((userCredential) => {
      console.log("user", userCredential);
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("Email ja existe.");
      }
      if (error.code === "auth/invalid-email") {
        console.log("Email invalido.");
      }
    });
}

export function SignIn(body: IBody) {
  auth()
    .signInWithEmailAndPassword(body.email, body.password)
    .then(() => console.log("logged"))
    .catch((error) => console.log(error));
}

export function isAuthenticated() {
  const unsubscribe = auth().onAuthStateChanged((_user) => {
    // setUser(_user);

    return unsubscribe;
  });
}

export function SignOut() {
  auth().signOut();
}
