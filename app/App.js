import React from 'react';
import { fetchProducts } from './fetchProducts';

export default class App extends React.Component {
  render() {
  	const { data } = this.props;
    return (
      <div>
        <h1>¡Universal App!</h1>
        <ul>
          {data && data.map(product => (
            <li key={product.id}>{product.product} ${product.price}</li>
          ))}
        </ul>
      </div>
    );
  }
}