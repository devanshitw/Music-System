import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Header from './Header'
import {IoHome} from 'react-icons/io5'
import { isActiveStyles, isNotActiveStyles } from '../utils/styles'
import DashboardAlbums  from './DashboardAlbums'
import DashboardArtists  from './DashboardArtists'
import  DashboardHome  from './DashboardHome'
import DashboardSongs  from './DashboardSongs'
import  DashboardUsers  from './DashboardUsers'
import DashBoardNewSong from './DashBoardNewSong'
import Alert from './Alert'
import { useStateValue } from '../context/StateProvider'
const Dashboard = () => {
  const [{alertType},dispath,]=useStateValue();
  return (
    
    <div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
      
    <Header/>
    
    <h1 className='text-textColor font-bold text-xl mt-[-40px]'>Dashboard</h1>
    <div className='w-[60%] my-2 p-4 items-center justify-center flex gap-20'>
      
      <NavLink to={"/dashboard/home"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}><IoHome className='text-2xl text-textColor'></IoHome></NavLink>
      <NavLink to={"/dashboard/user"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Users</NavLink>
      <NavLink to={"/dashboard/songs"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Songs</NavLink>
      <NavLink to={"/dashboard/artist"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Artist</NavLink>
      <NavLink to={"/dashboard/album"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Albums</NavLink>
      
    </div>
    <div className='my-4 w-full p-4'>
   <Routes>
    <Route path='/home' element={<DashboardHome />} />
    <Route path='/user' element={<DashboardUsers />} />
    <Route path='/songs' element={<DashboardSongs />} />
    <Route path='/artist' element={<DashboardArtists />} />
    <Route path='/album' element={<DashboardAlbums />} />
    <Route path='/newSong' element={<DashBoardNewSong />} />
   </Routes>
    </div>
    {/* <Alert type={"danger"}/> */}
    {alertType && (
      <Alert type={alertType} />
    )}
    </div>
  )
}

export default Dashboard