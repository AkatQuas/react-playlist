import React from 'react';
import { render } from 'react-dom';
import '@/js/rem';
import '@/styles/reset.css';
import '@/js/mute-image';

import MainPage from './main';

const content = document.getElementById('content');

render(<MainPage/>, content);