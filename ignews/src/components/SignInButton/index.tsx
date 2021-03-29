import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const SignInButton: React.FC = () => {
    const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="submit" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Milton Vilarino
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="submit" className={styles.signInButton}>
    <FaGithub color="#eba417" />
    Sign in with GitHub
  </button>
  );
};

export default SignInButton;