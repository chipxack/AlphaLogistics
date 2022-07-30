import React from 'react'
import App from 'layouts/App'
import clsx from 'clsx'
import SvgRightArrow from 'icons/SvgRightArrow'
import SvgCalendar from 'icons/SvgCalendar'
import ReuqestForm from 'components/RequestForm'
import Link from 'next/link'
import axios from 'axios'
import { API } from 'config'
import { HOUR_IN_SECONDS } from 'config'

const style = {
  inActiveMenu: `text-xs opacity-80 md:text-sm`,
  activeMenu: `text-xs md:text-sm`,
  activeFilterCategoryMenu: `text-[11px] md:text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-[11px] md:text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
}

export async function getStaticProps(props) {
  try {
    const newsRes = await axios.get(`${API}/api/posts`)

    return {
      props: {
        news: newsRes.data.data.data,
        success: true,
      },
      revalidate: HOUR_IN_SECONDS,
    }
  } catch (error) {
    return {
      props: {
        news: [],
      },
      revalidate: 1,
    }
  }
}

function News({ news }) {
  console.log(news)
  return (
    <App>
      <App.Header dark={true} />

      <section className='bg-[#000000] py-5 md:py-10 relative overflow-hidden'>
        <div className='flex items-center text-white | px-5 container mx-auto'>
          <div className='relative z-10'>
            <a href='#' className={style.inActiveMenu}>
              Home
            </a>

            <span className='text-xs md:text-sm px-2'>/</span>

            <a href='#' className={style.activeMenu}>
              News
            </a>

            <h2 className='text-2xl font-bold pt-3'>News</h2>
          </div>

          <div className='bounce w-[30rem] h-[30rem] opacity-[70%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-orange-primary'></div>
        </div>
      </section>

      <section className='news container mx-auto | px-5 py-5 md:py-20'>
        <div className='news | flex flex-col md:flex-row'>
          {news.map((n, index) => (
            <>
              <Link href={`/news/${n.slug}`}>
                <div
                  className={clsx({
                    'flex w-full md:w-1/3 | py-7 px-3 group cursor-pointer md:border-b': true,
                    'md:border-x': index === 1,
                  })}
                  key={index}
                >
                  <div className='space-y-2'>
                    <div className='flex justify-between'>
                      <h4 className='h-16 w-2/3 font-bold font-inter text-[#353437] group-hover:text-orange-primary duration-200'>
                        {n.title.en}
                      </h4>

                      <SvgRightArrow className='h-5 group-hover:translate-x-1 duration-200' />
                    </div>
                    <p className='h-28 text-sm py-2 font-inter text-[#353437] font-[400]'>
                      {n.description.en ||
                        ` A 20-year veteran of Russia's diplomatic service announced
his resignation Monday in protest of his country's war on
Ukraine, multiple media outlets reported. A 20-year veteran
of Russia's diplomatic service announced his resignation...`}
                    </p>

                    <div className='fcb  pt-1 pb-2'>
                      <div className='fcc'>
                        <SvgCalendar className='h-5' />

                        <p className='text-xs text-[#9A999B] pl-2'>
                          {n.created_at}
                        </p>
                      </div>
                    </div>

                    <div className='img flex | h-[200px] w-full flex-shrink-0 | overflow-hidden'>
                      <img
                        src={API + '/' + n.image}
                        alt='new_image'
                        className='w-full h-full object-cover object-center'
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className='fcc | pt-5 md:pt-10'>
          <button className='text-white bg-orange-primary px-12 py-3 text-sm md:text-lg md:px-16 md:py-3 font-bold font-poppins click:scale'>
            Load More
          </button>
        </div>
      </section>

      <ReuqestForm />

      <App.Footer />
    </App>
  )
}

export default News
