function addUser() {
    user__name = document.getElementById("user__name").value;
    localStorage.setItem("user__name", user__name);
    window.location = "funchat_room.html";
}