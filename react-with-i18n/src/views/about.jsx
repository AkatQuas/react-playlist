import React, { Fragment } from 'react';
import { I18n } from 'react-i18next';

export default _ => (
    <Fragment>
        <div className="App">
            <p>about page</p>
        </div>
        <I18n ns="about">
            {
                t => {
                    const ps = t('persons', { returnObjects: true })

                    return ps.map(i => (
                        <p key={i.name}>{i.name} - {i.label}</p>
                    ))
                }
            }

        </I18n>
    </Fragment>
)