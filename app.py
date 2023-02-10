from flask import Flask

app = Flask("My App")

@app.route('/')
def index():
    return 'Web App with Python Flask!'

if __name__=='__main__':
    app.run()
