import axios from "axios";
const baseURL ="https://musicophile-tau.vercel.app/";
export const validateUser=async(token)=>{
    try{
        const res=await axios.get('https://musicophile-tau.vercel.app/api/users/login',{
            headers:{
                Authorization:"Bearer " + token,
            },
        });
        return res.data;
    }catch(error){}
}

export const getAllUsers = async () => {
    try{
        const res= await axios.get('https://musicophile-tau.vercel.app/api/users/getUsers');
        return res.data;
    }
    catch(error){
        return null;
    }
};
export const getAllArtists =async () => {
    try{
        const res= await axios.get('https://musicophile-tau.vercel.app/api/artists/getAll');
        return res.data;
    }
    catch(error){
        return null
    }
};
export const getAllAlbums =async () => {
    try{
        const res= await axios.get('https://musicophile-tau.vercel.app/api/albums/getAll');
        return res.data;
    }
    catch(error){
        return null
    }
}
export const getAllSongs =async () => {
    try{
        const res= await axios.get('https://musicophile-tau.vercel.app/api/songs/getAll');
        return res.data;
    }
    catch(error){
        return null
    }
};
export const changingUserRole =async (userId,role) =>{
    try {
        const res=axios.put(`https://musicophile-tau.vercel.app/api/users/updateRole/${userId}`,{data: {role :role},
    });
    return res;
    } catch (error) {
        return null
    }     
}

export const removeUser =async (userId)=>{
    try {
        const res=axios.delete(`https://musicophile-tau.vercel.app/api/users/deleteUser/${userId}`);
        return res;
    } catch (error) {
        return null;
    }
}
export const saveNewSong = async (data) => {
    try {
      const res = axios.post(`https://musicophile-tau.vercel.app/api/songs/save`, { ...data });
      return (await res).data.savedSong;
    } catch (error) {
      return null;
    }
  };

export const saveNewArtist =async(data)=>{
    try {
        const res = axios.post('https://musicophile-tau.vercel.app/api/artists/save', { ...data });
        return (await res).data.savedAlbum;
      } catch (error) {
        return null;
      }
}
export const saveNewAlbum =async(data)=>{
    try {
        const res = axios.post('https://musicophile-tau.vercel.app/api/albums/save', { ...data });
        return (await res).data.savedArtist;
      } catch (error) {
        return null;
      }
}
export const deleteSongById=async(id)=>{
    try {
        const res =axios.delete(`https://musicophile-tau.vercel.app/api/songs/delete/${id}`);
        return res
    } catch (error) {
        return null        
    }
}
export const deleteAlbumById=async(id)=>{
    try {
        const res =axios.delete(`https://musicophile-tau.vercel.app/api/albums/delete/${id}`);
        return res
    } catch (error) {
        return null        
    }
}
export const deleteArtistById=async(id)=>{
    try {
        const res =axios.delete(`https://musicophile-tau.vercel.app/api/artists/delete/${id}`);
        return res
    } catch (error) {
        return null        
    }
}
