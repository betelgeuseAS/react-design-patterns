/*
In the Render Props design pattern, a component is structured to accept a function that produces a React Element as one
of its props. Rather than relying on its own fixed rendering logic, the component invokes this provided function to
determine what content to display.

This approach allows for more flexibility as it avoids embedding specific rendering instructions within each component,
offering a dynamic and customizable way to determine how the content should be presented.

To understand this better, imagine we have a collection of products that should be displayed in multiple locations of
our application.
While the user interface may vary across these sections, the underlying process remains consistent: fetching the
products from the API and presenting the list on the screen.
*/

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is product 1',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is product 2',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is product 3',
  },
  // ...
];

const Products = ({ render }) => {
  // Fetching products can be done here.

  return <>{render(products)}</>;
};

/*
For example, you can use the Products component in two different locations in your application and display the products
in different ways:
*/

import React from "react";

const HomePage = (): React.FC => {
  return (
    <div>
      <h1>Products List</h1>

      <Products
        render={products => (
          <ul>
            {products?.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
};

export default HomePage;

const ProductsSection = (): React.FC => {
  return (
    <div>
      <h1>Products List</h1>

      <Products
        render={products => (
          <div>
            {products?.map(product => (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default ProductsSection;

/*
In this example, in the first usage of the Products component, the products are displayed as a list of titles. In the
second usage, the products are displayed with their titles and descriptions.

This approach allows you to reuse the Products component and customize its rendering according to your needs in
different parts of your application.
*/
