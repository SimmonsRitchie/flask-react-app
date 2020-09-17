### __Boilerplate Spotlight React Widget__
This is a template for creating embeddable React JS widgets or data visualizations for Spotlight PA articles. It incorporates Spotlight PA styles, developed by Carl Johnson and Kent Wilhelm, and the Bulma CSS framework.

View: [live project](https://interactives.data.spotlightpa.org/2020/boilerplate-spotlight-react-widget-2/)

[Parcel.js](https://github.com/parcel-bundler/parcel) is used to bundle the source files.

### Embed code
This widget is designed to be embeddable as an iframe. It uses [pym.js](https://github.com/nprapps/pym.js/) to resize the iframe's height when the size of the user's viewport changes.

To embed this widget and take advantage of pym, your embed code should look something like this:
```
<!-- START responsive iframe -->
<div id="boilerplate-spotlight-react-widget-2--container"></div>
<script src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>new pym.Parent("boilerplate-spotlight-react-widget-2--container", "https://interactives.data.spotlightpa.org/2020/boilerplate-spotlight-react-widget-2/", {});</script>
<!-- END responsive iframe -->
```

### Getting started
To transform this boilerplate into a fresh project, this project includes a Gulp script that updates the project with the new project name and cleans up certain files in prepartion for development (eg. this readme file)

In the project directory, run:

```gulp new```

### Install
To install, clone this repo and cd into the project folder.

Now enter the following command:

```npm install```

To run dev server, enter:

```npm run start```

You should be able to view the project at localhost:1234

### Deployment
To deploy to Spotlight PA's S3 account:

1) Make sure you have the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html) installed and your Spotlight credentials set in '~/.aws/credentials'. The file should contain lines in the following format:

```
[default]
aws_access_key_id = your_access_key_id
aws_secret_access_key = your_secret_access_key
```
Or, if you have more than one AWS account and don't want your spotlight account as default, something like this:

```
[default]
aws_access_key_id = your_access_key_id
aws_secret_access_key = your_secret_access_key

[spotlight]
aws_access_key_id = your_access_key_id
aws_secret_access_key = your_secret_access_key

```

2) Install [s3deploy](https://github.com/bep/s3deploy)

3) CD into the project folder. If you have more than one AWS account, make sure that either your Spotlight PA account is set as default in '~/.aws/credentials' or enter the command below to change [AWS CLI profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) to your Spotlight PA account. The AWS CLI will use this account until you end your terminal session:

```export AWS_PROFILE=spotlight```

This command assumes you named your Spotlight PA account 'spotlight' in '~/.aws/credentials'.

4) Go into package.json in the root of the project folder and alter the build:prod and deploy scripts to reflect the desired deployment location on Spotlight's S3 account. Eg.

```
    "build:prod": "parcel build src/index.html --public-url https://interactives.data.spotlightpa.org/2019/my-cool-interactive/",

    "deploy": "npm run clean && npm run build:prod && s3deploy -source dist -bucket interactives.data.spotlightpa.org -path 2019/my-cool-interactive/ -region us-east-2  -distribution-id EFR0HZ7VA3Q92 -public-access",

```

5) You're ready to deploy! Run the following command:

```npm run deploy```

### Pym troubleshooting
#### Height not updating
Sometimes your widget's height may increase without pym updating the iframe accordingly. Our experience is that it's best to place pym.sendHeight calls in components that may expand the overall height of the widget. We recommend adding these calls to a component's componentDidUpdate or componentDidMount lifecycle methods.

In some cases you may also need to add a timeout.

To assist, we've created a helper function. Here's an example of it in use:

```
import React from 'react'
import { pymSendHeight } from '../utils/handlePym'

class Example extends React.Component {
  
  componentDidMount() {
    // Tell pym to increase height 500ms after component mounts
    pymSendHeight({timeout: 500})
  }

  render() {
    return (
      <div>
      <h2>Spotlight App</h2>
      </div>
    )
  }
}
```
#### Widget 'snaps' back in mobile

If you're viewing the widget on a small a screen and the height decreases significantly you may encounter an unpleasant side effect: you're stuck on the same part of the page but the widget has essentially 'snapped' out from under you.

The best defense against this situation may be to simply avoid situations where the widget's height will decrease significantly. Try to keep the widget's height relatively stable between user interactions. 

