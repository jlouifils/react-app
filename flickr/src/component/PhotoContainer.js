import React from 'react';
import Photo from './Photo';
import Loading from './Loading';

// 1- Checks to see if react has fetched any data.
// 2- If not, the loading gif renders,
// 3- If fetches, then it checks to see if the photos array has any photo in it.
// 4- If not, then it shows 'no photos were found'.
// 5- If yes, then it renders the photos. 

const PhotoContainer = (props) => {
  return (
    <div>
      {
        props.loading ? <Loading /> :

          <div className="photo-container">
            {
              props.gallery.length === 0 ?
                <div className="photo-container">
                  <h2>Search Result</h2>
                  <h3>Sorry no photos were found !</h3>
                </div>
                :
                <div>
                  <h2>Search Result</h2>
                  <ul>
                    {
                      props.gallery.map(image => {
                        return (
                          <Photo url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />
                        )
                      })
                    }
                  </ul>
                </div>
            }
          </div>
      }
    </div>
  )
}

export default PhotoContainer;