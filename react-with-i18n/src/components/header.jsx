import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { I18n } from 'react-i18next'

export default _ => {
    const links = [
        { path: '/', label: 'home' },
        { path: '/buy', label: 'buy' },
        { path: '/about', label: 'about' },
    ];
    const lang = [
        {
            l: 'cn', label: '中文',
        },
        {
            l: 'en', label: 'English'
        }
    ]
    return (
        <Fragment>
            <I18n>
                {
                    (t, { i18n }) => (

                        <div className="header">
                            <div className="links">
                                {links.map(i => (
                                    <Link to={i.path} key={i.label}>{i.label}</Link>
                                ))}
                            </div>
                            <div className="language">
                                {lang.map(i => (
                                    <span onClick={_ => i18n.changeLanguage(i.l)} key={i.l} className="item">{i.label}</span>
                                ))}
                            </div>
                        </div>
                    )
                }
            </I18n>
            <style jsx>{`
            .header {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
            }
            .links {
                display: flex;
                flex: 2;
                justify-content: space-around;
            }
            .language {
                display: flex;
                flex: 1;
                justify-content: flex-end;
            }
            .language .item {
                padding: 0 10px;
            }
            `}</style>
        </Fragment>
    )
}