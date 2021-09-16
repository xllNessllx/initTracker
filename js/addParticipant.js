function compareInit(a,b){
    if (a.initiative < b.initiative) {
        return -1;
      }
      if (a.initiative > b.initiative) {
        return 1;
      }
      // a must be equal to b
      return 0;
}

function addParticipant(){
    var new_name = document.getElementById('name_id').value
    var new_initiative = document.getElementById('initiative_id').value
    participant = {initiative: new_initiative, name: new_name}
    listOfParticipants.push(participant)
    listOfParticipants.sort(compareInit)
  }