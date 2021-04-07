var txt = document.getElementById("txtarea");
// basic color
var basic = "#F12345";
// const basic color
const nbasic = ["F", "1", "2", "3", "4", "5"];
// color
var colore;
//letters & numbers
const letnum = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// generator of casual letter
var letgen;
 function color() {
  letgen = Math.floor(Math.random()*15);
  colore =  basic.replace("F", letnum[letgen]);

  letgen = Math.floor(Math.random()*15);
  colore =  colore.replace("1", letnum[letgen]);

  letgen = Math.floor(Math.random()*15);
  colore =  colore.replace("2", letnum[letgen]);

  letgen = Math.floor(Math.random()*15);
  colore =  colore.replace("3", letnum[letgen]);

  letgen = Math.floor(Math.random()*15);
  colore =  colore.replace("4", letnum[letgen]);

  letgen = Math.floor(Math.random()*15);
  colore =  colore.replace("5", letnum[letgen]);

  txt.style.color = colore;
  console.log(colore);

 }
