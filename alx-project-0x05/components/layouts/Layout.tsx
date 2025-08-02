import Footer from "./Layout";
import Header from "./Header";
import { LayoutProps } from "@/pages/interface";


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer  />
    </>
  );
};

export default Layout;