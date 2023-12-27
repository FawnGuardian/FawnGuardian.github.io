// JavaScript Document
function JamaJamNumber() {
    const week = 7;
    const dayoffset = 2; // Offsets days froward
    const weekoffset = 9 * week; // Offsets X weeks from first jam week
    // Tuesday of the first week of Trijam #1
    const dateStart = Date.UTC(2019, 0, 1 + weekoffset + dayoffset);
    const dateNow = Date.now();
    const dif = dateNow - dateStart;
    const calc = ((((dif / 1000) / 60) / 60) / 24) / 7;
    return Math.ceil(calc);
}

function JamaJamDate(){
    const week = 7;
    const dayoffset = 1; // Offsets days forward
    const weekoffset = 10 * week; // Offsets X weeks from first jam week 
    const dateStart = Date.UTC(2023, 5, 1 + weekoffset + dayoffset);
    const dateNow = Date.now();
    const dif = dateNow - dateStart;
    const calc = ((((dif / 1000) / 60) / 60) / 24) / 7;
    return Math.ceil(calc);
}


function OpenJamLink(offset=0){
    const link = "https://itch.io/jam/jama-jam-"+(JammaJamDate());
    window.open(link);
}

function OpenSpecialJamLink(url){
    const link = url;
    window.open(link);
}