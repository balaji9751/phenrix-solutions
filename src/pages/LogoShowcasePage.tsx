import React, { useState } from 'react';
import { Logo } from '../components/common/Logo';
import { ArrowLeft, RefreshCw, Palette, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LogoShowcasePage: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('light');
  const [activeLayout, setActiveLayout] = useState<'horizontal' | 'vertical' | 'mark-only'>('horizontal');

  const sizes: ('xs' | 'sm' | 'md' | 'lg' | 'xl')[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const sizePixels = { xs: '28px', sm: '32px', md: '40px', lg: '48px', xl: '56px' };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 mb-8 gap-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#2563eb] hover:underline font-semibold mb-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Phenrix Solutions Logo System
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Visual brand guide and interactive display of the new Phenrix Monogram logo asset.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setActiveTheme(activeTheme === 'light' ? 'dark' : 'light')}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
            >
              <Palette className="w-4 h-4 text-purple-600" />
              <span>Theme: {activeTheme === 'light' ? 'Light' : 'Dark'}</span>
            </button>

            <button
              onClick={() => {
                const nextLayouts: Record<typeof activeLayout, typeof activeLayout> = {
                  'horizontal': 'vertical',
                  'vertical': 'mark-only',
                  'mark-only': 'horizontal'
                };
                setActiveLayout(nextLayouts[activeLayout]);
              }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Layout: {activeLayout}</span>
            </button>
          </div>
        </div>

        {/* Brand Strategy Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-xs">
          <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
            The 3D Monogram Concept
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div>
              <p className="font-bold text-slate-900 mb-1">Symbolism</p>
              <p className="leading-relaxed">
                Combines the uppercase letter <strong>"P"</strong> with a 3D faceted wing and a central golden prism triangle. Represents innovation, precision, and business growth.
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-1">Multi-toned Gradients</p>
              <p className="leading-relaxed">
                Utilizes a corporate gradient transition from <strong>Deep Navy</strong> to <strong>Royal Blue</strong>, accented by an inner gold prism and cyan highlights.
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-1">Scalability & Context</p>
              <p className="leading-relaxed">
                Designed to retain clarity at micro-scales (e.g. mobile headers) and look premium in larger display media.
              </p>
            </div>
          </div>
        </div>
 
        {/* Main Grid View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Interactive Playgrounds */}
          <div className="lg:col-span-8 space-y-8">
            {/* Live Sandbox Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Interactive Sandbox</span>
                <span className="text-xs text-slate-400">Scale: 100% vector</span>
              </div>
              <div 
                className={`p-12 flex items-center justify-center min-h-[300px] transition-colors duration-300 ${
                  activeTheme === 'dark' ? 'bg-[#0f172a]' : 'bg-white'
                }`}
              >
                <div className="transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Logo 
                    size="xl" 
                    variant={activeTheme} 
                    layout={activeLayout}
                    showTagline={true}
                  />
                </div>
              </div>
            </div>
 
            {/* Scale Comparison Grid */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-950 mb-4">Responsive Sizes Guide</h3>
              <div className="space-y-6">
                {sizes.map((sz) => (
                  <div key={sz} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md uppercase">
                        {sz}
                      </span>
                      <span className="text-xs text-slate-400">Emblem: {sizePixels[sz]}</span>
                    </div>
                    <div className="flex items-center justify-start sm:justify-end py-2">
                      <Logo 
                        size={sz} 
                        variant="dark" 
                        layout={activeLayout === 'mark-only' ? 'mark-only' : 'horizontal'}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          {/* Sidebar Properties */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-950 mb-4">Brand Asset Tokens</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1.5">Primary Navy (Trust & Depth)</label>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#0B2F61]" />
                    <span className="text-xs font-mono text-slate-800">#0B2F61</span>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1.5">Secondary Blue (Corporate & Tech)</label>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#2563EB]" />
                    <span className="text-xs font-mono text-slate-800">#2563EB</span>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1.5">Accent Gold (Creative Prism)</label>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#FFC107]" />
                    <span className="text-xs font-mono text-slate-800">#FFC107</span>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1.5">Accent Cyan (Luminous Highlights)</label>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#06B6D4]" />
                    <span className="text-xs font-mono text-slate-800">#06B6D4</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Usage Checkpoints</h4>
                  <ul className="text-xs text-slate-500 space-y-2 list-disc list-inside">
                    <li>Transparent elements overlay cleanly</li>
                    <li>Supports SVG scaling for print/web</li>
                    <li>Saves bytes compared to raster images</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Code Snippet Card */}
            <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-md font-mono text-xs overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Integration Code</span>
                <span className="text-[9px] text-[#06b6d4] bg-[#06b6d4]/10 px-2 py-0.5 rounded-full font-bold">Ready</span>
              </div>
              <pre className="text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`// Importing into components
import { Logo } from '../components/common/Logo';

// Example rendering
<Logo
  size="md"
  variant="dark"
  layout="horizontal"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
