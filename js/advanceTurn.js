function checkInitiative(){
    test = true
    listOfParticipants.forEach(element => {
        if(element.initiative == activeInit){
            test = false
        }
    })
    return test
}

function advanceTurn(){
    listOfParticipants.forEach(element => element.active = false)

    activeInit++
    while(checkInitiative()){
        activeInit++
        if(activeInit > 30){
            activeInit = 0
        }
        console.log(checkInitiative())
    }

    listOfParticipants.forEach(element => {
        if(element.initiative == activeInit){
            element.active = true
        }
    })

    writeStateToFile()
}