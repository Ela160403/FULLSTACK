function showVotes() {
    var _a;
    var showVotes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : [0, 0, 0, 0, 0];
    var node = document.createElement("p");
    node.innerHTML = showVotes[0] + " " + showVotes[1] + " " + showVotes[2] + " " + showVotes[3] + " " + showVotes[4];
    (_a = document.getElementById("votes")) === null || _a === void 0 ? void 0 : _a.appendChild(node);
}
