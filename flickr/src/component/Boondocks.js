import React from 'react';
import Photo from './Photo';
import axios from 'axios';
import apiKey from './Config';

// Storing the apiKey into a variable
const api = apiKey

export default class Nature extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  // Using axios to fetch data

  componentDidMount = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&text=${this.props.searchFor}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo
        })
      })
      .catch(function (error) {
        console.log('Error fetching data from flickr', error);
      })
  }

  render() {
    return (
      <div className="photo-container">
        <h2>{this.props.name} Photos</h2>
        <ul>
          {
            this.state.photos.map(image => {
              return (
                <Photo url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}