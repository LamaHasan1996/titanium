import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Alert,
  Button,
  Menu,
  MenuItem,
  Slide,
  Snackbar,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "../../translation";
import useStyles from "./styles";

export const ShareButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const open = Boolean(anchorEl);
  const currentUrl = window.location.href;
  const { t } = useTranslation();
  const styles = useStyles();

  // Handle menu open/close
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Social media share functions
  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setSnackbarOpen(false);
    setTimeout(() => {
      setSnackbarOpen(true);
    }, 100);
  };

  function SlideTransition(props: any) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <>
      <Tooltip title="Share">
        <Button
          onClick={handleClick}
          variant="contained"
          className={styles.shareBtn}
        >
          <ShareIcon />
        </Button>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        disablePortal={false}
        container={document.body}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={shareOnWhatsApp}>
          <WhatsAppIcon sx={{ marginRight: 1, color: "green" }} />
          WhatsApp
        </MenuItem>
        <MenuItem onClick={shareOnFacebook}>
          <FacebookIcon sx={{ marginRight: 1, color: "#1877f2" }} />
          Facebook
        </MenuItem>
        <MenuItem onClick={copyLink}>
          <ContentCopyIcon sx={{ marginRight: 1, color: "gray" }} />
          {t("Copy Link")}
        </MenuItem>
      </Menu>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {t("Link copied to clipboard!")}
        </Alert>
      </Snackbar>
    </>
  );
};
