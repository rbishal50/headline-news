# Headliners

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for typescript<br/>

## Demo Link

[https://headliner-news.herokuapp.com/](https://headliner-news.herokuapp.com/)

## Required env variables

For locally running the server, create a **.env** file at the root level and add following variables as given in **env.example** file.

| Variables                | Description                   |
| ------------------------ | ----------------------------- |
| `REACT_APP_API_KEY`      | The hosted api's access token |
| `REACT_APP_API_BASE_URL` | The hosted api's base url     |

Generate a key from [GNews](https://gnews.io/). However, the free version serves only **100 requests per day**. So, if the limit is crossed the app won't work for the day<br/>
And for base url use: **https://gnews.io/api/v4**<br />

These variables are global and can be accessed anywhere in the project using **process.env.VARIABLE_NAME**<br/>
For eg: **process.env.REACT_APP_API_BASE_URL**

## Docs / References

| Stack             | Repo / Url                                                               |
| ----------------- | ------------------------------------------------------------------------ |
| `react`           | [https://reactjs.org/](https://reactjs.org/)                             |
| `typescript`      | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)       |
| `redux toolkit`   | [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)           |
| `react-redux`     | [https://react-redux.js.org/](https://react-redux.js.org/)               |
| `react bootstrap` | [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/) |
| `node-sass`       | [https://github.com/sass/node-sass](https://github.com/sass/node-sass)   |

## Linting / Git hooks (pre-commit & pre-push)

| Stack         | Repo / Url                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ts lint`     | [https://palantir.github.io/tslint/](https://palantir.github.io/tslint/)                                         |
| `prettier`    | [https://prettier.io/](https://prettier.io/)                                                                     |
| `husky`       | [https://github.com/typicode/husky](https://github.com/typicode/husky)                                           |
| `lint-staged` | [https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)                                   |
| `git hooks`   | [article](https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc) |

## Available Scripts

In the project directory, you can run: <br/>

| Commands       | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| `yarn`         | Installs required dependencies for the project. This is same as yarn install. |
| `yarn run dev` | Runs the app in the development mode.<br />                                   |
| `yarn build`   | Builds the app for production to the `build` folder.                          |

> You can refer to `scripts` section of `package.json` file for more commands. <br/>
