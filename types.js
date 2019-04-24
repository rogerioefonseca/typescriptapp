var n = "asdasd";
var nasd = false;
var names = ["rogerio", "leticia", "MC", "ML"];
var names2 = ["rogerio", "leticia", "MC", "ML"];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["bran"] = 1] = "bran";
    Starks[Starks["Rogerio"] = 2] = "Rogerio";
    Starks[Starks["Maria"] = 3] = "Maria";
})(Starks || (Starks = {}));
;
var cat = Starks.Jon;
function getName() {
    return "a";
}
function getName2() {
    console.log("winter is comming");
}
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "rogerio" });
printName({ label: "rogerio" });
