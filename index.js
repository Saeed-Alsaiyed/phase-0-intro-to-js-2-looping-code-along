// Code your solutions in this file


const writeCards =(name, eventname) =>{
    let empty = [];
    for(let i=0; i< name.length; i++ ){
        empty.push("Thank you, " + name[i] +", for the wonderful " + eventname +" gift!")
    }
    return empty
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

const countDown = (num ) =>{
    let count = 0;
    while(count <= num){
        console.log(num--)
    }
}

countDown(10);