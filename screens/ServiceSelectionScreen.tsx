import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plan } from '../types';

const ServiceSelectionScreen: React.FC = () => {
    const navigate = useNavigate();

    const plans: Plan[] = [
        {
            id: 'p1',
            name: 'Untuk Kamu',
            description: 'Cocok untuk kamar kos standar',
            price: 35000,
            originalPrice: 50000,
            features: [
                { text: 'Sapu & Pel Lantai', included: true },
                { text: 'Lap Debu & Jendela', included: true },
                { text: 'Rapikan Kasur', included: true },
                { text: 'Free Pewangi Ruangan', included: true, highlight: true },
            ],
            recommended: true,
            icon: 'stars',
            color: 'primary'
        },
        {
            id: 'p2',
            name: 'Paket Hemat',
            description: 'Pembersihan dasar harian',
            price: 20000,
            features: [
                { text: 'Sapu & Pel Lantai', included: true },
                { text: 'Buang Sampah', included: true },
                { text: 'Lap Jendela', included: false },
            ],
            icon: 'savings',
            color: 'gray'
        },
        {
            id: 'p3',
            name: 'Paket Ekstra',
            description: 'Deep cleaning menyeluruh',
            price: 65000,
            features: [
                { text: 'Semua fitur "Untuk Kamu"', included: true },
                { text: 'Pembersihan Kamar Mandi', included: true },
                { text: 'Ganti Sprei', included: true },
            ],
            icon: 'diamond',
            color: 'purple'
        }
    ];

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
    }

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
            <header className="pt-6 pb-4 px-6 flex justify-between items-center bg-white dark:bg-card-dark sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="h-8 w-auto relative">
                        <img alt="KosMate Logo" className="h-12 w-auto object-contain" src="/logo.png" />
                    </div>
                    <span className="font-display font-bold text-lg text-primary tracking-tight">KosMate</span>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <span className="material-icons-round text-text-sub-light dark:text-text-sub-dark">notifications_none</span>
                </button>
            </header>

            <main className="px-6 pt-6 overflow-y-auto hide-scrollbar">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-1">Pilih Paket Layanan</h2>
                    <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Professional clean, student price.</p>
                </div>

                <div className="space-y-6">
                    {plans.map((plan) => (
                        <div key={plan.id} className="relative group">
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg z-10">
                                    REKOMENDASI
                                </div>
                            )}
                            <div className={`
                                bg-white dark:bg-card-dark rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300
                                ${plan.recommended ? 'border-2 border-primary shadow-lg dark:shadow-blue-900/20 transform hover:-translate-y-1' : 'border border-gray-200 dark:border-gray-700'}
                            `}>
                                <div className="flex justify-between items-start mb-4 mt-2">
                                    <div>
                                        <h3 className={`text-lg font-bold ${plan.color === 'primary' ? 'text-primary' : 'text-gray-800 dark:text-gray-100'}`}>{plan.name}</h3>
                                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark">{plan.description}</p>
                                    </div>
                                    <div className={`p-2 rounded-lg ${plan.color === 'primary' ? 'bg-blue-50 dark:bg-blue-900/30' : plan.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20' : 'bg-gray-50 dark:bg-gray-800'}`}>
                                        <span className={`material-icons-round text-2xl ${plan.color === 'primary' ? 'text-primary' : plan.color === 'purple' ? 'text-purple-500' : 'text-gray-500'}`}>
                                            {plan.icon}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className={`flex items-center gap-3 ${!feature.included ? 'opacity-50' : ''}`}>
                                            <span className={`material-icons-round text-sm ${feature.included ? (plan.color === 'primary' ? 'text-green-500' : plan.color === 'purple' ? 'text-purple-500' : 'text-secondary') : 'text-gray-400'}`}>
                                                {feature.included ? (plan.color === 'primary' ? 'check_circle' : 'check') : 'close'}
                                            </span>
                                            <span className={`text-sm ${!feature.included ? 'line-through' : ''} ${feature.highlight ? 'text-primary font-medium' : ''}`}>
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 flex items-center justify-between">
                                    <div>
                                        {plan.originalPrice && (
                                            <p className="text-xs text-text-sub-light dark:text-text-sub-dark line-through">{formatPrice(plan.originalPrice)}</p>
                                        )}
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">{formatPrice(plan.price)}</p>
                                    </div>
                                    <button
                                        onClick={() => navigate('/order')}
                                        className={`
                                            px-6 py-2 rounded-xl font-medium text-sm transition-all active:scale-95
                                            ${plan.recommended
                                                ? 'bg-primary hover:bg-blue-700 text-white shadow-md shadow-blue-500/30'
                                                : 'bg-white dark:bg-gray-800 border-2 border-primary text-primary hover:bg-primary hover:text-white'}
                                        `}
                                    >
                                        Pilih
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ServiceSelectionScreen;