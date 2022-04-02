## To run and test the app
### Front end
### `npm start`
Runs the front end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### Back end
### `npm start` will run `nodemon index.js`
Runs the back end in development mode and listens on http://localhost:3030

The page will reload when you make changes. You may also see any lint errors in the console.
## Run app as docker container
### Clone the repo from `dockerize` branch for dockerized app
### `docker-compose up --build -d`
Run above command where docker-compose.yml lives. App will be available at http://localhost:3000
##### PS: container created on Fedora Linux 35, kernel version 5.16.18-200.fc35.x86_64
##### Important Note: When app run as containers enpoint url to be called will be "/api" instead of http://localhost:3030/api