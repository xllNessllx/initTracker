const { shell } = require('electron');

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

function openInBrowser(dnd_link){
    shell.openExternal(dnd_link);
}

function generateLink(monster_name){
    return "https://www.dndbeyond.com/monsters/" + monster_name;
    // TODO: Escape Monster Name and add Underscore
}

// import simplebar from 'simplebar-vue';
// import 'simplebar/dist/simplebar.min.css';
// export default {
//   name: 'app',
//   components: {
//     simplebar
//   }
// }