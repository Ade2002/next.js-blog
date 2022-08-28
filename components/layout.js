import styles from "./styles/layout.module.scss";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";
const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default Layout;
