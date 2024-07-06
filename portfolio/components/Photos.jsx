import PhotoAlbum from "../styles/PhotoAlbum"

function Photos(){

    return(
<PhotoAlbum>
        <div>
        <p className="pAlbum">
  <img className="imageAlbum" src="../src/assets/adrianpoland.jpg"/>
  <img className="imageAlbum" src="../src/assets/berlin.jpg"/>
  <img className="imageAlbum" src="../src/assets/bici.jpg"/>
  <img className="imageAlbum" src="../src/assets/florence.jpg"/>
</p>

<p className="pAlbum">
  <img className="imageAlbum" src="../src/assets/berlin2.jpg"/>
  <img className="imageAlbum" src="../src/assets/berlin3.jpg"/>
  <img className="imageAlbum" src="../src/assets/milan.jpg"/>
</p>



        </div>
        </PhotoAlbum>
    )
}

export default Photos