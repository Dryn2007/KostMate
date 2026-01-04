import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const BottomNav: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Determine active tab
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 pb-safe pt-3 px-6 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] z-40">
            <style>{`
                .pb-safe {
                    padding-bottom: env(safe-area-inset-bottom, 20px);
                }
            `}</style>
            <div className="flex justify-between items-end relative">
                <button 
                    onClick={() => navigate('/')}
                    className={`flex flex-col items-center gap-1 transition-colors w-12 ${isActive('/') ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark hover:text-primary'}`}
                >
                    <span className="material-icons-round text-2xl">home</span>
                    <span className="text-[10px] font-medium">Beranda</span>
                </button>
                <button 
                    onClick={() => navigate('/orders')}
                    className={`flex flex-col items-center gap-1 transition-colors w-12 ${isActive('/orders') ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark hover:text-primary'}`}
                >
                    <span className="material-icons-round text-2xl">assignment</span>
                    <span className="text-[10px] font-medium">Pesanan</span>
                </button>
                
                {/* FAB (Floating Action Button) */}
                <div className="relative -top-6">
                    <button 
                         onClick={() => navigate('/services')}
                        className={`flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg shadow-blue-500/40 hover:bg-primary-dark transition-transform active:scale-95 border-4 border-white dark:border-card-dark ${isActive('/services') ? 'ring-2 ring-blue-200 dark:ring-blue-900' : ''}`}
                    >
                        <span className="material-icons-round text-white text-3xl">add</span>
                    </button>
                </div>

                <button 
                    onClick={() => navigate('/chat')}
                    className={`flex flex-col items-center gap-1 transition-colors w-12 ${isActive('/chat') ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark hover:text-primary'}`}
                >
                    <span className="material-icons-round text-2xl">chat</span>
                    <span className="text-[10px] font-medium">Pesan</span>
                </button>
                <button 
                    onClick={() => navigate('/profile')}
                    className={`flex flex-col items-center gap-1 transition-colors w-12 ${isActive('/profile') ? 'text-primary' : 'text-text-sub-light dark:text-text-sub-dark hover:text-primary'}`}
                >
                    <span className="material-icons-round text-2xl">person</span>
                    <span className="text-[10px] font-medium">Profil</span>
                </button>
            </div>
        </nav>
    );
};