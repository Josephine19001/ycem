Welcome to the YCEM (Your Choice in Engineering Matters) website codebase 🤗

## Getting Started
To get started with the YCEM website codebase, follow these steps:

1. Clone this repository to your local environment:

```bash
git clone https://github.com/Josephine19001/ycem.git
```

## NPM & Yarn
To install Node.js and npm locally, follow these steps:

Download Node.js: Visit the Node.js website, and download the LTS (Long-Term Support) version suitable for your operating system.

Install Node.js: Run the installer and follow the on-screen instructions to install Node.js on your system.

Verify Installation: Open a terminal or command prompt and type the following commands to verify that Node.js and npm are installed correctly:

```bash
node -v
npm -v
```

To install Yarn, you can follow these steps:

Install Yarn: After installing Node.js and npm, you can install Yarn using npm itself. Open a terminal or command prompt and run the following command:

```bash
npm install -g yarn
```

Verify Installation: After the installation is complete, you can verify that Yarn is installed correctly by typing:
```bash
yarn --version
```

After cloning this to your local environment and setting up yarn, run
```bash
yarn
yarn build
```
This will install the necessary node packages that the app is dependent on. 

After the package installment and build, run the development server:

```bash
yarn  dev
```

or you can simply run (Next has its configuration to optimize pre-rendering when running in start mode. This is almost like running the application in production)
```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## NOTE
Before pushing any code changes to Git, ensure that your code conforms to ESLint strict standards. Husky is configured to enforce code quality standards.

*WARNING*: Avoid pushing directly to the main branch. Always create a new branch for your changes and submit a pull request (PR) for review.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment with Vercel

We currently use Vercel as the host server for this application. When a new PR is created, Vercel automatically creates a new deployment link with changes. You can preview to make sure nothing is broken before merging this production.

HAPPY CODING😉
