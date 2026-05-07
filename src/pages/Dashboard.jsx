import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Camera, MapPin, Wifi, Activity, Zap, AlertTriangle, ChevronRight } from 'lucide-react';

const modules = [
  { id: 1, icon: '📸', name: 'Biometric Capture', features: 18, blocked: 3, gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)' },
  { id: 2, icon: '🌐', name: 'Network Intelligence', features: 15, blocked: 5, gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)' },
  { id: 3, icon: '📍', name: 'Location Tracking', features: 12, blocked: 4, gradient: 'linear-gradient(135deg, #34d399, #059669)' },
  { id: 4, icon: '📡', name: 'Communication', features: 12, blocked: 7, gradient: 'linear-gradient(135deg, #fb923c, #ea580c)' },
  { id: 5, icon: '🎯', name: 'Sensor Array', features: 30, blocked: 2, gradient: 'linear-gradient(135deg, #f472b6, #db2777)' },
];

const timeline = [
  { time: '00:00', event: 'Theft Detected', icon: '🔴' },
  { time: '00:03', event: 'Device Locked', icon: '🔒' },
  { time: '00:05', event: 'Silent Photo Captured', icon: '📸' },
  { time: '00:10', event: 'Location Sent to Email', icon: '📧' },
  { time: '01:00', event: 'Fake Shutdown Activated', icon: '🔌' },
  { time: '05:00', event: 'GPS Tracking Active', icon: '🛰️' },
  { time: '10:00', event: 'SIM Swap Detected', icon: '📶' },
  { time: '20:00', event: 'WiFi Network Logged', icon: '📡' },
  { time: '30:00', event: 'Police Report Generated', icon: '📋' },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="hero-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border)', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Shield size={48} color="#22d3ee" />
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 900 }}>AntiTheft Shield</h1>
            <p style={{ color: 'var(--text-muted)' }}>Complete Protection System • Educational Demo</p>
          </div>
        </div>
        <span style={{ padding: '8px 16px', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '20px', color: '#34d399', fontSize: '13px', fontWeight: 600 }}>● System Active</span>
      </div>

      <div className="stats-grid">
        {[
          { icon: Activity, label: 'Active Modules', value: '5', sub: 'of 6 total', color: '#22d3ee' },
          { icon: Zap, label: 'Total Features', value: '87', sub: 'implemented', color: '#a78bfa' },
          { icon: AlertTriangle, label: 'Blocked by Android 15', value: '21', sub: 'restricted', color: '#f87171' },
          { icon: Shield, label: 'Email Delivery', value: '100%', sub: 'always works', color: '#34d399' },
        ].map((stat, i) => (
          <div key={i} className="stat-card">
            <stat.icon size={24} color={stat.color} />
            <div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{stat.label}</p>
              <p style={{ fontSize: '28px', fontWeight: 800, color: stat.color }}>{stat.value}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Protection Modules</h2>
      <div className="stats-grid">
        {modules.map((mod) => (
          <div key={mod.id} className="stat-card" style={{ flexDirection: 'column', cursor: 'pointer' }} onClick={() => navigate('/command')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '28px' }}>{mod.icon}</span>
              <span style={{ fontSize: '12px', padding: '4px 10px', background: 'rgba(52,211,153,0.1)', borderRadius: '12px', color: '#34d399' }}>Active</span>
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '12px 0' }}>{mod.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
              <span>{mod.features} features</span>
              <span style={{ color: '#f87171' }}>{mod.blocked} blocked</span>
            </div>
            <div style={{ height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px', marginTop: '12px' }}>
              <div style={{ height: '100%', width: `${((mod.features - mod.blocked) / mod.features) * 100}%`, background: mod.gradient, borderRadius: '2px' }} />
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Theft Response Timeline</h2>
      <div className="glass-card" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {timeline.map((event, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <span style={{ fontSize: '20px' }}>{event.icon}</span>
            <span style={{ fontSize: '13px', color: '#22d3ee', fontWeight: 600, fontFamily: 'monospace', minWidth: '60px' }}>{event.time}</span>
            <span style={{ fontSize: '14px' }}>{event.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
