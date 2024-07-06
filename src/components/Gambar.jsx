import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Gambar.css";

const Gambar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/sign");
  }, [navigate]);

  return (
    <section className={`gambar1 ${className}`} Gambar>
      <img className="fe367a78d1-1-icon" alt="" src="/620fe367a78d1-1@2x.png" />
      <img className="vector-icon3" alt="" src="/vector.svg" />
      <img className="vector-icon4" alt="" src="/vector1.svg" />
      <img
        className="musik-adalah-bagian-dari-jiwa"
        alt=""
        src="/musik-adalah-bagian-dari-jiwa.svg"
      />
      <img
        className="temukan-alat-musik-tradisional"
        alt=""
        src="/temukan-alat-musik-tradisional-bali-dari-berbagai-sanggar-pengerajin-di-seluruh-provinsi-bali-yang-tersebar-di-9-kabupaten-dapatkan-harga-terbaik-bantu-umkm-dan-lestarikan-seni-budaya.svg"
      />
      <Button
        className="gambar1-child"
        disableElevation
        color="primary"
        name="Button1"
        size="large"
        variant="contained"
        href="/login"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 198.4, height: 50.8 }}
        onClick={onFrameButtonClick}
      >
        Beli Sekarang
      </Button>
      <div className="frame-parent48">
        <div className="parent">
          <img className="icon" alt="" src="/100.svg" />
          <img
            className="sanggar-pengerajin-icon"
            alt=""
            src="/sanggar-pengerajin.svg"
          />
        </div>
        <img className="line-9-stroke" alt="" src="/line-9-stroke.svg" />
        <div className="group">
          <img className="icon" alt="" src="/100.svg" />
          <img
            className="produk-alat-musik"
            alt=""
            src="/produk-alat-musik.svg"
          />
        </div>
        <img className="line-9-stroke" alt="" src="/line-10-stroke.svg" />
        <div className="group">
          <img className="icon2" alt="" src="/1000.svg" />
          <img className="pembeli-icon" alt="" src="/pembeli.svg" />
        </div>
      </div>
    </section>
  );
};

Gambar.propTypes = {
  className: PropTypes.string,
};

export default Gambar;
