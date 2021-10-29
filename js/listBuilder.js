Vue.component('initlist', {
  props: ['participant'],
  template: '<a class="list-group-item outline-danger" href="#" :onclick="participant.link">' 
  + '<div class="row">'
  + '<div class="col-2">{{participant.name}}</div>'
  + '<div class="col-2">Init: {{participant.initiative}}</div>'
  + '<div class="col-2">HP: {{participant.health}}</div>'
  + '<div class="col">'
    + '<button class="btn btn-outline-danger btn-light my-2 my-sm-0" type="submit" onclick="removeHP(this)">-</button>'
  + '</div>'
  + '<div class=col>'
    + '<input :id="participant.key" class="form-control mr-sm-2" type="number" placeholder="HP">'
  + '</div>'
  + '<div class="col">'
    + '<button class="btn btn-outline-danger btn-light my-2 my-sm-0" type="submit" onclick="addHP(this)" value="1">+</button>'
  + '</div>'
  + '</div>'
  + '</a>'
})

Vue.component('initlist_active', {
  props: ['participant'],
  template: '<a class="list-group-item outline-danger bg-danger" href="#" :onclick="openInBrowser(participant.link)">' 
  + '<div class="row">'
  + '<div class="col-2">{{participant.name}}</div>'
  + '<div class="col-2">Init: {{participant.initiative}}</div>'
  + '<div class="col-2">HP: {{participant.health}}</div>'
  // + '<div class="col"><button style="justify-content: flex-end;" class="btn btn-outline-danger btn-light my-2 my-sm-0" type="submit" onclick="addParticipant()">-</button></div><div class="col"><input id="hp_id" class="form-control mr-sm-2" type="number" placeholder="HP"></div>   <div class="col"><button class="btn btn-outline-danger btn-light my-2 my-sm-0" type="submit" onclick="addParticipant()">+</button></div>'
  + '</div>'
  + '</a>'
})

var app = new Vue({
    el: '#app',
    data: {
      listOfParticipants
    }
  })
