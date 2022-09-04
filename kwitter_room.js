const firebaseConfig = {
  apiKey: "AIzaSyDJpSUp4Rn9tTDreU-V4szm-nl-OfSgxqM",
  authDomain: "chat-app--project-e245b.firebaseapp.com",
  databaseURL: "https://chat-app--project-e245b-default-rtdb.firebaseio.com",
  projectId: "chat-app--project-e245b",
  storageBucket: "chat-app--project-e245b.appspot.com",
  messagingSenderId: "688931211088",
  appId: "1:688931211088:web:6569cfc670fd4696294e55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Your web app's Firebase configuration


room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
  
//End code
  } });  }); }
getData();