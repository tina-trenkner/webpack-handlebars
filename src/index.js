var wombleList = require('./templates/womble-list.hbs')

document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div')
  var data = {
    wombles: [
      { name: 'Orinocc', email: 'orinocco@wimbledoncommon.net' },
      { name: 'Toms', email: 'tomsk@wimbledoncommon.net' },
      { name: 'Bung', email: 'bungo@wimbledoncommon.net' }
    ]
  }
  div.innerHTML = wombleList(data)
  document.body.appendChild(div)
})
