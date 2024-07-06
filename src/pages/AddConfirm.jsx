import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AddConfirm.css";

const AddConfirm = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/profile1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/category-page");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/sign");
  }, [navigate]);

  return (
    <div className="add-confirm">
      <Header frameHref="/profile1" onVectorIconClick={onVectorIconClick} />
      <div className="frame-parent43">
        <div className="home-group">
          <div className="home3" onClick={onHomeTextClick}>
            Home
          </div>
          <img className="frame-icon28" alt="" src="/frame6@2x.png" />
        </div>
        <div className="add-produk1">Add Produk</div>
      </div>
      <div className="add-confirm-child" />
      <Footer
        badge="/badge2.svg"
        frameDivTop="914px"
        frameDivLeft="calc(50% - 682.5px)"
      />
      <div className="frame-parent44">
        <Button
          className="frame-child54"
          disableElevation
          color="primary"
          name="Button1"
          size="large"
          variant="contained"
          href="/sign"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 210, height: 52 }}
          onClick={onFrameButtonClick}
        >
          Beli Sekarang
        </Button>
        <h1 className="alat-musik-berhasil">
          Alat Musik Berhasil Ditambahkan!
        </h1>
        <Button
          className="frame-child55"
          disableElevation
          color="primary"
          name="Button1"
          size="large"
          variant="contained"
          href="/category-page"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 210, height: 52 }}
          onClick={onHomeTextClick}
        >
          Kembali
        </Button>
      </div>
    </div>
  );
};

export default AddConfirm;
