import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { renderFullPage } from './baseHtml.js';
import App from './App.js';

export default function handleRender(data) {

	const html = ReactDOMServer.renderToString(<App data={data} />);
	return renderFullPage(html, data);
}

