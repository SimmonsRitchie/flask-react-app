### Boilerplate React-Flask app
A dead simple React-Flask app that's easy to deploy to Heroku. Clone this repo and modify it for your own use.

[Parcel.js](https://github.com/parcel-bundler/parcel) is used to bundle the JS.

View: [live project on Heroku](https://dsr-flask-react-app.herokuapp.com//)

Inspired by:
- Anindita Basu's [flask-heroku-start-pack](https://github.com/AninditaBasu/flask-heroku-starter-pack) and [tutorial](https://dev.to/aninditabasu/how-to-move-your-flask-app-from-the-local-machine-to-the-heroku-cloud-egk).
- Miguel Grinberg's ['How to Deploy a React + Flask Project'](https://blog.miguelgrinberg.com/post/how-to-deploy-a-react--flask-project) tutorial.
- Ayushman Kumar's ['Deploy Python Flask App on Heroku'](https://www.geeksforgeeks.org/deploy-python-flask-app-on-heroku/) tutorial


### Install
To install, clone this repo and cd into the root of the project.

Now enter the following command:

```npm install```

### Run frontend

It's preferable to develop using Parcel's dev server, rather than Flask's, because Parcel includes hot reloading by default.

To spin up Parcel's dev server with your React frontend, enter:

```npm run start```

You should be able to view the project at localhost:1234


### Run flask

To spin up a local Flask server with the latest build of your frontend, enter:

```npm run flask-dev```

Note: If you've already run this command once you may need to do a hard refresh in order to see changes to your frontend since the prior build.

### Deploy to Heroku - Initial

These instructions assume you have a Heroku account and that you've initialized this project as a new repo.

For your initially deployment, run the following commands from inside your project:

1) Log in to Heroku if you're not already logged in:

```heroku login```

2) Create a new Heroku project with a unique name. Upon execution, Heroku will add the location of this project to git as a new remote repo.

```heroku create flask-react-app```

3) Now push your code to Heroku:

```git push heroku master```

### Deploy to Heroku - Subsequent

For subsequent deployments to Heroku, make sure you're on the master branch then run:

```npm run deploy```