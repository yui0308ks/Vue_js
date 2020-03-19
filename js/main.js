(function() {
  'use strict';

  // two way data binding (to UI)

  var vm = new Vue({
    el: '#app',
    data: {
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ]
    }
  })
})();