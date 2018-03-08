import React from 'react';
const NumberList = ({ numbers }) => <ul> {numbers.map(n => <li key={n.toString()}> Number List: {n} </li>)}</ul>

const ArrayCp = _ => [
    // Don't forget the keys :)
    <li key='A' > First item </li>,
    <li key='B' > Second item </li>,
    <li key='C' > Third item </li>,
];

const Repeat = props => {
    let items = [];
    console.log(props.children);
    for (let i = 0; i < props.times; i++) {
        items.push(props.children(i));
    }
    return <div> {items} </div>
};
const ListTen = _ => <Repeat times={10} >{index => <div key={index}> This is item {index} in the list </div>}</Repeat>

export default _ => (
    <div>
        <NumberList numbers={[1, 2, 3]} />
        <ArrayCp />
        <ListTen />
    </div>
);