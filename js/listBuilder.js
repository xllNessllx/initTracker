listOfParticipants = [
  {initiative: 0, name: "zombie"},
  {initiative: 1, name: "zombie2"},
  {initiative: 2, name: "zombie3"},
]

Vue.component('initlist', {
  props: ['participant'],
  template: '<a class="list-group-item outline-danger" href="#" onclick="openInBrowser(generateLink({{participant.name}}))"> {{participant.name}} | {{participant.initiative}} </a>'
})

var app = new Vue({
    el: '#app',
    data: {
      listOfParticipants
    }
  })
