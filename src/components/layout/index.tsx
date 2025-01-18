import Sidebar from "../sidebar";
import UserList from "../user_list";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex">
      <aside className="flex gap-x-4 fixed top-0 lef-0 h-screen lg:w-60 z-40">
        <Sidebar />
      </aside>
      <main className="lg:ml-60 lg:mr-60 p-8 ml-36">{children}</main>
      <aside className="hidden lg:block gap fixed top-0 right-0 h-screen lg:w-60 z-40">
        <UserList />
      </aside>
    </div>
  );
};

export default Layout;
