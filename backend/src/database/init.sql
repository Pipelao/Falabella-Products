CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    product_id INT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    image TEXT NOT NULL
);
