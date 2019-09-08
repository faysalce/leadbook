# leadbook
Lead Book Test 
----------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  

## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

  

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

  

### Analyzing the Bundle Size

  

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

  

### Making a Progressive Web App

  

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  

### Advanced Configuration

  

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

  

### Deployment

  

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

  

### `npm run build` fails to minify

  

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

  

### Used library

| Name |Purpose
|--|--|
|  antd|UI Library
|axios| Promise based HTTP client for the browser and node.js
|react-highlight-words| React component to highlight words within a larger body of text.|
|react-router-dom| Routing |
|react-redux| Creates wrapper components that manage the store|
|redux-logger| Logger for redux|
|redux-thunk|Thunk middleware for Redux.|

Components
----------

**src/App.js**

### 1. App
Main app component 

**src/components/userAuth/Login.js**

### 1. Login Component
Main Login Component 
User : leadbook
Password: 123456


-----
**src/components/Contacts/AllContacts.js**

### 1. AllContacts
This is for all contacts search and list page. 
Used Ant Design Table with more attractive feature which have excel like filter and srarch also sorting feature. As we fached all contacts it was not nessesary to call api for filter contacts but as per mentioed in requirnment doc i made both feature.



-----
**src/components/Contacts/Companies.js**

### 1. Companies

This is for all contacts search and list page. 
Used Ant Design Table with more attractive feature which have excel like filter and srarch also sorting feature. Favorite check uncheck which is instantly listed in drawer table because favourite mark api not provided


-----
**src/components/Contacts/index.js**

### 1. Contacts
Wrapper and route component for contatcs 

-----
**src/components/Contacts/actions/index.js**

### 1. Contacts Actions
All actions here for contatcs and company 
-----
**src/components/Contacts/router/index.js**

### 1. ContactsRouter




-----
**src/components/ErrorBoundary.js**

### 1. ErrorBoundary
React error fallback component 



-----
**src/components/PageLayout.js**

### 1. PageLayout

Main page layout


-----
**src/components/userAuth/index.js**

### 1. LoginPage

Login Component Wrapper


-----
**src/components/reducers/index.js**

### 1. Reducers 

Main Redducer for Contatcs and UserAuth reducer combine

-----
**src/components/reducers/Contacts.js**

### 1. ContactsReducer 

Reducter for Contacts and company 

-----
**src/components/reducers/UserAuth.js**

### 1. UserAuth 

Reducter for user authentication 