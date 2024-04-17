function showVotes(){
    const showVotes: number[] = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')!) : [0, 0, 0, 0, 0];
    const node=document.createElement("p");
    node.innerHTML=showVotes[0]+" "+showVotes[1]+" "+showVotes[2]+" "+showVotes[3]+" "+showVotes[4];
    document.getElementById("votes")?.appendChild(node);
}