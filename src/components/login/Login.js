import {useState} from 'react';
import styles from './login.module.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername("");
        setPassword("");
    }

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.login}>
            <h2 className={styles.heading}>Login</h2>
            <input type="text" value={username} onChange={handleUsername} className={styles.user} placeholder="Enter Username" />
            <div className={styles.password}>
                <input type={showPassword ? "text" : "password"} value={password} onChange={handlePassword} className={styles.pass} placeholder="************" />
                <div className={styles.icon} onClick={handleToggle}>{
                    showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye />
                }</div>
            </div>
            <button type="submit" className={styles.logon}>Login</button>
        </form>
    </div>
  )
}

export default Login