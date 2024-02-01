CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  ddd_phone VARCHAR(2) NOT NULL,
  phone VARCHAR(9) NOT NULL
);

CREATE TABLE IF NOT EXISTS routes (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL,
  x_coordinate INT NOT NULL,
  y_coordinate INT NOT NULL,
  CONSTRAINT fk_client FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE ON UPDATE CASCADE
);