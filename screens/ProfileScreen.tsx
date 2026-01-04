import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileScreen: React.FC = () => {
    const navigate = useNavigate();

    const menuItems = [
        { icon: 'person_outline', label: 'Edit Profil', action: () => {} },
        { icon: 'location_on', label: 'Alamat Tersimpan', action: () => {} },
        { icon: 'credit_card', label: 'Metode Pembayaran', action: () => {} },
        { icon: 'notifications_none', label: 'Notifikasi', action: () => {} },
        { icon: 'help_outline', label: 'Bantuan & Support', action: () => {} },
        { icon: 'info_outline', label: 'Tentang Aplikasi', action: () => {} },
    ];

    return (
        <div className="min-h-screen pb-24 bg-background-light dark:bg-background-dark">
            <header className="px-6 pt-12 pb-8 bg-white dark:bg-card-dark rounded-b-3xl shadow-sm sticky top-0 z-30">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                            <img alt="Profile" className="w-full h-full object-cover" src="/profile.png"/>
                        </div>
                        <button className="absolute bottom-0 right-0 p-1.5 bg-primary rounded-full text-white shadow-md hover:bg-primary-dark transition-colors">
                            <span className="material-icons-round text-sm block">edit</span>
                        </button>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Alex Mahasiswa</h1>
                        <p className="text-sm text-text-sub-light dark:text-text-sub-dark">+62 812-3456-7890</p>
                        <div className="mt-2 flex gap-2">
                             <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase flex items-center gap-1">
                                <span className="material-icons-round text-[10px]">star</span> Member
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex gap-4">
                     <div 
                        onClick={() => navigate('/subscription')}
                        className="flex-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl p-4 text-white shadow-lg shadow-blue-500/30 cursor-pointer hover:scale-[1.02] transition-transform"
                    >
                         <div className="flex justify-between items-start">
                             <div>
                                 <p className="text-xs font-medium opacity-90">KosMate Prime</p>
                                 <p className="font-bold text-lg">Aktifkan</p>
                             </div>
                             <span className="material-icons-round bg-white/20 p-1 rounded-lg">workspace_premium</span>
                         </div>
                     </div>
                </div>
            </header>

            <main className="px-6 py-6 space-y-3">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Akun Saya</h3>
                {menuItems.map((item, index) => (
                    <button 
                        key={index} 
                        onClick={item.action}
                        className="w-full bg-white dark:bg-card-dark p-4 rounded-xl flex items-center justify-between shadow-soft border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all active:scale-[0.99]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-text-sub-light dark:text-text-sub-dark">
                                <span className="material-icons-round">{item.icon}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.label}</span>
                        </div>
                        <span className="material-icons-round text-gray-300">chevron_right</span>
                    </button>
                ))}

                <button className="w-full mt-6 text-red-500 font-medium text-sm py-4 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors">
                    Keluar Akun
                </button>
                
                <p className="text-center text-[10px] text-gray-400 py-4">
                    KosMate v1.0.2
                </p>
            </main>
        </div>
    );
};

export default ProfileScreen;