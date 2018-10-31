import React from 'react'; 
import { render as reactRender } from 'react-dom';
import AppProvider from './components/HOCs/AppProvider';

reactRender(<AppProvider />, document.getElementById('mount'));
