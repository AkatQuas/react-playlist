import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { I18n, Trans } from 'react-i18next';

export default _ => (
    <I18n ns="translations">
        {
            t => (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">{t('title')}</h1>
                    </header>
                    <div className="App-intro">
                        <Trans i18nKey="description.part1">
                        </Trans>
                    </div>
                    <p className="App-intro">{t('description.part2')}</p>
                </div>
            )
        }
    </I18n>
)