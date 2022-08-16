import clsx from 'clsx'

function OrderProgress(props) {
  const step = props.step || 1

  return (
    <>
      <div className='w-full px-5 py-5'>
        <div className='bg-[#F0F1F4] flex items-center rounded-full overflow-hidden'>
          {props.status === 'new' && (
            <div
              className={clsx({
                'bg-orange-primary flex items-center pr-0.5 overflow-hidden': true,
                'rounded-full h-7 w-7': true,
              })}
            >
              <div className='bg-orange-primary h-7 w-full rounded-full flex items-center justify-end'>
                <div className='bg-white h-6 w-6 rounded-full flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-orange-primary'
                    width={18}
                    height={18}
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M5 12l5 5l10 -10' />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {props.status === 'in_process' && (
            <div
              className={clsx({
                'bg-orange-primary flex items-center flex-col pr-0.5 overflow-hidden': true,
                'w-1/2 rounded-r-full': true,
              })}
            >
              <div className='bg-orange-primary h-4 w-full rounded-full flex items-center justify-end'>
                <div className='bg-white h-3 w-3 rounded-full flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-orange-primary'
                    width={18}
                    height={18}
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M5 12l5 5l10 -10' />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {props.status === 'completed' && (
            <>
              <div
                className={clsx({
                  'bg-orange-primary flex items-center flex-col pr-0.5 overflow-hidden': true,
                  'w-full rounded-r-full': true,
                })}
              >
                <div className='bg-orange-primary h-7 w-full rounded-full flex items-center justify-end'>
                  <div className='bg-white h-6 w-6 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='text-orange-primary'
                      width={18}
                      height={18}
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <path d='M5 12l5 5l10 -10' />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className='flex items-center justify-between'>
          <span>
            Ordered
          </span>
          <span>
            Shipped
          </span>
          <span>
            Delivering
          </span>
        </div>
      </div>
    </>
  )
}
export default OrderProgress
