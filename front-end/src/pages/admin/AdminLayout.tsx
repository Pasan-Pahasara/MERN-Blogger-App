import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../../components/Header/UserHeader/UserHeader";
import Header from "../../components/Header/Header";

interface AdminLayoutProps {
  children: ReactNode;
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default AdminLayout;
