from server.app import app
import os


if __name__ == "__main__":
    # Get Heroku port, fall back to port 5000
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
