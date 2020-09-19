from flask import Flask
import os

app = Flask(__name__, static_folder="../dist", static_url_path="/")


@app.route("/")
def index():
    return app.send_static_file("index.html")
