import axios from "axios";
const baseURL ="http://"+SERVER+":4000/";
export const validateUser=async(token)=>{
    try{
        const res=await axios.get('http://'+SERVER+':4000/api/users/login',{
            headers:{
                Authorization:"Bearer " + token,
            },
        });
        return res.data;
    }catch(error){}
}

export const getAllUsers = async () => {
    try{
        const res= await axios.get('http://'+SERVER+':4000/api/users/getUsers');
        return res.data;
    }
    catch(error){
        return null;
    }
};
export const getAllArtists =async () => {
    try{
        const res= await axios.get('http://'+SERVER+':4000/api/artists/getAll');
        return res.data;
    }
    catch(error){
        return null
    }
};
export const getAllAlbums =async () => {
    try{
        const res= await axios.get('http://'+SERVER+':4000/api/albums/getAll');
        return res.data;
    }
    catch(error){
        return null
    }
}
export const getAllSongs =async () => {
    try{
        const res= await axios.get('http://'+SERVER+':4000/api/songs/getAll');
        return res.data;
    }
    catch(error){
        return null
    }
};
export const changingUserRole =async (userId,role) =>{
    try {
        const res=axios.put(`http://'+SERVER+':4000/api/users/updateRole/${userId}`,{data: {role :role},
    });
    return res;
    } catch (error) {
        return null
    }     
}

export const removeUser =async (userId)=>{
    try {
        const res=axios.delete(`http://'+SERVER+':4000/api/users/deleteUser/${userId}`);
        return res;
    } catch (error) {
        return null;
    }
}
export const saveNewSong = async (data) => {
    try {
      const res = axios.post(`http://'+SERVER+':4000/api/songs/save`, { ...data });
      return (await res).data.savedSong;
    } catch (error) {
      return null;
    }
  };

export const saveNewArtist =async(data)=>{
    try {
        const res = axios.post('http://'+SERVER+':4000/api/artists/save', { ...data });
        return (await res).data.savedAlbum;
      } catch (error) {
        return null;
      }
}
export const saveNewAlbum =async(data)=>{
    try {
        const res = axios.post('http://'+SERVER+':4000/api/albums/save', { ...data });
        return (await res).data.savedArtist;
      } catch (error) {
        return null;
      }
}
export const deleteSongById=async(id)=>{
    try {
        const res =axios.delete(`http://'+SERVER+':4000/api/songs/delete/${id}`);
        return res
    } catch (error) {
        return null        
    }
}
export const deleteAlbumById=async(id)=>{
    try {
        const res =axios.delete(`http://'+SERVER+':4000/api/albums/delete/${id}`);
        return res
    } catch (error) {
        return null        
    }
}
export const deleteArtistById=async(id)=>{
    try {
        const res =axios.delete(`http://'+SERVER+':4000/api/artists/delete/${id}`);
        return res
    } catch (error) {
        return null        
    }
}
