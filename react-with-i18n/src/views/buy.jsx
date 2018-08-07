import React, { Fragment } from 'react';
import { I18n } from 'react-i18next';

export default _ => (
    <Fragment>
        <div className="App">

            <I18n ns="buy">
                {t => (
                    <Fragment>
                        <p className="title">{t('title')}</p>
                        <div className="product">{t('product')}</div>
                    </Fragment>
                )}
            </I18n>
        </div>
        <style jsx>{`
        .title {
            color: aqua;
            font-weight: 600;
            font-size: 80px;
        }
        .product {
            text-decoration: underline antiquewhite;
        }

        `}</style>
    </Fragment>
)