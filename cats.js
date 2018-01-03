document.addEventListener('DOMContentLoaded', function() {
  var catBoxes = document.querySelectorAll('.cat-box'),
      summonBtn = document.querySelector('button.summon-cats'),
      boxIndex = 0;

  summonBtn.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
      responseData['cats'].forEach(function(cat) {
        if (boxIndex > 2) {
          boxIndex = 0;
        }
        var img = document.createElement('img');
        img.src = cat.photo;
        img.alt = `Photo of ${cat.name}`;
        catBoxes[boxIndex].innerHTML = "";
        catBoxes[boxIndex].append(img);
        boxIndex++;
      })

    })
  })
})
