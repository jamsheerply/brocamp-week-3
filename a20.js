let count=1;
for(let i=1;i<=4;i++){
  let pat=" ";
  for(let j=1;j<=i;j++){
    pat+=count+" ";
    count++;
  }
  console.log(pat);
}