import React, { useState } from 'react';
import './FreeDesignPopup.css';
import axios from 'axios';
import timezonesData from '../../Json/TimeZone.json';
import langaugeData from '../../Json/Langauges.json';
import Select from 'react-select';

export default function FreeDesignForm({ onClose }) {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        timezone: '',
        date: '',
        time: '',
        businessName: '',
        hasWebsite: '',
        likesWebsite: '',
        preferdLanguage: '',
        website: '',
        websiteWish: '',
    });

    const timezones = timezonesData.timezones;
    const langauges = langaugeData.langauges;
    const [errors, setErrors] = useState({});

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
        }
    };

    const validate = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            valid = false;
        }

        if (!formData.phone || !/^\+?\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number';
            valid = false;
        }

        if (!formData.timezone) {
            newErrors.timezone = 'Required';
            valid = false;
        }

        if (!formData.date) {
            newErrors.date = 'Required';
            valid = false;
        }

        if (!formData.time) {
            newErrors.time = 'Required';
            valid = false;
        }

        if (!formData.businessName) {
            newErrors.businessName = 'Required';
            valid = false;
        }

        if (!formData.website) {
            newErrors.website = 'Required';
            valid = false;
        }

        if (!formData.websiteWish) {
            newErrors.websiteWish = 'Required';
            valid = false;
        }

        if (!formData.preferdLanguage) {
            newErrors.preferdLanguage = 'Required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const payload = {
                contact_information: {
                    email: formData.email,
                    mobile: formData.phone,
                    timezone: formData.timezone,
                    available_date: formData.date,
                    available_time: formData.time,
                },
                business_information: {
                    business_name: formData.businessName,
                    have_website: formData.hasWebsite === 'Yes',
                    website: formData.website || "",
                    like_website: formData.likesWebsite === 'Yes',
                    website_wish: formData.websiteWish || "",
                },
            };
            try {
                const response = await axios.post(
                    'https://api.tryzensolution.com/send-email',
                    payload,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                if (response.status === 200) {
                    console.log('API Response:', response.data);
                    alert('Form submitted successfully!');
                    onClose();
                } else {
                    console.error('API Error:', response.data);
                    alert('Failed to submit the form. Please try again.');
                }
            } catch (error) {
                console.error('Network or Server Error:', error.message);
            }
        }
    };

    return (
        <form
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
            onSubmit={handleSubmit}
        >
            <div className="bg-[#101828] px-16 pt-6 pb-8 rounded-lg max-h-[95vh] max-w-full relative overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-3 hover:text-gray-700"
                >
                    <img src={require('../../../assets/cross-icon.png')} className='w-5' alt="Close" />
                </button>
                <div className='text-center mb-5'>
                    <h1 className='custom-web-design text-lg mb-1'>GET YOUR FREE CUSTOM WEBSITE DESIGN</h1>
                    <h1 className='rest-ecom text-3xl font-semibold'>FOR YOUR RESTAURANT OR ECOMMERCE!</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className='text-white'>
                        <div className="mb-4 text-left">
                            <h2 className="text-xl font-bold">Contact Information</h2>
                            <p className="text-sm">This Information Helps Us To Show Demo In Meeting</p>
                        </div>
                        <div>
                            <label className="block text-left text-sm mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="yourname@gmail.com"
                                autocomplete="off"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-left text-sm mb-1">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.phone ? 'border-red-500' : ''}`}
                                placeholder="+91 9998220731"
                                autocomplete="off"
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
                                    control: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#1C2433',
                                        borderColor: errors.timezone ? 'red' : '#343947',
                                        borderRadius: '5px',
                                        color: '#fff',
                                        padding: '3px',
                                        textAlign: 'left',
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        maxHeight: '250px',
                                        overflowY: 'auto',
                                        backgroundColor: '#2a3542',
                                        borderRadius: '5px',
                                        border: '1px solid #343947',
                                        color: '#fff',
                                        zIndex: 9999,
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
                                }}
                                menuPlacement="auto"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-left text-sm mb-1">
                                Select Available Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                onClick={(e) => e.target.showPicker()}
                                className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.date ? 'border-red-500' : ''}`}
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-left text-sm mb-1">
                                Select Available Time
                            </label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                onClick={(e) => e.target.showPicker()}
                                className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] !text-white ${errors.time ? 'border-red-500' : ''}`}
                            />
                        </div>
                        <div className='mt-4'>
                            <p className="text-left note-title font-bold"><span className='text-white'>NOTE: </span><span className='text-[#F9ED32]'>WE NEVER SHARE YOUR INFORMATION</span></p>
                        </div>
                    </div>
                    <div className='text-white'>
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
                                className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.businessName ? 'border-red-500' : ''}`}
                                placeholder="Business Name"
                                autocomplete="off"
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
                                        <span>Yes, I Have Site</span>
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
                                        <span>No, I Don't Have</span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.hasWebsite === 'Yes' ? formData.website : ''}
                                    onChange={handleChange}
                                    disabled={formData.hasWebsite !== 'Yes'}
                                    className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.website && formData.hasWebsite === 'Yes' ? 'border-red-500' : ''} ${formData.hasWebsite !== 'Yes' ? 'bg-[#2a3542]' : ''}`} 
                                    placeholder={formData.hasWebsite === 'Yes' ? "Enter Website" : ''} 
                                    autocomplete="off"
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
                                        <span>Yes, I Like One</span>
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
                                        <span>No, I Don't Like Any</span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="websiteWish"
                                    value={formData.likesWebsite === 'Yes' ? formData.websiteWish : ''}
                                    onChange={handleChange}
                                    disabled={formData.likesWebsite !== 'Yes'}
                                    className={`mt-1 p-2 border border-[#343947] rounded-md w-full bg-[#1C2433] ${errors.websiteWish && formData.likesWebsite === 'Yes' ? 'border-red-500' : ''} ${formData.likesWebsite !== 'Yes' ? 'bg-[#2a3542]' : ''}`} 
                                    placeholder={formData.likesWebsite === 'Yes' ? "Enter Website" : ''} 
                                    autocomplete="off"
                                />
                            </div>
                            <div className='mt-4'>
                                <label className="text-left block text-sm mb-1">
                                    Select Your Preferred Language
                                </label>
                                <Select
                                    value={langauges.find(t => t.value === formData.preferdLanguage)}
                                    name="preferdLanguage"
                                    onChange={(e) => handleChangeSelect(e, "preferdLanguage")}
                                    options={langauges}
                                    classNamePrefix="react-select"
                                    isClearable={true}
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            backgroundColor: '#1C2433',
                                            borderColor: errors.preferdLanguage ? 'red' : '#343947',
                                            borderRadius: '5px',
                                            color: '#fff',
                                            padding: '3px',
                                            textAlign: 'left',
                                        }),
                                        menu: (provided) => ({
                                            ...provided,
                                            maxHeight: '350px',
                                            overflowY: 'auto',
                                            backgroundColor: '#2a3542',
                                            borderRadius: '5px',
                                            border: '1px solid #343947',
                                            color: '#fff',
                                            zIndex: 9999,
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
                                    }}
                                    menuPlacement="auto"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-white text-black font-bold rounded-md px-4 py-2"
                        >
                            BOOK FREE WEBSITE CONSULTATION!
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
