### Boilerplate React-Flask app
A dead simple React-Flask app that's easy to deploy to Heroku. Clone this repo and modify it for your own use.

[Parcel.js](https://github.com/parcel-bundler/parcel) is used to bundle the JS.

View: [live project on Heroku](https://dsr-flask-react-app.herokuapp.com//)

Inspired by:
- Anindita Basu's [flask-heroku-start-pack](https://github.com/AninditaBasu/flask-heroku-starter-pack)
- Miguel Grinberg's ['How to Deploy a React + Flask Project'](https://blog.miguelgrinberg.com/post/how-to-deploy-a-react--flask-project) tutorial.
- Ayushman Kumar's ['Deploy Python Flask App on Heroku'](https://www.geeksforgeeks.org/deploy-python-flask-app-on-heroku/) tutorial


### Install
To install, clone this repo and cd into the root of the project.

Now enter the following command:

```npm install```

### Run frontend

To spin up Parcel's dev server with your React frontend, enter:

```npm run start```

You should be able to view the project at localhost:1234

It's preferable to develop using Parcel's dev server, rather than Flask's, because the former includes hot reloading by default. 

### Run flask

To spin up a local Flask server with the latest build of your frontend, enter:

```npm run flask```


### Deploy to Heroku

These instructions assume you have a Heroku account and that you've initialized this project as a new repo.

For your initially deployment, run the following commands from inside your project:

1) Log in to Heroku if you're not already logged in:

```heroku login```

2) Create a unique name for your project:

```heroku create flask-react-app```

3) The previous command will automatically set up Heroku as a remote repo for your project. Now push your code to Heroku:

```git push heroku master```

For subsequent deployments, run:

```npm run deploy```