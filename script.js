let num = +prompt('son kriting');
while(isNaN(num) || num ==0){
    num = +prompt('bu yerga son kritish kerak');
}

let box = "";

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (i == j || i == 0 || j == 0 || j == num - 1 || i == num -1) {
        box += "[*]"
    }else{
        box += "   "
    }
  }
  console.log(box);
  box = ''
}
