import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navigasi from "../components/Navigasi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./CategoryPage.module.css";

const CategoryPage = () => {
  const navigate = useNavigate();
  const [alatMusik, setAlatMusik] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000//read/alat")
      .then((response) => response.json())
      .then((data) => setAlatMusik(data))
      .catch((error) => console.error("Error fetching alat_musik:", error));
  }, []);

  const onKabupatenTextClick = useCallback(() => {
    navigate("/category-page");
  }, [navigate]);

  const onClick = useCallback(() => {
    navigate("/profile1");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    // Handle frame button click logic
  }, []);

  const onCardClick = useCallback(() => {
    navigate("/product-detail-page");
  }, [navigate]);

  return (
    <div className={styles.categoryPage}>
      <Header
        frameHref="/profile1"
        onKabupatenTextClick={onKabupatenTextClick}
        onClick={onClick}
      />
      <div className={styles.frameGroup}>
        <div className={styles.backHomeWrapper}>
          <Link className={styles.backHome} to="/homepage">
            <div className={styles.home} onClick={onKabupatenTextClick}>
              Home
            </div>
            <img className={styles.frameIcon1} alt="" src="/frame1@2x.png" />
          </Link>
        </div>
      </div>

      <div className={styles.categoryPageChild}>
        {alatMusik.map((alat_musik, index) => (
          <div key={index} className={styles.card} onClick={onCardClick}>
            <img
              className={styles.imageIcon}
              alt=""
              src={`data:image/png;base64,${alat_musik.gambar}`}
            />
            <div className={styles.gangsaWrapper}>
              <div className={styles.gangsa}>{alat_musik.nama_alat_musik}</div>
              <b className={styles.rp2000000}>{`Rp. ${alat_musik.harga}`}</b>
            </div>
          </div>
        ))}
      </div>

      <Navigasi />
      <Footer frameDivTop="1630px" />
      <Button
        className={styles.categoryPageInner}
        disableElevation
        color="primary"
        name="Button1"
        size="large"
        variant="contained"
        href="/add"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 284, height: 52 }}
        onClick={onFrameButtonClick}
      >
        Tambahkan Alat Musik
      </Button>
    </div>
  );
};

export default CategoryPage;
