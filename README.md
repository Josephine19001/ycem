Welcome to the YCEM (Your Choice in Engineering Matters) website codebase 🤗

## Getting Started
After cloning this to your local environment, run
```bash
npm install
npm build
```
This will install the necessary node packages that the app is dependent on. 

After the package installment and build, run the development server:

```bash
npm run dev
```

or you can simply run (Next has its configuration to optimize pre-rendering when running in start mode. This is almost like running the application in production)
```bash
npm run start
```

##Note: before any code is push to git, Husky is configured to ensure code quality conforms with es-lint strict standards. 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment with Vercel

We currently use Vercel as the host server for this application. When a new PR is created, Vercel automatically creates a new deployment link with changes. You can preview to make sure nothing is broken before merging this production.

HAPPY CODING😉
