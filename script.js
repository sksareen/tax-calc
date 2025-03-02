// Tax year constants
const TAX_YEAR = 2024;

// Federal Tax Brackets by filing status for 2024
const FEDERAL_TAX_BRACKETS_2024 = {
    single: [
        { rate: 0.10, min: 0, max: 11600 },
        { rate: 0.12, min: 11600, max: 47150 },
        { rate: 0.22, min: 47150, max: 100525 },
        { rate: 0.24, min: 100525, max: 191950 },
        { rate: 0.32, min: 191950, max: 243725 },
        { rate: 0.35, min: 243725, max: 609350 },
        { rate: 0.37, min: 609350, max: Infinity }
    ],
    married_joint: [
        { rate: 0.10, min: 0, max: 23200 },
        { rate: 0.12, min: 23200, max: 94300 },
        { rate: 0.22, min: 94300, max: 201050 },
        { rate: 0.24, min: 201050, max: 383900 },
        { rate: 0.32, min: 383900, max: 487450 },
        { rate: 0.35, min: 487450, max: 731200 },
        { rate: 0.37, min: 731200, max: Infinity }
    ],
    married_separate: [
        { rate: 0.10, min: 0, max: 11600 },
        { rate: 0.12, min: 11600, max: 47150 },
        { rate: 0.22, min: 47150, max: 100525 },
        { rate: 0.24, min: 100525, max: 191950 },
        { rate: 0.32, min: 191950, max: 243725 },
        { rate: 0.35, min: 243725, max: 365600 },
        { rate: 0.37, min: 365600, max: Infinity }
    ],
    head_household: [
        { rate: 0.10, min: 0, max: 16550 },
        { rate: 0.12, min: 16550, max: 63100 },
        { rate: 0.22, min: 63100, max: 100500 },
        { rate: 0.24, min: 100500, max: 191950 },
        { rate: 0.32, min: 191950, max: 243700 },
        { rate: 0.35, min: 243700, max: 609350 },
        { rate: 0.37, min: 609350, max: Infinity }
    ],
    qualifying_widow: [
        { rate: 0.10, min: 0, max: 23200 },
        { rate: 0.12, min: 23200, max: 94300 },
        { rate: 0.22, min: 94300, max: 201050 },
        { rate: 0.24, min: 201050, max: 383900 },
        { rate: 0.32, min: 383900, max: 487450 },
        { rate: 0.35, min: 487450, max: 731200 },
        { rate: 0.37, min: 731200, max: Infinity }
    ]
};

// Federal Tax Brackets by filing status for 2023
const FEDERAL_TAX_BRACKETS_2023 = {
    single: [
        { rate: 0.10, min: 0, max: 11000 },
        { rate: 0.12, min: 11000, max: 44725 },
        { rate: 0.22, min: 44725, max: 95375 },
        { rate: 0.24, min: 95375, max: 182100 },
        { rate: 0.32, min: 182100, max: 231250 },
        { rate: 0.35, min: 231250, max: 578125 },
        { rate: 0.37, min: 578125, max: Infinity }
    ],
    married_joint: [
        { rate: 0.10, min: 0, max: 22000 },
        { rate: 0.12, min: 22000, max: 89450 },
        { rate: 0.22, min: 89450, max: 190750 },
        { rate: 0.24, min: 190750, max: 364200 },
        { rate: 0.32, min: 364200, max: 462500 },
        { rate: 0.35, min: 462500, max: 693750 },
        { rate: 0.37, min: 693750, max: Infinity }
    ],
    married_separate: [
        { rate: 0.10, min: 0, max: 11000 },
        { rate: 0.12, min: 11000, max: 44725 },
        { rate: 0.22, min: 44725, max: 95375 },
        { rate: 0.24, min: 95375, max: 182100 },
        { rate: 0.32, min: 182100, max: 231250 },
        { rate: 0.35, min: 231250, max: 346875 },
        { rate: 0.37, min: 346875, max: Infinity }
    ],
    head_household: [
        { rate: 0.10, min: 0, max: 15700 },
        { rate: 0.12, min: 15700, max: 59850 },
        { rate: 0.22, min: 59850, max: 95350 },
        { rate: 0.24, min: 95350, max: 182100 },
        { rate: 0.32, min: 182100, max: 231250 },
        { rate: 0.35, min: 231250, max: 578100 },
        { rate: 0.37, min: 578100, max: Infinity }
    ],
    qualifying_widow: [
        { rate: 0.10, min: 0, max: 22000 },
        { rate: 0.12, min: 22000, max: 89450 },
        { rate: 0.22, min: 89450, max: 190750 },
        { rate: 0.24, min: 190750, max: 364200 },
        { rate: 0.32, min: 364200, max: 462500 },
        { rate: 0.35, min: 462500, max: 693750 },
        { rate: 0.37, min: 693750, max: Infinity }
    ]
};

// Standard deduction by filing status and year
const STANDARD_DEDUCTIONS = {
    2024: {
        single: 14600,
        married_joint: 29200,
        married_separate: 14600,
        head_household: 21900,
        qualifying_widow: 29200
    },
    2023: {
        single: 13850,
        married_joint: 27700,
        married_separate: 13850,
        head_household: 20800,
        qualifying_widow: 27700
    }
};

// Maximum retirement contribution limits by year
const RETIREMENT_LIMITS = {
    2024: {
        under_50: 23000,
        over_50: 30500
    },
    2023: {
        under_50: 22500,
        over_50: 30000
    }
};

// State tax rates by state - simplified flat rates for most states
const STATE_TAX_RATES = {
    'AL': { name: 'Alabama', rate: 0.05, progressive: true },
    'AK': { name: 'Alaska', rate: 0.00 },
    'AZ': { name: 'Arizona', rate: 0.025, progressive: true },
    'AR': { name: 'Arkansas', rate: 0.055, progressive: true },
    'CA': { name: 'California', rate: 0.093, progressive: true },
    'CO': { name: 'Colorado', rate: 0.0455 },
    'CT': { name: 'Connecticut', rate: 0.0699, progressive: true },
    'DE': { name: 'Delaware', rate: 0.066, progressive: true },
    'DC': { name: 'District of Columbia', rate: 0.0895, progressive: true },
    'FL': { name: 'Florida', rate: 0.00 },
    'GA': { name: 'Georgia', rate: 0.0575, progressive: true },
    'HI': { name: 'Hawaii', rate: 0.11, progressive: true },
    'ID': { name: 'Idaho', rate: 0.058, progressive: true },
    'IL': { name: 'Illinois', rate: 0.0495 },
    'IN': { name: 'Indiana', rate: 0.0323 },
    'IA': { name: 'Iowa', rate: 0.06, progressive: true },
    'KS': { name: 'Kansas', rate: 0.057, progressive: true },
    'KY': { name: 'Kentucky', rate: 0.045 },
    'LA': { name: 'Louisiana', rate: 0.0425, progressive: true },
    'ME': { name: 'Maine', rate: 0.0715, progressive: true },
    'MD': { name: 'Maryland', rate: 0.0575, progressive: true },
    'MA': { name: 'Massachusetts', rate: 0.05 },
    'MI': { name: 'Michigan', rate: 0.0425 },
    'MN': { name: 'Minnesota', rate: 0.0985, progressive: true },
    'MS': { name: 'Mississippi', rate: 0.05 },
    'MO': { name: 'Missouri', rate: 0.054, progressive: true },
    'MT': { name: 'Montana', rate: 0.068, progressive: true },
    'NE': { name: 'Nebraska', rate: 0.0684, progressive: true },
    'NV': { name: 'Nevada', rate: 0.00 },
    'NH': { name: 'New Hampshire', rate: 0.05 },
    'NJ': { name: 'New Jersey', rate: 0.1075, progressive: true },
    'NM': { name: 'New Mexico', rate: 0.059, progressive: true },
    'NY': { name: 'New York', rate: 0.109, progressive: true },
    'NC': { name: 'North Carolina', rate: 0.0475 },
    'ND': { name: 'North Dakota', rate: 0.029, progressive: true },
    'OH': { name: 'Ohio', rate: 0.0399, progressive: true },
    'OK': { name: 'Oklahoma', rate: 0.0475, progressive: true },
    'OR': { name: 'Oregon', rate: 0.099, progressive: true },
    'PA': { name: 'Pennsylvania', rate: 0.0307 },
    'RI': { name: 'Rhode Island', rate: 0.0599, progressive: true },
    'SC': { name: 'South Carolina', rate: 0.07, progressive: true },
    'SD': { name: 'South Dakota', rate: 0.00 },
    'TN': { name: 'Tennessee', rate: 0.00 },
    'TX': { name: 'Texas', rate: 0.00 },
    'UT': { name: 'Utah', rate: 0.0495 },
    'VT': { name: 'Vermont', rate: 0.0875, progressive: true },
    'VA': { name: 'Virginia', rate: 0.0575, progressive: true },
    'WA': { name: 'Washington', rate: 0.00 },
    'WV': { name: 'West Virginia', rate: 0.065, progressive: true },
    'WI': { name: 'Wisconsin', rate: 0.0765, progressive: true },
    'WY': { name: 'Wyoming', rate: 0.00 }
};

