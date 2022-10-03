//validateLogin();
function validateLogin() {
    if (localStorage.getItem("login") == "user") {
       
        location.href = "index.html";
    }
}
function login(){
    // alert("funcion del login");
    localStorage.setItem("login","user");
    location.href="index.html";
}