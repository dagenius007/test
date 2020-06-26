import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/css/uikit.min.css'
					/>
					<link
						href='https://fonts.googleapis.com/css?family=Inter:400,500&display=swap'
						rel='stylesheet'
					/>
					<title>GS3 Customers</title>
				</Head>
				<body>
					<Main />
					<NextScript />
					
					<script src='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/js/uikit.min.js'></script>
				</body>
			</Html>
		);
	}
}
