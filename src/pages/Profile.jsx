import { useState, useEffect, useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState({
    email: '',
    foto: '/ellipse-255@2x.png',
    nama: '',
    password: '',  // Anda mungkin tidak ingin menyimpan password di state komponen
    telepon: '',
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = {
      nama: localStorage.getItem("nama") || '',
      email: localStorage.getItem("email") || '',
      password: localStorage.getItem("password") || '',  // Simpan ini hanya jika Anda benar-benar perlu
      foto: localStorage.getItem("foto") || "/ellipse-255@2x.png",
      telepon: localStorage.getItem("telepon") || '',
    };
    console.log("Stored User Data:", storedUserData); // Tambahkan log ini untuk memeriksa data yang diambil dari localStorage
    setUserData(storedUserData);
  }, []);

  const onEditButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="profile">
      <Header />
      <Footer />
      <div className="profile-content">
        <div className="profile-inner">
          <div className="ellipse-parent5">
            <img
              className="frame-child28"
              alt=""
              src={userData.foto}
            />
            <div className="frame-parent32">
              <div className="edward-james-wrapper">
                <div className="edward-james">{userData.nama}</div>
              </div>
            </div>
          </div>
          <div className="profile-details">
            <TextField
              className="frame-child29"
              color="primary"
              variant="outlined"
              type="text"
              label="Email address"
              value={userData.email}
              sx={{ width: 300 }}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>mail</Icon>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="frame-child30"
              color="primary"
              variant="outlined"
              type="password"
              label="Password"
              value="**********"  // Tampilkan karakter bintang atau sesuaikan dengan kebutuhan
              sx={{ width: 300 }}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>lock</Icon>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="frame-child31"
              color="primary"
              variant="outlined"
              type="text"
              label="Nomor Telephone"
              value={userData.telepon}
              sx={{ width: 300 }}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>phone</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button
            className="edit-button"
            variant="contained"
            color="primary"
            onClick={onEditButtonClick}
            sx={{ borderRadius: "0px", width: 200 }}
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
