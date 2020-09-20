from flask import Flask, request
import os

# Get and set directory for static files (ie. index.html, css, and bundled JS)
# defaults to 'dist', the default name of Parcel's build directory
build_dir = os.getenv("BUILD_DIR", "dist")
print("Build dir:", build_dir)
app = Flask(__name__, static_folder=f"../{build_dir}", static_url_path="/")


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/data", methods=["GET"])
def get_data():
    # Return content from server
    return {"greeting": "Hello!!!!!!"}


@app.route("/reverse", methods=["POST"])
def reverse(x=None, y=None):
    # Get content from client, process it on server, and return it
    data = request.get_json()
    text = data["text"]
    return {"text": text[::-1]}
