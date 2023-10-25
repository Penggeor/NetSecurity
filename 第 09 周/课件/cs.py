import requests

url = "http://175.178.126.31:8082/upload/cs.php"

while True:

    html = requests.get(url)

    if html.status_code == 200:

        print("OK")

        break
