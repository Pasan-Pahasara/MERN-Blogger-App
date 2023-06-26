import { ReactNode } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Header />
      <main className="bg-[#F9F9F9] flex-1 p-4 lg:p-6">
        <Outlet />
        {children}
      </main>
    </div>
  );
};
export default AdminLayout;
