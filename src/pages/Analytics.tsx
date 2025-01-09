import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/analytics/StatCard';
import { ChartCard } from '../components/analytics/ChartCard';

const mockData = [
  { month: 'Jan', profit: 1200 },
  { month: 'Feb', profit: -800 },
  { month: 'Mar', profit: 2400 },
  { month: 'Apr', profit: 1600 },
  { month: 'May', profit: 3200 },
  { month: 'Jun', profit: -400 }
];

export const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold text-white mb-8">Analytics Dashboard</h1> */}
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Profit/Loss"
          value="$1,279,200"
          icon={DollarSign}
          valueColor="text-green-400"
          iconColor="text-green-400"
        />
        <StatCard
          title="Win Rate"
          value="67%"
          icon={TrendingUp}
          valueColor="text-indigo-400"
          iconColor="text-indigo-400"
        />
        <StatCard
          title="Best Month"
          value="+$3,200"
          icon={ArrowUpRight}
          valueColor="text-green-400"
          iconColor="text-green-400"
        />
        <StatCard
          title="Worst Month"
          value="-$800"
          icon={ArrowDownRight}
          valueColor="text-red-400"
          iconColor="text-red-400"
        />
        <StatCard
          title="Best Trade"
          value="+$1,362"
          icon={ArrowUpRight}
          valueColor="text-green-400"
          iconColor="text-green-400"
        />
        <StatCard
          title="Worst Trade"
          value="-$536"
          icon={ArrowDownRight}
          valueColor="text-red-400"
          iconColor="text-red-400"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard title="Monthly Profit/Loss">
          <BarChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
              labelStyle={{ color: '#9CA3AF' }}
            />
            <Bar dataKey="profit" fill="#4F46E5" />
          </BarChart>
        </ChartCard>

        <ChartCard title="Cumulative Returns">
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
              labelStyle={{ color: '#9CA3AF' }}
            />
            <Line type="monotone" dataKey="profit" stroke="#4F46E5" />
          </LineChart>
        </ChartCard>
      </div>
    </div>
  );
};