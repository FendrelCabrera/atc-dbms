import os
from dotenv import load_dotenv
import pyodbc
from flask import Flask, request, jsonify

load_dotenv()
app = Flask(__name__)

if os.getenv("DB_CONN_STRING") == None:
    print("EnvNotFound")
else:
    connection = pyodbc.connect(os.getenv("DB_CONN_STRING"))
    print("Connected Successfully")


@app.route('/', methods=['GET'])
def home_page():
    return "<html><body>home<body><html>"

@app.route('/add_user', methods=['POST'])
def add_user():
    try:
        data = request.json
        name = data["name"]
        age = data["age"]
        gender = data["gender"]
        email = data["email"]
        password = data["pass"]

        cursor = connection.cursor()
        cursor.execute(f"INSERT INTO customer (cname, age, gender, email, pass) VALUES ('{name}', {age}, '{gender}', '{email}', '{password}')")
        cursor.commit()
        cursor.close()

        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400

@app.route('/add_flight', methods=['POST'])
def add_flight():
    try:
        data = request.json
        fNum = data["fNum"]
        model = data["model"]
        capacity = data["capacity"]
        alCode = data["alCode"]
        
        cursor = connection.cursor()
        cursor.execute(f"INSERT INTO flight (fNum, model, capacity, alCode) VALUES ('{fNum}', '{model}', {capacity}, '{alCode}')")
        cursor.commit()
        cursor.close()

        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400

@app.route('/remove_flight', methods=['DELETE'])
def remove_flight():
    try:
        data = request.json
        fNum = data["fNum"]
        
        cursor = connection.cursor()
        cursor.execute(f"DELETE FROM flight WHERE fNum = '{fNum}'")
        cursor.commit()
        cursor.close()
        
        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400

@app.route('/add_route', methods=['POST'])
def add_route():
    try:
        data = request.json
        rtype = data["rtype"]
        dtime = data["dtime"]
        fNum = data["fNum"]
        runId = data["runId"]
        locId = data["locId"]

        cursor = connection.cursor()
        cursor.execute(f"INSERT INTO route (rtype, dtime, fNum, runId, locId) VALUES ({rtype}, CAST('{dtime}' AS DateTime) , '{fNum}', {runId}, '{locId}')")
        cursor.commit()
        cursor.close()

        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400

@app.route('/remove_route', methods=['POST'])
def remove_route():
    try:
        data = request.json
        rid = data["rid"]

        cursor = connection.cursor()
        cursor.execute(f"DELETE FROM route WHERE rid = {rid}")
        cursor.commit()
        cursor.close()

        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400

@app.route('/add_runway', methods=['POST'])
def add_runway():
    try:
        data = request.json
        runStatus = data["runStatus"]
        length = data["length"]

        cursor = connection.cursor()
        cursor.execute(f"INSERT INTO runway (runStatus, length) VALUES ({runStatus}, {length})")
        cursor.commit()
        cursor.close()

        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400


@app.route('/update_runway', methods=['PUT'])
def update_runway():
    try:
        data = request.json
        runId = data["runId"]

        cursor = connection.cursor()
        cursor.execute(f"UPDATE runway SET runStatus = ~runStatus WHERE runId = {runId}")
        cursor.commit()
        cursor.close()

        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400

@app.route('/book_ticket', methods=['POST'])
def book_ticket():
    try:
        data = request.json
        cid = data["cid"]
        rid = data["rid"]
        seatNum = data["seatNum"]
        seatClass = data["class"]
        mealOption = data["mealOption"]

        cursor = connection.cursor()
        cursor.execute(f"INSERT INTO ticket (cid, rid, seatNum, class, mealOption) VALUES ({cid}, {rid} , '{seatNum}', {seatClass}, '{mealOption}')")
        cursor.commit()
        cursor.close()

        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400


@app.route('/cancel_ticket', methods=['DELETE'])
def cancel_ticket():
    try:
        data = request.json
        tNo = data["tNo"]

        cursor = connection.cursor()
        cursor.execute(f"DELETE FROM ticket WHERE tNo = {tNo}")
        cursor.commit()
        cursor.close()

        return {}
    except Exception as e:
        return jsonify({"message":str(e)}), 400


@app.route('/get_airports', methods=['GET'])
def get_airports():
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT * from airport")
        records = cursor.fetchall()
        cursor.close()

        data = {}
        for r in records:
            data[r[0]] = [r[1], r[2]]
    
        return jsonify(data)
    except Exception as e:
        return jsonify({"message":str(e)}), 400

try:
    app.run(debug=True)
except KeyboardInterrupt as e:
    connection.close()
    print("Normal Exit")
except Exception as e:
    connection.close()
    print(e)