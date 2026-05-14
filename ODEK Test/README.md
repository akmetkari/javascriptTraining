# ODEK Test Automation Framework

A robust, highly scalable, and data-driven end-to-end (E2E) testing framework built with **Playwright** and **TypeScript**. This project is designed to validate critical business flows such as user registration, inventory search reliability, and product purchase journeys.

## 🚀 Features

- **Playwright & TypeScript**: Fast, reliable, and strongly-typed automation.
- **Hybrid Page Object Model (POM)**: Distinct separation between UI Element Locators (JSON) and Action Steps (TypeScript) for ultimate maintainability.
- **Dynamic Data-Driven Testing**: Test data is decoupled from test scripts and injected dynamically based on test titles using `data.json`.
- **Allure Reports Integration**: Includes custom Node.js scripts to generate, serve, and persist historical trend graphs of test executions.
- **Custom Wrapper (`WebCommons`)**: Low-level Playwright interactions are abstracted for robust synchronization and assertions.

## 📂 Project Structure

```text
ODEK Test/
├── PageObjects/
│   ├── page-elements/      # Locator repository (JSON)
│   └── page-steps/         # Action methods (TypeScript)
├── TestData/
│   └── ui/data.json        # Test-specific dynamic input data
├── config/
│   └── config.json         # Global application configuration
├── tests/
│   └── ApplicationTests.spec.ts # Main execution test suites
├── webCommons/
│   └── webCommons.ts       # Low-level interaction & assertion wrapper
├── scripts/
│   ├── run-allure-tests.js # Robust runner for generating reports on failure
│   ├── manage-reports.js   # Generates reports and builds Trend History graphs
│   └── serve-report.js     # Safely serves the Allure dashboard
├── playwright.config.ts    # Core Playwright configuration
└── package.json            # NPM Dependencies and scripts
```

## 🛠️ Prerequisites

- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)

## 📦 Installation

Clone the repository and install the required dependencies:

```bash
git clone <your-repository-url>
cd "ODEK Test"
npm install
```

## 🏃‍♂️ Running Tests & Reports

We have configured several NPM scripts to make running and reporting seamless:

### 1. Run Tests & Auto-Generate Allure Report
This is the recommended command. It clears old raw results, runs all Playwright tests, copies over historical trends, generates a fresh Allure report, and automatically opens it in your browser.
```bash
npm run test:allure
```

### 2. Run Tests Normally (No Auto-Open)
If you just want to run Playwright in headless mode without dealing with Allure at the moment:
```bash
npm run test
```

### 3. Serve the Latest Allure Report
If you want to view the report from your last test execution without running the tests again:
```bash
npm run allure:serve
```

## 📊 Allure Trend History
This framework is configured with a specialized `manage-reports.js` script. Every time you run `npm run test:allure`, it automatically copies the `history` folder from the previous test run into your new results. This allows your generated Allure Reports to display beautiful **Trend Graphs** and historical pass/fail timelines!

## 🧪 Test Coverage

| Test Case | Scope | Pages Involved |
| --- | --- | --- |
| **Sign Up** | Registration, Personal Info, Address, Preferences | Home, Signup |
| **Purchase Product** | Login, Category selection, Cart management, Checkout | Home, Products |
| **Search Reliability**| Inventory search accuracy and string assertions | Home, Products |

## 🤝 Contributing
1. Create a new branch for your feature or bugfix.
2. If UI elements change, update the corresponding JSON file in `PageObjects/page-elements/`.
3. If workflows change, update the classes in `PageObjects/page-steps/`.
4. Ensure your tests pass by running `npm run test:allure`.
