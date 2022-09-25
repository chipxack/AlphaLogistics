import {useState, useEffect} from "react";
import cogoToast from 'cogo-toast'
import Router from 'next/router'
import SvgPen from "icons/SvgPen";
import settings from "../../../services/settings";
import profile from "../../../services/profile";
import _ from 'lodash'

function ProfileCRUD(props) {
    const [citiesList, setCitiesList] = useState(undefined);
    const [formData, setFormData] = useState({
        postal_code: undefined,
        address: undefined,
        password: undefined,
        password_confirmation: undefined,
        city_id: props.profile?.city_id || undefined,
        country_id: props.profile?.country_id || undefined,
        name: props.profile?.name || undefined,
        phone: props.profile?.phone || undefined,
        email: props.profile?.email || undefined
    });

    const updateProfile = (e) => {
        e.preventDefault()
        profile.updateUserProfile(formData)
            .then(res => {
                cogoToast.success(
                    res.data.error ||
                    res.data.message ||
                    res.statusText
                )
                Router.reload(window.location.pathname)
            })
            .catch(error => {
                cogoToast.error(
                    error.response.data.error ||
                    error.response.data.message ||
                    error.response.statusText
                )
            })
    }

    const updateProfileImage = (e) => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        profile.imageUpload(formData)
            .then(res => {
                cogoToast.success(
                    res.data.error ||
                    res.data.message ||
                    res.statusText
                )
                Router.reload(window.location.pathname)
            })
            .catch(error => {
                cogoToast.error(
                    error.response.data.error ||
                    error.response.data.message ||
                    error.response.statusText
                )
            })

    }


    useEffect(() => {
        if (props?.profile?.country_id) {
            // setFormData({
            //   ...formData,
            //   city_id: props.profile?.city_id,
            //   country_id: props.profile?.country_id,
            //   name: props.profile?.name,
            //   phone: props.profile?.phone,
            //   email: props.profile?.email
            // });
            const params = {
                country_id: props.profile.country_id,
            };
            settings.getCityList(params).then((res) => {
                setCitiesList(res?.data?.data);
            });
        }
    }, [props?.profile]);

    return (
        <div className="mobile-padding bg-[#F6F8FC] px-7 py-5 | space-y-10">
            <div className="user__info | px-5 py-5 | rounded-xl | bg-white">
                <div className="sidebar__user__info | flex items-center | space-y-3">
                    <label className="user__info__img | h-28 w-28 | relative">
                        <img
                            src={`${process.env.NEXT_PUBLIC_URL}/${props.profile?.image}` || '/mans.png'}
                            alt="profile__img"
                            className="h-full object-cover"
                        />

                        <div
                            className="absolute bottom-0 right-0 bg-orange-primary | w-8 h-8 | rounded-full fcc | click:scale">
                            <SvgPen className="h-4"/>
                        </div>
                        <input multiple='false' type="file" hidden accept="image/jpeg,image/png"
                               onChange={updateProfileImage}/>
                    </label>


                    <div className="pl-5 space-y-2 mobile-text-center">
                        <h4 className="font-exo text-[#353437]">{props.profile?.name}</h4>
                        <p className="text-[#020105] font-inter">{props.profile?.phone}</p>
                    </div>
                </div>
            </div>

            <div className="user__info__forms">
                <div className="user__info | px-7 py-8 | rounded-xl | bg-white">
                    <form onSubmit={updateProfile} className="space-y-10">
                        <div className="grid grid-cols-2 gap-7 mobile-column">
                            <label htmlFor="full_name" className="flex flex-col | space-y-2">
                                <p className="text-[#002856] text-xs font-inter pb-0.5">
                                    Full Name <sup className="text-[#EB5757] text-xs">*</sup>
                                </p>

                                <input
                                    value={formData.name || props.profile?.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    type="text"
                                    name="full_name"
                                    id="full_name"
                                    placeholder="Full Name"
                                    className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                                />
                            </label>

                            <label htmlFor="phone" className="flex flex-col | space-y-2">
                                <p className="text-[#002856] text-xs font-inter pb-0.5">
                                    Phone Number <sup className="text-[#EB5757] text-xs">*</sup>
                                </p>

                                <input
                                    value={formData.phone || props.profile?.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                    className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                                />
                            </label>

                            <label htmlFor="email" className="flex flex-col | space-y-2">
                                <p className="text-[#002856] text-xs font-inter pb-0.5">
                                    Email Address <sup className="text-[#EB5757] text-xs">*</sup>
                                </p>

                                <input
                                    value={formData.email || props.profile?.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                                />
                            </label>

                            <label htmlFor="country" className="flex flex-col | space-y-2">
                                <p className="text-[#002856] text-xs font-inter pb-0.5">
                                    Country <sup className="text-[#EB5757] text-xs">*</sup>
                                </p>

                                <select
                                    value={formData.country_id}
                                    onChange={(e) => setFormData({...formData, country_id: e.target.value})}
                                    name="country"
                                    id="country"
                                    className="form-select block w-full rounded-md border-gray-300 focus:shadow-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    {props?.countryList?.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.title.en}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label
                                htmlFor="city-district"
                                className="flex flex-col | space-y-2"
                            >
                                <p className="text-[#002856] text-xs font-inter pb-0.5">
                                    City / district{" "}
                                    <sup className="text-[#EB5757] text-xs">*</sup>
                                </p>

                                <select
                                    value={formData.city_id}
                                    onChange={(e) => setFormData({...formData, city_id: e.target.value})}
                                    name="city-district"
                                    id="city-district"
                                    className="form-select block w-full rounded-md border-gray-300 focus:shadow-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    {citiesList?.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.title.en}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label
                                htmlFor="postal_code"
                                className="flex flex-col | space-y-2"
                            >
                                <p className="text-[#002856] text-xs font-inter pb-0.5">
                                    Postal Code
                                    <sup className="text-[#EB5757] text-xs">*</sup>
                                </p>

                                <input
                                    value={formData.postal_code || props.profile?.postal_code}
                                    onChange={(e) => setFormData({...formData, postal_code: e.target.value})}
                                    type="number"
                                    name="postal_code"
                                    id="postal_code"
                                    placeholder="Postal Code"
                                    className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                                />
                            </label>
                        </div>

                        <label htmlFor="address" className="flex flex-col | space-y-2">
                            <p className="text-[#002856] text-xs font-inter pb-0.5">
                                Address <sup className="text-[#EB5757] text-xs">*</sup>
                            </p>

                            <input
                                value={formData.address || props.profile?.address}
                                onChange={(e) => setFormData({...formData, address: e.target.value})}
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Address"
                                className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                            />
                        </label>

                        <div className="grid grid-cols-2 gap-7 mobile-column">
                            <label htmlFor="password" className="flex flex-col | space-y-2">
                                <p className="text-[#002856] text-xs font-inter pb-0.5">
                                    Password <sup className="text-[#EB5757] text-xs">*</sup>
                                </p>

                                <input
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                                />
                            </label>

                            <label
                                htmlFor="confirm-password"
                                className="flex flex-col | space-y-2"
                            >
                                <p className="text-[#002856] text-xs font-inter pb-0.5">
                                    Confirm Password{" "}
                                    <sup className="text-[#EB5757] text-xs">*</sup>
                                </p>

                                <input
                                    value={formData.password_confirmation}
                                    onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                    className="px-4 py-2.5 text-sm placeholder:text-sm | font-inter | border focus:border-[#024B80] duration-100 rounded-md focus:shadow-100"
                                />
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-7 mobile-column">
                            <div></div>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    className="form-button border border-orange-primary text-orange-primary font-semibold active:scale-95 duration-200 py-2.5">
                                    Cancel
                                </button>
                                <button
                                    disabled={
                                        _.isEqual(formData, {
                                            ...formData,
                                            city_id: props.profile?.city_id,
                                            country_id: props.profile?.country_id,
                                            name: props.profile?.name,
                                            phone: props.profile?.phone,
                                            email: props.profile?.email
                                        })
                                    }
                                    className="form-button font-bold active:scale-95 duration-200 bg-orange-primary text-white py-2.5"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfileCRUD;
