import React from "react";

export default function Navbar(){
    return (
        <nav className='side-menu'>
            <ul className='side-menu__wrapper'>
                <li className='side-menu__item'><a href="">Профиль</a></li>
                <li className='side-menu__item'><a href="">Сообщения</a></li>
                <li className='side-menu__item'><a href="">Новости</a></li>
                <li className='side-menu__item'><a href="">Музыка</a></li>
            </ul>
        </nav>
    )
}