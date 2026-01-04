import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col h-full min-h-[80vh]">
                {/* Header */}
                <header className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-auto flex items-center justify-center">
                            <img alt="KosMate Logo" className="object-contain h-full w-auto" src="https://cdn-icons-png.flaticon.com/512/5661/5661007.png"/>
                        </div>
                        <span className="font-display font-bold text-lg text-gray-800 dark:text-white tracking-tight">KosMate</span>
                    </div>
                    <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
                        <span className="material-icons-round text-2xl">close</span>
                    </button>
                </header>

                <main className="flex-1 px-6 pb-6 flex flex-col">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Upgrade Hidupmu</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Fokus kuliah, urusan kosan biar KosMate yang handle.</p>
                    </div>

                    {/* Gradient Card */}
                    <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-200 dark:shadow-none mb-6 relative overflow-hidden group">
                        {/* Decorative Blobs */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition duration-500"></div>
                        <div className="absolute bottom-10 -left-10 w-24 h-24 bg-cyan-400 opacity-20 rounded-full blur-2xl group-hover:scale-125 transition duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full mb-3 border border-white/10">
                                        <span className="material-icons-round text-yellow-300 text-sm">star</span>
                                        <span className="text-xs font-semibold tracking-wide uppercase">Most Popular</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">KosMate Prime</h3>
                                    <p className="text-blue-100 text-sm font-light">Paket Anti Ribet Sebulan</p>
                                </div>
                                <span className="material-icons-round text-4xl text-white/20">workspace_premium</span>
                            </div>

                            <div className="my-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-icons-round text-cyan-300">cleaning_services</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">4x Deep Cleaning</p>
                                        <p className="text-xs text-blue-100">Kamar mandi & kamar tidur kinclong</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-icons-round text-cyan-300">local_laundry_service</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">4x Laundry Pick-up</p>
                                        <p className="text-xs text-blue-100">Antar jemput laundry