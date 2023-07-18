CREATE TABLE musics_by_genre (
  genre VARCHAR,
  performer VARCHAR,
  year INT,
  title VARCHAR,
  PRIMARY KEY ((genre), performer, year, title)
) WITH CLUSTERING ORDER BY (performer ASC, year DESC, title ASC);