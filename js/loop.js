for(var name=0; name<10; name++){
    console.log("hello", name);
}
// initial value, function, stipper

var nametwo=0;
while(nametwo<10){
    console.log("from while hello", nametwo);
    nametwo++;
}
/*
var firstArray=[];
console.log(firstArray);
firstArray.push("ram");
firstArray.unshift("hari");
*/

var arrayWithArray =[
    ["ram","hari","sita"],
    ["ram","hari","sita"],
    ["ram","hari","sita"],
    [1,2,3,4,5,]

];
for (var frist = 0; frist<arrayWithArray.length; frist++){
    console.log(arrayWithArray[frist]);
}