import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! la page que vous demandez n'existe pas</h1>
            
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}