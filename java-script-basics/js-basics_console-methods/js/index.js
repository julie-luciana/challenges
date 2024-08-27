console.clear();
function points(games) {
  // create a variable points
  let points = 0;
  // for every result in the list:
  // check if the first number is bigger than the second number
  // -> add 3 to points
  for (let game of games) {
    console.log(game, game[0], game[1], game[2]);
    if (game[0] > game[2]) {
      points += 3;
    }
    if (game[0] === game[2]) {
      points++;
    }
    // Bei Niederlage (x < y) passiert nichts, da keine Punkte hinzugefügt werden
  }
  // first num is in index 0, second num is in index 2
  // after the loop -> return points
  return points;
}

points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);

// Expected: 30
/*
  if x > y: 3 points (win)
  if x < y: 0 points (loss)
  if x = y: 1 point (tie)
  */
