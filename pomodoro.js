function makeTable()
{
  let table = document.getElementById("table");

  table.innerHTML = '<div class="table"><div class="row header"><div class="cell">Assignment Name</div class="cell"><div class="cell">Due Date</div class="cell"> <div class="cell">Estimated time</div class="cell"></div class="row">';

  //This would be the part (below) where the infor gets organized - the code gets the labels value and add into respective cell.
  // Then it would have to go through and orgaize by date (from closest to your date).
  //The code below doesn't work for this, this code was taken from my (Tanya Vazquez's) previous work 

  for (i = 0; i< array.length; i++){
    let degrees = array[i] % 360;
      table.innerHTML += '<div class="row"><div class="cell">' + array[i] + '</div class="cell"><div class="cell">' + ****** + '</div class="cell"><div class="cell">' + ****** + '</div class="cell"><div class="cell">' + ****** + '</div class="cell"></div class="row">';
  }
  table.innterHTML += '</div class="table">'
}
