import React from 'react'
import App from 'layouts/App'
import clsx from 'clsx'
import SvgRightArrow from 'icons/SvgRightArrow'
import SvgCalendar from 'icons/SvgCalendar'
import ReuqestForm from 'components/RequestForm'
import axios from 'axios'
import Moment from "react-moment";
import { API } from 'config'
import { TEN_MINUTES_IN_SECONDS } from 'config'

const style = {
  inActiveMenu: `text-xs opacity-80 md:text-sm`,
  activeMenu: `text-xs md:text-sm`,
  activeFilterCategoryMenu: `text-[11px] md:text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-[11px] md:text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
}

export async function getStaticPaths(params) {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  try {
    const { slug } = context.params

    const productRes = await axios.get(`${API}/api/posts/${slug}`, {
      timeout: 1000 * 20,
    })

    return {
      props: {
        post: productRes.data.data,
      },

      revalidate: 1,
    }
  } catch (error) {
    console.log(error.message)
    return {
      props: {
        post: [],
      },
    }
  }
}

function News({ post }) {
  console.log(post)

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
            <span className='text-xs md:text-sm px-2'>/</span>
            <a href='#' className={style.activeMenu}>
              {post.title.en}
            </a>
            <h2 className='text-2xl font-bold pt-3'>News</h2>
          </div>

          <div className='bounce w-[30rem] h-[30rem] opacity-[70%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-orange-primary'></div>
        </div>
      </section>

      <section className='news container mx-auto px-5 py-5 md:py-20'>
        <>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <h4 className='w-full font-bold text-lg md:text-3xl font-inter text-[#353437] group-hover:text-orange-primary duration-200'>
                {post.title.en}
              </h4>
            </div>
            <div className='fcb pt-1 pb-2'>
              <div className='fcc'>
                <SvgCalendar className='h-5' />

                <p className='text-xs text-[#9A999B] pl-2'>
                  <Moment 
                    format="DD.MM.YYYY hh:mm"
                  >
                      {post.created_at}
                  </Moment>
                </p>
              </div>
            </div>

            <div className='img flex | h-56 md:h-[500px] w-full flex-shrink-0 | overflow-hidden'>
              <img
                src={`${API}/` + post.image}
                alt='new_image'
                className='w-full h-full object-cover object-center'
              />
            </div>

            <p
              className='text-sm pt-10 font-inter text-[#353437] font-[400] prose'
              dangerouslySetInnerHTML={{
                __html: post.description.en,
              }}
            ></p>
          </div>
        </>
      </section>

      <ReuqestForm />

      <App.Footer />
    </App>
  )
}

export default News
