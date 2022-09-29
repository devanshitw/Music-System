import React from 'react'
import { getAllArtists } from '../api';
import { useStateValue } from '../context/StateProvider'
import { useEffect } from 'react';
import {actionType} from '../context/reducer'
import SongCard from './SongCard';


const DashboardArtists = () => {
  const[{allArtists},dispath]=useStateValue();
  useEffect(() => {
    if(!allArtists){
      getAllArtists().then((data) =>{
        dispath({
          type:actionType.SET_ALL_ARTISTS,
          allArtists:data.artist,
        })
      })
    }
}, [])
return (
  <div className='w-full p-4 flex items-center justify-center flex-col mt-[-40px]'>
    <div className='w-full flex justify-center items-center gap-20'>
        
      {/* <input type="text" className={`w-52 px-4 py-2  border ${isFoucs ? "border-gray-500 shadow-md": "border-gray-300"} rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold`}placeholder='Search here...' value={songFilter}  */}
      {/* onChange={(e)=> setSongFilter(e.target.value)}
      onBlur={() => {setIsFoucs(false)}}
      onFocus={()=>setIsFoucs(true)}
        /> */}
  </div>
    <div className='relative w-full my-4 p-4 py-16 border border-gray-300 rounded-md'>
      <div className='absolute top-4 left-4'>
        <p className='text-xl font-bold text-textColor'>
          <span className='text-xl font-bold text-black'>Count : </span>
        {allArtists?.length}
        </p>
      </div>

      <ArtistContainer data={allArtists} />
    </div>
  </div>
)
}
export const ArtistContainer =({data}) => {
return(
<div className='w-full flex flex-wrap gap-3 items-center justify-evenly'> 
{
data && data.map((song,i)=>(
<SongCard key={song._id} data={song} index={i} type="artist"/>
))}

</div>)
}

export default DashboardArtists