import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pb-24 bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="flex justify-between items-center px-6 pt-12 pb-6 bg-white dark:bg-card-dark sticky top-0 z-30 shadow-sm transition-colors duration-300">
                <div className="flex items-center gap-3">
                    <img alt="KosMate Logo" className="h-10 w-auto object-contain" src="https://cdn-icons-png.flaticon.com/512/5661/5661007.png"/>
                    <span className="font-display font-bold text-xl text-primary tracking-tight">KosMate</span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <span className="material-icons-round text-gray-500 dark:text-gray-400">notifications_none</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-card-dark"></span>
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-primary">
                        <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB1j-gTZ_eyBAZLcrxl3OFVXlAwPVRKW_wi3bQq9QuK-KcVScwDeGfqnP_dbuPc5CN452CDP2deMUhSQTwTJ0mw5XESC0Jq3V4B8gqZIBcLeLeyeXkOqfRVRWPqYHaNxzPP9AtpAirOR3tn_a2OqWOcwalRpa0O2MhYFHdnXF4xatwiG2yspm5uYWh89KeSEbw07tt68M5J6wnWSJFFJpMDRlqJ98RnjR3Tw_Oskx82ErJ0v3EfD9V2YEOebSZMC6u3HoWXjD7zPw"/>
                    </div>
                </div>
            </header>

            <main className="px-6 py-6 space-y-8">
                {/* Greeting */}
                <section>
                    <p className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium mb-1">Good Morning,</p>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready for a clean start? ✨</h2>
                </section>

                {/* Services */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Our Services</h3>
                        <button onClick={() => navigate('/services')} className="text-primary text-sm font-medium hover:underline">See all</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Daily Cleaning */}
                        <div 
                            onClick={() => navigate('/services')}
                            className="col-span-2 sm:col-span-1 bg-white dark:bg-card-dark rounded-2xl p-5 shadow-soft border border-gray-100 dark:border-gray-700 hover:shadow-glow transition-all duration-300 group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <span className="material-icons-round text-8xl text-primary transform rotate-12">cleaning_services</span>
                            </div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-primary">
                                    <span className="material-icons-round text-2xl">cleaning_services</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Daily Kos Cleaning</h4>
                                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark mb-3">Professional sweep & mop for your room.</p>
                                    <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-primary text-[10px] font-bold px-2 py-1 rounded-md">
                                        FROM RP 25K
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Laundry */}
                        <div className="bg-white dark:bg-card-dark rounded-2xl p-5 shadow-soft border border-gray-100 dark:border-gray-700 hover:shadow-glow transition-all duration-300 group cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <span className="material-icons-round text-6xl text-accent-cyan transform -rotate-12">local_laundry_service</span>
                            </div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="w-12 h-12 rounded-full bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center mb-4 text-accent-cyan">
                                    <span className="material-icons-round text-2xl">local_laundry_service</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-md mb-1 group-hover:text-accent-cyan transition-colors">Laundry Pick-up</h4>
                                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark mb-2">We pick up, wash, & fold.</p>
                                    <span className="text-accent-cyan text-xs font-semibold">RP 6K / KG</span>
                                </div>
                            </div>
                        </div>

                        {/* Galon */}
                        <div className="bg-white dark:bg-card-dark rounded-2xl p-5 shadow-soft border border-gray-100 dark:border-gray-700 hover:shadow-glow transition-all duration-300 group cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <span className="material-icons-round text-6xl text-teal-500 transform rotate-6">water_drop</span>
                            </div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400">
                                    <span className="material-icons-round text-2xl">water_drop</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-md mb-1 group-hover:text-teal-500 transition-colors">Galon Refill Run</h4>
                                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark mb-2">Heavy lifting done for you.</p>
                                    <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold">RP 5K / GALON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Promo Banner */}
                <section>
                    <div 
                        onClick={() => navigate('/subscription')}
                        className="relative w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition hover:scale-[1.01]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-cyan opacity-90 dark:opacity-80"></div>
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative p-6 flex items-center justify-between">
                            <div className="flex-1 pr-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Limited Time</span>
                                </div>
                                <h3 className="text-white font-bold text-xl leading-tight mb-1">SEMANGAT UJIAN!</h3>
                                <p className="text-white/90 text-sm mb-3">Get 20% OFF for your exam week cleaning.</p>
                                <button className="bg-white text-primary text-xs font-bold py-2 px-4 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                                    Claim Voucher
                                </button>
                            </div>
                            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-white/10 rounded-full scale-125 animate-pulse"></div>
                                <img alt="Student studying" className="w-20 h-20 object-contain drop-shadow-md z-10 invert brightness-0 filter md:invert-0 md:brightness-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPMaVn4KhtQmM8WlNyGU6PAffiehv_KLVQpGUc0_DWbCOqU6X8CjUhcm7hQdtNPs7BxP7cFP0bBW1GnrHfFcHMQG6NI0diDvlBt0TSgb4gPt_ky-GUP3_2voS_jZb6hCDrMdiNM7nx2LwEQCJi86AyQqG3lNkbEPHsLCXSHYYsVycrsHxUjsNLNNitJiBYUd-UuMMGDDkflFMMtTUZANCtnVAwU9u_LwazaF9stdkxr_3-vkZNFYDJfB77rFUPxbT9fgAwRNkMspk"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">Quick Actions</h3>
                    <div className="bg-white dark:bg-card-dark rounded-xl p-4 shadow-soft border border-gray-100 dark:border-gray-700 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <span className="material-icons-round text-xl">history</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Repeat Last Order</p>
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Laundry Pick-up • 3kg</p>
                            </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-primary">
                            <span className="material-icons-round">arrow_forward</span>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomeScreen;