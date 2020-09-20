### Flask-React Boilerplate App
A dead simple Flask-React app that's easy to deploy to Heroku. Clone this repo and modify it for your own use.

I built this boilerplate because I could find only limited advice on the web on creating a Flask app with a React frontend that could be deployed to Heroku.

The project includes ESLint and the Bulma CSS framework. [Parcel.js](https://github.com/parcel-bundler/parcel) is used to bundle the JS.

View [live project on Heroku](https://dsr-flask-react-app.herokuapp.com/).

Inspired by:
- Miguel Grinberg's ['How to Create a React + Flask Project'](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project) and ['How to Deploy a React + Flask Project'](https://blog.miguelgrinberg.com/post/how-to-deploy-a-react--flask-project) tutorials.
- Anindita Basu's [flask-heroku-start-pack](https://github.com/AninditaBasu/flask-heroku-starter-pack) and [tutorial](https://dev.to/aninditabasu/how-to-move-your-flask-app-from-the-local-machine-to-the-heroku-cloud-egk).
- Ayushman Kumar's ['Deploy Python Flask App on Heroku'](https://www.geeksforgeeks.org/deploy-python-flask-app-on-heroku/) tutorial


### Requirements
- Python v3.8+
- Node v6+

### Install
To install, clone this repo and cd into the root of the project.

1) Create a virtual environment:

```python3 -m venv venv```

2) Activate the virtual environment. If you're using a Unix-based OS, run:

```source venv/bin/activate```

If you're using Windows, run:

```venv\Scripts\activate```

3) Install the needed python dependencies:

```pip install -r requirements.txt``` 

4) Now enter the following command to install the required Node packages:

```npm install```

### Run

To spin up a local Flask server with the latest build of the frontend, run:

```npm run flask:prod```

For development, you may prefer to spin up a local server with your Flask app and a separate local server with your React app. Run:

```npm run flask:dev```

Note: You may need to hard refresh your browser as you develop in order to see changes to your frontend.

### Run just frontend

To spin up Parcel's dev server with just your React frontend, run:

```npm run start```

You should be able to view the project at localhost:1234

Note: Keep in mind you will not be able to interact with the server unless you also spin up your Flask app. However, it can sometimes be preferable to develop using Parcel's dev server, rather than Flask's, because Parcel includes hot reloading by default. 

### Deploy to Heroku - Initial

These instructions assume you have a Heroku account and that you've initialized this project as a new repo.

For your initially deployment, run the following commands from inside your project:

1) Log in to Heroku if you're not already logged in:

```heroku login```

2) Create a new Heroku project with a unique name. Upon execution, Heroku will add the location of this project to git as a new remote repo.

```heroku create dsr-flask-react-app```

3) Now push your code to Heroku:

```git push heroku master```

### Deploy to Heroku - Subsequent

For subsequent deployments to Heroku, make sure you're on your master branch then run:

```npm run deploy```