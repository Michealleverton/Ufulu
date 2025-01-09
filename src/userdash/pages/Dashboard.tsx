import React, { useState, useEffect } from 'react';
import { Menu, X, Home, BarChart2, BookOpen, History, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

export const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', user.id)
        .single();

      if (data) setUsername(data.username);
      if (error) toast.error('Error loading profile');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
    toast.success('Logged out successfully');
  };

  const menuItems = [
    { icon: Home, label: 'Overview', path: '/dashboard' },
    { icon: BarChart2, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: BookOpen, label: 'Journal', path: '/dashboard/journal' },
    { icon: History, label: 'Trade History', path: '/dashboard/trades' },
  ];

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-gray-800 text-white transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!isCollapsed && <h2 className="text-xl font-bold">Ufulu Tracker</h2>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-700"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        
        <div className="p-4 border-b border-gray-700">
          {!isCollapsed ? (
            <div className="text-sm flex-row">
              <p className="text-green-400 font-semibold truncate">Welcome, {username}</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                {username.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
        </div>

        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <item.icon size={20} />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};