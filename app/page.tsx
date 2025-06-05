'use client';
import React, { useState, useEffect } from 'react';
import { Code, Zap, Users, Lightbulb, Rocket, ChevronDown, ExternalLink } from 'lucide-react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 text-center px-8">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              ARIMURA HIROAKI
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-4"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Portfolio
          </h2>
          <p className="text-2xl md:text-3xl mb-12 text-gray-300">
            エンジニア × スピード × 実行力
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-500 rounded-full">Next.js</span>
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-500 rounded-full">TypeScript</span>
            <span className="px-4 py-2 bg-green-600/20 border border-green-500 rounded-full">AI Integration</span>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </h2>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              有村 大旭 (Hiroaki Arimura)
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              新技術への挑戦と実践で価値を生み出すエンジニア
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">🍜 大食い系エンジニア</h3>
              <p className="text-gray-300">スシロー20皿完食。二郎系からイタリアンまで</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">🤖 AI課金9,000円/月</h3>
              <p className="text-gray-300">ChatGPT, Cursor, Claude。最新技術への投資は惜しまない</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4">🚀 個人開発</h3>
              <p className="text-gray-300">React Native × Unity。App Store5つ星レビューを夢見て</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-400">Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <span>React</span>
                  <span className="text-green-400">1年2ヶ月</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <span>Next.js</span>
                  <span className="text-green-400">7ヶ月</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <span>TypeScript</span>
                  <span className="text-green-400">7ヶ月</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-400">Backend & Others</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <span>Python (Django)</span>
                  <span className="text-green-400">1年6ヶ月</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <span>Supabase</span>
                  <span className="text-green-400">1年2ヶ月</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <span>Java</span>
                  <span className="text-green-400">3ヶ月</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Key Projects
          </h2>

          {/* Project 1 - AI Integration */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                <h3 className="text-3xl font-bold">AI目標達成支援アプリ</h3>
                <a
                  href="https://achivo-mock3.vercel.app/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500 rounded-lg hover:bg-blue-600/30 transition-all duration-300"
                >
                  <span className="text-sm font-medium">デモを見る</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xl mb-4 text-gray-300">Dify × Next.js × AIで実現する革新的UX</p>
                  <div className="space-y-2">
                    <p className="text-blue-400 font-semibold">✓ 新技術の学習と実践への適応能力</p>
                    <p className="text-purple-400 font-semibold">✓ ノーコードツールとコーディングの融合</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <code className="text-sm text-green-400">
                    <div>// AI Integration Example</div>
                    <div>const aiResponse = await difyAPI.chat(userGoal);</div>
                    <div>const tasks = parseToTasks(aiResponse);</div>
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Speed Development */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-3xl font-bold">1日で構築したブログアプリ</h3>
                <a
                  href="https://knownext-gamma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500 rounded-lg hover:bg-green-600/30 transition-all duration-300"
                >
                  <span className="text-sm font-medium">サイトを見る</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xl mb-4 text-gray-300">Cursor活用による超高速開発</p>
              <p className="text-green-400 font-semibold text-lg">✓ 品質とスピードの両立</p>
              <div className="mt-4">
                <div className="inline-block bg-gray-800 px-4 py-2 rounded-lg">
                  <span className="text-gray-400">開発時間：</span>
                  <span className="text-2xl font-bold text-green-400 ml-2">24時間</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Project Management */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold">課題収集システム</h3>
                <a
                  href="https://issu-collect-app-mock.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500 rounded-lg hover:bg-purple-600/30 transition-all duration-300"
                >
                  <span className="text-sm font-medium">デモを見る</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xl mb-4 text-gray-300">300件超のアイデアをシステム化</p>
                  <div className="space-y-2">
                    <p className="text-purple-400 font-semibold">✓ 複数のステークホルダーとのプロジェクトリード経験</p>
                    <p className="text-pink-400 font-semibold">✓ プロダクトオーナーとしてスクラム開発を推進</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20"></div>
                    <div className="relative bg-gray-800 p-6 rounded-lg">
                      <div className="text-center">
                        <p className="text-gray-400">関係者数</p>
                        <p className="text-4xl font-bold text-purple-400">部長・マネージャー含む20名+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 - Performance Optimization */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Rocket className="w-8 h-8 text-orange-400" />
                <h3 className="text-3xl font-bold">パフォーマンス改善プロジェクト</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xl mb-4 text-gray-300">OJTプレゼンでのモダナイズ提案</p>
                  <p className="text-orange-400 font-semibold">✓ 品質基準の向上への取り組み</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-900/30 p-4 rounded-lg flex-1">
                    <p className="text-sm text-gray-400 mb-2">Before</p>
                    <p className="text-3xl font-bold text-red-400">74</p>
                    <p className="text-sm text-gray-400">Performance Score</p>
                    <a
                      href="https://hiro0211.github.io/Self-Introduction-webSite9-4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1 text-sm text-red-300 hover:text-red-200 transition-colors"
                    >
                      旧サイト <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="bg-green-900/30 p-4 rounded-lg flex-1">
                    <p className="text-sm text-gray-400 mb-2">After</p>
                    <p className="text-3xl font-bold text-green-400">97</p>
                    <p className="text-sm text-gray-400">Performance Score</p>
                    <a
                      href="https://claude-ojt-plan5-15.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1 text-sm text-green-300 hover:text-green-200 transition-colors"
                    >
                      新サイト <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 - Education */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-teal-600/10 to-cyan-600/10 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-8 h-8 text-teal-400" />
                <h3 className="text-3xl font-bold">プログラミング教育</h3>
              </div>
              <p className="text-xl mb-4 text-gray-300">チューターとして初心者をサポート</p>
              <p className="text-teal-400 font-semibold">✓ 技術を分かりやすく伝える能力</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            私の強み
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500">
              <h3 className="text-3xl font-bold mb-4 text-blue-400">スピード開発力</h3>
              <p className="text-xl text-gray-300">1日でブログアプリ構築。Cursor × AIで実現する超高速開発</p>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500">
              <h3 className="text-3xl font-bold mb-4 text-purple-400">実行力</h3>
              <p className="text-xl text-gray-300">アイデアを形に。プロジェクト立ち上げから推進まで</p>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-2xl text-gray-300">新技術への挑戦と実践で</p>
            <p className="text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              価値を生み出すエンジニア
            </p>
            <div className="mt-8">
              <p className="text-4xl font-bold text-white">
                ARIMURA HIROAKI
              </p>
              <div className="h-1 w-48 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
