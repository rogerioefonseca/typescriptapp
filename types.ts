var n: String = "asdasd";
let nasd: Boolean = false;

var names : String[] = ["rogerio","leticia","MC","ML"];
var names2 : any[] = ["rogerio","leticia","MC","ML"];
enum Starks {Jon,bran,Rogerio,Maria};

var cat : Starks = Starks.Jon;


function getName() : string{
 return "a";
}

function getName2() : void{
    console.log("winter is comming");
}


function printName(stark) {
    console.log(stark.name);
}

printName({name : "rogerio"});
printName({label : "rogerio"});