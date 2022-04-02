 # To run and test the app
## Front end
### `npm start`
Runs the front end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
## Back end
### `npm start` will run `nodemon index.js`
Runs the back end in development mode and listens on http://localhost:3030

The page will reload when you make changes. You may also see any lint errors in the console.

# Run app as docker container
### Clone the repo from `dockerize` branch for dockerized app
### `docker-compose up --build -d`
Run above command where docker-compose.yml lives. App will be available at http://localhost:3000
##### PS: container created on Fedora Linux 35, kernel version 5.16.18-200.fc35.x86_64
##### Important Note: When app run as containers enpoint url to be called will be "/api" instead of http://localhost:3030/api

#
#
# Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### `npm start`
Runs the front end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### `npm test`
Launches the test runner in the interactive watch mode.\
Run this in src folder to run test suites for react app 
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Node.js `in server  folder`
### `nodemon index.js`
Rund the back end in development mode and listens on http://localhost:3030

The page will reload when you make changes.\
You may also see any lint errors in the console.

