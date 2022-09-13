import {useState} from 'react';
import useWindowSize from 'hooks/useWindowSize'
import App from 'layouts/App'
import feedback from '../../services/feedback';
import cogoToast from 'cogo-toast'
import profile from '../../services/profile'

const style = {
    inActiveMenu: `opacity-80 text-sm`,
    activeMenu: `text-sm`,
    activeFilterCategoryMenu: `text-xs text-[#FB421A] duration-100`,
    inActiveFilterCategoryMenu: `text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
}

function Support(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const sendFeedback = () => {
        setLoading(true)
        const data = {
            name,
            phone
        }
        feedback.callback(data)
            .then(res => {
                if (res.status === 201) {
                    setLoading(false)
                    setName('')
                    setPhone('')
                    cogoToast.success(
                        res.data.error ||
                        res.data.message ||
                        res.statusText
                    )
                }

            })
            .catch(error => {
                setLoading(false)
                cogoToast.error(
                    error?.response?.data?.error ||
                    error?.response?.data?.message ||
                    error?.response?.statusText
                )
            })
    }

    const {width: windowH} = useWindowSize()
    return (
        <App>
            <App.Header profile={props.profile} dark={true}/>
            <section className='bg-[#16171E] py-5 md:py-7 relative overflow-hidden'>
                <div className='flex items-center text-white | container mx-auto px-5'>
                    <div className='relative z-10'>
                        <a href='#' className={style.inActiveMenu}>
                            Home
                        </a>

                        <span className='text-xs md:text-sm px-2'>/</span>

                        <a href='#' className={style.activeMenu}>
                            Support
                        </a>

                        <h2 className='text-lg md:text-2xl font-bold pt-1 md:pt-3'>
                            Support
                        </h2>
                    </div>

                    <div
                        className='bounce w-[30rem] h-[30rem] opacity-[70%] absolute right-0 | blur-3xl duration-150 rounded-[50%] bg-orange-primary'></div>
                </div>
            </section>

            <section className='py-5 md:pt-20'>
                <div className='px-5 container mx-auto | flex flex-col md:flex-row md:space-x-5'>
                    <div className='order-2 md:order-1 w-full md:w-1/2 relative'>
                        <h3 className='text-3xl font-exo font-bold md:pb-10'>
                            Get in Touch
                        </h3>

                        <div
                            className='md:mr-20 my-7 md:my-0 p-3 md:p-5 | bg-[#020105] | relative md:absolute | overflow-hidden'>
                            <div
                                className='relative p-4 md:py-16 md:px-14 border border-gray-100/20 | z-[7] | space-y-7'>
                                <h3 className='relative | text-2xl md:text-3xl text-white font-gm | '>
                                    {/*Leave us to recieve a callback*/}
                                    Leave your details for a call back
                                </h3>

                                <div className='flex flex-col space-y-5'>
                                    <input
                                        disabled={loading}
                                        value={name}
                                        type='text'
                                        name='name'
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Name:'
                                        className='bg-[#020105] text-sm md:text-base text-white py-2 md:py-3 px-3 placeholder:text-white placeholder:opacity-80'
                                    />
                                    <input
                                        disabled={loading}
                                        value={phone}
                                        type='text'
                                        name='phone'
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder='Phone number:'
                                        className='bg-[#020105] text-sm md:text-base text-white py-2 md:py-3 px-3 placeholder:text-white placeholder:opacity-80'
                                    />

                                    <button disabled={loading} onClick={sendFeedback}
                                            className='bg-white text-black py-1 md:py-3 px-3 text-base md:text-lg font-bold font-poppins click:scale'>
                                        Order now
                                    </button>
                                </div>
                            </div>

                            <div
                                className='w-full h-full opacity-[72%] absolute -bottom-20 -left-32 | blur-[100px] duration-150 rounded-[50%] bg-orange-primary'></div>
                        </div>
                    </div>

                    <div className='order-1 md:order-2 w-full md:w-1/2 | flex flex-wrap gap-5 md:gap-10 pb-12'>
                        <div className='md:space-y-5 space-y-3'>
                            <h3 className='font-bold font-inter text-lg'>Email</h3>

                            <a
                                href='mailto:alphalogisticsandtradecompany@gmail.com'
                                className='text-[#020105] opacity-70 cursor-pointer block'
                            >
                                alphalogisticsandtradecompany@gmail.com
                            </a>
                        </div>

                        <div className='md:space-y-5 space-y-3'>
                            <h3 className='font-bold font-inter text-lg'>Phone Number</h3>

                            <div>
                                <a
                                    href='tel:+442074230000'
                                    className='text-[#020105] opacity-70 cursor-pointer block'
                                >
                                    +44 20 7423 0000
                                </a>

                                <a
                                    tel='tel:+449935056740'
                                    className='text-[#020105] opacity-70 cursor-pointer block'
                                >
                                    +44 99 3505 6740
                                </a>
                            </div>
                        </div>

                        <div className='md:space-y-5 space-y-3'>
                            <h3 className='font-bold font-inter text-lg'>Address</h3>

                            <a className='w-2/3 text-[#020105] opacity-70 cursor-pointer block'>
                                166-220 Holloway Rd, London N7 8DB, United Kingdom
                            </a>
                        </div>
                    </div>
                </div>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.905539164854!2d-0.1106899!3d51.5516311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b714cf5d5bd%3A0x5c1c0cd62cece6dc!2sMetropolitan%20University%2C%20166-220%20Holloway%20Rd%2C%20London%20N7%208DB%2C%20UK!5e0!3m2!1sen!2s!4v1659377194542!5m2!1sen!2s'
                    width='100%'
                    height={windowH < 640 ? `300` : `600`}
                    loading='lazy'
                    allowFullScreen={true}
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </section>
            <App.Footer/>
        </App>
    )
}

export async function getServerSideProps(context) {
    const token = context.req.cookies.token
    // console.log('context', context.req.cookies)
    try {
        const data = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        const profileData = await profile.getUserProfile(data)


        return {
            props: {
                profile: profileData.data
            }
        }

    } catch (error) {
        return {
            props: {
                profile: null
            }
        }
    }
}

export default Support
