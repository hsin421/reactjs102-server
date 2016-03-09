import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { renderFullPage } from './baseHtml.js';
import { fetchProducts } from './fetchProducts';
import App from './App.js';

export default function handleRender(data) {

	// fetchProducts(
	// 	data => res.status(400).send(renderFullPage(html, data))
	// );
	const html = ReactDOMServer.renderToString(<App data={data} />);
	return renderFullPage(html, data);
}

