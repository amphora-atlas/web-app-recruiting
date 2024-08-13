# Agora Technical Interview

Welcome to the Agora Technical Interview.

Your challenge is to create a form component for a REST api with the tools of Agora's Front End Stack: Bun.js, Preact, Signals, and TypeScript.

You may refer to the Terms & Conditions Form from app.agora.finance for guidance and inspiration, though an exact replica is discouraged.

Agora's Front End is built on Bun.js, Preact, Signals, and TypeScript, so please use this challenge as an opportunity to demonstrate your proficiency with this stack.

When you are finished, upload your work to a private github repo and add your interviewer as a collaborator so they can review it.

## Getting Started:

Setting up your dev environment:

1. Download [VSCode](https://code.visualstudio.com/) (or your preferred code editor)
2. Install [bun.js](https://bun.sh/)
   - Mac: run `curl -fsSL https://bun.sh/install | bash` in your terminal.
   - PC: open powershell and run `powershell -c "irm bun.sh/install.ps1 | iex"`
3. Clone this repo into a folder of your choosing with Git
4. Navigate to the project in your terminal and install dependencies by executing `bun install`
5. Prior to launching the app, you will need a backend.  You can run `bun run server` to launch a mock api
   - Please note: the mock api doesn't have hot reloading.
6. execute `bun run dev` in your terminal and start coding!
7. navigate to `localhost:5173` in your browser to preview your code.
   - Ports are 5173 for the app and 8080 for the api by default.
   - If you use different ports, your mock server may have CORS issues.

### Technical Challenge:

Welcome to the Agora Technical Interview

Your challenge is to recreate the Terms & Conditions form from app.agora.finance.

The form has 4 fields:
1. A text input for first name,
2. A text input for last name,
3. A checkbox for accepting the Terms & Conditions
4. A checkbox for accepting the Privacy Policy

When submitted, the form must make two requests:

1. a PUT request to /api/v1/employee/agreement with a JSON payload like so:
`{ tos: boolean, privacy: boolean }`
1. a PUT request to /api/v1/employee with a JSON payload like so:
`{ firstName: string, lastName: string }`

Display a success panel if the response status is 200 and an error panel otherwise.

You can find the blank form component at /src/components/form.tsx.

Please spend no more than 90 minutes on this!

When you're done, commit your work to a private github repo and send a link to careers@agora.finance, along with a brief description of how you would enhance this feature and what further steps are needed for your code to be 100% production-ready.

Good luck!

### Stack:

## FE Stack & Philosophy:

|              | Principled & Practical                                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| bun.js       | Bun.js is a highly performant all-in-one javascript runtime with out-of-the-box solutions for bundling, testing, and typescript development.        |
| preact       | Preact is a minimalist view library with the same virtual-dom coding patterns as React                                                              |
| signals      | Signals is a state management solution from the preact team that is quickly becoming a common method for state management in the industry. |
| That’s all! | Simplicity                                                                                                                                          |

## Project Structure:

- Our entry point for javascript is `src/index.tsx`, which imports and renders the app
- Static CSS sits in a top-level folder.
- Component css lives with the component and is imported in the component file.
- Preact JS Components
  - Components: first-class component library that handles base-level functionality
    - css near js: import a css file with the same name as your component’s tsx file for locally scoped css.

## Scripts

Check out the package.json where we have defined some handy commands to help with your development workflow:

- **bun run dev**: Starts up the front-end dev server with hot reloading.
- **bun run build**: Transpiles and minifies the application for production.
- **bun run tidy**: Lints your changes. Run with `--fix` to auto-fix.
- **bun run server**: Starts up the mock API server for testing and development.
