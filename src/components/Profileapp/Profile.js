import {useState} from 'react';
import {data} from './Data';
import styles from './profile.module.css';
import {FaTrashAlt} from 'react-icons/fa';


const Profile = () => {
    const [userProfile, setUserProfile] = useState(data);
    const [search, setSearch] = useState("");
     
    const removeProfile = (id) =>{
        const newProfileList = userProfile.filter((profile)=> profile.id !== id);
        setUserProfile(newProfileList);
        console.log(id);
    }

    const handleSearch = (e) =>{
        setSearch(e.target.value);
    }
  return (
    <div className={styles.container}>
        <div className={styles.profile}>
            <h3 className={styles.workers}>Worker's Profile</h3>
            <div className="search">
                <input type="text" placeholder='Enter search keyword here...' value={search} onChange={handleSearch} className={styles.searchbox} />
            </div>
            {userProfile.filter((value) => {
                if (search === ""){
                    return value;
                } else if (value.name.toLowerCase().includes(search.toLowerCase())
                ){
                    return value;
                }
            }).map((profile) => (
                <div key={profile.id} className={styles.eachprofile}>
                    <div><img className={styles.prof_img} src={profile.img} alt="unavail" /></div>
                    <div className="desc">
                        <h4 className={styles.name}>Name: {profile.name}</h4>
                        <p className={styles.job}>Job: {profile.job}</p>
                    </div>
                    <div><FaTrashAlt size={14} className={styles.btn} onClick={() => removeProfile(profile.id)} /></div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Profile;