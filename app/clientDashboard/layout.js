import SideBar from "@/Components/DashboardComponents/Sidbar";

function dashboardLayout({children}) {
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-4'>
        <div className="left-side col-span-1 border-r">
            <SideBar></SideBar>
        </div>
        <div className="right-side col-span-3">
            {children}
        </div>
    </div>
    </div>
  )
}

export default dashboardLayout;