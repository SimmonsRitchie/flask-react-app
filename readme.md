### ,
Experimental project combining flask backend with React frontend.

View: [live project](https://interactives.data.spotlightpa.org/2020/flask-react/)

[Parcel.js](https://github.com/parcel-bundler/parcel) is used to bundle the source files.

### Embed code
This widget is designed to be embeddable as an iframe. It uses [pym.js](https://github.com/nprapps/pym.js/) to resize the iframe's height when the size of the user's viewport changes.

To embed this widget and take advantage of pym, your embed code should look something like this:
```
<!-- START responsive iframe -->
<div id="flask-react--container"></div>
<script src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>new pym.Parent("flask-react--container", "https://interactives.data.spotlightpa.org/2020/flask-react/", {});</script>
<!-- END responsive iframe -->
```

### Install
To install, clone this repo and cd into the project folder.

Now enter the following command:

```npm install```

To run dev server, enter:

```npm run start```

You should be able to view the project at localhost:1234

