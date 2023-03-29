// const myArray =['A', 'B','C']
// console.log('longueur du tableau:', myArray.length);
// console.log("le premier élément :", myArray[0]);
// console.log("le deuximeme élément :", myArray[1]);
// console.log("le troisieme élément :", myArray[2]);

// // AVEC BOUCLE FOR : on instancie notre index à0, puis on donne la condition d 'arret (tant que index est plus petit que la longueur du tableau), et on donne la condition qui se passe (alors ajoute 1 à l index)
// for(i = 0; i<myArray.length; i++){
//     // console.log(myArray.length[myArray.length - 1]);
//     console.log(myArray[i]);
// }

// POUR FAIRE APPARAITRE DANS LE BODY
// append va rajouter 3 pararaphes; et innerhtml lui va remplacer du contenu
// for(i = 0; i<myArray.length; i++){
//     let para = document.createElement('p')
//     para.append(myArray[i])
//     // document.body.append(para)
//     document.body.innerHTML = para
// }

// const para = document.querySelector('#test')
// para.innerHTML = 'test'
// para.append('test')

// append va rajouter le contenu du lorem en entier et innerHTML va remplacer par "test"
// innerText: n interprete pas le code  et affiche le code entier A LA DIFFERENCE de innerHtml qui va interpreter le code entre les balises et n afficher que ce qu il y a dedans

// AVEC LA BOUCLE FOR In (va renvoyer la clé: 0 1 2) ET FOR OF (va renvoyer la valeur : A B C )
// for (const element in myArray) {
//     console.log(element);
//     }

// for (const element of myArray) {
//     console.log(element);
//     }


// EXERCICE FAIRE APPARAITRE L INDEX
// let chiffre =[1,2,3,4,5,6,7,8,9,10];

// for(i=0; i< chiffre.length; i++){
//     console.log(i);
// }

// EXERCICE AJOUTER 1 A L INDEX
// let chiffre =[1,2,3,4,5,6,7,8,9,10];

// for(i=0; i< chiffre.length; i++){
//     console.log(i +1);
// }

// EXERCICE afficher DANS LA CONSOLE TABLE DE 1.TABLE DE 2 .CONCATENATION
// let chiffre =[1,2,3,4,5,6,7,8,9,10];

// for(i=0; i< chiffre.length; i++){
//     console.log('table de ' +(i +1));
// }

// EXERCICE INSERER UNE AUTRE BOUCLE FOR AVEC UNE AUTRE VARIABLE A L INTERIEUR 
// ET FAIRE APPARAITRE LES TABLES DE MULTIPLICATION
// let chiffre =[1,2,3,4,5,6,7,8,9,10];

// for(let i=0; i< chiffre.length; i++){
//     console.log('table de ' +(i +1));
//     for(let k=0; k < chiffre.length; k++){
//         // console.log(k*(i+1)); fais juste apparaitre la valeur de la table de multiplication
//         console.log(chiffre[k]+' x '+ (i+1)+ ' = '  +(chiffre[k]*(i+1)));
//     }
// }

// FAIRE APPARAITRE LES RESULTATS DES TABLES MULTIPLICATION DANS UNE DIV HTML ET PLUS DANS CONSOLE LOG
// ON UTILISE APPEND QU ON LIT: div.append.p (dans la div met l element p)

let chiffre =[1,2,3,4,5,6,7,8,9,10];

for(let i=0; i< chiffre.length; i++){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.append('table de ' +(i +1));
    div.append(h3);
    
    for(let k=0; k < chiffre.length; k++){
        let para= document.createElement('p');
        para.append(chiffre[k]+' x '+ (i+1)+ ' = '  +(chiffre[k]*(i+1)));
        div.append(para);
        document.body.append(div);
    }
}


