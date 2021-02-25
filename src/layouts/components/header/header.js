import './header.scss'
import Nav from '../navigation/navigation'

function Header () {

    return(
        <>
            <div className='header'>
                <h1>Underworld Corp.</h1>
            </div>
            <Nav />
        </>
    )
}

export default Header;