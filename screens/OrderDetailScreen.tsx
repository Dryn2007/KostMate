import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderDetailScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans flex flex-col antialiased">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-card-dark/90 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-icons-round text-2xl text-text-main-light dark:text-text-main-dark">arrow_back</span>
                    </button>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <img alt="KosMate Logo" className="h-12 w-auto object-contain" src="/logo.png" />
                        </div>
                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Detail Pemesanan</p>
                    </div>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-icons-round text-text-sub-light dark:text-text-sub-dark">help_outline</span>
                </button>
            </header>

            <main className="flex-1 px-4 py-6 space-y-6 max-w-md mx-auto w-full">
                {/* Cleaner Profile Card */}
                <section className="bg-white dark:bg-card-dark rounded-2xl p-5 shadow-soft border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="flex items-start gap-4 relative z-10">
                        <div className="relative">
                            <img alt="Cleaner Profile" className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGN1NuzmPLkrjdP--WkEeNV2TzXdwlZ0eRPOYWd0SMkK52qEN1ou3Fwds0Jf9lw2iUnn1N2LzwJp7RukP2s4K2cwWaw8eO1lR0nmMqy-_-cHHebn_7T7Tkx1-WSwB1Awu2q-h6t1nudjGT31o_fDlETSnLn6Cgr7O8iZGDwdgnPoKNETYRguR6pXoj4qAXpE6C0b65ST-6TDPrHz6SkTlbqtCJqj96SuJ8yZcKYdkPoe3FsQl-5Y1wpELBELd9UIYtiO_sTXkcYaA" />
                            <span className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-gray-800">ONLINE</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <h2 className="font-display font-bold text-lg">Budi Santoso</h2>
                                <span className="material-icons-round text-primary text-xl" title="Verified">verified</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded-md">
                                    <span className="material-icons-round text-yellow-500 text-sm mr-1">star</span>
                                    <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">4.9</span>
                                </div>
                                <span className="text-xs text-text-sub-light dark:text-text-sub-dark">• 1.2k Jobs</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-text-sub-light dark:text-text-sub-dark">Kost Specialist</span>
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-text-sub-light dark:text-text-sub-dark">Fast</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                <span className="material-icons-round text-primary text-sm">cleaning_services</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-text-sub-light dark:text-text-sub-dark uppercase tracking-wide">Service</p>
                                <p className="text-xs font-semibold">Deep Clean</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                <span className="material-icons-round text-primary text-sm">schedule</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-text-sub-light dark:text-text-sub-dark uppercase tracking-wide">Duration</p>
                                <p className="text-xs font-semibold">2.5 Hours</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Location */}
                <section className="bg-white dark:bg-card-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                        <span className="material-icons-round text-red-500 text-xl">location_on</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark mb-0.5">Lokasi Kost</p>
                        <p className="text-sm font-semibold truncate">Kost Putri Melati, Jl. Kebon Jeruk No. 45</p>
                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark truncate">Kamar 203, Lantai 2</p>
                    </div>
                    <button className="text-primary text-xs font-semibold">Edit</button>
                </section>

                {/* Pricing Breakdown */}
                <section className="space-y-3">
                    <h3 className="font-display font-semibold text-lg px-1">Rincian Harga</h3>
                    <div className="bg-white/50 dark:bg-card-dark/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-text-sub-light dark:text-text-sub-dark">Deep Cleaning (Kost Std)</span>
                                <span className="font-medium">Rp 65.000</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-text-sub-light dark:text-text-sub-dark">Layanan Tambahan (AC)</span>
                                <span className="font-medium">Rp 35.000</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-text-sub-light dark:text-text-sub-dark">Biaya Platform</span>
                                <span className="font-medium">Rp 2.000</span>
                            </div>
                            <div className="flex justify-between text-sm items-center">
                                <span className="text-text-sub-light dark:text-text-sub-dark flex items-center gap-1">
                                    <span className="material-icons-round text-xs">local_offer</span> Diskon Mahasiswa
                                </span>
                                <span className="font-medium text-green-600 dark:text-green-400">-Rp 10.000</span>
                            </div>
                        </div>
                        <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-3"></div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-base">Total Pembayaran</span>
                            <span className="font-display font-bold text-xl text-primary">Rp 92.000</span>
                        </div>
                    </div>
                </section>

                {/* Payment Method */}
                <section className="bg-white dark:bg-card-dark rounded-xl px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-5 bg-red-600 rounded-sm flex items-center justify-center">
                            <span className="text-[8px] font-bold text-white tracking-tighter">QRIS</span>
                        </div>
                        <span className="text-sm font-medium">QRIS</span>
                    </div>
                    <span className="material-icons-round text-gray-400 text-lg">chevron_right</span>
                </section>
            </main>

            {/* Bottom Actions */}
            <div className="sticky bottom-0 bg-white dark:bg-card-dark p-4 shadow-top rounded-t-2xl border-t border-gray-100 dark:border-gray-800 safe-area-pb">
                <div className="max-w-md mx-auto space-y-3">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/20 transform transition active:scale-[0.98] flex items-center justify-center gap-2 group"
                    >
                        <span className="material-icons-round animate-pulse">bolt</span>
                        <span>Instant Booking</span>
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/20 transform transition active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        <span className="material-icons-round">calendar_today</span>
                        <span>Scheduled Booking</span>
                    </button>
                    <p className="text-[10px] text-center text-text-sub-light dark:text-text-sub-dark mt-2 opacity-70">
                        By booking, you agree to KosMate's Terms & Conditions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailScreen;