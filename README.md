# Headliners

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for typescript<br/>

## Demo Link

[https://headliner-news.herokuapp.com/](https://headliner-news.herokuapp.com/)

## Required env variables

For locally running the server, create a **.env** file at the root level and add following variables as given in **env.example** file.

| Variables                | Description               |
| ------------------------ | ------------------------- |
| `REACT_APP_API_KEY`      | The hosted app's base url |
| `REACT_APP_API_BASE_URL` | The hosted api's base url |

Generate a key from [GNews](https://gnews.io/)<br/>
And for base url [click here](https://gnews.io/api/v4)<br />

These variables are global and can be accessed anywhere in the project using **process.env.VARIABLE_NAME**<br/>
For eg: **process.env.REACT_APP_API_BASE_URL**

## Main Technological Stack

| Stack             | Repo / Url                                                               |
| ----------------- | ------------------------------------------------------------------------ |
| `react`           | [https://reactjs.org/](https://reactjs.org/)                             |
| `redux toolkit`   | [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)           |
| `react bootstrap` | [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/) |

## Available Scripts

In the project directory, you can run: <br/>

| Commands       | Description                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| `yarn`         | Installs required dependencies for the project. This is same as yarn install. |
| `yarn run dev` | Runs the app in the development mode.<br />                                   |
| `yarn build`   | Builds the app for production to the `build` folder.                          |

> You can refer to `scripts` section of `package.json` file for more commands. <br/>
