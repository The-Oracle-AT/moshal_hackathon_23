import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="authenticationPage">Sign-in/Sign-up</Link>
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
            <Link to="authenticationpage">Authentication Page</Link>
        </div>
    )
}
export default Home;