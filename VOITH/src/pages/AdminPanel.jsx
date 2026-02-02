import { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';

const AUTH_KEY = 'voith_admin_auth';
const DEMO_USER = 'admin';
const DEMO_PASS = 'voith';

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (username === DEMO_USER && password === DEMO_PASS) {
      try {
        localStorage.setItem(AUTH_KEY, '1');
      } catch (_) {}
      onLogin();
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">VOITH Admin</h1>
          <p className="text-sm text-gray-500">Sign in to manage content</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none transition"
              placeholder="admin"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none transition"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-[#E85244] text-white font-medium rounded-lg hover:bg-[#d44538] transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard({ onLogout }) {
  const { content, setContent, resetSection } = useContent();
  const [activeSection, setActiveSection] = useState('hero');
  const [saved, setSaved] = useState(false);

  const save = (section, data) => {
    setContent(section, data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const sections = [
    { id: 'hero', label: 'Hero', icon: '🏠' },
    { id: 'aboutUs', label: 'About Us', icon: '📄' },
    { id: 'belief', label: 'Belief', icon: '💡' },
    { id: 'quotes', label: 'Quotes', icon: '💬' },
    { id: 'navItems', label: 'Navigation', icon: '🔗' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <span className="font-semibold text-gray-900">VOITH Admin</span>
          <button
            onClick={onLogout}
            className="text-xs text-gray-500 hover:text-[#E85244] transition-colors"
          >
            Logout
          </button>
        </div>
        <nav className="p-2 flex-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === s.id
                  ? 'bg-[#E85244] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-2xl">
          {saved && (
            <div className="mb-4 py-2 px-4 bg-green-100 text-green-800 text-sm rounded-lg">
              Saved
            </div>
          )}

          {activeSection === 'hero' && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Hero Section</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={content.hero?.title ?? ''}
                    onChange={(e) => save('hero', { ...content.hero, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={4}
                    value={content.hero?.description ?? ''}
                    onChange={(e) => save('hero', { ...content.hero, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none resize-y"
                  />
                </div>
                <button
                  onClick={() => resetSection('hero')}
                  className="text-sm text-gray-500 hover:text-[#E85244]"
                >
                  Reset to default
                </button>
              </div>
            </section>
          )}

          {activeSection === 'aboutUs' && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About Us</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={content.aboutUs?.title ?? ''}
                    onChange={(e) => save('aboutUs', { ...content.aboutUs, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={5}
                    value={content.aboutUs?.description ?? ''}
                    onChange={(e) => save('aboutUs', { ...content.aboutUs, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none resize-y"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Button text</label>
                  <input
                    type="text"
                    value={content.aboutUs?.buttonText ?? ''}
                    onChange={(e) => save('aboutUs', { ...content.aboutUs, buttonText: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none"
                  />
                </div>
                <button
                  onClick={() => resetSection('aboutUs')}
                  className="text-sm text-gray-500 hover:text-[#E85244]"
                >
                  Reset to default
                </button>
              </div>
            </section>
          )}

          {activeSection === 'belief' && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Belief Section</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Text</label>
                  <textarea
                    rows={4}
                    value={typeof content.belief === 'string' ? content.belief : ''}
                    onChange={(e) => save('belief', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none resize-y"
                  />
                </div>
                <button
                  onClick={() => resetSection('belief')}
                  className="text-sm text-gray-500 hover:text-[#E85244]"
                >
                  Reset to default
                </button>
              </div>
            </section>
          )}

          {activeSection === 'quotes' && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quotes</h2>
              <p className="text-sm text-gray-500 mb-4">First quote is shown on the homepage.</p>
              {(content.quotes ?? [{}])[0] && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quote text</label>
                    <textarea
                      rows={3}
                      value={content.quotes[0].text ?? ''}
                      onChange={(e) => {
                        const q = [...(content.quotes || [])];
                        q[0] = { ...q[0], text: e.target.value, author: q[0]?.author ?? 'VOITH' };
                        save('quotes', q);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none resize-y"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                    <input
                      type="text"
                      value={content.quotes[0].author ?? ''}
                      onChange={(e) => {
                        const q = [...(content.quotes || [])];
                        q[0] = { ...q[0], author: e.target.value, text: q[0]?.text ?? '' };
                        save('quotes', q);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] focus:border-[#E85244] outline-none"
                    />
                  </div>
                  <button
                    onClick={() => resetSection('quotes')}
                    className="text-sm text-gray-500 hover:text-[#E85244]"
                  >
                    Reset to default
                  </button>
                </div>
              )}
            </section>
          )}

          {activeSection === 'navItems' && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Navigation</h2>
              <p className="text-sm text-gray-500 mb-4">Edit nav labels and links (e.g. #about, #contact).</p>
              <div className="space-y-4">
                {(content.navItems ?? []).map((item, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={item.label ?? ''}
                      onChange={(e) => {
                        const n = [...(content.navItems || [])];
                        n[i] = { ...n[i], label: e.target.value };
                        save('navItems', n);
                      }}
                      placeholder="Label"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] outline-none"
                    />
                    <input
                      type="text"
                      value={item.href ?? ''}
                      onChange={(e) => {
                        const n = [...(content.navItems || [])];
                        n[i] = { ...n[i], href: e.target.value };
                        save('navItems', n);
                      }}
                      placeholder="#link"
                      className="w-28 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85244] outline-none"
                    />
                  </div>
                ))}
                <button
                  onClick={() => resetSection('navItems')}
                  className="text-sm text-gray-500 hover:text-[#E85244]"
                >
                  Reset to default
                </button>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default function AdminPanel() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    try {
      setIsAuth(!!localStorage.getItem(AUTH_KEY));
    } catch (_) {}
  }, []);

  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => {
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch (_) {}
    setIsAuth(false);
    window.location.hash = '';
  };

  if (isAuth) return <AdminDashboard onLogout={handleLogout} />;
  return <AdminLogin onLogin={handleLogin} />;
}
