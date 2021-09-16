listOfParticipants = [
  {initiative: 0, name: "zombie"},
  {initiative: 1, name: "zombie2"},
  {initiative: 2, name: "zombie3"},
]

Vue.component('initlist', {
  props: ['participant'],
  template: '<a class="list-group-item outline-danger" href="#" onclick="openInBrowser(generateLink({{participant.name}}))">' 
  + '<div class="row">'
  + '<div class="col-3">{{participant.name}}</div>'
  + '<div class="col-1">{{participant.initiative}}</div>'
  + '</div>'
  + '</a>'
})

var app = new Vue({
    el: '#app',
    data: {
      listOfParticipants
    }
  })
