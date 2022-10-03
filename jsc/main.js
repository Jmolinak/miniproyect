nav();
ban();
icon();
authGuard();
function nav() {
    $("#nav").load("nav.html");
}
ban();
function ban() {
    $("#banp").load("banner.html");
}
function icon(){
    $("#footerst").load("footerst.html");
}

function authGuard() {
    if (localStorage.getItem("login") != "user") {
        location.href = "login.html";
    }
}
