var Stark = /** @class */ (function () {
    function Stark(message) {
        this.saying = message;
    }
    Stark.prototype.hello = function (nome, idade) {
        console.log("hello" + nome);
    };
    Stark.clastle = "windoer";
    return Stark;
}());
var ned = new Stark("ola");
console.log(ned.hello("rogerio", 12));
