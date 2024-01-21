import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './global.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
