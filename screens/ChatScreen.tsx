import React from 'react';

const ChatScreen: React.FC = () => {
    const chats = [
        {
            id: 1,
            name: "Budi Santoso",
            role: "Cleaner",
            message: "Saya sudah sampai di depan kost ya kak.",
            time: "14:02",
            unread: 1,
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGN1NuzmPLkrjdP--WkEeNV2TzXdwlZ0eRPOYWd0SMkK52qEN1ou3Fwds0Jf9lw2iUnn1N2LzwJp7RukP2s4K2cwWaw8eO1lR0nmMqy-_-cHHebn_7T7Tkx1-WSwB1Awu2q-h6t1nudjGT31o_fDlETSnLn6Cgr7O8iZGDwdgnPoKNETYRguR6pXoj4qAXpE6C0b65ST-6TDPrHz6SkTlbqtCJqj96SuJ8yZcKYdkPoe3FsQl-5Y1wpELBELd9UIYtiO_sTXkcYaA"
        },
        {
            id: 2,
            name: "CS KosMate",
            role: "Support",
            message: "Terima kasih atas feedbacknya!",
            time: "Kemarin",
            unread: 0,
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX8gMTvMX7NH-D-cyPj_NhrXvKiVmrCTQAXcakc8yfzSdjHfPnZu3MK3a23xNnx5Q1MoX874_6s8YrimP6DMQVBcZmNPPoJrDbG4-1f7PMS6gLBA6LW718HjuAXIrVxB5xmimLQI9XMA7d69SO4qzqQMPcgY_HoqBijzneEjkjzdREXHjucIdu3PWSwCts0cKfPiuOVzCR1M26UEyzw-pUNaMU8A5WStmt50c3IMFAGCGvDz-JoaeSJOrHibHpj9TlVMasAJ6x3s4"
        }
    ];

    return (
        <div className="min-h-screen pb-24 bg-background-light dark:bg-background-dark">
            <header className="px-6 pt-12 pb-6 bg-white dark:bg-card-dark sticky top-0 z-30 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pesan</h1>
            </header>

            <main className="px-6 py-4 space-y-2">
                {chats.map((chat) => (
                    <div key={chat.id} className="bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4">
                        <div className="relative">
                            <img alt={chat.name} className="w-12 h-12 rounded-full object-cover" src={chat.avatar} />
                            {chat.role === 'Support' && (
                                <div className="absolute -bottom-1 -right-1 bg-primary text-white p-0.5 rounded-full border-2 border-white">
                                    <span className="material-icons-round text-[10px] block">verified</span>
                                </div>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-sm text-gray-900 dark:text-white truncate">{chat.name}</h3>
                                <span className="text-[10px] text-text-sub-light dark:text-text-sub-dark whitespace-nowrap">{chat.time}</span>
                            </div>
                            <p className={`text-xs truncate ${chat.unread ? 'font-semibold text-gray-800 dark:text-gray-100' : 'text-text-sub-light dark:text-text-sub-dark'}`}>
                                {chat.message}
                            </p>
                        </div>
                        {chat.unread > 0 && (
                            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                                {chat.unread}
                            </div>
                        )}
                    </div>
                ))}

                <div className="text-center pt-8 opacity-50">
                    <span className="material-icons-round text-4xl text-gray-300">chat_bubble_outline</span>
                    <p className="text-sm text-gray-400 mt-2">No more messages</p>
                </div>
            </main>
        </div>
    );
};

export default ChatScreen;