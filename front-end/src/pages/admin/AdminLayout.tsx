import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../../components/Header/UserHeader/UserHeader";

interface AdminLayoutProps {
  children: ReactNode;
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <UserHeader />
      {children}
    </div>
  );
};
export default AdminLayout;
