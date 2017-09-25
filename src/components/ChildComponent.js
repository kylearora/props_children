import React, {Component} from 'react'

class ChildComponent extends Component {

  render() {
    return (
      <div>
        <div>
          <button className="submitButton" type="submit" onClick={this.props.onClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default ChildComponent
