# IEEE SB MUJ Website
## Workflow
### Contributing

Rules:
- Never push directly to master branch.
- If possible fix the eslint errors.
- Don't work on multiple tasks at a time.
- No password or secrets in code. Use environment variables.
- While working on your task, don't worry about new changes in master branch. Keep working on your fork.

Step 1: Create a branch in the repository with the task name you're doing.

Step 2: Open a PR immediately with your TASK topic to dev branch.

Step 3: Do changes related to your task in your own fork.

Step 4: When task is done, ping someone on whatsapp to review and merge.

Step 5: After merge, open PR for next task and repeat.

### ESLint
This project uses ESLint to enforce code consistency and detect potential bugs. The rules are heavily opinionated and sometimes can be frustrating. But it results in cleaner and bug free code, especially since we might open source this website later.

You do NOT need to setup eslint. But you need to disable "Format on Save" and prettier plugins in vscode/IDE if you use them. The default prettier format rules are against eslint config. 

If you want to highlight ESLint errors in your editor, use VSCode ESLint plugin or equivalent in your editor. The plugin also fixes minor errors if you set it as default formatter. 

You can also fix minors errors using `npm run lint:fix`. Major errors will be printed and need manual intervention.

Also, you can run this project in development without worrying about ESLint errors using `npm run dev`.

You can see warnings and errors in ESLint with `npm run lint`.

---
## Build
### Development

ESLint rules DO NOT NEED to pass for project to run in debug build.

```npm run dev```
### Production

ESLint rules DO NEED to pass for project to build.

To see eslint errors:

```npm run lint```

After fixing the errors, build using:

```npm run build```

and then run using:

```npm start```

Production builds are for deployment only so I don't think anyone will need to do this.
