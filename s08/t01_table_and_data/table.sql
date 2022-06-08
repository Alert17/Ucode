DROP TABLE IF EXISTS heroes;
CREATE TABLE IF NOT EXISTS heroes (
      id INT(10) AUTO_INCREMENT,
      name VARCHAR(30) NOT NULL,
      description VARCHAR(255) NOT NULL,
      class_role ENUM('tankman', 'healer', 'dps') NOT NULL,
      PRIMARY KEY (id),
      UNIQUE KEY uq_hero_name (name)
);