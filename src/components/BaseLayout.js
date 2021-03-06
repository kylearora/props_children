import React, {Component} from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

class BaseLayout extends Component {
  render() {
    return (
      <div>

        <Header/>

        <div>
          {this.props.children}
        </div>

        <Footer />

      </div>
    );
  }
}


export default BaseLayout
