import React from 'react';
import { AlertTriangle, Shield, Lock, Smartphone, Info, XCircle, CheckCircle } from 'lucide-react';

const Android15 = () => {
  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AlertTriangle size={28} color="#f87171" /> Android 15 Restrictions
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>How Google strengthened privacy and affected anti-theft apps</p>
        </div>
        <span style={{ padding: '8px 16px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '20px', color: '#f87171', fontWeight: 700 }}>API 35</span>
      </div>

      <div className="stats-grid">
        {[
          { value: '23', label: 'Features Blocked', color: '#f87171' },
          { value: '15', label: 'Features Limited', color: '#fb923c' },
          { value: '6', label: 'Alternatives', color: '#34d399' },
          { value: '100%', label: 'Email Still Works', color: '#22d3ee' },
        ].map((stat, i) => (
          <div key={i} className="stat-card" style={{ textAlign: 'center', flexDirection: 'column' }}>
            <p style={{ fontSize: '36px', fontWeight: 900, color: stat.color }}>{stat.value}</p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Why Google Restricted Features</h2>
      <div className="stats-grid" style={{ marginBottom: '24px' }}>
        {[
          { icon: Shield, title: 'Privacy Protection', desc: 'Prevent apps from secretly accessing user data' },
          { icon: Lock, title: 'Anti-Stalkerware', desc: 'Block spyware that tracks without knowledge' },
          { icon: Smartphone, title: 'Battery Life', desc: 'Stop background apps draining battery' },
          { icon: Info, title: 'User Transparency', desc: 'Users must know when sensors are active' },
        ].map((item, i) => (
          <div key={i} className="stat-card" style={{ flexDirection: 'column', textAlign: 'center' }}>
            <item.icon size={24} color="#22d3ee" />
            <h4 style={{ margin: '12px 0 8px', fontWeight: 600 }}>{item.title}</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Key Restrictions</h2>
      <div className="glass-card" style={{ marginBottom: '24px' }}>
        {[
          { feature: 'SMS Sending/Reading', status: 'blocked' },
          { feature: 'IMEI Access', status: 'blocked' },
          { feature: 'Background Camera', status: 'blocked' },
          { feature: 'Full Storage Access', status: 'blocked' },
          { feature: 'Cross-App Data', status: 'blocked' },
          { feature: 'Background Location', status: 'restricted' },
          { feature: 'Silent Recording', status: 'restricted' },
          { feature: 'WiFi Scanning', status: 'restricted' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: i < 7 ? '1px solid var(--border)' : 'none' }}>
            {item.status === 'blocked' ? <XCircle size={16} color="#f87171" /> : <AlertTriangle size={16} color="#fb923c" />}
            <span style={{ flex: 1, fontSize: '14px' }}>{item.feature}</span>
            <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '8px', background: item.status === 'blocked' ? 'rgba(248,113,113,0.15)' : 'rgba(251,146,60,0.15)', color: item.status === 'blocked' ? '#f87171' : '#fb923c', fontWeight: 600 }}>
              {item.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ background: 'rgba(34,211,238,0.05)', borderColor: 'rgba(34,211,238,0.2)' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>💡 Key Takeaway</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          While Android 15 restricted many anti-theft features, <strong style={{ color: '#22d3ee' }}>email delivery remains 100% reliable</strong>. 
          Configure Gmail as your evidence receiver. Use foreground services with visible notifications 
          for camera, location, and audio - this is the modern Android-compliant approach.
        </p>
      </div>
    </div>
  );
};

export default Android15;
