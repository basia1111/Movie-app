import SideBar from "@/components/layout /SideBar";

const WithSideBarLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <SideBar />

      {/* Main content area */}
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default WithSideBarLayout;
