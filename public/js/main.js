let tab =[];
let bordel = (nom, heure, action)=>{
    words = nom.split(' ');

    if (words.length === 1){
        tab.push(words[0]);
    }else if (words.length === 2){
        tab.push(words[0],words[1]);
    }else if (words.length === 3){
        tab.push(words[0],words[1],words[2]);
    }else if (words.length === 4){
        tab.push(words[0],words[1],words[2],words[3]);
    };
    
    if(heure === "8h51"){
        tab.splice(tab.indexOf("Jean"),1)*2
        tab.splice(tab.indexOf("Stan"),1)*2
    }else if (heure == "8h56"){
         tab.splice(tab.indexOf("Antoine"),1);
    }else if (heure == "9h05"){
        tab.splice(tab.indexOf("Fanny"),1);
    }
    


    
    
    alert(`Il est ${heure} et ${words} ${action} `);
}

//02
bordel("Fanny", "8H43", "arrive en classe");
console.log(tab);

//03
bordel("CHRIS", "8h44", "allume son PC et commence à mettre à jour ses notes");
console.log(tab);

// 04
bordel("Nasila Stan Mouna Jean", "8h45", "rejoignent la classe");
console.log(tab);
 
// 05 
bordel("Stan Jean", "8h51", "voyent Django le Chat passer devant la porte, et décident de le rejoindre et de ne jamais revenir");
console.log(tab);

// 06
bordel("Ali Agim", "8h55", "rentren en classe ne faisaint un maximum de bruit");
console.log(tab);

//07

bordel("Antoine", "8h56", "rentre en classe puis redescend prendre sa tasse de café");
console.log(tab);

// 08 
bordel("Yassine", "8h59", "Arrive avec sa petite plante et salue tout le monde avec un grand sourire");
console.log(tab);

//09
bordel("Seifedin Haroune", "9h04", "rentrent tranquillement et observent tout le monde");
console.log(tab);

// 10
bordel("Elvis IliasD IliasE", "9h03", "Obeserve Nasila qui a l'air tranquilleeee");
console.log(tab);

//11
bordel("Kevin", "9h04", "rentre en classe avec sa tasse de café");
console.log(tab);

//12
bordel("VanHoa Nathan", "9h05", "rentrent en classe tous content de n'être que 5 minutes en retard, Fanny leur dit qu'ils sont en retard et puis elle sort");
console.log(tab);

//13 
bordel("Adil", "9h10", "rentrent en classe avec sa petite tasse de café, tout content en souriant");
console.log(tab);

//14
bordel("Fanny", "9h20", "rentre en classe et commence à donner cours");
console.log(tab);

// 15
bordel("Lira", "9h30", "rentre en faisaint le minimum de bruit possible mais toute la classe le regarde");
console.log(tab);
