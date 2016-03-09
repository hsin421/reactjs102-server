import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: this.props.data
		}
	}

	handleAddProduct = (e) => {
		if (e.key === 'Enter') {
			this.handlePost();
		}
	}

	handlePost = () => {
		console.log('posting with ');
		axios.post('/addProductPost', {
			product: 'random stuff',
			price: 30,
			image: 'http://placekitten.com/200/303'
		}).then(
			res => {
				//console.log(JSON.stringify(res));
				this.setState(
			{
				products: [...this.state.products, res.data]
			})}
		)
	}

  render() {
  	const { products } = this.state;
    return (
      <div>
        <h1>¡Universal App!</h1>
        <ul>
          {products && products.map(product => (
            <li key={product.id || product._id}>
            	<img src={product.image} width="200" />
            	{product.product} ${product.price}
          	</li>
          ))}
        </ul>
        <input onKeyDown={this.handleAddProduct} />
      </div>
    );
  }
}