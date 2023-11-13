
import logo from '../../assets/logo-store.jpg'

import './header.css'

export function Header(){
    return(
        <>
            <div className='header-title'>
                <h2>Libreria Rito</h2>
                <div>
                    <img className= 'header-logo' src={logo} alt='Ritos Logo' />
                </div>
            </div>
        </>
    )
}