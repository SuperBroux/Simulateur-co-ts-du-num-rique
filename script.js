// script.js
function calculateExpenses() {
    let monthlyExpenses = 0;
    let materialExpenses = 0;

    // Sélectionner tous les éléments cochés
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        const price = parseFloat(checkbox.getAttribute('data-price')) || 0;
        const id = checkbox.id;

        // Si l'élément fait partie de la catégorie "Matériel", ajouter au total des dépenses de matériel
        if (id === 'ordinateur' || id === 'ecran' || id === 'souris' || id === 'clavier' || id === 'imprimante' || id === 'scan') {
            materialExpenses += price;
        } else {
            // Sinon, ajouter au total des dépenses mensuelles
            monthlyExpenses += price;
        }
    });

    // Calculer les dépenses annuelles
    const annualExpenses = monthlyExpenses * 12;

    // Afficher les résultats
    document.getElementById('monthlyExpenses').textContent = monthlyExpenses.toFixed(2);
    document.getElementById('annualExpenses').textContent = annualExpenses.toFixed(2);
    document.getElementById('materialExpenses').textContent = materialExpenses.toFixed(2);
}
