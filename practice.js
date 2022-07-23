const firebaseConfig = {
  apiKey: "AIzaSyAxTaa1S0YnCCbWc9yySekQ44J-zi5zkw0",
  authDomain: "kwitter-cb89f.firebaseapp.com",
  databaseURL: "https://kwitter-cb89f-default-rtdb.firebaseio.com",
  projectId: "kwitter-cb89f",
  storageBucket: "kwitter-cb89f.appspot.com",
  messagingSenderId: "171222932995",
  appId: "1:171222932995:web:c69f9f12bd46890bb5f836",
  measurementId: "G-MVZ1V8B0TF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;

  
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


