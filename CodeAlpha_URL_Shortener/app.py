from flask import Flask, render_template, request, redirect
import sqlite3
import random
import string

app = Flask(__name__)

# Create database
def init_db():
    conn = sqlite3.connect("urls.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS urls (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            short_code TEXT UNIQUE,
            long_url TEXT
        )
    """)
    conn.commit()
    conn.close()

init_db()

# Generate short code
def generate_code():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=6))

@app.route("/", methods=["GET", "POST"])
def home():
    short_url = None

    if request.method == "POST":
        long_url = request.form["long_url"]
        short_code = generate_code()

        conn = sqlite3.connect("urls.db")
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO urls (short_code, long_url) VALUES (?, ?)",
            (short_code, long_url)
        )
        conn.commit()
        conn.close()

        short_url = request.host_url + short_code

    return render_template("index.html", short_url=short_url)

@app.route("/<short_code>")
def redirect_url(short_code):
    conn = sqlite3.connect("urls.db")
    cursor = conn.cursor()

    cursor.execute(
        "SELECT long_url FROM urls WHERE short_code=?",
        (short_code,)
    )

    result = cursor.fetchone()
    conn.close()

    if result:
        return redirect(result[0])

    return "URL Not Found"

if __name__ == "__main__":
    app.run(debug=True)