// Afficher le questionnaire après clic sur "Commencer"
document.getElementById("start-button").addEventListener("click", () => {
    document.querySelector("header.hero").classList.add("hidden");
    document.getElementById("questionnaire").classList.remove("hidden");
});

// Gestion du bouton "Valider"
document.getElementById("submit-button").addEventListener("click", () => {
    const selectedSubscriptions = Array.from(
        document.querySelectorAll('#subscription-options input[type="checkbox"]:checked')
    ).map(input => input.value);

    const selectedEquipment = Array.from(
        document.querySelectorAll('#equipment-options input[type="checkbox"]:checked')
    ).map(input => input.value);

    const subscriptionResults = document.getElementById("subscription-results");
    const equipmentResults = document.getElementById("equipment-results");

    // Réinitialiser les résultats
    subscriptionResults.innerHTML = "";
    equipmentResults.innerHTML = "";

    // Ajouter les résultats des abonnements
    selectedSubscriptions.forEach(subscription => {
        const row = `<tr>
            <td>${subscription}</td>
            <td>Logo 1, Logo 2, Logo 3</td>
            <td>Logo 1, Logo 2, Logo 3</td>
        </tr>`;
        subscriptionResults.insertAdjacentHTML("beforeend", row);
    });

    // Ajouter les résultats du matériel
    selectedEquipment.forEach(equipment => {
        const row = `<tr>
            <td>${equipment}</td>
            <td>Logo 1, Logo 2, Logo 3</td>
            <td>Logo 1, Logo 2, Logo 3</td>
        </tr>`;
        equipmentResults.insertAdjacentHTML("beforeend", row);
    });

    document.getElementById("questionnaire").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
});
