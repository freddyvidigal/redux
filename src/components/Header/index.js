import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './header.css'

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length);
  return (
   <header className='container' >

   <Link to="/">
   <img className='logo' src={logo} alt="logo do Projeto" />
   </Link>

   <Link className='reserva' to='/reservas'>
   <div>
   <strong>Minhas reservas</strong>
   <span>{reserveSize}</span>
   </div>
    </Link>

   </header>
  )
}
