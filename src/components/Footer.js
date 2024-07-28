import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return <h4 className="footer">This site is developed by Aryan Arya</h4>;
};

export default Footer;
