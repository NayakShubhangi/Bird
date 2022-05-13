const firebaseConfig = {
      apiKey: "AIzaSyCxvklg14Rdx-iRGlABrXBxdFu43ARncew",
      authDomain: "birds-are-cool.firebaseapp.com",
      databaseURL: "https://birds-are-cool-default-rtdb.firebaseio.com",
      projectId: "birds-are-cool",
      storageBucket: "birds-are-cool.appspot.com",
      messagingSenderId: "795168157990",
      appId: "1:795168157990:web:8056d6e79cde77f82d51e7"};      
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function AddRoom()
{
      Room_Name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_Name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name", Room_Name);
      window.location="bird_page.html";
}
function getData()
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name: ", Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
});
});
}
getData()
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "bird_page.html";
}
function Logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}