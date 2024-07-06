import { Button, Icon } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Navigasi.module.css";

const Navigasi = ({ className = "" }) => {
  return (
    <nav className={[styles.buttonParent, className].join(" ")}>
      <div className={styles.button}>
        <Button
          disableElevation
          color="primary"
          name="previous"
          variant="contained"
          startIcon={<Icon>arrow_back_sharp</Icon>}
          sx={{ borderRadius: "0px 0px 0px 0px" }}
        >
          Previous
        </Button>
      </div>
      <div className={styles.paginationNumbers}>
        <div className={styles.paginationNumberBase}>
          <div className={styles.content}>
            <div className={styles.number}>1</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.number}>2</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.number}>3</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.number}>...</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.number}>8</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.number}>9</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.number}>10</div>
          </div>
        </div>
      </div>
      <Button
        disableElevation
        color="primary"
        variant="contained"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
        sx={{ borderRadius: "0px 0px 0px 0px" }}
      >
        Next
      </Button>
    </nav>
  );
};

Navigasi.propTypes = {
  className: PropTypes.string,
};

export default Navigasi;
