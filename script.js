// Function to calculate URPS savings and show details
function calculateUrpsSavings() {
    let urpsSavingsMonthly = 0;
    let urpsSavingsAnnual = 0;
    let savingsDetails = "";

    // Check for selected items and calculate savings with details for "Abonnement"
    if (document.getElementById('agenda').checked) {
        const marketPrice = parseFloat(document.getElementById('agenda').getAttribute('data-price'));
        const urpsPrice = 62; // Offre URPS à 62€/mois
        const saving = marketPrice - urpsPrice;
        urpsSavingsMonthly += saving;
        savingsDetails += `Agenda / Prise de RDV en ligne : Économie de ${saving.toFixed(2)} €/mois<br>`;
    }

    if (document.getElementById('ereputation').checked) {
        const marketPrice = parseFloat(document.getElementById('ereputation').getAttribute('data-price'));
        const urpsPrice = 33; // Offre URPS à 33€/mois
        const saving = marketPrice - urpsPrice;
        urpsSavingsMonthly += saving;
        savingsDetails += `E-réputation : Économie de ${saving.toFixed(2)} €/mois<br>`;
    }

    if (document.getElementById('telesecretariat').checked) {
        const marketPrice = parseFloat(document.getElementById('telesecretariat').getAttribute('data-price'));
        const urpsReduction = marketPrice * 0.10; // 10% de réduction URPS
        urpsSavingsMonthly += urpsReduction;
        savingsDetails += `Télésecrétariat : Économie de ${urpsReduction.toFixed(2)} €/mois (10% réduction)<br>`;
    }

    // Check for selected items and calculate savings for "Matériel"
    let materialSavings = 0;
    if (document.getElementById('ordinateur fixe').checked) {
        const marketPrice = parseFloat(document.getElementById('ordinateur fixe').getAttribute('data-price'));
        const urpsReduction = marketPrice * 0.05; // 5% réduction URPS
        materialSavings += urpsReduction;
        savingsDetails += `Ordinateur fixe : Économie de ${urpsReduction.toFixed(2)} € (5% réduction)<br>`;
    }

    if (document.getElementById('ecran').checked) {
        const marketPrice = parseFloat(document.getElementById('ecran').getAttribute('data-price'));
        const urpsReduction = marketPrice * 0.06; // 6% réduction URPS
        materialSavings += urpsReduction;
        savingsDetails += `Écran : Économie de ${urpsReduction.toFixed(2)} € (6% réduction)<br>`;
    }

    if (document.getElementById('clavier').checked) {
        const marketPrice = parseFloat(document.getElementById('clavier').getAttribute('data-price'));
        const urpsReduction = marketPrice * 0.10; // 10% réduction URPS
        materialSavings += urpsReduction;
        savingsDetails += `Clavier : Économie de ${urpsReduction.toFixed(2)} € (10% réduction)<br>`;
    }

    if (document.getElementById('souris').checked) {
        const marketPrice = parseFloat(document.getElementById('souris').getAttribute('data-price'));
        const urpsReduction = marketPrice * 0.10; // 10% réduction URPS
        materialSavings += urpsReduction;
        savingsDetails += `Souris : Économie de ${urpsReduction.toFixed(2)} € (10% réduction)<br>`;
    }

    // Calculate annual savings based on monthly savings for abonnements
    urpsSavingsAnnual = urpsSavingsMonthly * 12;

    // Display savings and details in the modal
    const totalSavings = urpsSavingsMonthly + materialSavings;
    if (totalSavings > 0) {
        document.getElementById('urpsSavingsAmount').textContent = `${urpsSavingsMonthly.toFixed(2)} €/mois et ${urpsSavingsAnnual.toFixed(2)} €/an (abonnements) + ${materialSavings.toFixed(2)} € (matériel)`;
        document.getElementById('savingsDetails').innerHTML = savingsDetails; // Display detailed savings

        const modal = document.getElementById('urpsModal');
        modal.style.display = "block"; // Show modal

        // Close modal when clicking the 'x'
        document.querySelector('.close').onclick = function() {
            modal.style.display = "none";
        };

        // Close modal when clicking outside of modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
}

// Function to calculate monthly, annual, and material expenses
function calculateExpenses() {
    let monthlyExpenses = 0;
    let materialExpenses = 0;

    // Get all checked checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        const price = parseFloat(checkbox.getAttribute('data-price')) || 0;
        const id = checkbox.id;

        // Add to material expenses if it's part of the 'Matériel' category
        if (id === 'ordinateur fixe' || id === 'ecran' || id === 'souris' || id === 'clavier' || id === 'imprimante/scan') {
            materialExpenses += price;
        } else {
            // Otherwise, add to monthly expenses
            monthlyExpenses += price;
        }
    });

    // Calculate annual expenses
    const annualExpenses = monthlyExpenses * 12;

    // Display results
    document.getElementById('monthlyExpenses').textContent = monthlyExpenses.toFixed(2);
    document.getElementById('annualExpenses').textContent = annualExpenses.toFixed(2);
    document.getElementById('materialExpenses').textContent = materialExpenses.toFixed(2);

    // Calculate URPS savings
    calculateUrpsSavings();
}
