logOut();
function logOut() {
    localStorage.removeItem("login");
    location.href = "login.html";
}