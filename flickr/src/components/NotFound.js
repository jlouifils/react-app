import React from 'react';
import  { withRouter } from 'react-router-dom';

  class NotFound extends Component {
    render() {
      return (
        <div classNmae="container">
          <h2 className="not-found">Page Not Found</h2>
          <p>Sorry ! The page you are looking for cannot be found.</p>
          <button className="home-btn" onClick={ () => props.history.push('/')}>Go Home</button>
        </div>
      )
    }
  }
  export default withRouter (NotFound);
