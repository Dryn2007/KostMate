import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersScreen: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

    return (
        <div className="min-h-screen pb-28 bg-background-light dark:bg-background-dark">
            <header className="px-6 pt-12 pb-4 bg-white dark:bg-card-dark sticky top-0 z-30 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pesanan Saya</h1>
                <div className="flex gap-4 mt-4 border-b border-gray-200 dark:border-gray-700">
                    <button 
                        onClick={() => setActiveTab('active')}
                        className={`pb-2 text-sm font-medium transition-colors relative ${activeTab === 'active' ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark'}`}
                    >
                        Dalam Proses
                        {activeTab === 'active' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></div>}
                    </button>
                    <button 
                        onClick={() => setActiveTab('history')}
                        className={`pb-2 text-sm font-medium transition-colors relative ${activeTab === 'history' ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark'}`}
                    >
                        Riwayat
                        {activeTab === 'history' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></div>}
                    </button>
                </div>
            </header>

            <main className="px-6 py-4 space-y-4">
                {activeTab === 'active' ? (
                    <>
                        <div className="bg-white dark:bg-card-dark rounded-xl p-4 shadow-soft border border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                        <span className="material-icons-round">cleaning_services</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">Deep Cleaning</h3>
                                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Hari ini, 14:00</p>
                                    </div>
                                </div>
                                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                                    On The Way
                                </span>
                            </div>
                            <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <img alt="Cleaner" className="w-6 h-6 rounded-full border border-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGN1NuzmPLkrjdP--WkEeNV2TzXdwlZ0eRPOYWd0SMkK52qEN1ou3Fwds0Jf9lw2iUnn1N2LzwJp7RukP2s4K2cwWaw8eO1lR0nmMqy-_-cHHebn_7T7Tkx1-WSwB1Awu2q-h6t1nudjGT31o_fDlETSnLn6Cgr7O8iZGDwdgnPoKNETYRguR6pXoj4qAXpE6C0b65ST-6TDPrHz6SkTlbqtCJqj96SuJ8yZcKYdkPoe3FsQl-5Y1wpELBELd9UIYtiO_sTXkcYaA"/>
                                    <span className="text-xs font-medium">Budi Santoso</span>
                                </div>
                                <p className="font-bold text-primary">Rp 92.000</p>
                            </div>
                            <button 
                                onClick={() => navigate('/chat')}
                                className="w-full mt-3 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold py-2 rounded-lg transition-colors"
                            >
                                Chat Cleaner
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                         <div className="bg-white dark:bg-card-dark rounded-xl p-4 shadow-soft border border-gray-100 dark:border-gray-700 opacity-75">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center text-accent-cyan">
                                        <span className="material-icons-round">local_laundry_service</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">Laundry Pick-up</h3>
                                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark">12 Okt, 10:00</p>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                                    Selesai
                                </span>
                            </div>
                             <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center">
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark">3kg • Cuci Setrika</p>
                                <p className="font-bold text-gray-900 dark:text-white">Rp 25.000</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-card-dark rounded-xl p-4 shadow-soft border border-gray-100 dark:border-gray-700 opacity-75">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600">
                                        <span className="material-icons-round">water_drop</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">Galon Refill</h3>
                                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark">10 Okt, 16:30</p>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                                    Selesai
                                </span>
                            </div>
                             <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center">
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark">2 Galon • Aqua</p>
                                <p className="font-bold text-gray-900 dark:text-white">Rp 12.000</p>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default OrdersScreen;