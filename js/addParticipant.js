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
    // get values
    var new_name = document.getElementById('name_id').value
    var new_initiative = document.getElementById('initiative_id').value
    var new_hp = document.getElementById('hp_id').value

    // check values
    if (new_name == ""){
        return
    }
    if(new_initiative == "" || new_initiative < 0){
        return
    }
    if(new_hp == "" || new_hp < 0){
        return
    }

    // add participant
    participant = {initiative: new_initiative, name: new_name, health: new_hp}
    listOfParticipants.push(participant)
    listOfParticipants.sort(compareInit)

    // clear input fields
    document.getElementById('name_id').value = ""
    document.getElementById('initiative_id').value = ""
    document.getElementById('hp_id').value = ""
  }