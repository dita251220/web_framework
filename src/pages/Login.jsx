import { useState, useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onKabupatenTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign");
  }, [navigate]);

  const handleLogin = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/login/read", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      console.log("Response from backend:", result);
      if (response.ok) {
        alert("Anda Berhasil Login!");
        localStorage.setItem("userId", result.id_pengguna); // Simpan ID pengguna di Local Storage
        localStorage.setItem("nama", result.nama); // Simpan nama pengguna di Local Storage
        localStorage.setItem("email", result.email); // Simpan email pengguna di Local Storage
        localStorage.setItem("password", password); // Simpan password pengguna di Local Storage
        localStorage.setItem("foto", result.foto || "/ellipse-255@2x.png"); // Simpan foto pengguna di Local Storage (jika ada)
        navigate("/homepage"); // Arahkan ke halaman homepage
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };
  
  return (
    <div className="login">
      <div className="login-child" />
      <Header
        frameHref="/profile1"
        onKabupatenTextClick={onKabupatenTextClick}
      />
      <Footer
        badge="/badge2.svg"
        frameDivTop="1051px"
        frameDivLeft="calc(50% - 682.5px)"
      />
      <img
        className="gambar-gamelan-icon1"
        alt="gamelan"
        src="/gambar_gamelan@2x.png"
      />
      <div className="login-inner">
        <div className="frame-parent41">
          <div className="selamat-datang-kembali-wrapper">
            <h1 className="selamat-datang-kembali">Selamat Datang!</h1>
          </div>
          <h3 className="silahkkan-masukkan-data1">
            Silahkkan masukkan data untuk akses akun anda!
          </h3>
          <div className="frame-parent42">
            <div className="name-wrapper">
              <div className="name">Name</div>
            </div>
            <div className="frame-child52" />
          </div>
          <TextField
            className="email-login"
            color="primary"
            label="Email address"
            size="medium"
            placeholder="Enter your Email"
            required={true}
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>person_sharp</Icon>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-root": { height: "58.6px" },
              width: "404px",
            }}
          />
          <TextField
            className="password-login"
            color="primary"
            name="Password_login"
            label="Password"
            size="medium"
            placeholder="Enter your password"
            required={true}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              "& .MuiInputBase-root": { height: "58.6px" },
              width: "404px",
            }}
          />
          <FormControlLabel
            className="remember"
            label="Remember me for 30 Days"
            labelPlacement="end"
            control={
              <Checkbox
                color="primary"
                size="medium"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
          />
          <Link className="dont-have-an-account-sign-up-wrapper" to="/sign">
            <Link
              className="dont-have-an-container"
              to="/sign"
              onClick={onDontHaveAnClick}
            >
              <span className="dont-have-an">{`Don’t have an account?  `}</span>
              <span className="sign-up">Sign Up</span>
            </Link>
          </Link>
          <Button
            className="login-button"
            disableElevation
            color="info"
            size="large"
            variant="contained"
            disabled={!email || !password || isSubmitting}
            onClick={handleLogin}
            sx={{ borderRadius: "0px 0px 0px 0px", width: 404, height: 35.4 }}
          >
            Login
          </Button>
          <a
            className="google1"
            href="https://accounts.google.com/login?hl=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icons8-google-1-group">
              <img
                className="icons8-google-11"
                alt=""
                src="/icons8google-1.svg"
              />
              <div className="name">Sign in with Google</div>
            </div>
          </a>
          <div className="forgot-password">forgot password</div>
          <div className="line-group">
            <div className="frame-child53" />
            <div className="or-container">
              <div className="name">Or</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
