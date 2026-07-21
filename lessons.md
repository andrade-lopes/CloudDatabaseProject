======================== Lesson 1 ========================

#### firebase-config.js ####
const firebaseConfig = {
  apiKey: "AIzaSyDbkkhwoJGBfcxNQPZQPDTVMOWQyxdnCl4",
  authDomain: "volunteerprojectcloud.firebaseapp.com",
  projectId: "volunteerprojectcloud",
  storageBucket: "volunteerprojectcloud.firebasestorage.app",
  messagingSenderId: "1048825279352",
  appId: "1:1048825279352:web:8984acf831c162d5828e8d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create Firestore reference
const db = firebase.firestore();
----------------------------------------------------------
#### index.html ####
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Database Project</title>
</head>

<body>
    <h1>Cloud Database project</h1>

    <input type="text" id="projectName" placeholder="Project Name">
    <button id="addBtn">Add Project</button>

    <h2>Projects</h2>
    <ul id="projectList"></ul>

    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

    <!-- Configuration -->
    <script src="firebase-config.js"></script>

    <!-- Application -->
    <script src="app.js"></script>
</body>

</html>
----------------------------------------------------------
#### app.js ####
const addBtn = document.getElementById("addBtn");
const projectName = document.getElementById("projectName");
const projectList = document.getElementById("projectList");

// Add a project to Firestore
addBtn.addEventListener("click", async () => {
  if (projectName.value.trim() === "") return;

  await db.collection("projects").add({
    name: projectName.value,
    createdAt: new Date()
  });

  projectName.value = "";
});

// Listen for changes in Firestore
db.collection("projects")
  .orderBy("createdAt")
  .onSnapshot((snapshot) => {
    projectList.innerHTML = "";

    snapshot.forEach((doc) => {
      const li = document.createElement("li");
      li.textContent = doc.data().name;
      projectList.appendChild(li);
    });
  });
----------------------------------------------------------
Run local server in the terminal:
cd ~/Documents/BYUI/cse310/VolunteerProjectsCloud
python3 -m http.server 5500
Local URL:
http://localhost:5500

==========================================================

======================== Lesson 2 ========================
########## Complete CRUD ##########
#### app.js ####
const addBtn = document.getElementById("addBtn");
const projectName = document.getElementById("projectName");
const projectList = document.getElementById("projectList");

// CREATE
addBtn.addEventListener("click", async () => {
  if (projectName.value.trim() === "") return;

  await db.collection("projects").add({
    name: projectName.value,
    createdAt: new Date()
  });

  projectName.value = "";
});

// READ
db.collection("projects")
  .orderBy("createdAt")
  .onSnapshot((snapshot) => {
    projectList.innerHTML = "";

    snapshot.forEach((doc) => {
      const data = doc.data();

      const li = document.createElement("li");
      li.style.marginBottom = "10px";

      const nameSpan = document.createElement("span");
      nameSpan.textContent = data.name + " ";

      // UPDATE button
      const updateBtn = document.createElement("button");
      updateBtn.textContent = "Update";
      updateBtn.style.marginRight = "5px";

      updateBtn.addEventListener("click", async () => {
        const newName = prompt("Enter a new project name:", data.name);

        if (newName && newName.trim() !== "") {
          await db.collection("projects").doc(doc.id).update({
            name: newName
          });
        }
      });

      // DELETE button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", async () => {
        const confirmed = confirm(`Delete project "${data.name}"?`);

        if (confirmed) {
          await db.collection("projects").doc(doc.id).delete();
        }
      });

      li.appendChild(nameSpan);
      li.appendChild(updateBtn);
      li.appendChild(deleteBtn);

      projectList.appendChild(li);
    });
  });
==========================================================
