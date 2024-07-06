import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./ProfileEdit.css";

const ProfileEdit = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/profile1");
  }, [navigate]);

  return (
    <div className="profile-edit">
      <Header frameHref="/profile1" />
      <div className="profile-edit-child" />
      <div className="profile-edit-inner">
        <div className="frame-child57" />
      </div>
      <div className="profile-edit-item" />
      <Footer
        badge="/badge2.svg"
        frameDivTop="776px"
        frameDivLeft="calc(50% - 681.5px)"
      />
      <div className="inputs-dropdowns5">
        <label className="label1" for="file-261:855">
          <div className="attachment1">Foto</div>
          <div className="input-field1">
            <div className="message1">
              <img className="system-icons1" alt="" src="/system-icons.svg" />
              <div className="drop-here-to-container1">
                <span>{`Drop here to attach or `}</span>
                <span className="upload1">upload</span>
              </div>
              <div className="max-size-5gb1">Max size: 5GB</div>
            </div>
          </div>
        </label>
        <input className="input1" type="file" id="file-261:855" />
      </div>
      <Form className="inputs-dropdowns6">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Email" />
      </Form>
      <Form className="inputs-dropdowns7">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form>
      <Form className="inputs-dropdowns8">
        <Form.Label>Nomor Telephone</Form.Label>
        <Form.Control type="tel" placeholder="Nomor Telephone" />
      </Form>
      <Form className="inputs-dropdowns9">
        <Form.Label>Nama</Form.Label>
        <Form.Control type="text" name="nama_user" placeholder="Nama " />
      </Form>
      <Button
        className="profile-edit-child1"
        disableElevation
        color="primary"
        name="SubmitProfile"
        size="large"
        variant="contained"
        href="/profile"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 210, height: 52 }}
        onClick={onFrameButtonClick}
      >
        Submit
      </Button>
    </div>
  );
};

export default ProfileEdit;
