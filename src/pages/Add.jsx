import React, { useCallback, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Add.css";

const Add = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [id_kategori, setIdKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [nama_alat_musik, setNamaAlatMusik] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [stok, setStok] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFileName(file.name);
  };

  const onFrameButtonClick = useCallback(async () => {
    setSubmitting(true);
  
    const form = new FormData();
    form.append('id_kategori', id_kategori);
    form.append('harga', harga);
    form.append('nama_alat_musik', nama_alat_musik);
    form.append('deskripsi', deskripsi);
    form.append('stok', stok);
    form.append('gambar', fileInputRef.current.files[0]); // Memasukkan file ke FormData
  
    try {
      const response = await fetch('http://localhost:5000//music/add', {
        method: 'POST',
        body: form // Menggunakan FormData sebagai body
      });
      if (response.ok) {
        const responseData = await response.json();
        setUploadedFileName(responseData.fileName); // Sesuaikan dengan respons dari backend
        setNotificationOpen(true);
        navigate('/confirm');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Gagal menambahkan alat musik');
      }
    } catch (error) {
      console.error('Error:',error);
      alert('Gagal menambahkan alat musik');
    } finally {
      setSubmitting(false);
    }
  }, [navigate, id_kategori, harga, nama_alat_musik, deskripsi, stok]);

  const handleNotificationClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationOpen(false);
  };

  return (
    <div className="add">
      <Header
        frameHref="/profile1"
        onKabupatenTextClick={() => navigate("/")}
        onVectorIconClick={() => navigate("/profile1")}
        isLoggedIn={true} // Sesuaikan dengan properti yang diperlukan di Header
      />
      <div className="frame-parent38">
        <div className="home-parent">
          <div className="home2" onClick={() => navigate("/category-page")}>
            Home
          </div>
          <img className="frame-icon25" alt="" src="/frame6@2x.png" />
        </div>
        <div className="add-produk">Add Produk</div>
      </div>
      <div className="add-child" />
      <h3 className="silahkan-masukkan-data">
        Silahkan masukkan data berikut, dan jangan lupa memasukkan gambar
      </h3>
      <Footer
        badge="/badge2.svg"
        frameDivTop="908px"
        frameDivLeft="calc(50% - 682.5px)"
        footer1="true" // Sesuaikan dengan properti yang diperlukan di Footer
      />
      <div className="inputs-dropdowns-parent">
        <div className="inputs-dropdowns" required={true}>
          <label className="label" htmlFor="file-259:2429">
            <div className="attachment">Gambar</div>
            <div className="input-field">
              {uploadedFileName ? (
                <div className="uploaded-file">{uploadedFileName}</div>
              ) : (
                <div className="message">
                  <img className="system-icons" alt="" src="/system-icons.svg" />
                  <div className="drop-here-to-container">
                    <span>{`Drop here to attach or `}</span>
                    <span className="upload">upload</span>
                  </div>
                  <div className="max-size-5gb">Max size: 100MB</div>
                </div>
              )}
            </div>
          </label>
          <input
            className="input"
            type="file"
            id="file-259:2429"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
        <Form className="inputs-dropdowns1">
          <Form.Label>Kategori ID</Form.Label>
          <Form.Control
            type="text"
            name="kategori_id"
            placeholder="Kategori ID"
            value={id_kategori}
            onChange={(e) => setIdKategori(e.target.value)}
          />
        </Form>
        <Form className="inputs-dropdowns2">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="text"
            name="harga"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </Form>
        <Form className="inputs-dropdowns3">
          <Form.Label>Nama Alat Musik</Form.Label>
          <Form.Control
            type="text"
            name="nama_alat_musik"
            placeholder="Nama Alat Musik"
            value={nama_alat_musik}
            onChange={(e) => setNamaAlatMusik(e.target.value)}
          />
        </Form>
        <Form className="inputs-dropdowns4">
          <Form.Label>Stok</Form.Label>
          <Form.Control
            type="text"
            name="stok"
            placeholder="Stok"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </Form>
        <Form.Group className="inputs-dropdowns5">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            name="deskripsi"
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </Form.Group>
        <Button
          className="frame-button"
          disableElevation
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 210, height: 52 }}
          onClick={onFrameButtonClick}
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
        
      </div>
      <h2 className="tambahkan-alat-musik">Tambahkan alat Musik</h2>
    </div>
  );
};

export default Add;
