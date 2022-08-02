import { useState } from 'react'
import Moment from 'react-moment'
import OrderProgress from 'pages/dashboard/OrderProgress'
import App from 'layouts/App'

const style = {
  inActiveMenu: `opacity-80 text-sm`,
  activeMenu: `text-sm`,
  activeFilterCategoryMenu: `text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
}

function Tracking(props) {
  return (
    <App className='relative bg-[#F6F8FC]'>
      <App.Header dark={true} />

      <section className='bg-[#16171E] py-5 md:py-7 relative overflow-hidden'>
        <div className='flex items-center text-white | container mx-auto px-5'>
          <div className='relative z-10'>
            <a href='#' className={style.inActiveMenu}>
              Home
            </a>

            <span className='text-xs md:text-sm px-2'>/</span>

            <a href='#' className={style.activeMenu}>
              Tracking
            </a>

            <h2 className='text-lg md:text-2xl font-bold pt-1 md:pt-3'>
              Tracking
            </h2>
          </div>

          <div className='bounce w-[30rem] h-[30rem] opacity-[70%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-orange-primary'></div>
        </div>
      </section>

      <section className='search | container mx-auto flex items-center justify-center pt-7'>
        <input
          type='text'
          name='search'
          id='search'
          className='py-2 w-1/3 px-3 rounded-l-md | border border-transparent focus:border-orange-primary duration-200'
          placeholder='Enter your tracking number here..'
        />
        <button className='text-white bg-orange-primary px-12 py-3 text-sm md:text-lg md:px-16 md:py-2 font-bold font-poppins active:scale-95 duration-200 rounded-r-md'>
          Search
        </button>
      </section>

      <div className='| px-5 py-10 space-y-7 | container mx-auto'>
        <div className='bg-white | p-5 | space-y-14'>
          <h3 className='text-3xl font-semibold font-exo'>Tracking</h3>

          {/* Tracking */}
          <>
            <div className='order__progress__indicactor duration-200'>
              <OrderProgress step={1} />

              <div className='w-full flex justify-between'>
                <div className='ordere | space-y-2 pt-3 pl-1'>
                  <h3 className='font-bold text-[#16171E]'>Ordered</h3>
                  <p className='text-sm text-[#353437] opacity-70'>Thursday</p>
                  <h3 className='font-bold text-[#16171E]'>27.01.2022</h3>
                  <p className='text-sm text-[#353437] opacity-70'>
                    22:00 Local Time
                  </p>
                </div>

                <div className='shipped | space-y-2 pt-3 pl-1'>
                  <h3 className='font-bold text-[#16171E]'>Shipped</h3>
                  <p className='text-sm text-[#353437] opacity-70'>Thursday</p>
                  <h3 className='font-bold text-[#16171E]'>28.01.2022</h3>
                  <p className='text-sm text-[#353437] opacity-70'>
                    19:31 Local Time
                  </p>
                  <p className='text-sm text-[#353437] opacity-70'>
                    5:01 Local Time
                  </p>
                </div>

                <div className='shipped | space-y-2 pt-3 pl-1'>
                  <h3 className='font-bold text-[#16171E] w-10'>
                    Estimated Delivery
                  </h3>
                  <p className='text-sm text-[#353437] opacity-70'>Thursday</p>
                  <h3 className='font-bold text-[#16171E]'>29.01.2022</h3>
                  <p className='text-sm text-[#353437] opacity-70'>
                    15:43 Local Time
                  </p>
                </div>
              </div>
            </div>

            <div className='updates px-1 pt-10 | space-y-5'>
              <h3 className='font-bold text-[#16171E] text-2xl'>Updates</h3>

              <div className='fcb | border-b border-[#E0E0E0] border-opacity-60 pb-2'>
                <h3 className='font-bold text-[#16171E] text-lg w-1/2'>Data</h3>
                <h3 className='font-bold text-[#16171E] text-lg w-1/2'>
                  Places
                </h3>
              </div>
              {props.orderData?.routes?.map((d, index) => (
                <div
                  key={index}
                  className='flex justify-between | border-b border-[#E0E0E0] border-opacity-60 py-5'
                >
                  <div className='ordere | space-y-2 w-1/2'>
                    <p className='text-sm text-[#353437] opacity-70'>
                      Thursday
                    </p>
                    <h3 className='font-bold text-[#16171E]'>
                      <Moment format='DD.MM.YYYY'>{d.updated_at}</Moment>
                    </h3>
                    <p className='text-sm text-[#353437] opacity-70'>
                      <Moment format='hh.mm'>{d.updated_at}</Moment> Local Time
                    </p>
                  </div>

                  <div className='ordere | space-y-2 w-1/2'>
                    <h3 className='font-bold text-[#16171E] hover:text-orange-primary duration-150 text-left w-full'>
                      {d.title.en}
                    </h3>
                    <p className='text-sm text-[#353437] opacity-70'>
                      Paris, France
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>

      <App.Footer dark={true} />
    </App>
  )
}

export default Tracking
