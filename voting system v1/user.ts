type ID = number;
const ids: ID[] = localStorage.getItem('ids') ? JSON.parse(localStorage.getItem('ids')!) : [];
function login()
{
    var id:number=parseInt((document.getElementById("id") as HTMLInputElement).value);
    if(ids.includes(id))
        alert("Already voted");
    else
    {    ids.clear(id);
        localStorage.setItem('ids', JSON.stringify(ids));
        window.location.href="./vote.html";
    }
}