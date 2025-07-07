import React, { useEffect, useState } from 'react';
import './FreeDesignPopup.css';
import axios from 'axios';
import timezonesData from '../../Json/TimeZone.json';
import langaugeData from '../../Json/Langauges.json';
import timesData from '../../Json/Times.json';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function FreeDesignPopup({ onClose ,isPopupOpen = false}) {
    const [formData, setFormData] = useState({  
        email: '',
        // phone: '',
        // timezone: '',
        // date: '',
        // time: '',
        // businessName: '',
        hasWebsite: '',
        // likesWebsite: '',
        // preferdLanguage: '',
        website: '',
        // websiteWish: '',
    });

    const timezones = timezonesData.timezones;
    const langauges = langaugeData.langauges;
    const times = timesData.times;
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isPopupOpen]);

    useEffect(() => {
        // const tomorrow = new Date();
        // tomorrow.setDate(tomorrow.getDate() + 1);
        setFormData({
            ...formData,
            // date: tomorrow.toISOString().split('T')[0],
            // time: "09:30"
        });
      }, []);

    const handleChange = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleChangeSelect = (e, name) => {
        if (e && e.value) {
            setFormData({
                ...formData,
                [name]: e.value,
            });
            setErrors({ ...errors, [name]: '' });
        } else {
            setFormData({
                ...formData,
                [name]: "",
            });
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleChangePhone = (e) => {
        if (e && e.phone) {
            setFormData({
                ...formData,
                phone: e.phone,
            });
            setErrors({ ...errors, phone: '' });
        }
    };

    const validate = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            valid = false;
        }

        // if (!formData.phone || !/^\+?\d{10,15}$/.test(formData.phone)) {
        //     newErrors.phone = 'Invalid phone number';
        //     valid = false;
        // }

        // if (!formData.timezone) {
        //     newErrors.timezone = 'Required';
        //     valid = false;
        // }

        // if (!formData.date) {
        //     newErrors.date = 'Required';
        //     valid = false;
        // }

        // if (!formData.time) {
        //     newErrors.time = 'Required';
        //     valid = false;
        // }

        // if (!formData.businessName) {
        //     newErrors.businessName = 'Required';
        //     valid = false;
        // }

        if (formData.hasWebsite === 'Yes' && !formData.website) {
            newErrors.website = 'Required';
            valid = false;
        }

        // if (formData.likesWebsite === 'Yes' && !formData.websiteWish) {
        //     newErrors.websiteWish = 'Required';
        //     valid = false;
        // }

        // if (!formData.preferdLanguage) {
        //     newErrors.preferdLanguage = 'Required';
        //     valid = false;
        // }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const payload = {
                contact_information: {
                    email: formData.email,
                    mobile: "", //formData.phone,
                    timezone: "", //formData.timezone,
                    available_date: "", //formData.date,
                    available_time: "", //formData.time,
                },
                business_information: {
                    business_name: "", // formData.businessName,
                    have_website: formData.hasWebsite === 'Yes',
                    website: formData.website || "",
                    like_website: "", //formData.likesWebsite === 'Yes',
                    website_wish: "", //formData.websiteWish || "",
                },
            };
            const token = localStorage.getItem("token");
            try {
                const response = await axios.post(
                    'https://api.tryzensolution.com/send-email',
                    payload,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            ...(token && { Authorization: `Bearer ${token}` }),
                        },
                    }
                );
                if (response.status === 200) {
                    console.log('API Response:', response.data);
                    alert('Form submitted successfully!');
                    handleClose();
                } else {
                    console.error('API Error:', response.data);
                    alert('Failed to submit the form. Please try again.');
                }
            } catch (error) {
                console.error('Network or Server Error:', error.message);
            }
        }
    };

    const handleClose = () => {
        setFormData({
            email: '',
            // phone: '',
            // timezone: '',
            // date: '',
            // time: '',
            // businessName: '',
            hasWebsite: '',
            // likesWebsite: '',
            // preferdLanguage: '',
            website: '',
            // websiteWish: '',
        })
        setErrors({})
        onClose()
    }

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = "hidden";
            setFormData({
                email: '',
                // phone: '',
                // timezone: '',
                // date: '',
                // time: '',
                // businessName: '',
                hasWebsite: 'No',
                // likesWebsite: 'No',
                // preferdLanguage: '',
                website: '',
                // websiteWish: '',
            });
            setErrors({});
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            setFormData(prevFormData => ({
              ...prevFormData,
            //   date: tomorrow.toISOString().split('T')[0],
            //   time: "09:30"
            }));
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isPopupOpen]);

    return (
        <Modal isOpen={isPopupOpen} onClose={onClose} shouldCloseOnOverlayClick={false} contentLabel="Free Design Popup" className="modal-content" overlayClassName="modal-overlay">
        <form
            // className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
            onSubmit={handleSubmit}
            // style={{display: isPopupOpen ? "" : "none"}}
        >
            <div className="bg-[#101828] px-6 sm:px-8 pt-6 pb-8 rounded-lg max-h-[80vh] md:max-h-[95vh] max-w-full relative overflow-y-auto">
                <div
                    onClick={onClose}
                    className="absolute top-5 right-3 hover:text-gray-700 cursor-pointer"
                >
                    <img src={require('../../../assets/cross-icon.png')} className='w-5' alt="Close" />
                </div>
                <div className='text-center mb-5'>
                    <h1 className='custom-web-design md:text-lg mb-1'>GET YOUR FREE CUSTOM WEBSITE DESIGN</h1>
                    <h1 className='rest-ecom text-3xl font-semibold'>For Your Restaurant Or Ecommerce!</h1>
                </div>
                <div className="grid grid-cols-1 gap-8 md:gap-20">
                    <div className='text-white popup-content'>
                        {/* <div className="mb-4 text-left">
                            <h2 className="text-xl font-bold">Contact Information</h2>
                            <p className="text-sm">This Information Helps Us To Show Demo In Meeting</p>
                        </div> */}
                        <div>
                            <label className="block text-left text-sm mb-1">
                                Email Address
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.email ? 'border-[#ff0000]' : ''}`}
                                placeholder="yourname@gmail.com"
                                autoComplete="off"
                            />
                        </div>
                        {/* <div className="mt-4">
                            <label className="block text-left text-sm mb-1">
                                Mobile Number
                            </label>
                            <PhoneInput
                                country={'in'}
                                value={formData.phone}
                                onChange={phone => handleChangePhone({ phone })}
                                inputStyle={{
                                    backgroundColor: '#1C2433',
                                    borderColor: errors.phone ? '#FF0000' : '#343947',
                                    color: '#FFFFFF',
                                    borderRadius: '4px',
                                    width: '100%',
                                    height: '44px',
                                    paddingLeft: '50px',
                                }}
                                buttonStyle={{
                                    backgroundColor: '#1C2433',
                                    borderColor: errors.phone ? '#FF0000' : '#343947',
                                    borderRadius: '4px 0 0 4px',
                                    height: '44px',
                                    padding: '0 2px',
                                }}
                                dropdownStyle={{
                                    backgroundColor: '#1C2433',
                                    color: '#FFFFFF',
                                }}
                                placeholder="+91 9998220731"
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-left text-sm mb-1">Select Your Time Zone</label>
                            <Select
                                value={timezones.find(t => t.value === formData.timezone)}
                                onChange={(e) => handleChangeSelect(e, "timezone")}
                                options={timezones}
                                name="timezone"
                                classNamePrefix="react-select"
                                isClearable={true}
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: '#1C2433',
                                        borderColor: state.isFocused ? "#ffffff" : errors.timezone ? "red" : "#343947",
                                        borderRadius: '5px',
                                        color: '#fff',
                                        padding: '3px',
                                        textAlign: 'left',
                                        boxShadow: state.isFocused ? "0 0 0 0px #ffffff" : "none",
                                        "&:hover": {
                                            borderColor: state.isFocused ? "#ffffff" : "#343947",
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#2a3542',
                                        borderRadius: '5px',
                                        border: '1px solid #343947',
                                        color: '#fff',
                                        zIndex: 9999,
                                    }),
                                    menuList: (provided) => ({
                                        ...provided,
                                        maxHeight: '200px',
                                        overflowY: 'auto',
                                        paddingRight: '10px',
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isSelected ? '#4a5b6e' : 'transparent',
                                        padding: '10px',
                                        cursor: 'pointer',
                                        color: '#fff',
                                        fontSize: '14px',
                                        textAlign: 'left',
                                        transition: 'background-color 0.2s ease, color 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: '#4a5b6e',
                                            color: '#FF6802',
                                        },
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: '#fff',
                                        textAlign: 'left',
                                    }),
                                    input: (provided) => ({
                                        ...provided,
                                        color: '#FFFFFF',
                                    }),
                                }}
                                menuPlacement="auto"
                                menuShouldBlockScroll={true}
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-left text-sm mb-1">
                                Select Available Date
                            </label>
                            <DatePicker selected={formData.date}
                            minDate={new Date().toISOString().split('T')[0]}
                            onChange={(date) => {
                                            setFormData({
                                                ...formData,
                                                date: date,
                                            });
                                            setErrors({ ...errors, date: '' });
                            }}
                            customInput={<input className="mt-1 p-2 rounded-md w-full bg-[#1C2433] text-white cursor-pointer" style={{border:"1px solid #343947"}} />}
                            onClick={(e) => e.target.showPicker()}
                             />
                        </div>
                        <div className="mt-4">
                            <label className="block text-left text-sm mb-1">
                                Select Available Time
                            </label>
                            <Select
                                value={times.find(t => t.value === formData.time)}
                                onChange={(e) => handleChangeSelect(e, "timezone")}
                                options={times}
                                name="time"
                                classNamePrefix="react-select"
                                isClearable={true}
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: '#1C2433',
                                        borderColor: state.isFocused ? "#ffffff" : errors.time ? "red" : "#343947",
                                        borderRadius: '5px',
                                        color: '#fff',
                                        padding: '3px',
                                        textAlign: 'left',
                                        boxShadow: state.isFocused ? "0 0 0 0px #ffffff" : "none",
                                        "&:hover": {
                                            borderColor: state.isFocused ? "#ffffff" : "#343947",
                                        }
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#2a3542',
                                        borderRadius: '5px',
                                        border: '1px solid #343947',
                                        color: '#fff',
                                        zIndex: 9999,
                                    }),
                                    menuList: (provided) => ({
                                        ...provided,
                                        maxHeight: '200px',
                                        overflowY: 'auto',
                                        paddingRight: '10px',
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isSelected ? '#4a5b6e' : 'transparent',
                                        padding: '10px',
                                        cursor: 'pointer',
                                        color: '#fff',
                                        fontSize: '14px',
                                        textAlign: 'left',
                                        transition: 'background-color 0.2s ease, color 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: '#4a5b6e',
                                            color: '#FF6802',
                                        },
                                    }),
                                    singleValue: (provided) => ({
                                        ...provided,
                                        color: '#fff',
                                        textAlign: 'left',
                                    }),
                                    input: (provided) => ({
                                        ...provided,
                                        color: '#FFFFFF',
                                    }),
                                }}
                                menuPlacement="auto"
                                menuShouldBlockScroll={true}
                            />
                        </div> */}
                        <div className="mt-4">
                            <p className="text-sm text-left mb-2">Do You Have Website?</p>
                            <div className="flex flex-col">
                                <div className='flex items-center space-x-4 mb-2'>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value="Yes"
                                            checked={formData.hasWebsite === 'Yes'}
                                            onChange={handleChange}
                                            className="appearance-none w-5 h-5 border-2 rounded-full bg-[#1C2433] checked:border-white checked:bg-[#1C2433] relative"
                                        />
                                        <span className='yes-no-website'>Yes, I Have Site</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value="No"
                                            checked={formData.hasWebsite === 'No'}
                                            onChange={handleChange}
                                            className="appearance-none w-5 h-5 border-2 rounded-full bg-[#1C2433] checked:border-white checked:bg-[#1C2433] relative"
                                        />
                                        <span className='yes-no-website'>No, I Don't Have</span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.hasWebsite === 'Yes' ? formData.website : ''}
                                    onChange={handleChange}
                                    disabled={formData.hasWebsite !== 'Yes'}
                                    className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.website && formData.hasWebsite === 'Yes' ? 'border-[#ff0000]' : ''} ${formData.hasWebsite !== 'Yes' ? 'bg-[#2a3542]' : ''}`}
                                    placeholder={formData.hasWebsite === 'Yes' ? "Enter Website" : ''}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-white text-black font-bold rounded-md px-4 py-2 popup-content btn-free-design"
                        >
                            BOOK FREE WEBSITE CONSULTATION!
                        </button>
                        <div className='mt-4'>
                            <p className="text-left note-title font-bold"><span className='text-white'>NOTE: </span><span className='text-[#F9ED32]'>WE NEVER SHARE YOUR INFORMATION</span></p>
                        </div>
                    </div>
                    {/* <div className='text-white popup-content'>
                        <div className="mb-4 text-left">
                            <h2 className="text-xl font-bold">Business Information</h2>
                            <p className="text-sm">This Information Helps Us Prepare A Personalised Demo For Your Meeting!</p>
                        </div>
                        <div>
                            <label className="text-left block text-sm mb-1">
                                Business Name
                            </label>
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.businessName ? 'border-[#ff0000]' : ''}`}
                                placeholder="Business Name"
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="text-left block text-sm mb-1">
                                Select Your Preferred Language
                            </label>
                            <Select
                                value={langauges.find(
                                (t) => t.value === formData.preferdLanguage
                                )}
                                name="preferdLanguage"
                                onChange={(e) => handleChangeSelect(e, "preferdLanguage")}
                                options={langauges}
                                classNamePrefix="react-select"
                                isClearable={true}
                                styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: "#1C2433",
                                    borderColor: state.isFocused ? "#ffffff" : errors.preferdLanguage ? "red" : "#343947",
                                    borderRadius: "5px",
                                    color: "#fff",
                                    padding: "3px",
                                    textAlign: "left",
                                    boxShadow: state.isFocused ? "0 0 0 0px #ffffff" : "none",
                                    "&:hover": {
                                        borderColor: state.isFocused ? "#ffffff" : "#343947",
                                    }
                                }),
                                menu: (provided) => ({
                                    ...provided,
                                    backgroundColor: "#2a3542",
                                    borderRadius: "5px",
                                    border: "1px solid #343947",
                                    color: "#fff",
                                    zIndex: 9999,
                                }),
                                menuList: (provided) => ({
                                    ...provided,
                                    maxHeight: "200px",
                                    overflowY: "auto",
                                    paddingRight: "10px",
                                }),
                                option: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: state.isSelected
                                    ? "#4a5b6e"
                                    : "transparent",
                                    padding: "10px",
                                    cursor: "pointer",
                                    color: "#fff",
                                    fontSize: "14px",
                                    textAlign: "left",
                                    transition: "background-color 0.2s ease, color 0.2s ease",
                                    "&:hover": {
                                    backgroundColor: "#4a5b6e",
                                    color: "#FF6802",
                                    },
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: "#fff",
                                    textAlign: "left",
                                }),
                                }}
                                menuPlacement="auto"
                                menuShouldBlockScroll={true}
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-left mb-2">Do You Have Website?</p>
                            <div className="flex flex-col">
                                <div className='flex items-center space-x-4 mb-2'>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value="Yes"
                                            checked={formData.hasWebsite === 'Yes'}
                                            onChange={handleChange}
                                            className="appearance-none w-5 h-5 border-2 rounded-full bg-[#1C2433] checked:border-white checked:bg-[#1C2433] relative"
                                        />
                                        <span className='yes-no-website'>Yes, I Have Site</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value="No"
                                            checked={formData.hasWebsite === 'No'}
                                            onChange={handleChange}
                                            className="appearance-none w-5 h-5 border-2 rounded-full bg-[#1C2433] checked:border-white checked:bg-[#1C2433] relative"
                                        />
                                        <span className='yes-no-website'>No, I Don't Have</span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.hasWebsite === 'Yes' ? formData.website : ''}
                                    onChange={handleChange}
                                    disabled={formData.hasWebsite !== 'Yes'}
                                    className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.website && formData.hasWebsite === 'Yes' ? 'border-[#ff0000]' : ''} ${formData.hasWebsite !== 'Yes' ? 'bg-[#2a3542]' : ''}`}
                                    placeholder={formData.hasWebsite === 'Yes' ? "Enter Website" : ''}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-left mb-2">Do You Like Any Website?</p>
                            <div className="flex flex-col">
                                <div className="flex items-center space-x-4 mb-2">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="likesWebsite"
                                            value="Yes"
                                            checked={formData.likesWebsite === 'Yes'}
                                            onChange={handleChange}
                                            className="appearance-none w-5 h-5 border-2 rounded-full bg-[#1C2433] checked:border-white relative"
                                        />
                                        <span className='yes-no-website'>Yes, I Like One</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="likesWebsite"
                                            value="No"
                                            checked={formData.likesWebsite === 'No'}
                                            onChange={handleChange}
                                            className="appearance-none w-5 h-5 border-2 rounded-full bg-[#1C2433] checked:border-white checked:bg-[#1C2433] relative"
                                        />
                                        <span className='yes-no-website'>No, I Don't Like Any</span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="websiteWish"
                                    value={formData.likesWebsite === 'Yes' ? formData.websiteWish : ''}
                                    onChange={handleChange}
                                    disabled={formData.likesWebsite !== 'Yes'}
                                    className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.websiteWish && formData.likesWebsite === 'Yes' ? 'border-[#ff0000]' : ''} ${formData.likesWebsite !== 'Yes' ? 'bg-[#2a3542]' : ''}`}
                                    placeholder={formData.likesWebsite === 'Yes' ? "Enter Website" : ''}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-white text-black font-bold rounded-md px-4 py-2 popup-content btn-free-design"
                        >
                            BOOK FREE WEBSITE CONSULTATION!
                        </button>
                        <div className='mt-4 md:hidden'>
                            <p className="text-left note-title font-bold"><span className='text-white'>NOTE: </span><span className='text-[#F9ED32]'>WE NEVER SHARE YOUR INFORMATION</span></p>
                        </div>
                    </div> */}
                </div>
            </div>
        </form>
        </Modal>
    );
}
