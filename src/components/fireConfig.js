import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERURL,
  appId: process.env.REACT_APP_APP_ID,
};

class Fire {
  constructor() {
    // Initialize firebase
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async signup(username, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: username,
    });
  }

  logout() {
    return this.auth.signOut();
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUser() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  note(content) {
    return this.db.collection("note").add({
      content,
    });
  }

  deleteNote(content) {
    return this.db.collection("note").delete({
      content,
    });
  }

  /*async getNote() {
    const note = await this.db
      .collection("note")
      .doc("content")
      .get();
    return note.get("content");
  }*/
}

export default new Fire();
