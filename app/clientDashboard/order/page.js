import React from 'react';

const tableData = [
  {
    name: "Jane Cooper",
    method: "cash",
    total: "50.50",
    action: 'deatails',
    orderTime: "20 may 2023",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    locate: "Locate1",
    posCoords: [260, 900],
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Cody Fisher",
    method: "cash",
    total: "50.50",
    action: 'deatails',
    orderTime: "20 may 2023",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    locate: "Locate",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },
  {
    name: "Esther Howard",
    method: "cash",
    total: "50.50",
    action: 'deatails',
    orderTime: "20 may 2023",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    role: "Member",
    locate: "Locate",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  },];

const tableHeader = ['id', "ordertime", 'Method', "status", "total", "action"];

function Order() {
  return (

    <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      <div class="h-full">

        <div class="w-full max-w-2xl mx-auto rounded bg-white shadow-lg  border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">My Orders</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead class="text-xs font-bold uppercase  bg-gray-50">
                  <tr>
                    {
                      tableHeader.map(map => {
                        return <th class="p-2 whitespace-nowrap">
                          <div class="font-bold  text-gray-400 text-center">{map}</div>
                        </th>;
                      })
                    }
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">

                  {
                    tableData.map((data, ind) => {
                      return <tr className='text-center capitalize font-semibold my-5'>
                        <td class="p-2 whitespace-nowrap">
                          <p className='text-center'>{ind}</p>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div >{data.orderTime}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          {data.method}
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          {data.status}
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          ${data.total}
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          {data.action}
                        </td>
                      </tr>;
                    })
                  }
                  {/* <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                        <div class="font-medium text-gray-800">Alex Shatov</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">alexshatov@gmail.com</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">$2,890.66</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-lg text-center">🇺🇸</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach" /></div>
                        <div class="font-medium text-gray-800">Philip Harbach</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">philip.h@gmail.com</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">$2,767.04</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-lg text-center">🇩🇪</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk" /></div>
                        <div class="font-medium text-gray-800">Mirko Fisuk</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">mirkofisuk@gmail.com</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left font-medium text-green-500">$2,996.00</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-lg text-center">🇫🇷</div>
                    </td>
                  </tr> */}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Order;