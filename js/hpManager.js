function addHP(obj){
    listOfParticipants[obj.value].health = listOfParticipants[obj.value].health + document.getElementById('changeHP_id').value
}

function removeHP(){
    listOfParticipants.health += document.getElementById('changeHP_id').value
}