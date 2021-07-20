import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as WineIcon } from "../../images/logo.svg";
import { Link as RouterLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import { Container, Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function NavigationBar({ auth }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container fluid>
        <Toolbar className={styles.toolbar}>
          <Col md={4} className={styles.textAlign}>
            <RouterLink
              to={!auth.isLoggedIn ? "/signup" : "/"}
            >
              {" "}
              <SvgIcon
                component={WineIcon}
                viewBox="0 0 70 70"
                className={styles.logo}
              />
            </RouterLink>
          </Col>
          <Col md={4}>
            <Typography variant="h6" noWrap>
              <RouterLink to="/" className={styles.linkDecoration}>
                Wine Online
              </RouterLink>
            </Typography>
          </Col>
          <Col md={4}>
            <Typography variant="subtitle2" className={styles.alignGreeting}>
              Hello {auth.isLoggedIn ? auth.username : ""}
            </Typography>
          </Col>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
