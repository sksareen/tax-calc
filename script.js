// 2024 Federal Tax Brackets (Single Filer)
const FEDERAL_TAX_BRACKETS = [
    { rate: 0.10, min: 0, max: 11600 },
    { rate: 0.12, min: 11600, max: 47150 },
    { rate: 0.22, min: 47150, max: 100525 },
    { rate: 0.24, min: 100525, max: 191950 },
    { rate: 0.32, min: 191950, max: 243725 },
    { rate: 0.35, min: 243725, max: 609350 },
    { rate: 0.37, min: 609350, max: Infinity }
];

// 2024 Standard Deduction (Single)
const STANDARD_DEDUCTION = 14600;

// State tax rates by state
const STATE_TAX_RATES = {
    'AL': { name: 'Alabama', rate: 0.05 },
    'AK': { name: 'Alaska', rate: 0.00 },
    'AZ': { name: 'Arizona', rate: 0.025 },
    'AR': { name: 'Arkansas', rate: 0.055 },
    'CA': { name: 'California', rate: 0.093 },
    'CO': { name: 'Colorado', rate: 0.0455 },
    'CT': { name: 'Connecticut', rate: 0.0699 },
    'DE': { name: 'Delaware', rate: 0.066 },
    'DC': { name: 'District of Columbia', rate: 0.0895 },
    'FL': { name: 'Florida', rate: 0.00 },
    'GA': { name: 'Georgia', rate: 0.0575 },
    'HI': { name: 'Hawaii', rate: 0.11 },
    'ID': { name: 'Idaho', rate: 0.058 },
    'IL': { name: 'Illinois', rate: 0.0495 },
    'IN': { name: 'Indiana', rate: 0.0323 },
    'IA': { name: 'Iowa', rate: 0.06 },
    'KS': { name: 'Kansas', rate: 0.057 },
    'KY': { name: 'Kentucky', rate: 0.045 },
    'LA': { name: 'Louisiana', rate: 0.0425 },
    'ME': { name: 'Maine', rate: 0.0715 },
    'MD': { name: 'Maryland', rate: 0.0575 },
    'MA': { name: 'Massachusetts', rate: 0.05 },
    'MI': { name: 'Michigan', rate: 0.0425 },
    'MN': { name: 'Minnesota', rate: 0.0985 },
    'MS': { name: 'Mississippi', rate: 0.05 },
    'MO': { name: 'Missouri', rate: 0.054 },
    'MT': { name: 'Montana', rate: 0.068 },
    'NE': { name: 'Nebraska', rate: 0.0684 },
    'NV': { name: 'Nevada', rate: 0.00 },
    'NH': { name: 'New Hampshire', rate: 0.05 },
    'NJ': { name: 'New Jersey', rate: 0.1075 },
    'NM': { name: 'New Mexico', rate: 0.059 },
    'NY': { name: 'New York', rate: 0.109 },
    'NC': { name: 'North Carolina', rate: 0.0475 },
    'ND': { name: 'North Dakota', rate: 0.029 },
    'OH': { name: 'Ohio', rate: 0.0399 },
    'OK': { name: 'Oklahoma', rate: 0.0475 },
    'OR': { name: 'Oregon', rate: 0.099 },
    'PA': { name: 'Pennsylvania', rate: 0.0307 },
    'RI': { name: 'Rhode Island', rate: 0.0599 },
    'SC': { name: 'South Carolina', rate: 0.07 },
    'SD': { name: 'South Dakota', rate: 0.00 },
    'TN': { name: 'Tennessee', rate: 0.00 },
    'TX': { name: 'Texas', rate: 0.00 },
    'UT': { name: 'Utah', rate: 0.0495 },
    'VT': { name: 'Vermont', rate: 0.0875 },
    'VA': { name: 'Virginia', rate: 0.0575 },
    'WA': { name: 'Washington', rate: 0.00 },
    'WV': { name: 'West Virginia', rate: 0.065 },
    'WI': { name: 'Wisconsin', rate: 0.0765 },
    'WY': { name: 'Wyoming', rate: 0.00 }
};

