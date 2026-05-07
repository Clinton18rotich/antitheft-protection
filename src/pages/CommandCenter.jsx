import React, { useState } from 'react';
import { Terminal, Camera, MapPin, Mic, Wifi, Lock, Shield, Phone, Mail, CheckCircle, XCircle } from 'lucide-react';

const commands = [
  { cmd: 'PHOTO', desc: 'Capture silent photo', icon: Camera, color: '#22d3ee', working: true },
  { cmd: 'LOCATION', desc: 'Get GPS coordinates', icon: MapPin, color: '#34d399', working: true },
  { cmd: 'AUDIO', desc: 'Start recording', icon: Mic, color: '#fbbf24', working: true },
  { cmd: 'WIFI_SCAN', desc: 'Log WiFi networks', icon: Wifi, color: '#a78bfa', working: true },
  { cmd: 'LOCK', desc: 'Lock device', icon: Lock, color: '#f87171', working: true },
  { cmd: 'REPORT', desc: 'Generate police report', icon: Shield, color: '#fb923c', working: true },
  { cmd: 'SMS_ALERT', desc: 'Send SMS alert', icon: Phone, color: '#f472b6', working: false },
  { cmd: 'WIPE', desc: 'Factory reset', icon: Shield, color: '#ef4444', working: true },
];

const CommandCenter = () => {
  const [log, setLog] = useState([]);
  const [email, setEmail] = useState('');

  const execute = (cmd) => {
    const entry = {
      id: Date.now(),
      cmd: cmd.cmd,
      time: new Date().toLocaleTimeString(),
      status: cmd.working ? 'success' : 'blocked',
      detail: cmd.working 
        ? `✅ Executed. Data sent to ${email || 'configured email'}`
        : '🚫 Blocked by Android 15 security policies'
    };
    setLog(prev => [entry, ...prev]);
  };

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Terminal size={28} /> Command Center
        </h1>
        <span style={{ padding: '8px 16px', background: 'rgba(52,211,153,0.1)', color: '#34d399', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>● Connected</span>
      </div>

      <div className="glass-card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Mail size={20} />
          <h3 style={{ fontWeight: 600 }}>📧 Emergency Email (Receive Evidence)</h3>
        </div>
        <input 
          type="email" 
          placeholder="your@gmail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '12px', color: '#fff', fontSize: '14px' }}
        />
      </div>

      <h2 className="section-title">Send Commands</h2>
      <div className="stats-grid">
        {commands.map((cmd, i) => (
          <div key={i} className="stat-card" style={{ flexDirection: 'column', cursor: cmd.working ? 'pointer' : 'default', opacity: cmd.working ? 1 : 0.6 }} onClick={() => execute(cmd)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <cmd.icon size={24} color={cmd.color} />
              {!cmd.working && <span style={{ fontSize: '10px', padding: '3px 8px', background: 'rgba(248,113,113,0.15)', color: '#f87171', borderRadius: '8px' }}>BLOCKED</span>}
            </div>
            <code style={{ fontSize: '18px', fontWeight: 700, color: '#22d3ee', margin: '12px 0', fontFamily: 'monospace' }}>{cmd.cmd}</code>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>{cmd.desc}</p>
            <span style={{ fontSize: '12px', color: cmd.working ? '#34d399' : '#f87171', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {cmd.working ? <CheckCircle size={14} /> : <XCircle size={14} />}
              {cmd.working ? 'Working' : 'Android 15 Blocked'}
            </span>
          </div>
        ))}
      </div>

      <h2 className="section-title">How Commands Flow</h2>
      <div className="glass-card" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '28px' }}>
          <span>📱</span><span>→</span><span>🔄</span><span>→</span><span>📱</span><span>→</span><span>📧</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '12px', color: 'var(--text-muted)' }}>
          <span>Your Phone</span><span></span><span>Process</span><span></span><span>Stolen Device</span><span></span><span>Gmail</span>
        </div>
      </div>

      <h2 className="section-title">Command Log</h2>
      <div className="glass-card" style={{ maxHeight: '300px', overflowY: 'auto', fontFamily: 'monospace', fontSize: '13px' }}>
        {log.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '32px' }}>Click a command to execute...</p>
        ) : (
          log.map(entry => (
            <div key={entry.id} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ color: entry.status === 'success' ? '#34d399' : '#f87171' }}>{entry.status === 'success' ? '✅' : '🚫'}</span>
              <code style={{ color: '#22d3ee', minWidth: '100px' }}>{entry.cmd}</code>
              <span style={{ color: 'var(--text-muted)', minWidth: '80px' }}>{entry.time}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{entry.detail}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommandCenter;
