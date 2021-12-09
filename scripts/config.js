function openPlayerConfig(event)
{   const selectedPlayer = +event.target.dataset.playerid; //add plus to convert to number
    editedPlayer = selectedPlayer; 
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = "";
    
}


function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target); // target is poin
    const enteredPlayername = formData.get('playername').trim(); // get the value of our input
  

    if(!enteredPlayername) //not true it equal with enterPlayername ===""
    {
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = 'Please enter valid name!';
        return; // to stop looking further down
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer +'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername; // how to access to children by using dom;
   


}
