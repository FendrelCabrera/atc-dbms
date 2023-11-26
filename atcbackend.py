import pyodbc
from flask import Flask, request, jsonify

app = Flask(__name__)

connectionString = "Driver={ODBC Driver 18 for SQL Server};Server=tcp:atc-dbms.database.windows.net,1433;Database=atc;Uid=atc;Pwd=A!rTrafficControl;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;"


connection = pyodbc.connect(connectionString)
print("Connected Successfully")


@app.route('/', methods=['GET'])
def home_page():
    print("Home Page")
    return "<html><body>home<body><html>"


@app.route('/add_user', methods=['POST'])
def add_user():
    print("User Page")
    return "<html><body>user<body><html>"
    data = request.json
    cursor = connection.cursor()
    name = data["name"]
    age = data["age"]
    gender = data["gender"]
    email = data["email"]
    password = data["password"]
    cursor.execute(f"INSERT INTO customer (cname, age, gender, email, pass) VALUES ('{name}', {age}, '{gender}', '{email}', '{password}')")
    cursor.commit()
    cursor.close()

    return "<html><body>user<body><html>"

@app.route('/add_flight', methods=['POST'])
def add_flight():
    print("Flight Page")
    data = request.json
    cursor = connection.cursor()
    fNum = data["fNum"]
    model = data["model"]
    capacity = data["capacity"]
    alCode = data["alCode"]
    cursor.execute(f"INSERT INTO flight (fNum, model, capacity, alCode) VALUES ('{fNum}', '{model}', {capacity}, '{alCode}')")
    cursor.commit()
    cursor.close()

    return "<html><body>flight<body><html>"

@app.route('/remove_flight', methods=['POST'])
def remove_flight():
    print("Flight Page")
    data = request.json
    cursor = connection.cursor()
    fNum = data["fNum"]
    cursor.execute(f"DELETE FROM flight WHERE fNum = '{fNum}'")
    cursor.commit()
    cursor.close()

    return "<html><body>flight<body><html>"

@app.route('/add_route', methods=['POST'])
def add_route():
    print("Route Page")
    data = request.json
    cursor = connection.cursor()
    rtype = data["rtype"]
    dtime = data["dtime"]
    fNum = data["fNum"]
    runId = data["runId"]
    locId = data["locId"]
    cursor.execute(f"INSERT INTO route (rtype, dtime, fNum, runId, locId) VALUES ({rtype}, CAST('{dtime}' AS DateTime) , '{fNum}', {runId}, '{locId}')")
    cursor.commit()
    cursor.close()

    return "<html><body>route<body><html>"

@app.route('/remove_route', methods=['POST'])
def remove_route():
    print("Route Page")
    data = request.json
    cursor = connection.cursor()
    rid = data["rid"]
    cursor.execute(f"DELETE FROM route WHERE rid = {rid}")
    cursor.commit()
    cursor.close()

    return "<html><body>route<body><html>"

@app.route('/add_runway', methods=['POST'])
def add_runway():
    print("Runway Page")
    data = request.json
    cursor = connection.cursor()
    runStatus = data["runStatus"]
    length = data["length"]
    cursor.execute(f"INSERT INTO runway (runStatus, length) VALUES ({runStatus}, {length})")
    cursor.commit()
    cursor.close()

    return "<html><body>runway<body><html>"

@app.route('/update_runway', methods=['PUT'])
def update_runway():
    print("Runway Page")
    data = request.json
    cursor = connection.cursor()
    runId = data["runId"]
    cursor.execute(f"UPDATE runway SET runStatus = ~runStatus WHERE runId = {runId}")
    cursor.commit()
    cursor.close()

    return "<html><body>flight<body><html>"

@app.route('/book_ticket', methods=['POST'])
def book_ticket():
    print("Ticket Page")
    data = request.json
    cursor = connection.cursor()
    cid = data["cid"]
    rid = data["rid"]
    seatNum = data["seatNum"]
    seatClass = data["class"]
    mealOption = data["mealOption"]
    cursor.execute(f"INSERT INTO ticket (cid, rid, seatNum, class, mealOption) VALUES ({cid}, {rid} , '{seatNum}', {seatClass}, '{mealOption}')")
    cursor.commit()
    cursor.close()

    return "<html><body>ticket<body><html>"

@app.route('/cancel_ticket', methods=['POST'])
def cancel_ticket():
    print("Ticket Page")
    data = request.json
    cursor = connection.cursor()
    tNo = data["tNo"]
    cursor.execute(f"DELETE FROM ticket WHERE tNo = {tNo}")
    cursor.commit()
    cursor.close()

    return "<html><body>ticket<body><html>"

@app.route('/get_airports', methods=['GET'])
def get_airports():
    print("Airport Page")
    cursor = connection.cursor()
    cursor.execute("SELECT * from airport")
    records = cursor.fetchall()
    data = {}
    for r in records:
        data[r[0]] = [r[1], r[2]]
    cursor.close()
    return jsonify(data)


try:
    app.run(debug=True)
except Exception as e:
    connection.close()
    print(e)