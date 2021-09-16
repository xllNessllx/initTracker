listOfParticipants = [
  {initiative: 0, name: "zombie", health: 10, active: true},
  {initiative: 1, name: "zombie2", health: 10, active: false},
  {initiative: 2, name: "zombie3", health: 10, active: false},
]

Vue.component('initlist', {
  props: ['participant'],
  template: '<a class="list-group-item outline-danger" href="#" onclick="openInBrowser(generateLink({{participant.name}}))">' 
  + '<div class="row">'
  + '<div class="col-2">{{participant.name}}</div>'
  + '<div class="col-2">Init: {{participant.initiative}}</div>'
  + '<div class="col-2">HP: {{participant.health}}</div>'
  // + '<div class="col"><button style="justify-content: flex-end;" class="btn btn-outline-danger btn-light my-2 my-sm-0" type="submit" onclick="addParticipant()">-</button></div><div class="col"><input id="hp_id" class="form-control mr-sm-2" type="number" placeholder="HP"></div>   <div class="col"><button class="btn btn-outline-danger btn-light my-2 my-sm-0" type="submit" onclick="addParticipant()">+</button></div>'
  + '<div class="col-2">Active: {{participant.active}}</div>'
  + '</div>'
  + '</a>'
})

Vue.component('initlist_active', {
  props: ['participant'],
  template: '<a class="list-group-item outline-danger bg-danger" href="#" onclick="openInBrowser(generateLink({{participant.name}}))">' 
  + '<div class="row">'
  + '<div class="col-2">{{participant.name}}</div>'
  + '<div class="col-2">Init: {{participant.initiative}}</div>'
  + '<div class="col-2">HP: {{participant.health}}</div>'
  // + '<div class="col"><button style="justify-content: flex-end;" class="btn btn-outline-danger btn-light my-2 my-sm-0" type="submit" onclick="addParticipant()">-</button></div><div class="col"><input id="hp_id" class="form-control mr-sm-2" type="number" placeholder="HP"></div>   <div class="col"><button class="btn btn-outline-danger btn-light my-2 my-sm-0" type="submit" onclick="addParticipant()">+</button></div>'
  + '<div class="col-2">Active: {{participant.active}}</div>'
  + '</div>'
  + '</a>'
})

var app = new Vue({
    el: '#app',
    data: {
      listOfParticipants
    }
  })
