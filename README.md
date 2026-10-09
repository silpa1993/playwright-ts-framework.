# Playwright End-to-End Automation Framework 🚀

A robust, enterprise-grade end-to-end (E2E) test automation framework built with **TypeScript** and **Playwright**, featuring the **Page Object Model (POM)** design pattern, **Data-Driven Testing (DDT)**, and automated **CI/CD integration**.

## 🛠️ Tech Stack & Architecture

* **Language:** TypeScript
* **Test Runner:** Playwright Test
* **Design Pattern:** Page Object Model (POM)
* **Data Management:** Data-Driven Testing via External JSON (`test-data/`)
* **CI/CD Pipeline:** GitHub Actions (`.github/workflows/`)

---

## 📂 Project Structure

```text
playwright-ts-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml       # GitHub Actions CI/CD automation workflow
├── pages/
│   └── TodoPage.ts              # Page Object Model for TodoMVC elements & actions
├── test-data/
│   └── TodoData.json            # Externalized test datasets for Data-Driven Testing
├── tests/
│   └── locators-practise.spec.ts # E2E test suites leveraging POM and DDT
├── .gitignore                   # Ignores node_modules, reports, and local results
├── playwright.config.ts         # Global Playwright configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation