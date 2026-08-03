import snowflake.connector

conn = snowflake.connector.connect(
    user="ZaidMalik79",
    password="Zaid@9844267092",
    account="ILAXNNG-ZD23345",
    warehouse="COMPUTE_WH",
    database="SUPPLYPRESCRIPT",
    schema="ANALYTICS"
)