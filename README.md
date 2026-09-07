# Playwright TypeScript Framework

A Page Object Model (POM) based test automation framework built with [Playwright](https://playwright.dev/) and TypeScript.

## 📋 Overview

This framework provides a reusable structure for writing UI automation tests, with a shared `Framework` class wrapping common Playwright actions (navigation, clicks, fills, dropdowns, checkboxes, alerts, etc.) and Page Object classes representing individual pages of the application under test.

## 🛠️ Tech Stack

- **[Playwright](https://playwright.dev/)** — end-to-end testing framework
- **TypeScript** — statically typed test code
- **Node.js** — runtime environment



## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AyaMKamal/Playwright_FrameWork.git
   cd Playwright_FrameWork
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## ▶️ Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/login.spec.ts
```

Run tests in headed mode (see the browser):
```bash
npx playwright test --headed
```

Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

## 📊 Viewing Test Reports

After a test run, view the HTML report:
```bash
npx playwright show-report
```

## 🧱 Framework Design

- **`FrameWork.ts`** — a base class with reusable, generic Playwright actions (navigation, clicking, filling fields, dropdowns, checkboxes, hover, keyboard actions, alert handling) that all Page Objects can use.
- **`Pages/`** — Page Object classes (e.g. `LoginPage`) that define locators and page-specific actions, built on top of `Framework`.
- **`tests/`** — Spec files containing the actual test cases, using the Page Objects to interact with the application.

## ✅ Example Test

```typescript
test('LoginTest', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await loginPage.login("Admin", "admin123");
});
```

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Commit your changes: `git commit -m "Add: your message"`
3. Push to the branch: `git push origin feature/your-feature-name`
4. Open a Pull Request

## 📄 License

This project is for learning/practice purposes.
