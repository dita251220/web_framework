import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Sign.css";

const Sign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Pendaftaran Berhasil!');
        // Redirect or navigate to login page
        navigate('/homepage');
      } else {
        const data = await response.json();
        alert(`Pendaftaran Gagal: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration. Please try again later.');
    }
  };

  const onKabupatenTextClick = () => {
    navigate("/Homepage");
  };

  const onHaveAnAccountClick = () => {
    navigate("/login");
  };

  const onGoogleClick = () => {
    window.open("https://accounts.google.com/login?hl=in");
  };

  return (
    <div className="sign">
      <div className="sign-child" />
      <Header frameHref="/profile1" onKabupatenTextClick={onKabupatenTextClick} />
      <Footer badge="/badge2.svg" frameDivTop="1051px" frameDivLeft="calc(50% - 682.5px)" />
      <img className="gambar-gamelan-icon" alt="gamelan" src="/gambar_gamelan@2x.png" />
      <div className="sign-inner">
        <div className="group-wrapper">
          <div className="frame-parent39">
            <div className="ayo-mulai-sekarang-wrapper">
              <h1 className="ayo-mulai-sekarang">Ayo Mulai Sekarang!</h1>
            </div>
            <h3 className="silahkkan-masukkan-data">Silahkkan masukkan data untuk akses akun anda!</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                className="group-item"
                color="primary"
                name="nama"
                label="Name"
                size="medium"
                placeholder="Enter your name"
                required={true}
                variant="outlined"
                type="text"
                value={formData.nama}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>person_sharp</Icon>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": { height: "58px" },
                  width: "404px",
                }}
              />
              <TextField
                className="group-inner"
                color="primary"
                label="Email address"
                size="medium"
                placeholder="Enter your email"
                required={true}
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>mail_sharp</Icon>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": { height: "58px" },
                  width: "404px",
                }}
              />
              <TextField
                className="frame-textfield"
                color="primary"
                label="Password"
                size="medium"
                placeholder="Enter your password"
                required={true}
                variant="outlined"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPasswordClick}
                        aria-label="toggle password visibility"
                      >
                        <Icon>
                          {showPassword ? "visibility_off" : "visibility"}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputBase-root": { height: "58px" },
                  width: "404px",
                }}
              />
              <div className="line-parent">
                <div className="line-div" />
                <div className="or-wrapper">
                  <div className="or">Or</div>
                </div>
              </div>
              <FormControlLabel
                className="checkbox"
                label={`I agree to the terms & policy`}
                control={<Checkbox color="primary" required size="medium" />}
              />
              <div className="have-acc">
                <div className="have-an-account-log-in-wrapper">
                  <Link className="have-an-account-container" to="/login" onClick={onHaveAnAccountClick}>
                    <span className="have-an-account">Have an account? </span>
                    <span className="log-in">Log in</span>
                  </Link>
                </div>
              </div>
              <Button
                className="signup"
                disableElevation
                color="info"
                size="large"
                variant="contained"
                type="submit"
                sx={{ borderRadius: "0px 0px 0px 0px", width: 404, height: 35 }}
              >
                Signup
              </Button>
              <a className="google" href="https://accounts.google.com/login?hl=in" onClick={onGoogleClick}>
                <div className="icons8-google-1-parent">
                  <img className="icons8-google-1" alt="" src="/icons8google-1.svg" />
                  <div className="or">Sign in with Google</div>
                </div>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
