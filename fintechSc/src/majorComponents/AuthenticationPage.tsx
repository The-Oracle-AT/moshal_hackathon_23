import { Link, Outlet } from 'react-router-dom'
const AuthenticationPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <section className="auth-container">
                <header className='auth-header'>
                    <Link to="login">Signin</Link>
                    <Link to="signup">Signup</Link>
                </header>
                <div className='auth-body'>
                    <Outlet />
                </div>
            </section>
            
        </div>
    )
}
export default AuthenticationPage