import "./Sidebar.css"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"

const Sidebar = () => {
  return (
    <Stack gap={4} id="sidebar" className="justify-content-center align-items-center vh-100 bg-primary text-white">
        <div className="d-flex justify-content-center align-items-center  w-100 gap-3">
            <span className="material-symbols-sharp">home</span>
            <h3 className="pt-2">Home</h3>
        </div>
        <div className="d-flex justify-content-center align-items-center  w-100 gap-3">
            <span className="material-symbols-sharp">search</span>
            <h3>Search</h3>
        </div>
        <div className="d-flex justify-content-center align-items-center  w-100 gap-3">
            <span className="material-symbols-sharp">favorite</span>
            <h3>Favorite</h3>
        </div>
        <div className="d-flex justify-content-center align-items-center  w-100 gap-3">
            <span className="material-symbols-sharp">play_circle</span>
            <h3>Playlist</h3>
        </div>
    </Stack>
  )
}
export default Sidebar