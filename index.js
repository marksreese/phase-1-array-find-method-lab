function superbowlWin(arr){
    for (let thing of arr){
        if (thing.result == "W"){
            return thing.year;
        };
    }
}