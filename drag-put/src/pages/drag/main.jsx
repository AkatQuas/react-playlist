import React, { Component, Fragment } from 'react';
import './main.less';
import Card from './card';

export default class MainPage extends Component {

    render () {
        return (
            <Fragment>
                <div className="spot">
                    <Card/>
                </div>
                {/* language=LESS*/}
               <style jsx>{`
                   .spot {

                   }
                `}</style>
            </Fragment>
        );
    }
}