import PhotoAlbum from "../styles/PhotoAlbum";
import adrianpoland from '../src/assets/adrianpoland.jpg';
import berlin from '../src/assets/berlin.jpg';
import bici from '../src/assets/bici.jpg';
import florence from '../src/assets/florence.jpg';
import berlin2 from '../src/assets/berlin2.jpg';
import berlin3 from '../src/assets/berlin3.jpg';
import milan from '../src/assets/milan.jpg';


function Photos() {

  return (
    <PhotoAlbum>
      <div>
        <p className="pAlbum">
          <img className="imageAlbum" src={adrianpoland} />
          <img className="imageAlbum" src={berlin} />
          <img className="imageAlbum" src={bici} />
          <img className="imageAlbum" src={florence} />
        </p>

        <p className="pAlbum">
          <img className="imageAlbum" src={berlin2} />
          <img className="imageAlbum" src={berlin3} />
          <img className="imageAlbum" src={milan} />
        </p>



      </div>
    </PhotoAlbum>
  )
}

export default Photos