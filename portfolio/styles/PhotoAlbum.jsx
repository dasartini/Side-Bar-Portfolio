import './resourcesStyles/PhotoAlbum.css';
function PhotoAlbum(props) {
    const { children } = props
    return (
        <div className="photoAlbum"> {children}</div>

    )

}
export default PhotoAlbum