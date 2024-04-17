var ids = localStorage.getItem('ids') ? JSON.parse(localStorage.getItem('ids')) : [];
function login() {
    var id = parseInt(document.getElementById("id").value);
    if (ids.includes(id))
        alert("Already voted");
    else {
        ids.push(id);
        localStorage.setItem('ids', JSON.stringify(ids));
        window.location.href = "./vote.html";
    }
}