// Progressive state tax brackets for select states
const STATE_TAX_BRACKETS = {
    // California 2024 tax brackets (Single)
    'CA': [
        { rate: 0.01, min: 0, max: 10412 },
        { rate: 0.02, min: 10412, max: 24684 },
        { rate: 0.04, min: 24684, max: 38959 },
        { rate: 0.06, min: 38959, max: 54081 },
        { rate: 0.08, min: 54081, max: 68350 },
        { rate: 0.093, min: 68350, max: 349137 },
        { rate: 0.103, min: 349137, max: 418961 },
        { rate: 0.113, min: 418961, max: 698271 },
        { rate: 0.123, min: 698271, max: Infinity }
    ],
    // New York 2024 tax brackets (Single)
    'NY': [
        { rate: 0.04, min: 0, max: 13900 },
        { rate: 0.045, min: 13900, max: 21400 },
        { rate: 0.0525, min: 21400, max: 80650 },
        { rate: 0.059, min: 80650, max: 215400 },
        { rate: 0.0633, min: 215400, max: 1077550 },
        { rate: 0.0685, min: 1077550, max: 5000000 },
        { rate: 0.0882, min: 5000000, max: 25000000 },
        { rate: 0.109, min: 25000000, max: Infinity }
    ],
    // New Jersey 2024 tax brackets (Single)
    'NJ': [
        { rate: 0.014, min: 0, max: 20000 },
        { rate: 0.0175, min: 20000, max: 35000 },
        { rate: 0.035, min: 35000, max: 40000 },
        { rate: 0.05525, min: 40000, max: 75000 },
        { rate: 0.0637, min: 75000, max: 500000 },
        { rate: 0.0897, min: 500000, max: 1000000 },
        { rate: 0.1075, min: 1000000, max: Infinity }
    ],
    // Minnesota 2024 tax brackets (Single)
    'MN': [
        { rate: 0.0535, min: 0, max: 30070 },
        { rate: 0.068, min: 30070, max: 98760 },
        { rate: 0.0785, min: 98760, max: 183340 },
        { rate: 0.0985, min: 183340, max: Infinity }
    ],
    // Oregon 2024 tax brackets (Single)
    'OR': [
        { rate: 0.0475, min: 0, max: 4050 },
        { rate: 0.0675, min: 4050, max: 10200 },
        { rate: 0.0875, min: 10200, max: 125000 },
        { rate: 0.099, min: 125000, max: Infinity }
    ],
    // Hawaii 2024 tax brackets (Single)
    'HI': [
        { rate: 0.014, min: 0, max: 2400 },
        { rate: 0.032, min: 2400, max: 4800 },
        { rate: 0.055, min: 4800, max: 9600 },
        { rate: 0.064, min: 9600, max: 14400 },
        { rate: 0.068, min: 14400, max: 19200 },
        { rate: 0.072, min: 19200, max: 24000 },
        { rate: 0.076, min: 24000, max: 36000 },
        { rate: 0.079, min: 36000, max: 48000 },
        { rate: 0.0825, min: 48000, max: 150000 },
        { rate: 0.09, min: 150000, max: 175000 },
        { rate: 0.10, min: 175000, max: 200000 },
        { rate: 0.11, min: 200000, max: Infinity }
    ]
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

// City to state mapping for common zip codes
const CITY_MAPPING = {
    // New York City
    '100': { city: 'New York City', state: 'NY' },
    '101': { city: 'New York City', state: 'NY' },
    '102': { city: 'New York City', state: 'NY' },
    '103': { city: 'Staten Island', state: 'NY' },
    '104': { city: 'Bronx', state: 'NY' },
    '105': { city: 'Bronx', state: 'NY' },
    '110': { city: 'Queens', state: 'NY' },
    '111': { city: 'Queens', state: 'NY' },
    '112': { city: 'Brooklyn', state: 'NY' },
    '113': { city: 'Queens', state: 'NY' },
    '114': { city: 'Queens', state: 'NY' },
    '116': { city: 'Queens', state: 'NY' },
    // Los Angeles
    '900': { city: 'Los Angeles', state: 'CA' },
    '901': { city: 'Los Angeles', state: 'CA' },
    '902': { city: 'Los Angeles', state: 'CA' },
    '913': { city: 'Los Angeles', state: 'CA' },
    // Chicago
    '606': { city: 'Chicago', state: 'IL' },
    '607': { city: 'Chicago', state: 'IL' },
    // Houston
    '770': { city: 'Houston', state: 'TX' },
    '771': { city: 'Houston', state: 'TX' },
    '772': { city: 'Houston', state: 'TX' },
    // Philadelphia
    '191': { city: 'Philadelphia', state: 'PA' },
    // Phoenix
    '850': { city: 'Phoenix', state: 'AZ' },
    '851': { city: 'Phoenix', state: 'AZ' },
    '852': { city: 'Phoenix', state: 'AZ' },
    // San Antonio
    '782': { city: 'San Antonio', state: 'TX' },
    // San Diego
    '921': { city: 'San Diego', state: 'CA' },
    '919': { city: 'San Diego', state: 'CA' },
    '920': { city: 'San Diego', state: 'CA' },
    // Dallas
    '752': { city: 'Dallas', state: 'TX' },
    '753': { city: 'Dallas', state: 'TX' },
    // San Jose
    '951': { city: 'San Jose', state: 'CA' },
    // Austin
    '787': { city: 'Austin', state: 'TX' },
    // San Francisco
    '941': { city: 'San Francisco', state: 'CA' },
    '940': { city: 'San Francisco', state: 'CA' },
    // Seattle
    '981': { city: 'Seattle', state: 'WA' },
    // Denver
    '802': { city: 'Denver', state: 'CO' },
    // Boston
    '021': { city: 'Boston', state: 'MA' },
    '022': { city: 'Boston', state: 'MA' },
    // Miami
    '331': { city: 'Miami', state: 'FL' },
    // Atlanta
    '303': { city: 'Atlanta', state: 'GA' },
    // Portland
    '972': { city: 'Portland', state: 'OR' },
    // Las Vegas
    '891': { city: 'Las Vegas', state: 'NV' },
    // New Orleans
    '701': { city: 'New Orleans', state: 'LA' },
    // Washington DC
    '200': { city: 'Washington DC', state: 'DC' },
};

// Tax savings links and offerings
const TAX_SAVINGS_OFFERS = {
    retirement: {
        title: "Contribute to a retirement account",
        description: "Reduce your taxable income by contributing to a traditional 401(k) or IRA",
        link: "https://www.investopedia.com/retirement/401k-contribution-limits/",
        threshold: 0 // Everyone can benefit
    },
    hsa: {
        title: "Health Savings Account (HSA)",
        description: "Triple tax advantage: tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses",
        link: "https://www.healthcare.gov/high-deductible-health-plan/hsa-eligibility/",
        threshold: 40000 // More valuable at higher incomes
    },
    education: {
        title: "Education Credits",
        description: "American Opportunity Credit (up to $2,500) or Lifetime Learning Credit (up to $2,000)",
        link: "https://www.irs.gov/credits-deductions/individuals/education-credits-aotc-llc",
        threshold: 0 // Everyone eligible for education can benefit
    },
    childcare: {
        title: "Child Tax Credit",
        description: "Up to $2,000 per qualifying child under the age of 17",
        link: "https://www.irs.gov/credits-deductions/individuals/child-tax-credit",
        threshold: 25000 // More relevant for those with moderate income
    },
    eitc: {
        title: "Earned Income Tax Credit",
        description: "Tax credit for low to moderate income workers",
        link: "https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc",
        threshold: 0,
        maxIncome: 60000 // Only relevant for lower incomes
    },
    charitable: {
        title: "Charitable Contributions",
        description: "Deduct donations to qualified charitable organizations",
        link: "https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contribution-deductions",
        threshold: 80000 // More valuable at higher incomes
    },
    energyCredits: {
        title: "Residential Energy Credits",
        description: "Tax credits for energy-efficient home improvements and renewable energy",
        link: "https://www.irs.gov/credits-deductions/individuals/residential-clean-energy-credit",
        threshold: 60000 // Home improvements more likely at higher incomes
    }
};

// Cache for parsed CSV data
let ZIP_DATA = null;
let ZIP_TO_STATE_MAP = {};
let ZIP_TO_CITY_MAP = {};

// Function to load and parse CSV data
async function loadZipData() {
    try {
        const response = await fetch('ZIP_Locale_Detail copy.csv');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.text();
        
        // Parse CSV data
        const lines = data.split('\n');
        const zipData = [];
        
        // Skip header lines (first two lines)
        for (let i = 2; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
            
            // Parse CSV line accounting for quotes and commas within quotes
            const values = parseCSVLine(line);
            
            // Extract relevant data: Delivery ZIP, Locale Name, Physical City, Physical State
            if (values.length >= 10) {
                const zipCode = values[4]; // DELIVERY ZIPCODE
                const localeName = values[5]; // LOCALE NAME
                const city = values[7]; // PHYSICAL CITY
                const state = values[8]; // PHYSICAL STATE
                
                if (zipCode && city && state) {
                    zipData.push({
                        zipCode,
                        localeName,
                        city,
                        state
                    });
                    
                    // Create mappings - use 3-digit prefix
                    if (zipCode.length >= 3) {
                        const zipPrefix = zipCode.substring(0, 3);
                        
                        // Map ZIP to state
                        ZIP_TO_STATE_MAP[zipPrefix] = state;
                        
                        // Map ZIP to city
                        ZIP_TO_CITY_MAP[zipPrefix] = {
                            city: localeName || city,
                            state: state
                        };
                    }
                }
            }
        }
        
        if (zipData.length === 0) {
            throw new Error('No valid ZIP data found in CSV');
        }
        
        ZIP_DATA = zipData;
        console.log(`Loaded ${zipData.length} ZIP code entries`);
        
        // Build additional mappings for single-digit prefixes
        buildSingleDigitStateMappings();
        
        return true;
    } catch (error) {
        console.error('Error loading ZIP data:', error);
        console.log('Falling back to hardcoded mappings');
        
        // Initialize maps with existing mappings as fallback
        initializeFallbackMappings();
        
        return false;
    }
}

// Initialize fallback mappings from existing hardcoded values
function initializeFallbackMappings() {
    // Copy existing ZIP_TO_STATE to our dynamic map
    Object.keys(ZIP_TO_STATE).forEach(prefix => {
        ZIP_TO_STATE_MAP[prefix] = ZIP_TO_STATE[prefix];
    });
    
    // Copy existing CITY_MAPPING to our dynamic map
    Object.keys(CITY_MAPPING).forEach(prefix => {
        ZIP_TO_CITY_MAP[prefix] = CITY_MAPPING[prefix];
    });
}

// Helper function to parse a CSV line properly handling quotes
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            // Toggle quote state
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            // End of field
            result.push(current.trim());
            current = '';
        } else {
            // Add character to current field
            current += char;
        }
    }
    
    // Don't forget the last field
    if (current) {
        result.push(current.trim());
    }
    
    return result;
}

