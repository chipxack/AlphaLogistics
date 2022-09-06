function ProfileCRUD(props) {
  return (
    <div className='bg-[#F6F8FC] px-7 py-10 | space-y-5'>
      <h3 className='text-3xl font-gm'>Client Support</h3>

      <div className='user__info | px-5 py-5 | grid grid-cols-2 gap-10 | rounded-xl | bg-white mobile-column'>
        <form className='space-y-10' action='#'>
          <label htmlFor='full_name' className='flex flex-col | space-y-2'>
            <p className='text-[#002856] text-xs font-inter pb-0.5'>
              Full Name <sup className='text-[#EB5757] text-xs'>*</sup>
            </p>

            <input
              required
              type='text'
              name='full_name'
              id='full_name'
              placeholder='Full Name'
              className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
            />
          </label>

          <label htmlFor='email' className='flex flex-col | space-y-2'>
            <p className='text-[#002856] text-xs font-inter pb-0.5'>
              Email <sup className='text-[#EB5757] text-xs'>*</sup>
            </p>

            <input
              required
              type='text'
              name='email'
              id='email'
              placeholder='Email'
              className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
            />
          </label>

          <label htmlFor='message' className='flex flex-col | space-y-2'>
            <p className='text-[#002856] text-xs font-inter pb-0.5'>
              Message <sup className='text-[#EB5757] text-xs'>*</sup>
            </p>

            <textarea
              required
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Type your message..'
              className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
            ></textarea>
          </label>

          <button className='w-full | text-white bg-orange-primary py-2 text-lg font-bold font-poppins active:scale-95 duration-200'>
            Send
          </button>
        </form>

        <div className='space-y-7'>
          <div className='space-y-2'>
            <h3 className='font-bold font-inter text-lg'>Phone number</h3>

            <div className='fcb'>
              <a className='text-[#020105] opacity-70 cursor-pointer block'>
                +44 20 7423 0000
              </a>
              <a className='text-[#020105] opacity-70 cursor-pointer block'>
                +44 99 3505 6740
              </a>
            </div>
          </div>

          <div className='space-y-2'>
            <h3 className='font-bold font-inter text-lg'>Email</h3>

            <a className='text-[#020105] opacity-70 cursor-pointer block'>
              alphalogistics@gmail.com
            </a>
          </div>

          <div className='space-y-2'>
            <h3 className='font-bold font-inter text-lg'>Address</h3>

            <a className='text-[#020105] opacity-70 block'>
              166-220 Holloway Rd, London N7 8DB, United Kingdom
            </a>
          </div>

          <div className='space-y-2'>
            <h3 className='font-bold font-inter text-lg'>Hours of operation</h3>

            <div className='rounded-lg overflow-hidden'>
              <div className='oddds | fcb py-3 px-2'>
                <p className='opacity-70 text-[#020105]'>Monday - Friday</p>
                <p className='opacity-70 text-[#020105]'>09:00 - 18:00</p>
              </div>
              <div className='oddds | fcb py-3 px-2'>
                <p className='opacity-70 text-[#020105]'>Saturday</p>
                <p className='opacity-70 text-[#020105]'>09:00 - 14:00</p>
              </div>
              <div className='oddds | fcb py-3 px-2'>
                <p className='opacity-70 text-[#020105]'>Sunday</p>
                <p className='opacity-70 text-[#020105]'>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCRUD
