function Verif(){
    //Variables
    var Nom = document.forms["form-nom"]["nom"].values;
    var Prenom = document.forms["form-prenom"]["prenom"].values;
    var Date = document.forms["form-date"]["date"].values;
    var Email = document.forms["form-email"]["email"].values;
    var Site = document.forms["form-site"]["site"].values;
    var Password = document.forms["form-password"]["password"].values;
    var Genre = document.forms["form-genre"]["genre"].values;
    var Pays = document.forms["form-pays"]["pays"].values;
    var Formations = document.forms["form-formations"]["formations"].values;
    var atLeastOneSelected = false;
    var Description = document.forms["form-description_formations"]["description_formations"].values;
    var Photo = document.forms["form-photo"]["photo"].values;
    var fileSize = 0;


    //Verification 

    if(Nom === ""){
        alert("Veuillez entrer votre Nom!");
        Nom.focus;
        return false;
    }

    if(Prenom === ""){
        alert("Veuillez entrer votre Prenom!");
        Prenom.focus;
        return false;
    }
    if(Date === null){
        alert("Veuillez entrer votre date de naissance!");
        Date.focus;
        return false;
    }
    if(Email === ""){
        alert("Veuillez entrer votre adresse couriel!");
        Email.focus;
        return false;
    }
    if(Site === ""){
        alert("Veuillez entrer votre site!");
        Site.focus;
        return false;
    }
    if(Password.lenght !== 8){
        alert("Veuillez entrer votre mot de passe d'exactement 8 charactere!");
        Password.focus;
        return false;
    }
    if(Genre === "Homme" || Genre === "Femme"){
    }
    else{
        alert("Veuillez entrer votre genre!");
        Genre.focus;
        return false;
    }
    if (Pays.selectedIndex === 0) {
        alert("Veuillez sélectionner votre pays.");
        Pays.focus;
        return false;
    }
    for (var i = 0; i < Formations.length; i++) {
        if (Formations[i].checked) {
            atLeastOneSelected = true;
            break;
        }
    }
    
    if (atLeastOneSelected) {
        alert("Veuillez selectionner au moins une formations");
        Formations.focus;
        return false;
    }
    if(Description === ""){
        alert("Veuillez decrire vos besoins de formations");
        Description.focus;
        return false;
    }
    if (Photo === null) {
        
            alert("Veuillez fournir votre photo");
            Photo.focus;
            return false;
    }
    if (Photo.files.length > 0) {
        fileSize = Photo.files[0].size/ 1024;
        if(fileSize > 10){
            alert("Veuillez fournir votre photo dans un format d'un maximum de 10ko");
            Photo.focus;
            return false;
        }
    }

}