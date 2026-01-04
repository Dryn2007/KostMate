import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ServiceSelectionScreen from './screens/ServiceSelectionScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import OrdersScreen from './screens/OrdersScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import { BottomNav } from './components/BottomNav';

const LayoutWithNav: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            {children}
            <BottomNav />
        </>
    );
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden relative">
                <Routes>
                    <Route path="/" element={
                        <LayoutWithNav>
                            <HomeScreen />
                        </LayoutWithNav>
                    } />
                    <Route path="/services" element={
                        <LayoutWithNav>
                            <ServiceSelectionScreen />
                        </LayoutWithNav>
                    } />
                    <Route path="/orders" element={
                        <LayoutWithNav>
                            <OrdersScreen />
                        </LayoutWithNav>
                    } />
                    <Route path="/chat" element={
                        <LayoutWithNav>
                            <ChatScreen />
                        </LayoutWithNav>
                    } />
                    <Route path="/profile" element={
                        <LayoutWithNav>
                            <ProfileScreen />
                        </LayoutWithNav>
                    } />
                    <Route path="/subscription" element={<SubscriptionScreen />} />
                    <Route path="/order" element={<OrderDetailScreen />} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default App;