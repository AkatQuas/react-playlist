import React, { Component, Fragment } from 'react';
import TouchBackend from 'react-dnd-touch-backend';
import { DragDropContext, DragSource } from 'react-dnd';
import PropTypes from 'prop-types';

const NN_MID = document.documentElement.clientWidth / 2;

class Card extends Component {
    constructor (props) {
        super(props);
        console.log(props);
    }

    static propTypes = {
        isDragging: PropTypes.bool.isRequired,
        connectDragSource: PropTypes.func.isRequired
    };

    render () {
        const { isDragging, connectDragSource, clientOffset } = this.props;
        const cute = document.querySelector('#cute');
        let top, left, NODE_STYLE;

        if (cute) {
            top = cute.offsetTop;
            left = cute.offsetLeft;
        }
        if (isDragging) {
            NODE_STYLE = {
                opacity: 0.5,
                top: clientOffset.y,
                left: clientOffset.x / NN_MID * 50 + '%'
            };
        } else {
            if (left > NN_MID) {
                NODE_STYLE = {
                    opacity: 1,
                    top,
                    right: 0
                };
            } else {
                NODE_STYLE = {
                    opacity: 1,
                    top,
                    left: 0
                };
            }
        }

        return connectDragSource(
            <div className="layer">
                <div className="cute" id="cute" style={NODE_STYLE}></div>
                {/* language=LESS*/}
                <style jsx>{`
                    .layer {
                        position: relative;
                        height: 60vh;
                        width: 100%;
                        .cute {
                            position: absolute;
                            width: 1rem;
                            height: 1rem;
                            font-size: .3rem;
                            background-color: antiquewhite;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

const _source = {
    beginDrag (props) {
        return {
            ...props
        };
    }
};

function collect (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        clientOffset: monitor.getClientOffset()
    };
}

export default DragDropContext(TouchBackend({
    enableTouchEvents: true,
    enableMouseEvents: true,
    enableKeyboardEvents: false
}))(DragSource('card', _source, collect)(Card));