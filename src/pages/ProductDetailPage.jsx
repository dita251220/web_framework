import { useCallback } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./ProductDetailPage.module.css";

const ProductDetailPage = () => {
  const navigate = useNavigate();

  const onAddtoChartClick = useCallback(() => {
    // Please sync "Cart" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/category-page");
  }, [navigate]);

  return (
    <div className={styles.productDetailPage}>
      <Header />
      <Button
        className={styles.addtochart}
        disableElevation
        color="primary"
        name="AddChart"
        size="large"
        variant="contained"
        href="/cart"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 400, height: 52 }}
        onClick={onAddtoChartClick}
      >
        Add to Cart
      </Button>
      <div className={styles.loadMoreReviewsWrapper}>
        <div className={styles.loadMoreReviews}>Load More Reviews</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
        <FormControl
          className={styles.viewParent}
          variant="outlined"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "120px",
            height: "48px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "48px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "48px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "48px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "48px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary">View</InputLabel>
          <Select
            color="primary"
            size="medium"
            label="View"
            disableUnderline
            displayEmpty
          >
            <MenuItem value="Latest">Latest</MenuItem>
            <MenuItem value="Oldest">Oldest</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className={styles.writeAReviewWrapper}>
          <div className={styles.loadMoreReviews}>Write a Review</div>
        </div>
      </div>
      <div className={styles.gangsa}>Gangsa</div>
      <h1 className={styles.youMightAlso}>You might also like</h1>
      <div className={styles.rp2000000Wrapper}>
        <div className={styles.loadMoreReviews}>Rp 2.000.000</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.backHomeWrapper} onClick={onFrameContainerClick}>
          <Link className={styles.backHome} to="/">
            <div className={styles.home}>Home</div>
            <img className={styles.frameIcon1} alt="" src="/frame1@2x.png" />
          </Link>
        </div>
        <div className={styles.kabupatenParent} onClick={onFrameContainerClick}>
          <div className={styles.loadMoreReviews}>Kabupaten</div>
          <img className={styles.frameIcon2} alt="" src="/frame1@2x.png" />
        </div>
        <div
          className={styles.kabupatenParent}
          onClick={onFrameContainerClick1}
        >
          <Link className={styles.kabupatenBuleleng} to="/category-page">
            Kabupaten Buleleng
          </Link>
          <img className={styles.frameIcon2} alt="" src="/frame1@2x.png" />
        </div>
        <div className={styles.gangsa1}>Gangsa</div>
      </div>
      <div className={styles.gangsaMerupakanSebuah}>
        Gangsa merupakan sebuah instrumen yang tergabung dalam sebuah ensambel
        atau barungan gambelan yang bilahannya terbuat dari perunggu.
      </div>
      <div className={styles.allReviews}>All Reviews</div>
      <div className={styles.div}>(451)</div>
      <div className={styles.productDetailPageChild} />
      <div className={styles.productDetailsParent}>
        <div className={styles.productDetails}>Product Details</div>
        <div className={styles.ratingReviews}>{`Rating & Reviews`}</div>
        <div className={styles.faqs}>FAQs</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.productDetailPageItem} />
      <div className={styles.productDetailPageInner} />
      <section className={styles.frameContainer} Review>
        <div className={styles.frameDiv} review1>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/star-1.svg" />
                <img className={styles.frameChild} alt="" src="/star-2.svg" />
                <img className={styles.frameChild} alt="" src="/star-3.svg" />
                <img className={styles.frameChild} alt="" src="/star-4.svg" />
                <img className={styles.frameChild1} alt="" src="/star-5.svg" />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.sutejoDParent}>
                  <div className={styles.sutejoD}>Sutejo D.</div>
                  <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                </div>
                <div className={styles.kualitasSangatBagusContainer}>
                  <p className={styles.kualitasSangatBagus}>
                    Kualitas: Sangat bagus, melebihi ekspetasi, suara bagus
                  </p>
                  <p className={styles.kualitasSangatBagus}>Tampilan: Bagus</p>
                </div>
              </div>
            </div>
            <div className={styles.frameFrame}>
              <img className={styles.frameIcon} alt="" src="/frame3.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 14, 2023</div>
        </div>
        <div className={styles.frameDiv} review2>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/star-1.svg" />
                <img className={styles.frameChild} alt="" src="/star-2.svg" />
                <img className={styles.frameChild} alt="" src="/star-3.svg" />
                <img className={styles.frameChild} alt="" src="/star-4.svg" />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.sutejoDParent}>
                  <div className={styles.agus}>Agus.</div>
                  <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                </div>
                <div className={styles.kualitasSangatBagusContainer}>
                  "Seler sangat ramah, saya diberikan banyak informasi yang
                  berguna tentang produk sebelum saya membuat keputusan
                  pembelian."
                </div>
              </div>
            </div>
            <div className={styles.frameFrame}>
              <img className={styles.frameIcon} alt="" src="/frame3.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 15, 2023</div>
        </div>
        <div className={styles.frameDiv} review3>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/star-1.svg" />
                <img className={styles.frameChild} alt="" src="/star-2.svg" />
                <img className={styles.frameChild} alt="" src="/star-3.svg" />
                <img className={styles.frameChild1} alt="" src="/star-6.svg" />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.sutejoDParent}>
                  <div className={styles.agus}>Andika.</div>
                  <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                </div>
                <div className={styles.kualitasSangatBagusContainer}>
                  “Ini benar-benar membawa atmosfer Bali ke rumah saya.
                  Pengiriman juga sangat cepat dan pelayanan pelanggan sangat
                  membantu. Sangat merekomendasikan toko ini kepada siapa pun
                  yang mencari alat musik Bali berkualitas."
                </div>
              </div>
            </div>
            <div className={styles.frameFrame}>
              <img className={styles.frameIcon} alt="" src="/frame3.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 16, 2023</div>
        </div>
        <div className={styles.frameDiv} review4>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/star-1.svg" />
                <img className={styles.frameChild} alt="" src="/star-2.svg" />
                <img className={styles.frameChild} alt="" src="/star-3.svg" />
                <img className={styles.frameChild} alt="" src="/star-4.svg" />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.sutejoDParent}>
                  <div className={styles.agus}>Odi s.</div>
                  <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                </div>
                <div className={styles.kualitasSangatBagusContainer}>
                  {" "}
                  “Alat musik yang di jual sangat beragam sehingga Ini adalah
                  tempat yang sempurna bagi siapa pun yang mencari alat musik
                  berkualitas dengan harga yang bersaing."
                </div>
              </div>
            </div>
            <div className={styles.frameFrame}>
              <img className={styles.frameIcon} alt="" src="/frame3.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 17, 2023</div>
        </div>
        <div className={styles.frameDiv} review5>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/star-1.svg" />
                <img className={styles.frameChild} alt="" src="/star-2.svg" />
                <img className={styles.frameChild} alt="" src="/star-3.svg" />
                <img className={styles.frameChild} alt="" src="/star-4.svg" />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.sutejoDParent}>
                  <div className={styles.agus}>Made B.</div>
                  <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                </div>
                <div className={styles.kualitasSangatBagusContainer}>
                  "Setiap instrumen memiliki suara yang jernih dan autentik. Ini
                  benar-benar membawa suasana Bali banget. Pengiriman juga
                  sangat cepat dan pelayanan pelanggan sangat ramah."
                </div>
              </div>
            </div>
            <div className={styles.frameFrame}>
              <img className={styles.frameIcon} alt="" src="/frame3.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 18, 2023</div>
        </div>
        <div className={styles.frameDiv} review6>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/star-1.svg" />
                <img className={styles.frameChild} alt="" src="/star-2.svg" />
                <img className={styles.frameChild} alt="" src="/star-3.svg" />
                <img className={styles.frameChild} alt="" src="/star-4.svg" />
                <img className={styles.frameChild1} alt="" src="/star-5.svg" />
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.sutejoDParent}>
                  <div className={styles.agus}>Widi A.</div>
                  <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                </div>
                <div className={styles.kualitasProdukDi}>
                  "Kualitas produk di tempat ini adalah rekomen terbaik untuk
                  membeli alat musik. Saya sudah beberapa kali berbelanja di
                  sini dan tidak pernah kecewa dengan produknya”
                </div>
              </div>
            </div>
            <div className={styles.frameFrame}>
              <img className={styles.frameIcon} alt="" src="/frame3.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 19, 2023</div>
        </div>
      </section>
      <div className={styles.productDetailPageInner1}>
        <div className={styles.frameParent24}>
          <img className={styles.frameIcon} alt="" src="/frame4.svg" />
          <div className={styles.loadMoreReviews}>2</div>
          <img className={styles.frameIcon} alt="" src="/frame5.svg" />
        </div>
      </div>
      <Footer frameDivTop="2378px" />
      <div className={styles.qty}>
        <img className={styles.iconMinus} alt="" src="/icon-minus@2x.png" />
        <div className={styles.div2}>1</div>
        <img className={styles.iconPlus} alt="" src="/icon-plus@2x.png" />
      </div>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <div className={styles.cardBadung}>
        <div className={styles.card}>
          <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
          <div className={styles.genderWrapper}>
            <div className={styles.gender}>
              <span className={styles.genderTxt}>
                <p className={styles.kualitasSangatBagus}>Gender</p>
              </span>
            </div>
          </div>
          <b className={styles.rp3250000}>Rp. 3.250.000</b>
        </div>
        <div className={styles.card1}>
          <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
          <div className={styles.genderWrapper}>
            <div className={styles.gender}>Ceng-ceng</div>
          </div>
          <b className={styles.rp3250000}>Rp. 100.000</b>
        </div>
        <div className={styles.card2}>
          <img className={styles.image23Icon} alt="" src="/image-25@2x.png" />
          <div className={styles.genderWrapper}>
            <div className={styles.gender}>Reong</div>
          </div>
          <b className={styles.rp3250000}>Rp. 3.000.000</b>
        </div>
        <div className={styles.card3}>
          <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
          <div className={styles.genderWrapper}>
            <div className={styles.gender}>Gangsa</div>
          </div>
          <b className={styles.rp3250000}>Rp. 3.000.000</b>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
