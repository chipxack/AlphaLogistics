import clsx from 'clsx'
import SvgDropdown from 'icons/SvgDropdown'
import CollapseCustom from 'components/Collapse'

const style = {
  inActiveMenu: `text-xs opacity-80 md:text-sm`,
  activeMenu: `text-xs md:text-sm`,
  activeFilterCategoryMenu: `text-[11px] md:text-xs text-[#FB421A] duration-100`,
  inActiveFilterCategoryMenu: `text-[11px] md:text-xs text-[#16171E] hover:text-[#FB421A] opacity-60 cursor-pointer duration-100`,
}

function ProductsFilterSidebar({ categories, brands }) {
  return (
    <>
      <div className='filter'>
        {/* --- FILTER CATEGORIES --- */}
        {categories.map((category, idx) => (
          <CollapseCustom openByDefault={true} key={idx}>
            <div className='filter__categories | pt-5'>
              {/* --- FILTER CATEGORIES BTN  --- */}
              <CollapseCustom.Button>
                {({ isActive, toggle }) => (
                  <div
                    className='filter__categories__btn | fcb cursor-pointer'
                    onClick={() => toggle()}
                  >
                    <p className='font-bold text-base text-black'>
                      {category.title.en}
                    </p>
                    <SvgDropdown
                      className={clsx({
                        'h-2 text-[#FB421A] duration-200': true,
                        '-rotate-90': !isActive,
                        '-rotate-0': isActive,
                      })}
                    />
                  </div>
                )}
              </CollapseCustom.Button>

              {/* FILTER CATEGORIES BODY */}
              <CollapseCustom.Content>
                <div className='filter__categories__content | pt-5'>
                  <ul className='space-y-4'>
                    {category.child_categories.map((category, index) => (
                      <li
                        className={clsx({
                          [style.activeFilterCategoryMenu]: category.is_active,
                          [style.inActiveFilterCategoryMenu]:
                            !category.is_active,
                        })}
                        key={index}
                      >
                        {category.title.en}
                      </li>
                    ))}
                  </ul>
                </div>
              </CollapseCustom.Content>
            </div>
          </CollapseCustom>
        ))}

        {/* --- FILTER BRANDS --- */}
        <div className='filter__brands | py-5 pb-7'>
          <CollapseCustom openByDefault={true}>
            {/* --- FILTER BRANDS BTN  --- */}
            <CollapseCustom.Button>
              {({ isActive, toggle }) => (
                <div
                  className='filter__categories__btn | fcb cursor-pointer'
                  onClick={() => toggle()}
                >
                  <p className='font-bold text-base text-black'>Brands</p>
                  <SvgDropdown
                    className={clsx({
                      'h-2 text-[#FB421A] duration-200': true,
                      '-rotate-90': !isActive,
                      '-rotate-0': isActive,
                    })}
                  />
                </div>
              )}
            </CollapseCustom.Button>

            {/* FILTER BRANDS BODY */}
            <CollapseCustom.Content>
              <div className='filter__brands__content | pt-5'>
                <ul className='space-y-5'>
                  {brands.map((brand) => (
                    <label
                      htmlFor={brand.title.en}
                      className='flex items-center | space-x-2'
                      key={brand.title.en}
                    >
                      <input
                        type='checkbox'
                        name={brand.title.en}
                        id={brand.title.en}
                        className={`form-checkbox rounded text-orange-primary border-gray-200 p-2 | shadow-sm focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50`}
                        defaultChecked={brand.is_active}
                      />

                      <li
                        className={clsx({
                          [style.activeFilterCategoryMenu]: brand.is_active,
                          [style.inActiveFilterCategoryMenu]: !brand.is_active,
                        })}
                      >
                        {brand.title.en}
                      </li>
                    </label>
                  ))}
                </ul>
              </div>
            </CollapseCustom.Content>
          </CollapseCustom>
        </div>

        {/* --- FILTER PRICE --- */}

        {/* --- FILTER APPLY --- */}
        <div className='filter__apply'>
          <button className='w-full | text-white bg-orange-primary mt-3 py-2 text-lg font-bold font-poppins click:scale'>
            Apply
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductsFilterSidebar
