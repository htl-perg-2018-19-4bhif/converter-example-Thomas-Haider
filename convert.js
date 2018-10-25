var eingabe = process.argv[2];
var ersteEinheit = process.argv[3];
var stringTo = process.argv[4];
var zweiteEinheit = process.argv[5];

if((eingabe > 0) && (ersteEinheit == "m" || ersteEinheit == "cm" || ersteEinheit == "mm" || ersteEinheit == "kg" || ersteEinheit == "g") && (stringTo == "to") && (typeof(zweiteEinheit) == "string") && (process.argv.length == 6) && (zweiteEinheit == "m" || zweiteEinheit == "cm" || zweiteEinheit == "mm" || zweiteEinheit == "kg" || zweiteEinheit == "g")){
    //m to mm und kg to g
    if(((ersteEinheit == "m") && (zweiteEinheit == "mm")) || (ersteEinheit == "kg") && (zweiteEinheit == "g")){
        console.log(eingabe + " " + ersteEinheit + " are " + eingabe *1000 + " " + zweiteEinheit);
    //cm to mm
    } else if(((ersteEinheit == "cm") && (zweiteEinheit == "mm"))){
        console.log(eingabe + " " + ersteEinheit + " are " + eingabe*100 + " " + zweiteEinheit);
    //m to cm
    } else if(((ersteEinheit == "m") && (zweiteEinheit == "cm"))){
        console.log(eingabe + " " + ersteEinheit + " are " + eingabe*100 + " " + zweiteEinheit);
    //mm to cm
    }else if(((ersteEinheit == "mm") && (zweiteEinheit == "cm"))){
        console.log(eingabe + " " + ersteEinheit + " are " + eingabe/100 + " " + zweiteEinheit);
    //cm to m
    } else if(((ersteEinheit == "cm") && (zweiteEinheit == "m"))){
        console.log(eingabe + " " + ersteEinheit + " are " + eingabe/100 + " " + zweiteEinheit);
    //mm to m und g to kg
    } else if(((ersteEinheit == "mm") && (zweiteEinheit == "m")) || (ersteEinheit == "g") && (zweiteEinheit == "kg")){
        console.log(eingabe + " " + ersteEinheit + " are " + eingabe/1000 + " " + zweiteEinheit);
    //gleiche Einheiten
    }else if(ersteEinheit == zweiteEinheit){
        console.log(eingabe + " " + ersteEinheit + " are " + eingabe + " " + zweiteEinheit);
    }
}else{
    console.log("Invalid parameters");
}