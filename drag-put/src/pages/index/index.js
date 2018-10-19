import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '@/styles/reset.css';

import { data } from '@/../build/entry';

class Index extends React.Component {
    constructor () {
        super();
        this.state = {
            list: data.filter(item => item.name !== 'index')
        };
    }

    render () {
        const { list } = this.state;
        return (
            <Fragment>
                <div className="index-container">
                    <h3>目录</h3>
                    <ul>
                        {
                            list.map((item, index) => (
                                    <li className="fn-clear" key={index}>
                                        <span className="fn-fl">{item.title}@{item.type}</span>
                                        <a target="_blank" href={'/' + item.name + '.html'} className="fn-fl">点击链接</a>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                {/* language=LESS */}
                <style jsx>{`
                    li {
                        padding-left: 20px;
                        font-size: 14px;
                        margin-bottom: 10px;
                        border-bottom: 1px solid #ddd;
                        line-height: 30px;
                    }

                    h3 {
                        text-align: center;
                        font-size: 20px;
                        margin: 15px auto;
                    }

                    a, span {
                        margin-right: 10px;
                    }

                    span {
                        color: #666;
                    }

                    a {
                        color: #4ab4ff;
                        text-decoration: underline;
                    }
                `}</style>
            </Fragment>
        );
    }
}

const wrapper = document.getElementById('wrapper');
const content = document.getElementById('content');

ReactDOM.render(<Index/>, wrapper || content);