// Major local tax cities by zip code range
const LOCAL_TAX_RATES = {
    // New York City
    '10001-10292': 0.0352,
    '10301-10314': 0.0352,
    '11001-11697': 0.0352,
    // Philadelphia 
    '19019-19191': 0.0399,
    // San Francisco
    '94101-94188': 0.0125,
    // Detroit
    '48201-48288': 0.024,
    // Cincinnati
    '45201-45249': 0.019,
    // Cleveland
    '44101-44179': 0.024,
    // Columbus
    '43201-43299': 0.025,
    // Baltimore
    '21201-21298': 0.032,
    // Birmingham
    '35201-35298': 0.01,
    // St. Louis
    '63101-63199': 0.01,
    // Kansas City
    '64101-64199': 0.01,
    // Default (most places have no local income tax)
    'default': 0.00
};

// Zip code to state mapping
const ZIP_TO_STATE = {
    '0': 'CT', '1': 'CT', '2': 'MA', '3': 'RI', '4': 'ME', '5': 'NH', '6': 'VT', '7': 'MA', '8': 'NJ', '9': 'NJ',
    '10': 'NY', '11': 'NY', '12': 'NY', '13': 'NY', '14': 'NY', '15': 'PA', '16': 'PA', '17': 'PA', '18': 'PA', '19': 'PA',
    '20': 'DC', '21': 'MD', '22': 'VA', '23': 'VA', '24': 'VA', '25': 'WV', '26': 'WV', '27': 'NC', '28': 'NC', '29': 'SC',
    '30': 'GA', '31': 'GA', '32': 'FL', '33': 'FL', '34': 'FL', '35': 'AL', '36': 'AL', '37': 'TN', '38': 'TN', '39': 'MS',
    '40': 'KY', '41': 'KY', '42': 'KY', '43': 'OH', '44': 'OH', '45': 'OH', '46': 'IN', '47': 'IN', '48': 'MI', '49': 'MI',
    '50': 'IA', '51': 'IA', '52': 'IA', '53': 'WI', '54': 'WI', '55': 'MN', '56': 'MN', '57': 'SD', '58': 'ND', '59': 'MT',
    '60': 'IL', '61': 'IL', '62': 'IL', '63': 'MO', '64': 'MO', '65': 'MO', '66': 'KS', '67': 'KS', '68': 'NE', '69': 'NE',
    '70': 'LA', '71': 'LA', '72': 'AR', '73': 'OK', '74': 'OK', '75': 'TX', '76': 'TX', '77': 'TX', '78': 'TX', '79': 'TX',
    '80': 'CO', '81': 'CO', '82': 'WY', '83': 'ID', '84': 'UT', '85': 'AZ', '86': 'AZ', '87': 'NM', '88': 'NM', '89': 'NV',
    '90': 'CA', '91': 'CA', '92': 'CA', '93': 'CA', '94': 'CA', '95': 'CA', '96': 'CA', '97': 'OR', '98': 'WA', '99': 'WA',
    // Additional territories and APO/FPO
    '006': 'PR', '007': 'PR', '008': 'PR', '009': 'PR',
    '099': 'APO/FPO',
    '340': 'VI', '962': 'GU', '969': 'MP', '967': 'HI', '968': 'HI', '977': 'AS'
};

document.addEventListener('DOMContentLoaded', function() {
    const taxForm = document.getElementById('tax-form');
    const resultsContainer = document.getElementById('results-container');
    
    taxForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input values
        const income = parseFloat(document.getElementById('income').value);
        const zipcode = document.getElementById('zipcode').value;
        
        // Validate inputs
        let isValid = true;
        
        if (isNaN(income) || income < 0) {
            document.getElementById('income-error').classList.remove('hidden');
            isValid = false;
        } else {
            document.getElementById('income-error').classList.add('hidden');
        }
        
        if (!/^\d{5}$/.test(zipcode)) {
            document.getElementById('zipcode-error').classList.remove('hidden');
            isValid = false;
        } else {
            document.getElementById('zipcode-error').classList.add('hidden');
        }
        
        if (!isValid) return;
        
        // Calculate taxes
        const { federalTax, stateTax, localTax, totalTax, effectiveRate } = calculateTaxes(income, zipcode);
        
        // Update results
        document.getElementById('tax-rate').textContent = (effectiveRate * 100).toFixed(2) + '%';
        document.getElementById('tax-burden').textContent = formatCurrency(totalTax);
        
        // Update chart
        updateChart(federalTax, stateTax, localTax, totalTax);
        
        // Show results
        resultsContainer.classList.remove('hidden');
        
        // Add custom savings tips based on income
        updateSavingsTips(income);
    });
    
    function calculateTaxes(income, zipcode) {
        // Calculate taxable income after standard deduction
        const taxableIncome = Math.max(0, income - STANDARD_DEDUCTION);
        
        // Calculate federal tax
        let federalTax = 0;
        for (let i = 0; i < FEDERAL_TAX_BRACKETS.length; i++) {
            const bracket = FEDERAL_TAX_BRACKETS[i];
            if (taxableIncome > bracket.min) {
                const taxableAmount = Math.min(taxableIncome, bracket.max) - bracket.min;
                federalTax += taxableAmount * bracket.rate;
            }
        }
        
        // Determine state based on zip code
        const stateCode = determineState(zipcode);
        const stateTaxRate = STATE_TAX_RATES[stateCode]?.rate || 0;
        
        // Apply a simplified calculation for state tax
        // In reality, states have their own brackets and deductions
        const stateTax = taxableIncome * stateTaxRate;
        
        // Get local tax rate
        const localTaxRate = getLocalTaxRate(zipcode);
        const localTax = income * localTaxRate; // Local taxes often apply to gross income
        
        // Calculate total tax and effective rate
        const totalTax = federalTax + stateTax + localTax;
        const effectiveRate = totalTax / income;
        
        return {
            federalTax,
            stateTax,
            localTax,
            totalTax,
            effectiveRate
        };
    }
    
    function determineState(zipcode) {
        const prefix = zipcode.substring(0, 1);
        const prefix3 = zipcode.substring(0, 3);
        
        // Check 3-digit prefixes first
        if (ZIP_TO_STATE[prefix3]) {
            return ZIP_TO_STATE[prefix3];
        }
        
        // Then check 1-digit prefixes
        return ZIP_TO_STATE[prefix] || 'NY'; // Default to NY if not found
    }
    
    function getLocalTaxRate(zipcode) {
        const numZip = parseInt(zipcode, 10);
        
        // Check each local tax range
        for (const range in LOCAL_TAX_RATES) {
            if (range === 'default') continue;
            
            const [min, max] = range.split('-').map(z => parseInt(z, 10));
            if (numZip >= min && numZip <= max) {
                return LOCAL_TAX_RATES[range];
            }
        }
        
        // Default local tax rate
        return LOCAL_TAX_RATES['default'];
    }
    
    function updateChart(federalTax, stateTax, localTax, totalTax) {
        const maxHeight = 200; // Maximum pixel height of bars
        
        // Calculate heights proportionally
        const federalHeight = totalTax > 0 ? (federalTax / totalTax) * maxHeight : 0;
        const stateHeight = totalTax > 0 ? (stateTax / totalTax) * maxHeight : 0;
        const localHeight = totalTax > 0 ? (localTax / totalTax) * maxHeight : 0;
        
        // Update federal bar
        const federalBar = document.getElementById('federal-bar');
        federalBar.style.height = federalHeight + 'px';
        federalBar.querySelector('.bar-value').textContent = formatCurrency(federalTax);
        
        // Update state bar
        const stateBar = document.getElementById('state-bar');
        stateBar.style.height = stateHeight + 'px';
        stateBar.querySelector('.bar-value').textContent = formatCurrency(stateTax);
        
        // Update local bar
        const localBar = document.getElementById('local-bar');
        localBar.style.height = localHeight + 'px';
        localBar.querySelector('.bar-value').textContent = formatCurrency(localTax);
    }
    
    function updateSavingsTips(income) {
        const savingsTips = document.getElementById('savings-tips');
        savingsTips.innerHTML = '';
        
        // Add base tips
        const tips = [
            'Contribute to a traditional 401(k) or IRA to reduce taxable income',
            'Consider HSA contributions if you have a high-deductible health plan',
        ];
        
        // Add income-specific tips
        if (income > 75000) {
            tips.push('Look into tax-loss harvesting if you have investments');
            tips.push('Consider municipal bonds for tax-free interest income');
        }
        
        if (income < 60000) {
            tips.push('You may qualify for the Saver\'s Credit for retirement contributions');
            tips.push('Check if you\'re eligible for the Earned Income Tax Credit (EITC)');
        }
        
        if (income > 125000) {
            tips.push('Explore backdoor Roth IRA conversion strategies');
            tips.push('Consider charitable giving to reduce your taxable income');
        }
        
        // Add tips to the list
        tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            savingsTips.appendChild(li);
        });
    }
    
    function formatCurrency(amount) {
        return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
});
