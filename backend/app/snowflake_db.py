import snowflake.connector

conn = snowflake.connector.connect(
    user="ZaidMalik79",
    password="*********",
    account="*********",
    warehouse="COMPUTE_WH",
    database="SUPPLYPRESCRIPT",
    schema="ANALYTICS"
)
