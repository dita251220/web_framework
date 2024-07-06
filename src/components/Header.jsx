import React, { useState, useCallback } from "react";
import {
  Button,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({
  className = "",
  frameHref,
  onKabupatenTextClick,
  onClick,
  
}) => {
  const [kategoriAnchorEl, setKategoriAnchorEl] = useState(null);
  const navigate = useNavigate();
  const kategoriOpen = Boolean(kategoriAnchorEl);

  const handleKategoriClick = (event) => {
    setKategoriAnchorEl(event.currentTarget);
  };

  const handleKategoriClose = () => {
    setKategoriAnchorEl(null);
  };

  const handleLogout = () => {
    // Tambahkan logika logout di sini jika diperlukan
    // Contoh: mengarahkan kembali pengguna ke halaman login dan mengatur isLoggedIn menjadi false
    navigate("/login");
  };

  const onKabupatenTextClick1 = useCallback(() => {
      navigate("/category-page");
   
  }, [navigate]);

  const onClick1 = useCallback(() => {
      navigate("/profile1");
   
  }, [navigate]);

  return (
    <header className={`header3 ${className}`} header>
      <div className="header-child1" />
      <div className="bali-melody-store-parent2">
        <div className="bali-melody-store4">Bali Melody Store</div>
        <div className="group-parent2">
          <div className="frame-wrapper14">
            <div className="kategori-wrapper1">
              <div className="kategori4">
                <Button
                  id="button-Kategori"
                  aria-controls="menu-Kategori"
                  aria-haspopup="true"
                  aria-expanded={kategoriOpen ? "true" : undefined}
                  onClick={handleKategoriClick}
                  color="primary"
                  sx={{ width: "88", height: "100%" }}
                >
                  Kategori
                </Button>
                <Menu
                  anchorEl={kategoriAnchorEl}
                  open={kategoriOpen}
                  onClose={handleKategoriClose}
                >
                  <MenuItem onClick={handleKategoriClose}>Pukul</MenuItem>
                  <MenuItem onClick={handleKategoriClose}>Gesek</MenuItem>
                  <MenuItem onClick={handleKategoriClose}>Tiup</MenuItem>
                  <MenuItem onClick={handleKategoriClose}>Besar</MenuItem>
                  <MenuItem onClick={handleKategoriClose}>Kecil</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
          <Link className="kabupaten7" to="/category-page">
            <div className="kabupaten8" onClick={onKabupatenTextClick1}>
              Kabupaten
            </div>
          </Link>
          <div className="sanggar-wrapper1">
            <div className="sanggar3">Sanggar</div>
          </div>
        </div>
        <TextField
          className="search3"
          color="primary"
          name="Search"
          label="Cari"
          size="medium"
          placeholder="Cari Disini"
          variant="outlined"
          type="search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon>search_sharp</Icon>
              </InputAdornment>
            ),
          }}
          sx={{ "& .MuiInputBase-root": { height: "48px" } }}
        />
        <div className="frame-parent51">
          <Link className="frame3" to="/">
            <img className="vector-icon5" alt="" src="/vector2.svg" />
          </Link>
          <Link className="frame3" to={frameHref}>
            <img
              className="vector-icon6"
              alt=""
              src="/vector3.svg"
              onClick={onClick1}
            />
          </Link>
            <IconButton color="inherit" onClick={handleLogout}>
              <Icon>logout</Icon>
            </IconButton>
          
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  frameHref: PropTypes.string.isRequired,

  /** Action props */
  onKabupatenTextClick: PropTypes.func,
  onClick: PropTypes.func,
   // Menambahkan prop type untuk isLoggedIn
};

export default Header;
