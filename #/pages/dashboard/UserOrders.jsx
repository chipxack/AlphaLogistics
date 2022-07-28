import clsx from "clsx";
import SvgFilter from "icons/SvgFilter";
import SvgSearch from "icons/SvgSearch";
import Link from "next/link";

function UserOrders(props) {

  const columns = [
    {
      title: `Tracking ID`,
    },
    {
      title: `Product`,
      filter_by: `products`,
    },
    {
      title: `Date`,
      filter_by: `date`,
    },
    {
      title: `Amount`,
    },
    {
      title: `Payment Mode`,
    },
    {
      title: `Status`,
      filter_by: `status`,
    },
  ];

  return (
    <div className="py-10 px-7 | bg-[#F6F8FC]">
      <div className="fcb">
        <h3 className="text-3xl font-gm">Products</h3>

        <label htmlFor="search" className="relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search.."
            className="px-3 py-2 rounded-lg font-exo text-sm | border border-gray-300 focus:border-orange-primary duration-200"
          />
          <SvgSearch className="h-5 text-orange-primary absolute right-2 top-[0%] mt-2" />
        </label>
      </div>

      <div className="order__content | py-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md rounded-xl">
            <div className="inline-block min-w-full align-middle overflow-hidden">
              <table className="min-w-full table-fixed">
                <thead className="bg-white">
                  <tr>
                    {columns.map((d, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="w-32 pl-5 font-bold py-3 text-sm text-left text-[#16171E]"
                      >
                        <div className="flex items-center">
                          {d.title}

                          {d.filter_by && (
                            <SvgFilter className="text-[#E0E0E0] h-4 ml-2 | click:scale" />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {props?.data?.map((r, index) => (
                    <Link href={`/dashboard/orders/${r.uid}`} key={index}>
                      <tr
                        key={index}
                        className="oddds rounded-xl hover:bg-orange-primary/20 border-l border-r border-transparent hover:border-orange-500 cursor-pointer duration-200"
                      >
                        <td className="px-5 text-sm font-medium font-inter text-[#16171E]">
                          #{r.uid}
                        </td>
                        <td className="px-5 py-5 text-sm font-medium text-[#16171E] whitespace-nowrap">
                          {r.product}
                        </td>
                        <td className="px-5 py-5 text-sm font-medium text-[#16171E] whitespace-nowrap">
                          {r.load_time}
                        </td>
                        <td className="px-5 py-5 text-sm font-medium text-[#16171E] whitespace-nowrap">
                          {r.products_price}
                        </td>
                        <td className="px-5 py-5 text-sm font-medium text-[#16171E] whitespace-nowrap">
                          {r.payment_mode}
                        </td>
                        <td
                          className={clsx({
                            "px-5 py-5 text-sm font-medium text-left whitespace-nowrap": true,
                            // "text-[#1F9254]": r.status.code === `success`,
                            // "text-[#9D0208]": r.status.code === `error`,
                            // "text-[#FAA307]": r.status.code === `warn`,
                          })}
                        >
                          {/*{r.status.title}*/}
                        </td>
                      </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
