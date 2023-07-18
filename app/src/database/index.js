import cassandra from 'cassandra-driver';

export const client = new cassandra.Client({ contactPoints: ['cassandra'], keyspace: 'test' });

export default client;
