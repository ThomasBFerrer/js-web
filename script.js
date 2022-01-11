let laDiv = document.getElementById('maDiv');
laDiv.innerText = 'Savoirs Inutiles';
document.getElementById('date').valueAsDate=new Date();
document.getElementById('quote').focus();
function ilAclique(){

    // Récupérer la valeur de l'input
    let valeurDeLinput = document.getElementById('quote').value;
    //Créer un élément li
    let monLi = document.createElement('h1');
    monLi.innerText = valeurDeLinput;
    // Ajouter l'élément li à l'élément ul
    let monUl = document.getElementById('savoir');
    monUl.appendChild(monLi);

    // Récupérer la valeur de l'input
    let valeurDeLinput2 = document.getElementById('blaze').value;
    //Créer un élément li
    let monLi2 = document.createElement('p');
    monLi2.innerText = valeurDeLinput2;
    // Ajouter l'élément li à l'élément ul
    let monUl2 = document.getElementById('savoir');
    monUl2.appendChild(monLi2);

    // Récupérer la valeur de l'input
    let valeurDeLinput3 = document.getElementById('date').value;
    //Créer un élément li
    let monLi3 = document.createElement('p');
    monLi3.innerText = valeurDeLinput3;
    // Ajouter l'élément li à l'élément ul
    let monUl3 = document.getElementById('savoir');
    monUl3.appendChild(monLi3);


function supprimer(){

    monLi.addEventListener.currentTarget.onclick.remove(monLi3, monLi2, monLi);

}


}


