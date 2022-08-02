import { useForm } from 'react-hook-form'

function ReuqestForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '+',
    },
  })

  const onSubmit = (data) => {
    // notify
  }

  return (
    <section className='bg-[#000000] | py-10 md:py-14 | relative | overflow-hidden'>
      <div className='relative | container mx-auto z-50 | space-y-5 md:space-y-7'>
        <h3 className='relative | text-3xl md:text-5xl font-bold text-white font-gm | text-center'>
          Leave us a message <span className='py-2 block'></span> to recieve a
          callback
        </h3>

        <p className='font-exo text-white opacity-60 text-xs md:text-sm text-center'>
          Leave a request <br />
          and we will contact you shortly
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='fcc flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5'
        >
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name:'
            className='w-4/5 md:w-1/5 text-sm md:text-base | bg-black border border-white text-white py-2 md:py-3 px-3 placeholder:text-white placeholder:opacity-80'
            {...register('name', { required: true })}
          />
          <input
            type='number'
            name='phone'
            id='phone'
            placeholder='+'
            className='w-4/5 md:w-1/5 text-sm md:text-base | bg-black border border-white text-white py-2 md:py-3 px-3 placeholder:text-white placeholder:opacity-80'
            {...register('phone', {
              required: true,
              valueAsNumber: true,
              pattern: /^[-+]?[1-9]\d*$/,
            })}
          />

          <button className='w-4/5 md:w-1/5 | bg-white text-orange-primary px-10 py-2 md:py-3 text-base md:text-lg font-bold font-poppins click:scale'>
            Send
          </button>
        </form>
      </div>

      <div className='bounce w-[35rem] h-[30rem] opacity-[72%] absolute -top-48 -left-20 | blur-2xl duration-150 rounded-[50%] bg-orange-primary'></div>
    </section>
  )
}

export default ReuqestForm