// Build state mappings for single-digit ZIP prefixes for fallback
function buildSingleDigitStateMappings() {
    const singleDigitMap = {};
    
    // Analyze the 3-digit prefixes to determine common states for each first digit
    Object.keys(ZIP_TO_STATE_MAP).forEach(prefix => {
        const firstDigit = prefix.charAt(0);
        const state = ZIP_TO_STATE_MAP[prefix];
        
        if (!singleDigitMap[firstDigit]) {
            singleDigitMap[firstDigit] = { [state]: 1 };
        } else {
            singleDigitMap[firstDigit][state] = (singleDigitMap[firstDigit][state] || 0) + 1;
        }
    });
    
    // For each first digit, use the most common state
    Object.keys(singleDigitMap).forEach(digit => {
        let maxCount = 0;
        let mostCommonState = 'NY'; // Default
        
        Object.keys(singleDigitMap[digit]).forEach(state => {
            if (singleDigitMap[digit][state] > maxCount) {
                maxCount = singleDigitMap[digit][state];
                mostCommonState = state;
            }
        });
        
        ZIP_TO_STATE_MAP[digit] = mostCommonState;
    });
}

// Initialize the page when loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Show loading indicator
    const loadingIndicator = document.getElementById('data-loading-indicator');
    const dataSourceType = document.getElementById('data-source-type');
    
    // Load ZIP data at startup with proper error handling
    loadZipData()
        .then(success => {
            // Hide loading indicator
            loadingIndicator.classList.add('hidden');
            
            if (success) {
                console.log('ZIP data loaded successfully from CSV');
                // Update badge to show we're using official USPS data
                document.querySelector('.usps-data').classList.add('active');
                // Update data source type in assumptions
                dataSourceType.textContent = 'USPS ZIP database';
            } else {
                console.log('Using fallback ZIP code mappings');
                // Update badge to show we're using alternative data
                document.querySelector('.usps-data').textContent = 'Alternative ZIP Data';
                // Update data source type in assumptions
                dataSourceType.textContent = 'Built-in ZIP database (limited)';
            }
        })
        .catch(error => {
            // Hide loading indicator even on error
            loadingIndicator.classList.add('hidden');
            
            console.error('Error in ZIP data initialization:', error);
            // Ensure mappings exist even in case of errors
            initializeFallbackMappings();
            // Update badge to show we're using alternative data
            document.querySelector('.usps-data').textContent = 'Alternative ZIP Data';
            // Update data source type in assumptions
            dataSourceType.textContent = 'Built-in ZIP database (limited)';
        });
    
    // Set tax year throughout the page
    setTaxYear();
    
    // Setup advanced options toggle
    const advancedToggle = document.getElementById('advanced-toggle');
    const advancedPanel = document.getElementById('advanced-panel');
    
    advancedToggle.addEventListener('click', function() {
        advancedPanel.classList.toggle('open');
        advancedToggle.classList.toggle('expanded');
        updateAssumptions();
    });
    
    // Setup conditional inputs
    const retirementCheckbox = document.getElementById('retirement-checkbox');
    const retirementAmountContainer = document.getElementById('retirement-amount-container');
    
    retirementCheckbox.addEventListener('change', function() {
        retirementAmountContainer.classList.toggle('hidden', !this.checked);
        updateAssumptions();
    });
    
    const itemizedCheckbox = document.getElementById('itemized-checkbox');
    const itemizedAmountContainer = document.getElementById('itemized-amount-container');
    
    itemizedCheckbox.addEventListener('change', function() {
        itemizedAmountContainer.classList.toggle('hidden', !this.checked);
        updateAssumptions();
    });
    
    // Update assumptions when filing status or tax year changes
    document.getElementById('filing-status').addEventListener('change', updateAssumptions);
    document.getElementById('tax-year-select').addEventListener('change', function() {
        setTaxYear(this.value);
        updateAssumptions();
    });
    
    // Form submission event listener
    const form = document.getElementById('tax-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const income = parseFloat(document.getElementById('income').value);
        const zipcode = document.getElementById('zipcode').value;
        
        // Get advanced options
        const filingStatus = document.getElementById('filing-status').value;
        const selectedTaxYear = document.getElementById('tax-year-select').value;
        
        // Get retirement contribution if applicable
        let retirementContribution = 0;
        if (retirementCheckbox.checked) {
            retirementContribution = parseFloat(document.getElementById('retirement-amount').value) || 0;
        }
        
        // Get itemized deduction if applicable
        let itemizedDeduction = 0;
        let useItemized = false;
        if (itemizedCheckbox.checked) {
            itemizedDeduction = parseFloat(document.getElementById('itemized-amount').value) || 0;
            useItemized = true;
        }
        
        // Validate inputs
        if (validateInputs(income, zipcode)) {
            // Display location info
            displayLocationInfo(zipcode);
            
            // Calculate taxes with advanced options
            const taxResults = calculateTaxes(income, zipcode, {
                filingStatus,
                taxYear: selectedTaxYear,
                retirementContribution,
                itemizedDeduction,
                useItemized
            });
            
            // Display results
            displayResults(taxResults);
            
            // Update the tax breakdown chart
            createPieChart(taxResults.federalTax, taxResults.stateTax, taxResults.localTax);
            
            // Show tax bracket visualization
            displayTaxBracketsVisualization(income, filingStatus, selectedTaxYear, retirementContribution);
            
            // Update savings tips based on income
            updateSavingsTips(income);
            
            // Show results container
            document.getElementById('results-container').classList.remove('hidden');
            
            // Update the main container to show results layout
            document.getElementById('main-container').classList.add('show-results');
            
            // Smooth scroll to results
            document.getElementById('results-container').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
    
    // Real-time input validation
    const incomeInput = document.getElementById('income');
    const zipcodeInput = document.getElementById('zipcode');
    
    // Income input validation
    incomeInput.addEventListener('input', function() {
        validateIncomeInput();
    });
    
    // Zipcode input validation
    zipcodeInput.addEventListener('input', function() {
        validateZipcodeInput();
    });
    
    function validateInputs(income, zipcode) {
        const incomeValid = validateIncomeInput();
        const zipcodeValid = validateZipcodeInput();
        
        return incomeValid && zipcodeValid;
    }
    
    function validateIncomeInput() {
        const income = document.getElementById('income').value;
        const incomeError = document.getElementById('income-error');
        
        if (!income || isNaN(income) || income <= 0) {
            incomeError.classList.remove('hidden');
            return false;
        } else {
            incomeError.classList.add('hidden');
            return true;
        }
    }
    
    function validateZipcodeInput() {
        const zipcode = document.getElementById('zipcode').value;
        const zipcodeError = document.getElementById('zipcode-error');
        
        if (!zipcode || !zipcode.match(/^\d{5}$/)) {
            zipcodeError.classList.remove('hidden');
            return false;
        } else {
            zipcodeError.classList.add('hidden');
            return true;
        }
    }
    
    function setTaxYear(year = TAX_YEAR) {
        const taxYearElements = document.querySelectorAll('.tax-year');
        taxYearElements.forEach(el => {
            el.textContent = year;
        });
    }
    
    function updateAssumptions() {
        // Get selected options
        const filingStatus = document.getElementById('filing-status').value;
        const taxYear = document.getElementById('tax-year-select').value;
        const useRetirement = document.getElementById('retirement-checkbox').checked;
        const useItemized = document.getElementById('itemized-checkbox').checked;
        
        // Update filing status in assumptions
        const filingStatusText = document.getElementById('selected-filing-status');
        filingStatusText.textContent = formatFilingStatus(filingStatus);
        
        // Update deduction in assumptions
        const deductionElement = document.getElementById('deduction-assumption');
        
        if (useItemized) {
            const itemizedAmount = document.getElementById('itemized-amount').value || '0';
            deductionElement.textContent = `Itemized deduction: $${formatNumber(itemizedAmount)}`;
        } else {
            const standardDeduction = STANDARD_DEDUCTIONS[taxYear][filingStatus];
            deductionElement.textContent = `Standard deduction: $${formatNumber(standardDeduction)}`;
        }
        
        // Update retirement contribution in assumptions
        const retirementElement = document.getElementById('retirement-assumption');
        
        if (useRetirement) {
            const retirementAmount = document.getElementById('retirement-amount').value || '0';
            retirementElement.textContent = `Retirement contribution: $${formatNumber(retirementAmount)}`;
        } else {
            retirementElement.textContent = 'No retirement contributions';
        }
    }
    
    function formatFilingStatus(status) {
        // Convert snake_case to readable text
        const map = {
            'single': 'Single',
            'married_joint': 'Married Filing Jointly',
            'married_separate': 'Married Filing Separately',
            'head_household': 'Head of Household',
            'qualifying_widow': 'Qualifying Widow(er)'
        };
        
        return map[status] || status;
    }
    
    function formatNumber(num) {
        return new Intl.NumberFormat('en-US').format(num);
    }
    
    function displayLocationInfo(zipcode) {
        const locationInfo = document.getElementById('location-info');
        const locationText = document.getElementById('location-text');
        
        // Get state code
        const stateCode = determineState(zipcode);
        const stateName = STATE_TAX_RATES[stateCode]?.name || 'Unknown State';
        
        // Try different zip prefix lengths for city matching (more specific first)
        let cityInfo = null;
        const zipPrefix3 = zipcode.substring(0, 3);
        
        // Try 3-digit prefix first (most specific)
        cityInfo = ZIP_TO_CITY_MAP[zipPrefix3];
        
        // If not found and it's a valid zipcode, try to determine the general area
        if (!cityInfo && zipcode.match(/^\d{5}$/)) {
            // For users where we don't have an exact city match, at least show the state
            locationText.textContent = `Location: ${stateName}`;
        } else if (cityInfo) {
            // We have a city match
            locationText.textContent = `Location: ${cityInfo.city}, ${stateName}`;
        } else {
            // Fallback for invalid zipcodes
            locationText.textContent = `Location: ${stateName}`;
        }
        
        locationInfo.classList.remove('hidden');
    }
    
    function determineState(zipcode) {
        // Validate zipcode format
        if (!zipcode || typeof zipcode !== 'string') {
            return 'NY'; // Default fallback
        }
        
        // Use our dynamically loaded mappings first
        // Handle special territory codes with 3 digits
        const prefix3 = zipcode.substring(0, 3);
        if (ZIP_TO_STATE_MAP[prefix3]) {
            const stateCode = ZIP_TO_STATE_MAP[prefix3];
            // Convert to 2-letter state code if needed
            return convertStateToCode(stateCode);
        }
        
        // For standard US zip codes, use the first digit
        const prefix1 = zipcode.substring(0, 1);
        if (ZIP_TO_STATE_MAP[prefix1]) {
            const stateCode = ZIP_TO_STATE_MAP[prefix1];
            return convertStateToCode(stateCode);
        }
        
        // Fallback to original mapping if our dynamic data isn't loaded
        if (Object.keys(ZIP_TO_STATE).length > 0) {
            if (ZIP_TO_STATE[prefix3]) {
                return ZIP_TO_STATE[prefix3];
            }
            
            if (ZIP_TO_STATE[prefix1]) {
                return ZIP_TO_STATE[prefix1];
            }
        }
        
        // If we can't determine the state, default to New York
        return 'NY';
    }
    
    // Helper function to convert state names to two-letter codes
    function convertStateToCode(state) {
        // If already a 2-letter code, return as is
        if (state.length === 2) {
            return state;
        }
        
        // Map of state names to codes (add more as needed)
        const STATE_NAMES_TO_CODES = {
            'ALABAMA': 'AL',
            'ALASKA': 'AK',
            'ARIZONA': 'AZ',
            'ARKANSAS': 'AR',
            'CALIFORNIA': 'CA',
            'COLORADO': 'CO',
            'CONNECTICUT': 'CT',
            'DELAWARE': 'DE',
            'DISTRICT OF COLUMBIA': 'DC',
            'FLORIDA': 'FL',
            'GEORGIA': 'GA',
            'HAWAII': 'HI',
            'IDAHO': 'ID',
            'ILLINOIS': 'IL',
            'INDIANA': 'IN',
            'IOWA': 'IA',
            'KANSAS': 'KS',
            'KENTUCKY': 'KY',
            'LOUISIANA': 'LA',
            'MAINE': 'ME',
            'MARYLAND': 'MD',
            'MASSACHUSETTS': 'MA',
            'MICHIGAN': 'MI',
            'MINNESOTA': 'MN',
            'MISSISSIPPI': 'MS',
            'MISSOURI': 'MO',
            'MONTANA': 'MT',
            'NEBRASKA': 'NE',
            'NEVADA': 'NV',
            'NEW HAMPSHIRE': 'NH',
            'NEW JERSEY': 'NJ',
            'NEW MEXICO': 'NM',
            'NEW YORK': 'NY',
            'NORTH CAROLINA': 'NC',
            'NORTH DAKOTA': 'ND',
            'OHIO': 'OH',
            'OKLAHOMA': 'OK',
            'OREGON': 'OR',
            'PENNSYLVANIA': 'PA',
            'RHODE ISLAND': 'RI',
            'SOUTH CAROLINA': 'SC',
            'SOUTH DAKOTA': 'SD',
            'TENNESSEE': 'TN',
            'TEXAS': 'TX',
            'UTAH': 'UT',
            'Vermont': 'VT',
            'Virginia': 'VA',
            'Washington': 'WA',
            'West Virginia': 'WV',
            'Wisconsin': 'WI',
            'Wyoming': 'WY',
            'PUERTO RICO': 'PR',
            'GUAM': 'GU',
            'VIRGIN ISLANDS': 'VI'
        };
        
        return STATE_NAMES_TO_CODES[state.toUpperCase()] || state;
    }
    
    function calculateTaxes(income, zipcode, options = {}) {
        // Set default options
        const {
            filingStatus = 'single',
            taxYear = TAX_YEAR,
            retirementContribution = 0,
            itemizedDeduction = 0,
            useItemized = false
        } = options;
        
        // Determine which tax brackets to use based on year
        const federalBrackets = taxYear === '2024' ? 
            FEDERAL_TAX_BRACKETS_2024[filingStatus] : 
            FEDERAL_TAX_BRACKETS_2023[filingStatus];
        
        // Get standard deduction based on filing status and year
        const standardDeduction = STANDARD_DEDUCTIONS[taxYear][filingStatus];
        
        // Reduce income by retirement contributions
        const incomeAfterRetirement = Math.max(0, income - retirementContribution);
        
        // Calculate taxable income after deductions
        let deduction = useItemized ? itemizedDeduction : standardDeduction;
        const taxableIncome = Math.max(0, incomeAfterRetirement - deduction);
        
        // Calculate federal tax
        let federalTax = 0;
        for (let i = 0; i < federalBrackets.length; i++) {
            const bracket = federalBrackets[i];
            if (taxableIncome > bracket.min) {
                const taxableAmount = Math.min(taxableIncome, bracket.max) - bracket.min;
                federalTax += taxableAmount * bracket.rate;
            }
        }
        
        // Determine state based on zip code
        const stateCode = determineState(zipcode);
        const stateInfo = STATE_TAX_RATES[stateCode] || { name: 'Unknown', rate: 0 };
        
        // Calculate state tax - using progressive brackets if available
        let stateTax = 0;
        if (stateInfo.progressive && STATE_TAX_BRACKETS[stateCode]) {
            // Use progressive tax brackets for this state
            for (let i = 0; i < STATE_TAX_BRACKETS[stateCode].length; i++) {
                const bracket = STATE_TAX_BRACKETS[stateCode][i];
                if (taxableIncome > bracket.min) {
                    const taxableAmount = Math.min(taxableIncome, bracket.max) - bracket.min;
                    stateTax += taxableAmount * bracket.rate;
                }
            }
        } else {
            // Use flat tax rate (simplified)
            stateTax = taxableIncome * stateInfo.rate;
        }
        
        // Get local tax rate
        const localTaxRate = getLocalTaxRate(zipcode);
        const localTax = income * localTaxRate; // Local taxes often apply to gross income
        
        // Calculate total tax and effective rate
        const totalTax = federalTax + stateTax + localTax;
        const effectiveRate = income > 0 ? totalTax / income : 0;
        
        return {
            federalTax,
            stateTax,
            localTax,
            totalTax,
            effectiveRate,
            taxableIncome,
            deduction,
            retirementContribution
        };
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
    
    function displayResults(results) {
        // Update tax rate
        document.getElementById('tax-rate').textContent = `${(results.effectiveRate * 100).toFixed(1)}%`;
        
        // Update tax burden
        document.getElementById('tax-burden').textContent = formatCurrency(results.totalTax);
        
        // Initialize the tax rate map
        if (!window.taxMapInitialized) {
            initializeTaxMap();
            window.taxMapInitialized = true;
        }
    }
    
    function createPieChart(federalTax, stateTax, localTax) {
        // Get the chart context
        const ctx = document.getElementById('tax-pie-chart').getContext('2d');
        
        // Destroy any existing chart
        if (window.taxChart) {
            window.taxChart.destroy();
        }
        
        // Define chart data
        const data = {
            labels: ['Federal', 'State', 'Local'],
            datasets: [{
                data: [federalTax, stateTax, localTax],
                backgroundColor: [
                    getComputedStyle(document.documentElement).getPropertyValue('--federal-color').trim(),
                    getComputedStyle(document.documentElement).getPropertyValue('--state-color').trim(),
                    getComputedStyle(document.documentElement).getPropertyValue('--local-color').trim()
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        };
        
        // Chart options
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: ${formatCurrency(value)}`;
                        }
                    }
                },
                legend: {
                    display: false
                }
            }
        };
        
        // Create the chart
        window.taxChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: options
        });
    }
    
    function displayTaxBracketsVisualization(income, filingStatus = 'single', taxYear = TAX_YEAR, retirementContribution = 0) {
        const container = document.getElementById('tax-brackets-visualization');
        container.innerHTML = '';
        
        // Determine which tax brackets to use
        const brackets = taxYear === '2024' ? 
            FEDERAL_TAX_BRACKETS_2024[filingStatus] : 
            FEDERAL_TAX_BRACKETS_2023[filingStatus];
        
        // Get standard deduction amount
        const standardDeduction = STANDARD_DEDUCTIONS[taxYear][filingStatus];
        
        // Reduce income by retirement contributions
        const incomeAfterRetirement = Math.max(0, income - retirementContribution);
        
        // Calculate taxable income after standard deduction
        const taxableIncome = Math.max(0, incomeAfterRetirement - standardDeduction);
        
        // Create visual representation of tax brackets
        let html = `<p>Your taxable income: <strong>${formatCurrency(taxableIncome)}</strong> (after deductions)</p>`;
        html += '<div class="tax-brackets">';
        
        for (let i = 0; i < brackets.length; i++) {
            const bracket = brackets[i];
            const isInBracket = taxableIncome > bracket.min && (taxableIncome <= bracket.max || bracket.max === Infinity);
            const bracketClass = isInBracket ? 'current-bracket' : '';
            
            // Format the bracket range
            let bracketRange;
            if (bracket.max === Infinity) {
                bracketRange = `Over ${formatCurrency(bracket.min)}`;
            } else {
                bracketRange = `${formatCurrency(bracket.min)} to ${formatCurrency(bracket.max)}`;
            }
            
            html += `
                <div class="tax-bracket ${bracketClass}">
                    <div class="bracket-rate">${(bracket.rate * 100).toFixed(1)}%</div>
                    <div class="bracket-range">${bracketRange}</div>
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
    }
    
    function updateSavingsTips(income) {
        const savingsTips = document.getElementById('savings-tips');
        savingsTips.innerHTML = '';
        
        // Get applicable tax savings opportunities based on income
        const applicableOffers = Object.values(TAX_SAVINGS_OFFERS).filter(offer => {
            return income >= offer.threshold && (!offer.maxIncome || income <= offer.maxIncome);
        });
        
        // Sort offers by relevance (custom prioritization based on income)
        applicableOffers.sort((a, b) => {
            // Higher relevance score = higher priority
            const aRelevance = Math.abs(income - a.threshold);
            const bRelevance = Math.abs(income - b.threshold);
            return aRelevance - bRelevance;
        });
        
        // Get the top 3-4 most relevant offers
        const topOffers = applicableOffers.slice(0, 4);
        
        // Display the top offers
        topOffers.forEach(offer => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${offer.title}</strong>: ${offer.description}
                <br>
                <a href="${offer.link}" target="_blank" rel="noopener noreferrer">Learn more →</a>
            `;
            savingsTips.appendChild(listItem);
        });
        
        // Add a default tip if no applicable offers
        if (topOffers.length === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = "Consult with a tax professional for personalized advice on tax savings strategies.";
            savingsTips.appendChild(listItem);
        }
    }
    
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(Math.round(amount));
    }
    
    // Initialize the assumptions display
    updateAssumptions();
    
    // Initialize the zip code map selector directly (not in a modal anymore)
    initZipCodeMapSelector();
});

// Function to initialize the US tax rate map
function initializeTaxMap() {
    const mapContainer = document.getElementById('us-tax-map');
    const tooltip = document.getElementById('map-tooltip');
    
    // Fetch the SVG map of US
    fetch('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json')
        .then(response => response.json())
        .then(usData => {
            const sortedStates = getSortedStatesByTaxRate();
            createMapFromGeoJSON(usData, mapContainer, sortedStates);
        })
        .catch(error => {
            console.error('Error loading US map data:', error);
            fallbackToStaticMap(mapContainer);
        });
    
    // Tooltip events are now handled within createMapFromGeoJSON
}

// Function to get states sorted by tax rate (for rankings)
function getSortedStatesByTaxRate() {
    return Object.keys(STATE_TAX_RATES)
        .map(stateCode => ({
            code: stateCode,
            name: STATE_TAX_RATES[stateCode].name,
            rate: STATE_TAX_RATES[stateCode].rate,
            progressive: STATE_TAX_RATES[stateCode].progressive || false
        }))
        .sort((a, b) => b.rate - a.rate);
}

// Create the map from GeoJSON data
function createMapFromGeoJSON(geoData, container, sortedStates) {
    // Create SVG element
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // D3 map projection
    const projection = d3.geoAlbersUsa()
        .scale(width)
        .translate([width / 2, height / 2]);
    
    const path = d3.geoPath().projection(projection);
    
    // Create SVG
    const svg = d3.select(container)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    // Get tooltip element
    const tooltip = document.getElementById('map-tooltip');
    
    // Draw states
    svg.selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", d => {
            const stateCode = getStateCodeFromName(d.properties.name);
            const stateInfo = STATE_TAX_RATES[stateCode];
            return stateInfo && stateInfo.progressive ? "state progressive-tax" : "state";
        })
        .attr("fill", d => {
            const stateCode = getStateCodeFromName(d.properties.name);
            return getTaxRateColor(stateCode);
        })
        .attr("stroke", "#666")
        .attr("stroke-width", 0.5)
        .attr("data-state", d => getStateCodeFromName(d.properties.name))
        .attr("data-name", d => d.properties.name)
        .on("mouseover", function(event) {
            // Highlight state
            d3.select(this)
                .attr("stroke", "#fff")
                .attr("stroke-width", 1);
                
            // Handle tooltip
            const stateCode = this.getAttribute('data-state');
            const stateName = this.getAttribute('data-name');
            
            if (stateCode) {
                // Get state tax info
                const stateInfo = STATE_TAX_RATES[stateCode];
                
                // Find rank
                const sortedStates = getSortedStatesByTaxRate();
                const rank = sortedStates.findIndex(s => s.code === stateCode) + 1;
                
                // Update tooltip
                const tooltipState = tooltip.querySelector('.tooltip-state');
                const tooltipRate = tooltip.querySelector('.tooltip-rate');
                const tooltipRank = tooltip.querySelector('.tooltip-rank');
                
                tooltipState.textContent = stateName;
                
                if (stateInfo) {
                    const rateText = stateInfo.progressive ? 
                        `Progressive up to ${(stateInfo.rate * 100).toFixed(2)}%` : 
                        `Flat ${(stateInfo.rate * 100).toFixed(2)}%`;
                    
                    tooltipRate.textContent = `State Tax Rate: ${rateText}`;
                    tooltipRank.textContent = `Rank: ${rank}/${sortedStates.length} (${rank === 1 ? 'Highest' : rank === sortedStates.length ? 'Lowest' : 'Middle'})`;
                } else {
                    tooltipRate.textContent = 'Tax data not available';
                    tooltipRank.textContent = '';
                }
                
                // Position tooltip
                tooltip.style.left = `${event.pageX - container.getBoundingClientRect().left + 15}px`;
                tooltip.style.top = `${event.pageY - container.getBoundingClientRect().top + 15}px`;
                
                // Show tooltip
                tooltip.classList.remove('hidden');
            }
        })
        .on("mouseout", function() {
            // Restore state outline
            d3.select(this)
                .attr("stroke", "#666")
                .attr("stroke-width", 0.5);
                
            // Hide tooltip
            tooltip.classList.add('hidden');
        })
        .on("mousemove", function(event) {
            // Reposition tooltip
            tooltip.style.left = `${event.pageX - container.getBoundingClientRect().left + 15}px`;
            tooltip.style.top = `${event.pageY - container.getBoundingClientRect().top + 15}px`;
        });
    
    // Apply pattern to progressive tax states
    svg.selectAll(".progressive-tax")
        .style("fill", function() {
            const stateCode = this.getAttribute("data-state");
            return `url(#pattern-${stateCode})`;
        });
    
    // Add patterns for progressive tax states
    const defs = svg.append("defs");
    
    sortedStates.forEach(state => {
        if (state.progressive) {
            const color = getTaxRateColor(state.code);
            
            const pattern = defs.append("pattern")
                .attr("id", `pattern-${state.code}`)
                .attr("patternUnits", "userSpaceOnUse")
                .attr("width", 10)
                .attr("height", 10)
                .attr("patternTransform", "rotate(45)");
            
            pattern.append("rect")
                .attr("width", 10)
                .attr("height", 10)
                .attr("fill", color);
            
            pattern.append("line")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", 0)
                .attr("y2", 10)
                .attr("stroke", "rgba(255,255,255,0.3)")
                .attr("stroke-width", 3);
        }
    });
    
    // Add a resize handler to make the map responsive
    const resizeObserver = new ResizeObserver(() => {
        // Update map size if container is resized
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        
        // Update projection scale to maintain proper size
        projection
            .scale(newWidth * 1.2)
            .translate([newWidth / 2, newHeight / 2]);
        
        // Update SVG viewBox
        svg.attr("viewBox", `0 0 ${newWidth} ${newHeight}`);
        
        // Update rect size
        svg.select("rect")
            .attr("width", newWidth)
            .attr("height", newHeight);
            
        // Redraw state paths with new projection
        svg.selectAll(".state")
            .attr("d", function(d) {
                // Get the state name
                const stateName = d.properties.name;
                
                // Special case for Virginia
                if (stateName === "Virginia") {
                    console.log("Drawing Virginia with special handling");
                    
                    // Let's find Maryland and West Virginia to position Virginia relative to them
                    const md = processedFeatures.find(f => f.properties.name === "Maryland");
                    const wv = processedFeatures.find(f => f.properties.name === "West Virginia");
                    
                    // If we have valid paths for neighboring states, position VA relative to them
                    if (md && wv) {
                        // Try to get centroids to position VA relative to surrounding states
                        const mdCentroid = path.centroid(md);
                        const wvCentroid = path.centroid(wv);
                        
                        if (mdCentroid && wvCentroid && !isNaN(mdCentroid[0]) && !isNaN(wvCentroid[0])) {
                            // Create a VA shape that's positioned between WV and the coast
                            // Calculate a position relative to MD and WV
                            const baseX = (mdCentroid[0] + wvCentroid[0]) / 2;
                            const baseY = (mdCentroid[1] + wvCentroid[1]) / 2 + 20; // Slightly south
                            
                            // Create a polygon path for Virginia using relative coordinates
                            return `M${baseX-30},${baseY+30} L${baseX},${baseY+20} L${baseX+20},${baseY+10} L${baseX+30},${baseY-10} L${baseX+15},${baseY-20} L${baseX-10},${baseY-15} L${baseX-20},${baseY} L${baseX-35},${baseY+15} Z`;
                        }
                    }
                    
                    // If we couldn't position relative to other states, use fixed position
                    // These values are based on typical US map with Albers projection
                    // Position Virginia between West Virginia and the coast (MD/DE/NC)
                    const mapCenter = [width/2, height/2];
                    const vaX = mapCenter[0] + width/6;  // East of center
                    const vaY = mapCenter[1] + height/12; // Slightly south of center
                    
                    // Create a polygon that resembles Virginia's shape
                    return `M${vaX-35},${vaY+25} L${vaX-10},${vaY+20} L${vaX+10},${vaY+5} L${vaX+25},${vaY-5} L${vaX+15},${vaY-15} L${vaX},${vaY-10} L${vaX-20},${vaY+5} L${vaX-30},${vaY+15} Z`;
                }
                
                // Normal path rendering for other states
                const pathString = path(d);
                if (!pathString || pathString.includes("NaN")) {
                    console.log(`Fixed problematic path for: ${stateName}`);
                    // Return a simple rectangle for states with bad geometry
                    return "";
                }
                
                return pathString;
            });
            
        // Update labels positions
        svg.selectAll("text")
            .attr("transform", function(d) {
                const centroid = path.centroid(d);
                if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) {
                    return "translate(0,0)";
                }
                return `translate(${centroid[0]},${centroid[1]})`;
            });
    });
}

// Fallback to a simpler map if GeoJSON loading fails
function fallbackToStaticMap(container) {
    container.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
                <rect width="100%" height="100%" fill="#f8f9fa" />
                <text x="50%" y="45%" text-anchor="middle" font-size="16" fill="#666">
                    Interactive map could not be loaded
                </text>
                <text x="50%" y="55%" text-anchor="middle" font-size="14" fill="#999">
                    Please check your connection and refresh
                </text>
                <!-- Simple USA outline -->
                <path d="M200,200 L600,200 L600,350 L200,350 Z" 
                      fill="#e8f5e9" stroke="#666" stroke-width="2" stroke-dasharray="5,5" />
            </svg>
        </div>
    `;
}

// Helper function to get state code from state name
function getStateCodeFromName(stateName) {
    const stateMap = {
        'Alabama': 'AL',
        'Alaska': 'AK',
        'Arizona': 'AZ',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'District of Columbia': 'DC',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'IN',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Pennsylvania': 'PA',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY'
    };
    
    return stateMap[stateName];
}

// Get color based on tax rate
function getTaxRateColor(stateCode) {
    if (!stateCode || !STATE_TAX_RATES[stateCode]) {
        return '#f5f5f5'; // Default gray
    }
    
    const rate = STATE_TAX_RATES[stateCode].rate;
    
    if (rate === 0) return '#e8f5e9';
    if (rate <= 0.03) return '#c8e6c9';
    if (rate <= 0.05) return '#a5d6a7';
    if (rate <= 0.07) return '#81c784';
    if (rate <= 0.09) return '#66bb6a';
    return '#4caf50'; // 9%+
}

// Function to initialize the zip code map selector
function initZipCodeMapSelector() {
    const searchBtn = document.getElementById('zip-search-btn');
    const searchInput = document.getElementById('zip-search');
    let selectedZipCode = null;
    let zipcodeSelectionMap = null;
    
    // Handle the zip code search
    searchBtn.addEventListener('click', function() {
        searchZipCode();
    });
    
    // Allow search with Enter key
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            searchZipCode();
        }
    });
    
    // Initialize the map directly on page load
    initializeZipCodeMap();
    
    // Function to initialize the zip code selection map
    function initializeZipCodeMap() {
        const mapContainer = document.getElementById('zipcode-selection-map');
        
        if (!mapContainer) {
            console.error('Map container not found');
            return;
        }

        // Fetch the SVG map of US
        fetch('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json')
            .then(response => response.json())
            .then(usData => {
                createZipCodeSelectionMap(usData, mapContainer);
            })
            .catch(error => {
                console.error('Error loading US map data for zip selection:', error);
                const errorMessage = document.createElement('div');
                errorMessage.className = 'map-error';
                errorMessage.textContent = 'Unable to load map. Please enter your zip code manually.';
                mapContainer.appendChild(errorMessage);
            });
    }
    
    // Create the zip code selection map from GeoJSON data
    function createZipCodeSelectionMap(geoData, container) {
        // Create SVG element
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        // Clear any existing SVG
        container.innerHTML = '';
        
        // D3 map projection
        const projection = d3.geoAlbersUsa()
            .scale(width * 1.2) // Increase scale slightly for better visibility
            .translate([width / 2, height / 2]);
        
        const path = d3.geoPath().projection(projection);
        
        // Create SVG with specific dimensions
        const svg = d3.select(container)
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet");
        
        // Add a background rect
        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr("fill", "#f8f9fa");
            
        // Store reference for later
        zipcodeSelectionMap = svg;
        
        // Get tooltip element
        const tooltip = document.getElementById('zipcode-tooltip');
        
        // Process the GeoJSON data to fix problematic states
        const processedFeatures = geoData.features.map(feature => {
            // Create a deep copy to avoid modifying the original
            const featureCopy = JSON.parse(JSON.stringify(feature));
            
            // Don't try to replace Virginia's geometry - that approach isn't working
            // Instead, we'll handle it during the rendering
            
            return featureCopy;
        });
        
        // Sort features by size so smaller states appear on top
        processedFeatures.sort((a, b) => {
            const areaA = path.area(a) || 0;
            const areaB = path.area(b) || 0;
            return areaB - areaA; // Larger areas first (drawn below)
        });
        
        // Create a group for all states
        const statesGroup = svg.append("g")
            .attr("class", "states-group");
        
        // Draw states
        statesGroup.selectAll("path")
            .data(processedFeatures)
            .enter()
            .append("path")
            .attr("d", function(d) {
                // Get the state name
                const stateName = d.properties.name;
                
                // Special case for Virginia
                if (stateName === "Virginia") {
                    console.log("Drawing Virginia with special handling");
                    
                    // Let's find Maryland and West Virginia to position Virginia relative to them
                    const md = processedFeatures.find(f => f.properties.name === "Maryland");
                    const wv = processedFeatures.find(f => f.properties.name === "West Virginia");
                    
                    // If we have valid paths for neighboring states, position VA relative to them
                    if (md && wv) {
                        // Try to get centroids to position VA relative to surrounding states
                        const mdCentroid = path.centroid(md);
                        const wvCentroid = path.centroid(wv);
                        
                        if (mdCentroid && wvCentroid && !isNaN(mdCentroid[0]) && !isNaN(wvCentroid[0])) {
                            // Create a VA shape that's positioned between WV and the coast
                            // Calculate a position relative to MD and WV
                            const baseX = (mdCentroid[0] + wvCentroid[0]) / 2;
                            const baseY = (mdCentroid[1] + wvCentroid[1]) / 2 + 20; // Slightly south
                            
                            // Create a polygon path for Virginia using relative coordinates
                            return `M${baseX-30},${baseY+30} L${baseX},${baseY+20} L${baseX+20},${baseY+10} L${baseX+30},${baseY-10} L${baseX+15},${baseY-20} L${baseX-10},${baseY-15} L${baseX-20},${baseY} L${baseX-35},${baseY+15} Z`;
                        }
                    }
                    
                    // If we couldn't position relative to other states, use fixed position
                    // These values are based on typical US map with Albers projection
                    // Position Virginia between West Virginia and the coast (MD/DE/NC)
                    const mapCenter = [width/2, height/2];
                    const vaX = mapCenter[0] + width/6;  // East of center
                    const vaY = mapCenter[1] + height/12; // Slightly south of center
                    
                    // Create a polygon that resembles Virginia's shape
                    return `M${vaX-35},${vaY+25} L${vaX-10},${vaY+20} L${vaX+10},${vaY+5} L${vaX+25},${vaY-5} L${vaX+15},${vaY-15} L${vaX},${vaY-10} L${vaX-20},${vaY+5} L${vaX-30},${vaY+15} Z`;
                }
                
                // Normal path rendering for other states
                const pathString = path(d);
                if (!pathString || pathString.includes("NaN")) {
                    console.log(`Fixed problematic path for: ${stateName}`);
                    // Return a simple rectangle for states with bad geometry
                    return "";
                }
                
                return pathString;
            })
            .attr("class", "state clickable-state")
            .attr("fill", "#e6e6e6")
            .attr("stroke", "#666")
            .attr("stroke-width", 0.5)
            .attr("data-state", d => getStateCodeFromName(d.properties.name))
            .attr("data-name", d => d.properties.name)
            .style("cursor", "pointer")
            .on("mouseover", function(event, d) {
                // Highlight state
                d3.select(this)
                    .attr("fill", "#c9e8c9")
                    .attr("stroke", "#333")
                    .attr("stroke-width", 1);
                
                // Update tooltip
                const stateName = this.getAttribute('data-name');
                const stateCode = this.getAttribute('data-state');
                
                if (tooltip) {
                    const tooltipLocation = tooltip.querySelector('.tooltip-location');
                    const tooltipZipcode = tooltip.querySelector('.tooltip-zipcode');
                    
                    tooltipLocation.textContent = stateName;
                    tooltipZipcode.textContent = `State Code: ${stateCode}`;
                    
                    // Position tooltip
                    tooltip.style.left = `${event.pageX - container.getBoundingClientRect().left + 15}px`;
                    tooltip.style.top = `${event.pageY - container.getBoundingClientRect().top + 15}px`;
                    
                    // Show tooltip
                    tooltip.classList.remove('hidden');
                }
            })
            .on("mouseout", function() {
                // Don't change the fill if it's selected
                if (!this.classList.contains('selected')) {
                    d3.select(this)
                        .attr("fill", "#e6e6e6")
                        .attr("stroke", "#666")
                        .attr("stroke-width", 0.5);
                }
                
                // Hide tooltip
                if (tooltip) {
                    tooltip.classList.add('hidden');
                }
            })
            .on("mousemove", function(event) {
                // Reposition tooltip
                if (tooltip) {
                    tooltip.style.left = `${event.pageX - container.getBoundingClientRect().left + 15}px`;
                    tooltip.style.top = `${event.pageY - container.getBoundingClientRect().top + 15}px`;
                }
            })
            .on("click", function(event, d) {
                // Get state information
                const stateCode = this.getAttribute('data-state');
                const stateName = this.getAttribute('data-name');
                
                // Generate a representative zip code for this state
                const representativeZip = getRepresentativeZipCodeForState(stateCode);
                
                // Set as selected zip code and update input field
                selectedZipCode = representativeZip;
                document.getElementById('zipcode').value = representativeZip;
                
                // Update selection info
                document.getElementById('selected-zip-location').textContent = 
                    `${stateName} (${stateCode}) - Zip: ${representativeZip}`;
                
                // Show the selection info
                document.getElementById('selected-zip-info').classList.remove('hidden');
                
                // Clear previous selection and highlight selected state
                svg.selectAll(".state")
                    .classed("selected", false)
                    .attr("fill", "#e6e6e6")
                    .attr("stroke", "#666")
                    .attr("stroke-width", 0.5);
                
                // Highlight current selection
                d3.select(this)
                    .classed("selected", true)
                    .attr("fill", "#4caf50")
                    .attr("stroke", "#333")
                    .attr("stroke-width", 1.5);
                
                // Trigger validation
                validateZipcodeInput();
            });
        
        // Add labels for states
        statesGroup.selectAll("text")
            .data(processedFeatures)
            .enter()
            .append("text")
            .attr("transform", function(d) {
                const centroid = path.centroid(d);
                if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) {
                    return "translate(0,0)";
                }
                return `translate(${centroid[0]},${centroid[1]})`;
            })
            .attr("text-anchor", "middle")
            .attr("font-size", "8px")
            .attr("font-weight", "600")
            .attr("fill", "#333")
            .attr("pointer-events", "none")
            .text(function(d) {
                return getStateCodeFromName(d.properties.name);
            })
            .attr("display", function(d) {
                // Hide labels for small states
                const area = path.area(d);
                return area > 200 ? "block" : "none";
            });
            
        // Add a resize handler to make the map responsive
        const resizeObserver = new ResizeObserver(() => {
            // Update map size if container is resized
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            
            // Update projection scale to maintain proper size
            projection
                .scale(newWidth * 1.2)
                .translate([newWidth / 2, newHeight / 2]);
            
            // Update SVG viewBox
            svg.attr("viewBox", `0 0 ${newWidth} ${newHeight}`);
            
            // Update rect size
            svg.select("rect")
                .attr("width", newWidth)
                .attr("height", newHeight);
                
            // Redraw state paths with new projection
            svg.selectAll(".state")
                .attr("d", function(d) {
                    // Special case for Virginia
                    if (d.properties.name === "Virginia") {
                        console.log("Redrawing Virginia during resize");
                        
                        // Let's find Maryland and West Virginia to position Virginia relative to them
                        const md = d3.select(".state[data-name='Maryland']").datum();
                        const wv = d3.select(".state[data-name='West Virginia']").datum();
                        
                        // If we have valid paths for neighboring states, position VA relative to them
                        if (md && wv) {
                            const mdCentroid = path.centroid(md);
                            const wvCentroid = path.centroid(wv);
                            
                            if (mdCentroid && wvCentroid && !isNaN(mdCentroid[0]) && !isNaN(wvCentroid[0])) {
                                // Create a VA shape that's positioned between WV and the coast
                                const baseX = (mdCentroid[0] + wvCentroid[0]) / 2;
                                const baseY = (mdCentroid[1] + wvCentroid[1]) / 2 + 20;
                                
                                return `M${baseX-30},${baseY+30} L${baseX},${baseY+20} L${baseX+20},${baseY+10} L${baseX+30},${baseY-10} L${baseX+15},${baseY-20} L${baseX-10},${baseY-15} L${baseX-20},${baseY} L${baseX-35},${baseY+15} Z`;
                            }
                        }
                        
                        // Fall back to rescaling the fixed position
                        const mapCenter = [newWidth/2, newHeight/2];
                        const vaX = mapCenter[0] + newWidth/6;  
                        const vaY = mapCenter[1] + newHeight/12;
                        
                        return `M${vaX-35},${vaY+25} L${vaX-10},${vaY+20} L${vaX+10},${vaY+5} L${vaX+25},${vaY-5} L${vaX+15},${vaY-15} L${vaX},${vaY-10} L${vaX-20},${vaY+5} L${vaX-30},${vaY+15} Z`;
                    }
                    
                    return path(d);
                });
                
            // Update labels positions
            svg.selectAll("text")
                .attr("transform", function(d) {
                    const centroid = path.centroid(d);
                    if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) {
                        return "translate(0,0)";
                    }
                    return `translate(${centroid[0]},${centroid[1]})`;
                });
        });
        
        // Observe the container for size changes
        resizeObserver.observe(container);
    }
    
    // Function to search for a zip code or city
    function searchZipCode() {
        const searchValue = document.getElementById('zip-search').value.trim();
        
        if (!searchValue) {
            alert("Please enter a city, state, or zip code to search");
            return;
        }
        
        // Check if it's a zip code
        if (/^\d{5}$/.test(searchValue)) {
            // It's a zip code
            const stateCode = determineState(searchValue);
            highlightStateOnMap(stateCode);
            
            // Set as selected zip code
            selectedZipCode = searchValue;
            document.getElementById('zipcode').value = searchValue;
            
            // Update selection info with state name
            const stateName = STATE_TAX_RATES[stateCode]?.name || 'Unknown State';
            document.getElementById('selected-zip-location').textContent = 
                `${stateName} (${stateCode}) - Zip: ${searchValue}`;
            
            // Show the selection info
            document.getElementById('selected-zip-info').classList.remove('hidden');
            
            // Trigger validation
            validateZipcodeInput();
        } else {
            // Assume it's a city or state name
            const stateCode = findStateByName(searchValue);
            
            if (stateCode) {
                highlightStateOnMap(stateCode);
                
                // Generate representative zip
                const representativeZip = getRepresentativeZipCodeForState(stateCode);
                selectedZipCode = representativeZip;
                document.getElementById('zipcode').value = representativeZip;
                
                // Update selection info
                const stateName = STATE_TAX_RATES[stateCode]?.name || 'Unknown State';
                document.getElementById('selected-zip-location').textContent = 
                    `${stateName} (${stateCode}) - Zip: ${representativeZip}`;
                
                // Show the selection info
                document.getElementById('selected-zip-info').classList.remove('hidden');
                
                // Trigger validation
                validateZipcodeInput();
            } else {
                alert("Location not found. Please try another search term.");
            }
        }
    }
    
    // Function to highlight a state on the map
    function highlightStateOnMap(stateCode) {
        if (!zipcodeSelectionMap) return;
        
        // Clear previous selection
        zipcodeSelectionMap.selectAll(".state")
            .classed("selected", false)
            .attr("fill", "#e6e6e6")
            .attr("stroke", "#666")
            .attr("stroke-width", 0.5);
        
        // Highlight the selected state
        zipcodeSelectionMap.selectAll(".state")
            .filter(function() {
                return this.getAttribute('data-state') === stateCode;
            })
            .classed("selected", true)
            .attr("fill", "#4caf50")
            .attr("stroke", "#333")
            .attr("stroke-width", 1.5);
    }
    
    // Find a state by name (simple search function)
    function findStateByName(searchText) {
        searchText = searchText.toLowerCase();
        
        // First, check for exact state code match
        for (const stateCode in STATE_TAX_RATES) {
            if (stateCode.toLowerCase() === searchText) {
                return stateCode;
            }
        }
        
        // Then check state names
        for (const stateCode in STATE_TAX_RATES) {
            const stateName = STATE_TAX_RATES[stateCode].name;
            if (stateName && stateName.toLowerCase().includes(searchText)) {
                return stateCode;
            }
        }
        
        return null;
    }
    
    // Get a representative zip code for each state
    function getRepresentativeZipCodeForState(stateCode) {
        // Map of representative zip codes for each state
        const stateZipMap = {
            'AL': '35213', 'AK': '99654', 'AZ': '85260', 'AR': '72203',
            'CA': '90210', 'CO': '80202', 'CT': '06902', 'DE': '19901',
            'DC': '20500', 'FL': '33101', 'GA': '30305', 'HI': '96813',
            'ID': '83702', 'IL': '60601', 'IN': '46204', 'IA': '50309',
            'KS': '66604', 'KY': '40202', 'LA': '70112', 'ME': '04032',
            'MD': '21202', 'MA': '02110', 'MI': '48917', 'MN': '55401',
            'MS': '39201', 'MO': '65101', 'MT': '59623', 'NE': '68501',
            'NV': '89101', 'NH': '03217', 'NJ': '07102', 'NM': '87505',
            'NY': '10001', 'NC': '27601', 'ND': '58501', 'OH': '43215',
            'OK': '73102', 'OR': '97205', 'PA': '19103', 'RI': '02903',
            'SC': '29201', 'SD': '57501', 'TN': '37219', 'TX': '77002',
            'UT': '84111', 'VT': '05401', 'VA': '23219', 'WA': '98101',
            'WV': '25301', 'WI': '53202', 'WY': '82001'
        };
        
        return stateZipMap[stateCode] || '10001'; // Default to NY if state not found
    }
}
