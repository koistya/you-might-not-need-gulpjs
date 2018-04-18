# You might not need Gulp.js

This project demonstrates how to use [NPM][npm]/[Yarn scripts][yarn] in a way
thay you could easily chain and parameterize them.

```bash
$ yarn build                    # Build the project
$ yarn start                    # Build in "watch" mode and launch the app
$ yarn deploy                   # Deploy to test/staging
$ yarn deploy-prod              # Deploy to production
```

* [`package.json`](package.json)
* [`scripts/build.js`](scripts/build.js)
* [`scripts/start.js`](scripts/start.js)
* [`scripts/deploy.js`](scripts/deploy.js)

[npm]: https://docs.npmjs.com/misc/scripts
[yarn]: https://yarnpkg.com/lang/en/docs/cli/run/
