from flask import Flask
import os

app = Flask(__name__, static_folder="../dist", static_url_path="/")


@app.route("/")
def index():
    return app.send_static_file("index.html")


# if __name__ == "__main__":
#     app.run(host="127.0.0.1", debug=True, port=os.environ.get("PORT", 5000))
