"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];


// Who is the Academy Member whose ID is 187?
let memId = academyMembers.find((memId) => memId.memID == 187);
console.log(memId.name);
// Who has been in at least 3 films?
let memberAtLeastThreeFilms = academyMembers.filter(member => member.films.length >= 3).forEach(member => console.log(`${member.memID} ${member.name} ${member.films}`));


// Who has a name that starts with "Bob"?
let membersNameStartingWithBob = academyMembers.filter(member => member.name.startsWith("Bob")).forEach(member => console.log(`${member.name}`));
// console.log(membersNameStartingWithBob);

// HARDER: Which Academy Members have been in a film that starts with "A"
let membersInFilmStartingWithA = academyMembers.filter(member => member.films.some(film => film.startsWith("A"))).forEach(member => console.log(`${member.name}`));
  