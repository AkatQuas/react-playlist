import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pages: [
        {
          title: 'counter - synchronously',
          link: '/count'
        },
        {
          title: 'clocker - asynchronously',
          link: '/clocker'
        }
      ]
    }
  }

  static propTypes = {

  }
  jump = (e) => {
    const { link } = e.target.dataset;
    const { history } = this.props;
    history.push(link);
  }

  render() {
    const { pages } = this.state;
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          {
            pages.map(item => (
              <li key={item.link} data-link={item.link} onClick={this.jump}>page - {item.title}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}


export default connect()(IndexPage);
