import SvgPen from 'icons/SvgPen'

function ProfileCRUD(props) {
  return (
    <div className='bg-[#F6F8FC] px-7 py-5 | space-y-10'>
      <div className='user__info | px-5 py-5 | rounded-xl | bg-white'>
        <div className='sidebar__user__info | flex items-center | space-y-3'>
          <div className='user__info__img | h-28 w-28 | relative'>
            <img
              src='/mans.png'
              alt='profile__img'
              className='h-full object-cover'
            />

            <div className='absolute bottom-0 right-0 bg-orange-primary | w-8 h-8 | rounded-full fcc | click:scale'>
              <SvgPen className='h-4' />
            </div>
          </div>

          <div className='pl-5 space-y-2'>
            <h4 className='font-exo text-[#353437]'>{props.profile?.name}</h4>
            <p className='text-[#020105] font-inter'>{props.profile?.phone}</p>
          </div>
        </div>
      </div>

      <div className='user__info__forms'>
        <div className='user__info | px-7 py-8 | rounded-xl | bg-white'>
          <form className='space-y-10'>
            <div className='grid grid-cols-2 gap-7'>
              <label htmlFor='full_name' className='flex flex-col | space-y-2'>
                <p className='text-[#002856] text-xs font-inter pb-0.5'>
                  Full Name <sup className='text-[#EB5757] text-xs'>*</sup>
                </p>

                <input
                  value={props.profile?.name}
                  type='text'
                  name='full_name'
                  id='full_name'
                  placeholder='Full Name'
                  className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
                />
              </label>

              <label htmlFor='phone' className='flex flex-col | space-y-2'>
                <p className='text-[#002856] text-xs font-inter pb-0.5'>
                  Phone Number <sup className='text-[#EB5757] text-xs'>*</sup>
                </p>

                <input
                  value={props.profile?.phone}
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='Phone Number'
                  className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
                />
              </label>

              <label htmlFor='email' className='flex flex-col | space-y-2'>
                <p className='text-[#002856] text-xs font-inter pb-0.5'>
                  Email Address <sup className='text-[#EB5757] text-xs'>*</sup>
                </p>

                <input
                  value={props.profile?.email}
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Email Address'
                  className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
                />
              </label>

              <label htmlFor='country' className='flex flex-col | space-y-2'>
                <p className='text-[#002856] text-xs font-inter pb-0.5'>
                  Country <sup className='text-[#EB5757] text-xs'>*</sup>
                </p>

                <select
                  name='country'
                  id='country'
                  className='form-select block w-full rounded-md border-gray-300 focus:shadow-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                >
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Italy</option>
                  <option>Uzbekistan</option>
                </select>
              </label>

              <label
                htmlFor='city-district'
                className='flex flex-col | space-y-2'
              >
                <p className='text-[#002856] text-xs font-inter pb-0.5'>
                  City / district{' '}
                  <sup className='text-[#EB5757] text-xs'>*</sup>
                </p>

                <select
                  name='city-district'
                  id='city-district'
                  className='form-select block w-full rounded-md border-gray-300 focus:shadow-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                >
                  <option>London</option>
                  <option>Manchester</option>
                  <option>Walse</option>
                </select>
              </label>

              <label
                htmlFor='postal_code'
                className='flex flex-col | space-y-2'
              >
                <p className='text-[#002856] text-xs font-inter pb-0.5'>
                  Postal Code
                  <sup className='text-[#EB5757] text-xs'>*</sup>
                </p>

                <input
                  type='number'
                  name='postal_code'
                  id='postal_code'
                  placeholder='Postal Code'
                  className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
                />
              </label>
            </div>

            <label htmlFor='address' className='flex flex-col | space-y-2'>
              <p className='text-[#002856] text-xs font-inter pb-0.5'>
                Address <sup className='text-[#EB5757] text-xs'>*</sup>
              </p>

              <input
                type='text'
                name='address'
                id='address'
                placeholder='Address'
                className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
              />
            </label>

            <div className='grid grid-cols-2 gap-7'>
              <label htmlFor='password' className='flex flex-col | space-y-2'>
                <p className='text-[#002856] text-xs font-inter pb-0.5'>
                  Password <sup className='text-[#EB5757] text-xs'>*</sup>
                </p>

                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
                />
              </label>

              <label
                htmlFor='confirm-password'
                className='flex flex-col | space-y-2'
              >
                <p className='text-[#002856] text-xs font-inter pb-0.5'>
                  Confirm Password{' '}
                  <sup className='text-[#EB5757] text-xs'>*</sup>
                </p>

                <input
                  type='password'
                  name='confirm-password'
                  id='confirm-password'
                  placeholder='Confirm Password'
                  className='px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100'
                />
              </label>
            </div>

            <div className='grid grid-cols-2 gap-7'>
              <div></div>
              <div className='grid grid-cols-2 gap-2'>
                <button className='form-button border border-orange-primary text-orange-primary font-semibold active:scale-95 duration-200 py-2.5'>
                  Cancel
                </button>
                <button className='form-button font-bold active:scale-95 duration-200 bg-orange-primary text-white py-2.5'>
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileCRUD
