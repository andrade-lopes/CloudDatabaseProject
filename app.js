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