var firebaseConfig = {
      apiKey: "AIzaSyDa-dXIijMLqeeufi3bUpb6Mo-5ppK1vSg",
      authDomain: "kwitter-96785.firebaseapp.com",
      databaseURL: "https://kwitter-96785-default-rtdb.firebaseio.com",
      projectId: "kwitter-96785",
      storageBucket: "kwitter-96785.appspot.com",
      messagingSenderId: "813187779577",
      appId: "1:813187779577:web:21cad06eb054ec28704b28",
      measurementId: "G-ZB3YQKKDBT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    //   firebase.analytics(); 
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value 
   
   firebase.database().ref("/").child(room_name).update({

   });

   localStorage.setItem("room_name" , room_name);
   
   window.location = "kwitter_page.html"
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html"; 
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
