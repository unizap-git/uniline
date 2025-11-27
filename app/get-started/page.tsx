'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import CommonHeader from '@/components/CommonHeader';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function GetStarted() {
  const [activeTab, setActiveTab] = useState<'pnpm' | 'yarn' | 'npm'>('npm');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const installCommands = {
    pnpm: 'pnpm add @unizap/uniline',
    yarn: 'yarn add @unizap/uniline',
    npm: 'npm install @unizap/uniline'
  };

  return (
    <div className="min-h-screen bg-color-white dark:bg-color-gray-950">
      <CommonHeader />
      <div className="md:flex flex-1 pt-16">
              <div className="hidden md:block">
                <Sidebar activeCategory="get-started" />
              </div>
      
              <main className="flex-1 md:px-8 md:pb-0 md:pt-8 px-4 pt-4 pb-16">
                 {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-color-gray-900 dark:text-color-white mb-4">
            UniLine
          </h1>
          <p className="text-lg text-color-gray-600 dark:text-color-gray-400">
            A comprehensive icon library with 660+ beautifully crafted icons. Available as React components, CSS icon font, or via CDN. Fully customizable with support for size, color, stroke width, and filled variants.
          </p>
        </div>

        {/* What you can accomplish */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-color-gray-900 dark:text-color-white mb-4">
            What you can accomplish:
          </h2>
          <div className="grid sm:grid-columns-2 gap-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-color-gray-50 dark:bg-color-gray-800/50">
              <Icon name="check-one" category="symbol" size={20} className="text-color-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-color-gray-600 dark:text-color-gray-400">Add icons to HTML using simple CSS classes</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-color-gray-50 dark:bg-color-gray-800/50">
              <Icon name="check-one" category="symbol" size={20} className="text-color-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-color-gray-600 dark:text-color-gray-400">Import as React components with full TypeScript support</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-color-gray-50 dark:bg-color-gray-800/50">
              <Icon name="check-one" category="symbol" size={20} className="text-color-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-color-gray-600 dark:text-color-gray-400">Customize size, color, and stroke width dynamically</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-color-gray-50 dark:bg-color-gray-800/50">
              <Icon name="check-one" category="symbol" size={20} className="text-color-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-color-gray-600 dark:text-color-gray-400">Switch between outline and filled variants</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-color-gray-50 dark:bg-color-gray-800/50">
              <Icon name="check-one" category="symbol" size={20} className="text-color-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-color-gray-600 dark:text-color-gray-400">Use via CDN for quick prototyping</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-color-gray-50 dark:bg-color-gray-800/50">
              <Icon name="check-one" category="symbol" size={20} className="text-color-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-color-gray-600 dark:text-color-gray-400">Tree-shake unused icons for minimal bundle size</span>
            </div>
          </div>
        </div>

        {/* Installation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-color-gray-900 dark:text-color-white mb-6">
            Installation
          </h2>

          {/* Package Managers */}
          <h3 className="text-lg font-semibold text-color-gray-900 dark:text-color-white mb-4">
            Package Managers
          </h3>

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            {(['pnpm', 'yarn', 'npm'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
                  activeTab === tab
                    ? 'bg-color-gray-900 dark:bg-color-white text-color-white dark:text-color-gray-900'
                    : 'bg-color-gray-100 dark:bg-color-gray-800 text-color-gray-600 dark:text-color-gray-400 hover:bg-color-gray-200 dark:hover:bg-color-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Install Command */}
          <div className="relative bg-color-gray-900 dark:bg-color-gray-800 rounded-lg p-4 mb-8">
            <code className="text-sm text-color-green-400 font-mono">
              {installCommands[activeTab]}
            </code>
            <button
              onClick={() => copyToClipboard(installCommands[activeTab], 'install')}
              className="absolute top-3 right-3 p-1.5 rounded bg-color-gray-700 hover:bg-color-gray-600 text-color-gray-300 cursor-pointer"
            >
              {copiedCode === 'install' ? (
                <Icon name="check" category="system" size={16} color="currentColor" />
              ) : (
                <Icon name="clipboard" category="business" size={16} color="currentColor" />
              )}
            </button>
          </div>

          {/* CDN */}
          <h3 className="text-lg font-semibold text-color-gray-900 dark:text-color-white mb-4">
            CDN
          </h3>
          {/* CSS Icon Font */}
          <div className="mb-8">
            <div className="relative bg-color-gray-900 dark:bg-color-gray-800 rounded-lg p-4">
              <code className="text-sm text-color-blue-400 font-mono whitespace-nowrap overflow-x-auto block  pr-10 md:pr-0">
                {'<link rel="stylesheet" href="https://unpkg.com/@unizap/uniline@latest/dist/uniline.min.css">'}
              </code>
              <button
                onClick={() => copyToClipboard('<link rel="stylesheet" href="https://unpkg.com/@unizap/uniline@latest/dist/uniline.min.css">', 'cdn-css')}
                className="absolute top-3 right-3 p-1.5 rounded bg-color-gray-700 hover:bg-color-gray-600 text-color-gray-300 cursor-pointer"
              >
                {copiedCode === 'cdn-css' ? (
                  <Icon name="check" category="system" size={16} color="currentColor" />
                ) : (
                  <Icon name="clipboard" category="business" size={16} color="currentColor" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-color-gray-900 dark:text-color-white mb-6">
            Usage
          </h2>

          {/* CSS Icon Font Usage */}
          <h3 className="text-lg font-semibold text-color-gray-900 dark:text-color-white mb-4">
            CSS Icon Font
          </h3>
          <p className="text-color-gray-600 dark:text-color-gray-400 mb-4">
            Use the icon font classes for simple HTML integration
          </p>

          <div className="relative bg-color-gray-900 dark:bg-color-gray-800 rounded-lg p-4 mb-8">
            <pre className="text-sm font-mono overflow-x-auto block  pr-10 md:pr-0">
              <code>
                <span className="text-color-gray-500">{'<!-- Include CSS -->'}</span>{'\n'}
                <span className="text-color-blue-400">{'<'}</span><span className="text-color-red-400">{'link'}</span> <span className="text-color-yellow-400">{'rel'}</span><span className="text-color-white">{'="stylesheet"'}</span> <span className="text-color-yellow-400">{'href'}</span><span className="text-color-white">{'="https://unpkg.com/@unizap/uniline@latest/dist/uniline.min.css"'}</span><span className="text-color-blue-400">{'>'}</span>{'\n\n'}
                <span className="text-color-gray-500">{'<!-- Outline icons -->'}</span>{'\n'}
                <span className="text-color-blue-400">{'<'}</span><span className="text-color-red-400">{'i'}</span> <span className="text-color-yellow-400">{'class'}</span><span className="text-color-white">{'="uni-heart"'}</span> <span className="text-color-yellow-400">{'style'}</span><span className="text-color-white">{'="color: #e74c3c;"'}</span><span className="text-color-blue-400">{'>'}</span><span className="text-color-blue-400">{'</i>'}</span>{'\n'}
                <span className="text-color-blue-400">{'<'}</span><span className="text-color-red-400">{'i'}</span> <span className="text-color-yellow-400">{'class'}</span><span className="text-color-white">{'="uni-star"'}</span><span className="text-color-blue-400">{'>'}</span><span className="text-color-blue-400">{'</i>'}</span>{'\n'}
                <span className="text-color-blue-400">{'<'}</span><span className="text-color-red-400">{'i'}</span> <span className="text-color-yellow-400">{'class'}</span><span className="text-color-white">{'="uni-home"'}</span><span className="text-color-blue-400">{'>'}</span><span className="text-color-blue-400">{'</i>'}</span>{'\n\n'}
                <span className="text-color-gray-500">{'<!-- Filled icons -->'}</span>{'\n'}
                <span className="text-color-blue-400">{'<'}</span><span className="text-color-red-400">{'i'}</span> <span className="text-color-yellow-400">{'class'}</span><span className="text-color-white">{'="uni-heart-fill"'}</span> <span className="text-color-yellow-400">{'style'}</span><span className="text-color-white">{'="color: #e74c3c;"'}</span><span className="text-color-blue-400">{'>'}</span><span className="text-color-blue-400">{'</i>'}</span>{'\n'}
                <span className="text-color-blue-400">{'<'}</span><span className="text-color-red-400">{'i'}</span> <span className="text-color-yellow-400">{'class'}</span><span className="text-color-white">{'="uni-star-fill"'}</span><span className="text-color-blue-400">{'>'}</span><span className="text-color-blue-400">{'</i>'}</span>{'\n'}
                <span className="text-color-blue-400">{'<'}</span><span className="text-color-red-400">{'i'}</span> <span className="text-color-yellow-400">{'class'}</span><span className="text-color-white">{'="uni-home-fill"'}</span><span className="text-color-blue-400">{'>'}</span><span className="text-color-blue-400">{'</i>'}</span>
              </code>
            </pre>
            <button
              onClick={() => copyToClipboard(`<!-- Include CSS -->
<link rel="stylesheet" href="https://unpkg.com/@unizap/uniline@latest/dist/uniline.min.css">
                
<!-- Outline icons -->
<i class="uni-heart" style="color: #e74c3c;"></i>
<i class="uni-star"></i>
<i class="uni-home"></i>

<!-- Filled icons -->
<i class="uni-heart-fill" style="color: #e74c3c;"></i>
<i class="uni-star-fill"></i>
<i class="uni-home-fill"></i>`, 'usage-css')}
              className="absolute top-3 right-3 p-1.5 rounded bg-color-gray-700 hover:bg-color-gray-600 text-color-gray-300 cursor-pointer"
            >
              {copiedCode === 'usage-css' ? (
                <Icon name="check" category="system" size={16} color="currentColor" />
              ) : (
                <Icon name="clipboard" category="business" size={16} color="currentColor" />
              )}
            </button>
          </div>

          {/* React Usage */}
          <h3 className="text-lg font-semibold text-color-gray-900 dark:text-color-white mb-4">
            React
          </h3>
          <p className="text-color-gray-600 dark:text-color-gray-400 mb-4">
            Import and use icons as React components
          </p>

          <div className="relative bg-color-gray-900 dark:bg-color-gray-800 rounded-lg p-4 mb-8">
            <pre className="text-sm font-mono overflow-x-auto block  pr-10 md:pr-0">
              <code>
                <span className="text-color-purple-400">{'import'}</span> <span className="text-color-white">{'{ Heart, Star, Home }'}</span> <span className="text-color-purple-400">{'from'}</span> <span className="text-color-green-400">{"'@unizap/uniline'"}</span><span className="text-color-white">{';\n\n'}</span>
                <span className="text-color-purple-400">{'function'}</span> <span className="text-color-yellow-400">{'App'}</span><span className="text-color-white">{'() {\n'}</span>
                <span className="text-color-white">{'  '}</span><span className="text-color-purple-400">{'return'}</span><span className="text-color-white">{' (\n'}</span>
                <span className="text-color-white">{'    '}</span><span className="text-color-blue-400">{'<'}</span><span className="text-color-red-400">{'div'}</span><span className="text-color-blue-400">{'>\n'}</span>
                <span className="text-color-white">{'      '}</span><span className="text-color-blue-400">{'<'}</span><span className="text-color-yellow-400">{'Heart'}</span> <span className="text-color-cyan-400">{'size'}</span><span className="text-color-white">{'={24} '}</span><span className="text-color-cyan-400">{'color'}</span><span className="text-color-white">{'="red" '}</span><span className="text-color-blue-400">{'/>\n'}</span>
                <span className="text-color-white">{'      '}</span><span className="text-color-blue-400">{'<'}</span><span className="text-color-yellow-400">{'Star'}</span> <span className="text-color-cyan-400">{'size'}</span><span className="text-color-white">{'={24} '}</span><span className="text-color-cyan-400">{'fill'}</span><span className="text-color-white">{'={true} '}</span><span className="text-color-blue-400">{'/>\n'}</span>
                <span className="text-color-white">{'      '}</span><span className="text-color-blue-400">{'<'}</span><span className="text-color-yellow-400">{'Home'}</span> <span className="text-color-cyan-400">{'size'}</span><span className="text-color-white">{'={32} '}</span><span className="text-color-cyan-400">{'strokeWidth'}</span><span className="text-color-white">{'={1.5} '}</span><span className="text-color-blue-400">{'/>\n'}</span>
                <span className="text-color-white">{'    '}</span><span className="text-color-blue-400">{'</'}</span><span className="text-color-red-400">{'div'}</span><span className="text-color-blue-400">{'>\n'}</span>
                <span className="text-color-white">{'  );\n'}</span>
                <span className="text-color-white">{'}'}</span>
              </code>
            </pre>
            <button
              onClick={() => copyToClipboard(`import { Heart, Star, Home } from '@unizap/uniline';

function App() {
  return (
    <div>
      <Heart size={24} color="red" />
      <Star size={24} fill={true} />
      <Home size={32} strokeWidth={1.5} />
    </div>
  );
}`, 'usage-react')}
              className="absolute top-3 right-3 p-1.5 rounded bg-color-gray-700 hover:bg-color-gray-600 text-color-gray-300 cursor-pointer"
            >
              {copiedCode === 'usage-react' ? (
                <Icon name="check" category="system" size={16} color="currentColor" />
              ) : (
                <Icon name="clipboard" category="business" size={16} color="currentColor" />
              )}
            </button>
          </div>
        </div>

        {/* Props */}
        <div className="md:mb-12">
          <h2 className="text-2xl font-bold text-color-gray-900 dark:text-color-white mb-6">
            Props
          </h2>
          <div className="overflow-x-auto rounded-lg border border-color-gray-200 dark:border-color-gray-700">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-color-gray-50 dark:bg-color-gray-800">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-color-gray-900 dark:text-color-white whitespace-nowrap">Prop</th>
                  <th className="text-left py-3 px-4 font-semibold text-color-gray-900 dark:text-color-white whitespace-nowrap">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-color-gray-900 dark:text-color-white whitespace-nowrap">Default</th>
                  <th className="text-left py-3 px-4 font-semibold text-color-gray-900 dark:text-color-white">Description</th>
                </tr>
              </thead>
              <tbody className="text-color-gray-600 dark:text-color-gray-400 divide-y divide-color-gray-100 dark:divide-color-gray-800">
                <tr className="bg-color-white dark:bg-color-gray-900">
                  <td className="py-3 px-4 font-mono text-color-primary text-xs">size</td>
                  <td className="py-3 px-4 font-mono text-xs bg-color-gray-100 dark:bg-color-gray-800">number</td>
                  <td className="py-3 px-4 font-mono text-xs">24</td>
                  <td className="py-3 px-4">Size of the icon in pixels</td>
                </tr>
                <tr className="bg-color-white dark:bg-color-gray-900">
                  <td className="py-3 px-4 font-mono text-color-primary text-xs">color</td>
                  <td className="py-3 px-4 font-mono text-xs bg-color-gray-100 dark:bg-color-gray-800">string</td>
                  <td className="py-3 px-4 font-mono text-xs">currentColor</td>
                  <td className="py-3 px-4">Color of the icon</td>
                </tr>
                <tr className="bg-color-white dark:bg-color-gray-900">
                  <td className="py-3 px-4 font-mono text-color-primary text-xs">strokeWidth</td>
                  <td className="py-3 px-4 font-mono text-xs bg-color-gray-100 dark:bg-color-gray-800">number</td>
                  <td className="py-3 px-4 font-mono text-xs">2</td>
                  <td className="py-3 px-4">Stroke width for outline icons</td>
                </tr>
                <tr className="bg-color-white dark:bg-color-gray-900">
                  <td className="py-3 px-4 font-mono text-color-primary text-xs">fill</td>
                  <td className="py-3 px-4 font-mono text-xs bg-color-gray-100 dark:bg-color-gray-800">boolean</td>
                  <td className="py-3 px-4 font-mono text-xs">false</td>
                  <td className="py-3 px-4">Use filled variant</td>
                </tr>
                <tr className="bg-color-white dark:bg-color-gray-900">
                  <td className="py-3 px-4 font-mono text-color-primary text-xs">className</td>
                  <td className="py-3 px-4 font-mono text-xs bg-color-gray-100 dark:bg-color-gray-800 rounded">string</td>
                  <td className="py-3 px-4 font-mono text-xs">-</td>
                  <td className="py-3 px-4">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
              </main>
            </div>

      <Footer />
    </div>
  );
}
