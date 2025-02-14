# Falabella Products

This is a React Challenge which consist in making a product explorer where diferents products fetched from the _Fake Store API_ are display in the application so the user can see them and click them to get more information about them.

## What the application offers?

1. View a list of products
2. Click a product to see its details
3. Navigate between pages

## Routes

- `/items`: List of products.
- `/items/:id`: Product details based on the id.

## How to execute the application?

The first time you clone this repository completely I recommend to run this command:
```
docker-compose up --build
```

So each container will be created correctly. After that, you can run:

```
docker-compose up
```

## Backend

There is only one route that is `/items` where you make a `GET` request to get all the products which are store in the database (_PostgreSQL_) which was populated by fetching the data from the _Fake Store API_ in the section of products (https://fakestoreapi.com/products). The _REST API_ was built using _Express JS_, _PostgreSQL_ as its core technologies.

## Bonus

I used the _Material UI Design Library_ for the `React` _Components_.

