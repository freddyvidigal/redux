import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './header.css'

export default function Header() {
  return (
   <header className='container' >
   <Link>
   <img className='logo' src={logo} alt="logo do Projeto" />
   </Link>

   <Link className='reserva' to='/reservas'>
   <div>
   <strong>Minhas reservas</strong>
   <span>0 reservas</span>
   </div>
    </Link>

   </header>
  )
}
