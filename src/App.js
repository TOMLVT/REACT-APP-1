import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faEye, faEyeSlash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [actionUser, setActionUser] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification , setShowNotification] = useState(false)

  // trạng thái ban đầu của form 
  const [formData, setFormData] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
    userText: ''
  });

  // trạng thái báo lỗi 
  const [error, setError] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
    userText: '',
    submitError: ''
  });

  const lengthPassword = 12;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "@#$%^&*()_+|}{></-=";

  const allChar = upperCase + lowerCase + number + symbol;

  const createPassword = () => {
    let newPassword = '';
    newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    newPassword += number[Math.floor(Math.random() * number.length)];
    newPassword += symbol[Math.floor(Math.random() * symbol.length)];

    while (newPassword.length < lengthPassword) {
      newPassword += allChar[Math.floor(Math.random() * allChar.length)];
    }
    setFormData((prev) => ({ ...prev, userPassword: newPassword }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // CHECK NAME USER ---------------
  const validateName = () => {
    const userName = formData.userName;
    if (userName.length === 0) {
      setError((prev) => ({ ...prev, userName: 'Name is not empty!' }));
      return false;
    }

    const stringUserName = /^[A-Za-z]+\s[A-Za-z]+$/;
    if (!userName.match(stringUserName)) {
      setError((prev) => ({ ...prev, userName: 'Name invalid!' }));
      return false;
    }

    setError((prev) => ({ ...prev, userName: <FontAwesomeIcon icon={faCircleCheck} className='icon_check'/> }));
    return true;
  };

  // CHECK EMAIL USER -------------------
  const validateEmail = () => {
    const userEmail = formData.userEmail;
    if (userEmail.length === 0) {
      setError((prev) => ({ ...prev, userEmail: 'Email is not empty!' }));
      return false;
    }

    const stringEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!userEmail.match(stringEmail)) {
      setError((prev) => ({ ...prev, userEmail: 'Email invalid!' }));
      return false;
    }

    setError((prev) => ({ ...prev, userEmail: <FontAwesomeIcon icon={faCircleCheck} className='icon_check'/> }));
    return true;
  };

  // CHECK PASSWORD USER 
  const validatePassword = () => {
    const userPassword = formData.userPassword;
    if (userPassword.length === 0) {
      setError((prev) => ({ ...prev, userPassword: 'Password is not empty!' }));
      return false;
    }

 

    setError((prev) => ({ ...prev, userPassword: <FontAwesomeIcon icon={faCircleCheck} className='icon_check'/> }));
    return true;
  };

  // CHECK CONFIRM PASSWORD ----------------------
  const validateConfirmPassword = () => {
        const userConfirmPassword = formData.userConfirmPassword
        const userPassword = formData.userPassword;
        if (userConfirmPassword.length === 0 ) {
          setError((pre) => ({...pre , userConfirmPassword : 'Confirm password is not empty !'}))
          return false
        }
        if (userConfirmPassword !== userPassword) {
          setError((pre) => ({...pre , userConfirmPassword : 'Password is not match !'}))
          return false
        }
        setError((prev) => ({ ...prev, userConfirmPassword: <FontAwesomeIcon icon={faCircleCheck} className='icon_check'/> }));
        return true
  }
  // CHECK ALL FORM 
  const handleCheckAllForm = (e) => {
        e.preventDefault()
        const isUserName = validateName()
        const isUserEmail = validateEmail()
        const isUserPassword = validatePassword()
        const isUserConfirmPassword = validateConfirmPassword()

        if (isUserName && isUserEmail && isUserPassword && isUserConfirmPassword) {
          alert('Đăng ký thành công !')

          // Reset information form when user sign up successful
          setFormData({
            userName: '',
            userPhone: '',
            userEmail: '',
            userPassword: '',
            userText: ''
          });
      
          // Reset Error
          setError({
            userName: '',
            userPhone: '',
            userEmail: '',
            userPassword: '',
            userText: '',
            submitError: ''
          });
        } else {
          setShowNotification(true)
          setError((pre) => ({...pre , submitError : 'Please check information again !'}))
          setTimeout(() => {
            setError((pre) => ({...pre , submitError : setShowNotification()}))
          }, 2500);
        }
      }
  // NOTIFICATION SIGN UP 
    const handleCloseNotification = () => {
      setShowNotification(false)
    }


  return (
    <div className='container_body'>
      <div className='form_body'>
        <p className='title_form'>{actionUser}</p>

        <div className='form_input'>
          {actionUser === 'Login' ? null : (
            <div className='form_input_small'>
              <div className='check_input_body'>
                <label className='label_input'>Name</label>
                <span className='span_error'>{error.userName}</span>
              </div>
              <input
                className='input_sm'
                placeholder='Enter your name...'
                id='userName'
                onChange={handleInputChange}
                onKeyUp={validateName}
                value={formData.userName}
              />
            </div>
          )}

          <div className='form_input_small'>
            <div className='check_input_body'>
              <label className='label_input'>Email</label>
              {actionUser === 'Sign up' ?   <span className='span_error'>{error.userEmail}</span> : null}
            </div>
            <input
              className='input_sm'
              placeholder='Enter your email...'
              id='userEmail'
              onChange={handleInputChange}
              onKeyUp={validateEmail}
              value={formData.userEmail}
            />
          </div>

          <div className='form_input_small'>
          <div className='check_input_body'>
          <div className='container_label'>
             
             <label className='label_input'>Password</label>
          
           {actionUser === 'Sign up' ? (
             <FontAwesomeIcon
               icon={faRotate}
               onClick={createPassword}
               className='random_icon'
             />
           ) : null}
         </div>
           {actionUser === 'Sign up' ?   <span className='span_error'>{error.userPassword}</span> : null}
          </div>
          
            <input
              className='input_sm'
              placeholder='Enter your password...'
              type={showPassword ? 'text' : 'password'}
              id='userPassword'
              value={formData.userPassword}
              onChange={handleInputChange}
              onKeyUp={validatePassword}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className='span_icon'
              onClick={handleShowPassword}
            />
          </div>

          {actionUser === 'Login' ? null : (
            <div className='form_input_small'>
               <div className='check_input_body'>
                <label className='label_input'>Confirm Password</label>
                <span className='span_error'>{error.userConfirmPassword}</span>
              </div>
              <input
                className='input_sm'
                id='userConfirmPassword'
                placeholder='Confirm your password...'
                onChange={handleInputChange}
                onKeyUp={validateConfirmPassword}
                type={showPassword ? 'text' : 'password'}
                value={formData.userConfirmPassword}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className='span_icon'
                onClick={handleShowPassword}
              />
            </div>
          )}

          {actionUser === 'Login' ? (
            <div className='form_btn_small'>
              <button className='btn_sm'>Login</button>
            </div>
          ) : (
            <div className='form_btn_small'>
              <button className='btn_sm' onClick={handleCheckAllForm} id='submitError'>Sign up</button>
              {showNotification && (
             <div className="notificaiton_alert">
             <span className="closebtn" onClick={handleCloseNotification}>
            &times;
          </span>
          <span>{error.submitError}</span>
        </div>
      )}
             
            </div>
          )}

          <div className='two_btn'>
            <button
              className={actionUser === 'Login' ? 'submitButton disable' : 'submitButton'}
              onClick={() => setActionUser('Login')}
            >
              Login
            </button>
            <button
              className={actionUser === 'Sign up' ? 'submitButton disable' : 'submitButton'}
              onClick={() => setActionUser('Sign up')}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
