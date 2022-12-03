import { useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { loginUser } from "../../actions/activeUserReduser";
import { connect } from "react-redux";
import styles from "./LoginPage.module.scss";

const drfClientId = "WwwthwN1d....T5G4shbU4E";
const drfClientSecret =
  "VXSjjmMLfyaGMCfOBFeWJJEAvRqhDxSs....tkDLqqTv1hryIW2wCMK87PBsyeWtE";
const baseURL = "http://localhost:9000";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = (response) => {
    // alert(response.access_token);
    console.log(response.access_token);
    axios
      .post("http://localhost:9000/auth/convert-token", {
        token: response.access_token,
        backend: "google-oauth2",
        grant_type: "convert_token",
        client_id: drfClientId,
        client_secret: drfClientSecret,
      })
      .then((res) => {
        console.log(res);
        const { access_token, refresh_token } = res.data;
        console.log({ access_token, refresh_token });
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        props.loginUser();
      })
      .catch((err) => {
        console.log("Error Google login", err);
      });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLogin(tokenResponse), //console.log(tokenResponse),
  });

  const fromPage = location.state?.from?.pathname || "/";

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => login()}>
        Sign in with Google 🚀{" "}
      </button>
      ;
    </div>
  );
  //   <p>{fromPage}</p>;
};

const mapStateToProps = (state) => ({
  user_state: state.activeUserReduser,
});

export default connect(mapStateToProps, { loginUser })(LoginPage);
