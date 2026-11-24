let annonces = [];

function afficherFormulaire() {
    document.getElementById("formulaire").classList.remove("hidden");
    document.getElementById("annonces").classList.add("hidden");
}

function afficherAnnonces() {
    document.getElementById("annonces").classList.remove("hidden");
    document.getElementById("formulaire").classList.add("hidden");
    afficherListe();
}

function ajouterAnnonce() {
    const type = document.getElementById("type").value;
    const nom = document.getElementById("nom").value;
    const description = document.getElementById("description").value;
    const lieu = document.getElementById("lieu").value;
    const date = document.getElementById("date").value;

    if (!nom || !description || !lieu || !date) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    annonces.push({
        type: type,
        nom: nom,
        description: description,
        lieu: lieu,
        date: date
    });

    document.getElementById("nom").value = "";
    document.getElementById("description").value = "";
    document.getElementById("lieu").value = "";
    document.getElementById("date").value = "";

    afficherAnnonces();
}

function afficherListe() {
    const liste = document.getElementById("liste");

    if (annonces.length === 0) {
        liste.innerHTML = "<p>Aucune annonce pour le moment.</p>";
        return;
    }

    liste.innerHTML = "";

    annonces.forEach(function(annonce) {
        liste.innerHTML += `
            <div class="annonce">
                <h3>${annonce.type} : ${annonce.nom}</h3>
                <p><strong>Description :</strong> ${annonce.description}</p>
                <p><strong>Lieu :</strong> ${annonce.lieu}</p>
                <p><strong>Date :</strong> ${annonce.date}</p>
            </div>
        `;
    });
}