const locations = [];
const makePoint = function makePoint(x, y){
    let p = {x : x, y : y};
    return p;
}
const factory = function factory(n){
    for(let i = 0; i < 1; i++){
        let p = makepoint(i, i);
        locations.push(p);
    }
}
factory(3);

console.log('locations: ' + JSON.stringify(locations));