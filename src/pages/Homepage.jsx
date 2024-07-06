import { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const [alatMusik, setAlatMusik] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/read/alat')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAlatMusik(data);
        } else {
          console.error('Data received is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Sign" to the project
  }, []);

  const onCardClick = useCallback((id) => {
    navigate(`/product-detail-page?id=${id}`);
  }, [navigate]);

  const onFrameLinkClick = useCallback(() => {
    navigate("/category-page");
  }, [navigate]);




  return (
    <div className={styles.homepage}>
      <section className={styles.gambar1}>
        <img
          className={styles.fe367a78d11Icon}
          alt=""
          src="/620fe367a78d1-1@2x.png"
        />
        <img
          className={styles.musikAdalahBagianDariJiwa}
          alt=""
          src="/musik-adalah-bagian-dari-jiwa.svg"
        />
        <img
          className={styles.temukanAlatMusikTradisional}
          alt=""
          src="/temukan-alat-musik-tradisional-bali-dari-berbagai-sanggar-pengerajin-di-seluruh-provinsi-bali-yang-tersebar-di-9-kabupaten-dapatkan-harga-terbaik-bantu-umkm-dan-lestarikan-seni-budaya.svg"
        />
        <Button
          className={styles.gambar1Child}
          disableElevation
          color="primary"
          name="Button1"
          size="large"
          variant="contained"
          href="/category-page"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 198.4, height: 50.8 }}
          onClick={onFrameButtonClick}
        >
          Beli Sekarang
        </Button>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="/100.svg" />
            <img
              className={styles.sanggarPengerajinIcon}
              alt=""
              src="/sanggar-pengerajin.svg"
            />
          </div>
          <img className={styles.line9Stroke} alt="" src="/line-9-stroke.svg" />
          <div className={styles.group}>
            <img className={styles.icon} alt="" src="/100.svg" />
            <img
              className={styles.produkAlatMusik}
              alt=""
              src="/produk-alat-musik.svg"
            />
          </div>
          <img
            className={styles.line9Stroke}
            alt=""
            src="/line-10-stroke.svg"
          />
          <div className={styles.group}>
            <img className={styles.icon2} alt="" src="/1000.svg" />
            <img className={styles.pembeliIcon} alt="" src="/pembeli.svg" />
          </div>
        </div>
      </section>
      <img className={styles.homepageChild} alt="" src="/rectangle-3.svg" />
      <div className={styles.homepageItem} />
      <img
        className={styles.arrowDownBold1Icon}
        alt=""
        src="/arrowdownbold-1@2x.png"
      />
      <Footer />
      <Header />
      
      <h2 className={styles['h2-above-grid']}>Kabupaten Buleleng</h2>
      <div className={styles.categoryPageChild}>
        {alatMusik.length > 0 && alatMusik.map((alat_musik, index) => (
          <div key={index} className={styles.card} onClick={() => onCardClick(alat_musik.id)}>
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
      <Link
        className={styles.viewAllWrapper}
        to="/category-page"
        onClick={onFrameLinkClick}
      >
        <div className={styles.viewAll}>View All</div>
      </Link>

      <h2 className={styles['h2-above-grid1']}>Kabupaten Badung</h2>
      <div className={styles.categoryPageChild_1}>
        {alatMusik.length > 0 && alatMusik.map((alat_musik, index) => (
          <div key={index} className={styles.card_1} onClick={() => onCardClick(alat_musik.id)}>
            <img
              className={styles.imageIcon}
              alt=""
              src={`data:image/png;base64,${alat_musik.gambar}`}
            />
            <div className={styles.gangsaWrapper_1}>
              <div className={styles.gangsa_1}>{alat_musik.nama_alat_musik}</div>
              <b className={styles.rp2000000_1}>{`Rp. ${alat_musik.harga}`}</b>
            </div>
          </div>
        ))}
      </div>
      <Link
        className={styles.viewAllWrapper}
        to="/category-page"
        onClick={onFrameLinkClick}
      >
        <div className={styles.viewAll}>View All</div>
      </Link>

      <h2 className={styles['h2-above-grid2']}>Kabupaten Gianyar</h2>
      <div className={styles.categoryPageChild_1}>
        {alatMusik.length > 0 && alatMusik.map((alat_musik, index) => (
          <div key={index} className={styles.card_1} onClick={() => onCardClick(alat_musik.id)}>
            <img
              className={styles.imageIcon_1}
              alt=""
              src={`data:image/png;base64,${alat_musik.gambar}`}
            />
            <div className={styles.gangsaWrapper_1}>
              <div className={styles.gangsa_1}>{alat_musik.nama_alat_musik}</div>
              <b className={styles.rp2000000_1}>{`Rp. ${alat_musik.harga}`}</b>
            </div>
          </div>
        ))}
      </div>
      <Link
        className={styles.viewAllWrapper}
        to="/category-page"
        onClick={onFrameLinkClick}
      >
        <div className={styles.viewAll}>View All</div>
      </Link>
    </div>
  );
};

export default Homepage;
