import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom"
import "./GalleryView.css"

function GalleryView ({galleries}) {
    const {galleryId} = useParams();
    const art = galleries.find(art => art.galleryid === Number(galleryId))
   

    return (
        <>
          <h1>Gallery View</h1>
          { art ? <p>{art.name}</p> : <Navigate to="/" />} 

        </>
    )
}

export default GalleryView