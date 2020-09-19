# from api.api import app
from flask import Flask
import os

# app = Flask(__name__)
app = Flask(__name__, static_folder="dist", static_url_path="/")


@app.route("/")
def index():
    # return "<div>hello world?</div>"
    return app.send_static_file("index.html")


if __name__ == "__main__":
    print("Initializing Flask!")
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
