import React from 'react'

import { Products } from './Products'

export const HomePage = () => {
  return (
    <div>
      <h1>Products List 1</h1>

      <Products
        render={(products) => (
          <ul>
            {products?.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        )}
      />

      <h1>Products List 2</h1>

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
  )
}
