interface Stark {
    name: string;
    age?: number;
}

function printName(start: Stark)
{
    console.log(start.name);
}

printName({name: "rogerio"});
