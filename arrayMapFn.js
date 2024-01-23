const videoGames = ['BGMI', 'GFF', 'COC', 'CODM'];

console.log(videoGames.map(videoGames => `Playing : ${videoGames}`));
//map function in javascript is used to perform some operation on each element of the array.

for(const games of videoGames){
    if(games == 'GFF'){
        for(const games2 of videoGames.map(videoGames => `Worst : ${videoGames}`)){
            console.log(`Played ${games2}`);
        }
        break;
    }
    console.log(`The best one of the above is: ${games}`);
}