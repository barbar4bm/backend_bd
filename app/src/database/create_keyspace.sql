create KEYSPACE TEST
with replication = {'class': 'SimpleStrategy', 'replication_factor': 3};