// Return the inr note that a ammount might have in a decending order
// foe ex. if ammount is rs.4300 then it will contain 5 rs.500 , 1 rs.200 & 1 rs.100 notes

function getNotes(ammount) {
  let notes = {
    fiveHundred: 0,
    TwoHundred: 0,
    oneHundred: 0,
    fifty: 0,
    twenty: 0,
    ten: 0,
  };
  if (ammount >= 500) {
    notes.fiveHundred = Math.floor(ammount / 500);
    ammount = ammount % 500;
  }
  if (ammount <= 500 && ammount >= 200) {
    notes.TwoHundred = Math.floor(ammount / 200);
    ammount = ammount % 200;
  }
  if (ammount <= 200 && ammount >= 100) {
    notes.oneHundred = Math.floor(ammount / 100);
    ammount = ammount % 100;
  }
  if (ammount <= 100 && ammount >= 50) {
    notes.fifty = Math.floor(ammount / 50);
    ammount = ammount % 50;
  }
  if (ammount <= 50 && ammount >= 20) {
    notes.twenty = Math.floor(ammount / 20);
    ammount = ammount % 20;
  }
  if (ammount <= 20 && ammount >= 10) {
    notes.ten = Math.floor(ammount / 10);
    ammount = ammount % 10;
  }
  return notes;
}

console.log(getNotes(4380));
