const votes: number[] = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')!) : [0, 0, 0, 0, 0];
function vote()
{
    if((document.getElementById("1") as HTMLInputElement).checked)
        votes[0]+=1;
    if((document.getElementById("2") as HTMLInputElement).checked)
        votes[1]+=1;
    if((document.getElementById("3") as HTMLInputElement).checked)
        votes[2]+=1;
    if((document.getElementById("4") as HTMLInputElement).checked)
        votes[3]+=1;
    if((document.getElementById("5") as HTMLInputElement).checked)
        votes[4]+=1;
    localStorage.setItem('votes', JSON.stringify(votes));
    window.location.href="./user.html";
}