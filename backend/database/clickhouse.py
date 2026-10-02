from clickhouse_driver import Client

client = Client(
    host="localhost",
    port=9000,
    database="smartoffice",
    user="default",
    password="clickhouse"
)