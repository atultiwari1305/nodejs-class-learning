const videoGames = ['BGMI', 'GFF', 'COC', 'CODM'];
for(const games of videoGames){
    if(games === 'BGMI'){
        console.log(`Best game is ${games}`);
        continue;
    }
    console.log(games);
}