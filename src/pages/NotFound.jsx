import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <>
            <h1>Aradığın sayfa bulunamadı.</h1>
            <p>Anasayfaya dönmek istersen <Link to='/'>tıkla</Link>.</p>
        </>
    )
}