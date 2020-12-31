import flask
import random

words = open("words-fi", "r").readlines()

app = flask.Flask(__name__)
#app.config["DEBUG"] = True

@app.route('/randomize_word', methods=['GET'])
def randomize_word():
    return words[random.randrange(len(words))]

app.run()
