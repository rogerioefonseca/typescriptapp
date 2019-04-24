class Stark {
    name: String;
    saying: string;
    static clastle: string = "windoer";

    constructor(message: string)
    {
        this.saying = message;
    }

    hello(nome: String, idade: number)
    {
        console.log("hello"  + nome);
    }
}

var ned = new Stark("ola");
console.log(ned.hello("rogerio",12));