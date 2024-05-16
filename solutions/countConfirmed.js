/*
Fill the function countConfirmed(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "username": "steve.simon",
  "email": "steve.simon12@gmail.com",
  "phone": "+44701231231",
  "isConfirmed": true
}
Count the users where the isConfirmed key's value is true and return the amount as a number.
If you receive an array which contains only one user object where the isConfirmed key's value is true then return 1.
*/

function countConfirmed(users) {
let count = 0;
for (const user of users) {
  if (user.isConfirmed === true) {
    count++;
  } else if(users.length === 1 && user.isConfirmed === true) {
    count = 1;
  }
}
return count;
}

module.exports = countConfirmed;
