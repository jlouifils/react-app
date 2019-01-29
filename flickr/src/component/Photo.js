import React from 'react';

class Photo extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.url} alt="" />
      </li>
    )
  }
}
export default Photo;