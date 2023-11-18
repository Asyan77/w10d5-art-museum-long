import { NavLink} from "react-router-dom"
import "./GalleryNavigation.css"

function GalleryNavigation ({galleries}) {

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">GO HOME</NavLink>
            { galleries.map ( gallery => {
            return <NavLink key={gallery.galleryid} to={`/galleries/${gallery.galleryid}`}>{gallery.name}</NavLink>
            })}
        </nav>
        
    )
} 

export default GalleryNavigation