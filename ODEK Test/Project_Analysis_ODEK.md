# Project Analysis: ODEK Test Automation Framework

This document provides a comprehensive analysis of the `ODEK Test` project, a Playwright-based automation framework structured for scalability and maintainability.

---

## 1. Project Overview
The `ODEK Test` project is a specialized automation suite designed for end-to-end testing of a web application (likely an e-commerce platform). It implements a **Hybrid Page Object Model (POM)** that separates element locators from business actions.

### Core Objectives:
- Automate User Sign-up flows.
- Validate Product Purchase journeys (Category navigation -> Cart -> Checkout).
- Ensure cross-browser compatibility using Playwright.

---

## 2. Framework Architecture

The project follows a strict three-tier architecture:

### A. Commons Layer (`webCommons/`)
- **`webCommons.ts`**: A wrapper around Playwright's native API.
- **Responsibilities**:
  - Encapsulating common actions (`clickElement`, `typeInElement`, `selectFromDropDown`).
  - Handling synchronization (`scrollIntoViewIfNeeded`).
  - Providing standard assertions (`validateElementIsVisible`, `checkTextValue`).

### B. Page Object Layer (`PageObjects/`)
This layer is split into two distinct sub-folders:
1. **`page-elements/`**: Stores element locators in **JSON** files.
   - *Example*: `signup-page-elements.json` contains XPaths/Selectors for name, email, address fields, etc.
2. **`page-steps/`**: TypeScript classes that implement business logic.
   - *Example*: `signup-page-steps.ts` uses `WebCommons` to fill out the entire sign-up form by reading locators from the JSON file.

### C. Test Layer (`tests/`)
- **`ApplicationTests.spec.ts`**: The main test suite.
- **Dynamic Data Binding**: It uses `testInfo.title` to dynamically fetch test data from `TestData/ui/data.json`.
- **Test Coverage**:
  - **Sign Up**: Comprehensive validation of personal, address, and contact details.
  - **Purchase Product**: Navigation through Men's Category -> Jeans -> Cart -> Checkout.

---

## 3. Directory Structure

```text
ODEK Test/
├── PageObjects/
│   ├── page-elements/          # Locator repository (JSON)
│   │   ├── home-page-elements.json
│   │   ├── signup-page-elements.json
│   │   └── Products-page-elements.json
│   └── page-steps/             # Action methods (TS)
│       ├── home-page-steps.ts
│       ├── signup-page-steps.ts
│       └── Products-page-steps.ts
├── TestData/
│   └── ui/data.json            # Test-specific input data
├── config/
│   └── config.json             # Global application configuration
├── fixtures/
│   └── base-fixture.ts         # Custom Playwright fixture setup
├── scripts/
│   ├── run-allure-tests.js     # Robust runner — clears results & runs tests
│   ├── manage-reports.js       # Generates report & preserves Trend History
│   └── serve-report.js         # Serves the latest Allure dashboard
├── tests/
│   └── ApplicationTests.spec.ts # Main test scenarios
├── webCommons/
│   └── webCommons.ts           # Low-level interaction wrapper
├── playwright.config.ts        # Framework configuration
├── tsconfig.json               # TypeScript compiler configuration
├── package.json                # Dependencies & NPM scripts
└── .gitignore                  # Excluded files (node_modules, reports, etc.)
```

---

## 4. Key Implementation Details

### Data-Driven Strategy
The framework uses a highly dynamic data-driven approach. Instead of hardcoding values, the test file retrieves a data block matching the test's name:
```typescript
testData = data[testInfo.title as keyof typeof data];
```
This allows multiple test cases to share the same `spec` logic while using different datasets.

### Element Decoupling
By storing locators in JSON files, the framework ensures that UI changes (like an ID change) only require a JSON update, leaving the TypeScript code untouched. This reduces maintenance overhead significantly.

---

## 5. Summary of Test Coverage

| Test Case | Scope | Pages Involved |
| --- | --- | --- |
| **Sign Up** | Registration, Personal Info, Address, Preferences | Home, Signup |
| **Purchase Product** | Login, Category selection, Cart management, Checkout | Home, Products |
| **Search Reliability** | Inventory search accuracy and string assertions | Home, Products |

---

## 6. Recommendations
1. ~~**Reporting**: Integrate specialized reporters (like Allure) if more detailed visual reports are needed.~~ ✅ **Done** — Allure Reports fully integrated with Trend History via `scripts/`.
2. **Parallelization**: Since `fullyParallel: true` is set, ensure shared state is avoided in `webCommons`.
3. **API Validation**: Consider adding API interaction helpers to `webCommons` for setup/teardown tasks (e.g., deleting test users).
4. **Expand Coverage**: Add `CartPageSteps` and `ContactUsPageSteps` to cover Cart logic and Customer Support flows (see `Critical_Business_Flows.md`).

---
*Analysis updated on 2026-05-14*
