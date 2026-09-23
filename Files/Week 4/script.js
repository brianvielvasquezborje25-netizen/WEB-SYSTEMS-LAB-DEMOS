function updateTitle() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("heading").innerText
= `Current Time: ${timeString}`;
}
setInterval(updateTitle, 1000);
let themeButton = document.getElementById("themeToggle");
// Function to toggle dark mode
themeButton.addEventListener("click", function() {
 document.body.classList.toggle("dark-mode");
 localStorage.setItem("theme",
document.body.classList.contains("dark-mode") ? "dark" : "light");
});
 
// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark")
{
 document.body.classList.add("dark-mode");
}
document.getElementById("addTask").addEventListener("click",
function() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText.trim() === "")
return; 
    let newTask = document.createElement("li");
    newTask.innerHTML = `${taskText}
<button class="removeTask">Remove</button>`;
 
    document.getElementById("taskList").appendChild(newTask);
    document.getElementById("taskInput").value
= "";
});
 
// Remove Task
document.getElementById("taskList").addEventListener("click",
function(event) {
    if (event.target.classList.contains("removeTask"))
{
        event.target.parentElement.remove();
    }
});
document.getElementById("contactForm").addEventListener("submit",
function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let modal = document.getElementById("modal");
    let modalMessage = document.getElementById("modalMessage");
 
    if (!email.includes("@"))
{
        modalMessage.innerText
= "Invalid email format!";
    } else {
        modalMessage.innerText
= "Form Submitted Successfully!";
    }
    modal.style.display = "block";
});
 
// Close Modal
document.getElementById("closeModal").addEventListener("click",
function() {
    document.getElementById("modal").style.display
= "none";
});
// Change background color based on key presses
document.addEventListener("keydown", function (event) {
    // Convert key press to lowercase so it works for 'b' and 'B'
    let key = event.key.toLowerCase();

    if (key === "b") {
        document.body.style.backgroundColor = "blue";
    } else if (key === "r") {
        document.body.style.backgroundColor = "red";
    } else if (key === "g") {
        document.body.style.backgroundColor = "green";
    } else if (key === "escape") {
        // Pressing Escape resets it back to normal
        document.body.style.backgroundColor = "";
    }
});