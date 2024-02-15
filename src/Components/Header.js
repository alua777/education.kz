
import React, { useState } from 'react';
const Header = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleForm = (showForm, hideForm) => {
    setShowLoginForm(showForm === 'loginForm');
    setShowRegistrationForm(showForm === 'registrationForm');
  };

  const closeForms = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(false);
  };

  const login = () => {
    if (username !== '' && password !== '') {
      alert('Login successful!');
    } else {
      alert('Please enter username and password.');
    }
  };

  const register = () => {
    if (username !== '' && password !== '' && password === confirmPassword) {
      alert('Registration successful!');
    } else {
      alert('Please enter valid information.');
    }
  };



  return (
    
      <div style={{width: '100%', height: '100%', paddingTop: 16, paddingBottom: 16, paddingLeft: 195, paddingRight: 202, display: 'inline-flex'}}>
    <div style={{paddingTop: 13, paddingBottom: 13, paddingRight: 27, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{color: '#252B42', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.10, wordWrap: 'break-word'}}>Bilim Source</div>
    </div>
    <div style={{justifyContent: 'center', alignItems: 'center', gap: 216, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 21, display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: '#737373', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 24, letterSpacing: 0.20, wordWrap: 'break-word'}}>Home</div>
            <div style={{textAlign: 'center', color: '#737373', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 24, letterSpacing: 0.20, wordWrap: 'break-word'}}>Greenlight</div>
            <div style={{textAlign: 'center', color: '#737373', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 24, letterSpacing: 0.20, wordWrap: 'break-word'}}>Pricing</div>
            <div style={{textAlign: 'center', color: '#737373', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '600', lineHeight: 24, letterSpacing: 0.20, wordWrap: 'break-word'}}>Contact</div>
        </div>
        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
            <button onClick={() => toggleForm('loginForm', 'registrationForm')} style={{textAlign: 'right', color: '#23A6F0', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '700', lineHeight: 28, letterSpacing: 0.20, wordWrap: 'break-word'}}>Login</button>
            <div style={{paddingLeft: 25, paddingRight: 25, paddingTop: 15, paddingBottom: 15, background: '#23A6F0', borderRadius: 5, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex'}}>
                <button onClick={() => toggleForm('registrationForm', 'loginForm')} style={{color: 'white', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.20}}>Become a member</button>
            </div>
        </div>
    </div>





    {showLoginForm && (
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="button" onClick={login}>
              Login
            </button>
          </form>
        </div>
      )}

      {showRegistrationForm && (
        <div className="form-container">
          <h2>Registration</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br />
            <button type="button" onClick={register}>
              Register
            </button>
          </form>
        </div>
      )}

      <div id="overlay" className="overlay" onClick={closeForms}>
        <div className="overlay-content">
          <h1>The content of the page is here.</h1>
        </div>
      </div>


    </div>
  );
};

export default Header;