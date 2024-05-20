let dups=[ 1 ,1 ,2 ,2,3 , 4 , 6];
let narray=dups.filter((item,index) => dups.indexOf(item) == index );
let narray2=[ ...new Set(narray)];
console.log(narray2, narray)