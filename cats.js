document.addEventListener('DOMContentLoaded', function() {
  var catBoxes = document.querySelectorAll('.cat-box'),
      summonBtn = document.querySelector('button.summon-cats');

  summonBtn.addEventListener('click', function() {
    console.log(this)
  })
})
