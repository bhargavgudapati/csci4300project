import React from 'react';
import '../components/login.module.css';

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <h1>NovelNotes</h1>
            <form>
                <label>Username</label>
                <input type="text" placeholder="Enter username" />
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
                <button type="submit">Sign In</button>
                <a href="#">Forgot password?</a>
            </form>
            <p>Your personal library, organized and noted</p>
        </div>
    );
};

export default LoginPage;