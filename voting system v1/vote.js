var votes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : [0, 0, 0, 0, 0];
function vote() {
    if (document.getElementById("1").checked)
        votes[0] += 1;
    if (document.getElementById("2").checked)
        votes[1] += 1;
    if (document.getElementById("3").checked)
        votes[2] += 1;
    if (document.getElementById("4").checked)
        votes[3] += 1;
    if (document.getElementById("5").checked)
        votes[4] += 1;
    localStorage.setItem('votes', JSON.stringify(votes));
    window.location.href = "./user.html";
}
