// ------------------ AUTHENTIFICATION ------------------

function inscrire() {
    const email = document.getElementById("emailAuth").value;
    const password = document.getElementById("passAuth").value;

    if(email && password) {
        localStorage.setItem("user", JSON.stringify({email, password}));
        alert("Inscription réussie !");
    } else {
        alert("Remplissez tous les champs");
    }
}

function connecter() {
    const email = document.getElementById("emailAuth").value;
    const password = document.getElementById("passAuth").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.email === email && user.password === password) {
        alert("Connexion réussie !");
        document.getElementById("authSection").classList.add("hidden");
    } else {
        alert("Informations incorrectes");
    }
}

// ------------------ RESERVATION ------------------

function rechercherBus(e) {
    e.preventDefault();

    const depart = document.getElementById("depart").value;
    const arrivee = document.getElementById("arrivee").value;
    const date = document.getElementById("date").value;

    const prix = Math.floor(Math.random() * 30) + 20;

    const resultDiv = document.getElementById("resultats");
    resultDiv.classList.remove("hidden");

    resultDiv.innerHTML = `
        <div class="card">
            <h3>${depart} → ${arrivee}</h3>
            <p>Date : ${date}</p>
            <p>Prix : ${prix}$</p>
            <button onclick="afficherForm('${depart}','${arrivee}','${date}','${prix}')">
                Réserver
            </button>
        </div>
    `;
}

function afficherForm(depart, arrivee, date, prix) {
    document.getElementById("reservationForm").classList.remove("hidden");

    document.getElementById("infoTrajet").innerHTML =
        `${depart} → ${arrivee} | ${date} | ${prix}$`;
}

function confirmerReservation(e) {
    e.preventDefault();

    const nom = document.getElementById("nomClient").value;
    const siege = document.getElementById("siege").value;

    alert("Merci " + nom + " ! Réservation confirmée 🎉\nSiège : " + siege);
}

// ------------------ CONTACT ------------------

function envoyerMessage(e) {
    e.preventDefault();
    alert("Message envoyé avec succès !");
}