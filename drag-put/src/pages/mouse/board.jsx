import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BoardSquare from './board-square';
import Knight from './knight';
import { moveKnight } from './game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
    static propTypes = {
        knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
    };

    renderSquare (i) {
        const x = i % 8;
        const y = ~~(i / 8);
        return (
            <div key={i} className="square-wrapper" onClick={() => this.handleSquareClick(x, y)}>
                <BoardSquare x={x} y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece = (x, y) => {
        const [kx, ky] = this.props.knightPosition;
        return (x === kx && y === ky) ? <Knight/> : null;
    };
    handleSquareClick = (tX, tY) => {
        moveKnight(tX, tY);
    };

    render () {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            <Fragment>
                <div className="board">
                    {squares}
                </div>
                {/* language=LESS*/}
                <style jsx global>{`
                    .board {
                        border: 1px solid #999;
                        margin: 20px auto;
                        width: 800px;
                        height: 800px;
                        display: flex;
                        flex-wrap: wrap;
                        .square-wrapper {
                            width: 12.5%;
                            height: 12.5%;
                        }
                    }
                `}</style>
                <hr/>
                <p>123</p>
            </Fragment>
        );
    }
}

export default DragDropContext(HTML5Backend)(Board);
