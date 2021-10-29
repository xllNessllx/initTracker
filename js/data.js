const fs = require('fs')

listOfParticipants = []

activeInit = -1

key_count = 0

function writeStateToFile(){
  writeObject = {
    listOfParticipants,
    activeInit,
    key_count
  }
  
  writeString = JSON.stringify(writeObject)

  fs.writeFile('save_state.json',writeString,err => {
    if (err){
      throw err
    }
  })
}

readString = fs.readFileSync('save_state.json','utf8', err => {
  if(err){
      throw err
  }
})

readObject = JSON.parse(readString)

listOfParticipants = readObject.listOfParticipants

activeInit = readObject.activeInit

key_count = readObject.key_count
