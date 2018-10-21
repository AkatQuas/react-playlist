let knightPosition = [1, 7];
let observer = null;

function emitChange () {
    observer(knightPosition);
}

export function observe (o) {
    if (observer) {
        throw Error('Multiple observers not implemented');
    }
    observer = o;
    emitChange();
}

export function canMoveKnight (tX, tY) {
    const [x, y] = knightPosition;
    const dx = tX - x;
    const dy = tY - y;
    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export function moveKnight (tX, tY) {
    if (!canMoveKnight(tX, tY)) {
        return false;
    }
    knightPosition = [tX, tY];
    emitChange();
}