import React from 'react';
import { render } from 'react-dom';
import '@/styles/reset.css';
import '@/js/mute-image';
import Board from './board';

import { observe } from './game';

const content = document.getElementById('content');

observe(knightPosition => render(<Board knightPosition={knightPosition}/>, content));
