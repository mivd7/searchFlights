This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is a small app build with React & Redux, where the user can search for flights (for now coming from a JSON data file) and get the proper responses as well as close the search and start a new one.

## HOW TO RUN

Run 'yarn install' inside project folder to install the dependencies.<br>
Then run 'yarn start' to start the React app.<br><br>
This project includes dummy data generated via http://mockaroo.com and uses superagent to fetch data from this fake API<br>

To run the app with the dummy data, first install the 'json-server' module globally ('npm install -g json-server')<br>  
Then start the dummy API by running 'json-server --port 4000 data.json' in the project root folder.<br>
This will run the server locally on your computer on http://localhost:4000, with dummy data and routes generated from the data.json file.<br>
In 'src/config.js' you can change the baseUrl for the actual API.

With the build feature of the create-react-app module, this app can be produced and readied for deployment. Running yarn build will create a static folder where the code is optimised using WebPack. This could then be deployed to any web server by uploading the contents of the static folder to that server. More info on this build-feature can be found here: https://facebook.github.io/create-react-app/docs/production-build

## TO DO LIST
Things that could be improved to this app:<br>
-Add a server side for better performance and SEO. Right now everything is build, fetched and processed on client-side, based on a data file with 25 records. Obviously when this would scale-up, this would become problematic because fetching all flights and filtering them client side would make the whole app pretty slow. For now it serves as a fine showcase of what I can do with React & Redux.

-Add deeplinking, search queries in url (e.g. localhost:3000/q?=AD1234 ) so search can be repeated by loading. I didn't get to implementing this but would love to learn more about how to do this.
