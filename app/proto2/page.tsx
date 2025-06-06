"use client";

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBrain,
    faChevronRight,
    faBullseye,
    faUsers,
    faHeart,
    faShare,
    faLightbulb,
    faImage,
    faMagicWandSparkles,
    faRocket,
    faTachometerAlt,
    faWrench,
    faEye
} from '@fortawesome/free-solid-svg-icons';

const GrowthStorySection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-left mb-12 text-gray-800 border-l-4 border-blue-500 pl-4">
                    半年間の歩み
                </h2>
                <div className="max-w-7xl mx-auto">
                    {/* サブセクション① AI活用・AI機能構築の取り組み */}
                    <div id="ai-development" className="mb-20 animate-on-scroll">
                        <div className="transition-all duration-1000 opacity-100 translate-y-0">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-500 mb-8">
                                <h3 className="text-2xl font-bold mb-6 text-blue-700 flex items-center">
                                    <FontAwesomeIcon icon={faBrain} className="mr-3" />
                                    AIの取り組み
                                </h3>

                                {/* Before/After比較 */}
                                <div className="relative mb-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">                                        {/* BEFORE カード */}
                                        <div id="before-card" className="animate-on-scroll">
                                            <div className="transform transition-all duration-1000 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl opacity-100 translate-x-0">
                                                <div className="bg-gradient-to-br from-red-50 via-red-25 to-red-100 p-8 rounded-2xl border-l-4 border-red-500 shadow-lg relative overflow-hidden">
                                                    {/* 背景装飾 */}
                                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                                        <div className="w-full h-full bg-red-300 rounded-full blur-2xl"></div>
                                                    </div>

                                                    <div className="relative z-10">
                                                        <div className="flex items-center justify-between mb-6">
                                                            <h4 className="text-xl font-bold text-red-800 flex items-center">
                                                                <div className="bg-red-200 p-3 rounded-full mr-4">
                                                                    <FontAwesomeIcon icon={faChevronRight} className="text-red-600 text-lg rotate-180" />
                                                                </div>
                                                                <div>
                                                                    <div className="text-sm text-red-600 font-medium">Before</div>
                                                                    <div className="text-lg">AI活用レベル</div>
                                                                </div>
                                                            </h4>
                                                            <div className="bg-red-200 p-2 rounded-lg">
                                                                <span className="text-red-700 text-2xl">😓</span>
                                                            </div>
                                                        </div>

                                                        <ul className="space-y-4">
                                                            <li className="flex items-start group">
                                                                <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                                                                    <span className="text-red-600 text-sm">✗</span>
                                                                </div>
                                                                <span className="text-gray-800 font-medium group-hover:text-red-800 transition-colors">
                                                                    ChatGPTでコード生成を補助的に利用
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start group">
                                                                <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                                                                    <span className="text-red-600 text-sm">✗</span>
                                                                </div>
                                                                <span className="text-gray-800 font-medium group-hover:text-red-800 transition-colors">
                                                                    エラー解決にChatGPTを活用
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start group">
                                                                <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                                                                    <span className="text-red-600 text-sm">✗</span>
                                                                </div>
                                                                <span className="text-gray-800 font-medium group-hover:text-red-800 transition-colors">
                                                                    AI機能構築未経験
                                                                </span>
                                                            </li>
                                                        </ul>

                                                        <div className="mt-6 p-3 bg-red-100 rounded-lg border border-red-200">
                                                            <p className="text-red-700 text-sm font-medium text-center">
                                                                📊 基礎レベル：補助的な活用のみ
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 変化を示す矢印 - デスクトップ用 */}
                                        <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                            <div id="arrow-animation" className="animate-on-scroll">
                                                <div className="transform transition-all duration-1500 delay-500 opacity-100 scale-100">
                                                    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-full shadow-xl">
                                                        <FontAwesomeIcon icon={faChevronRight} className="text-white text-2xl animate-pulse" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 変化を示す矢印 - モバイル用 */}
                                        <div className="lg:hidden flex justify-center my-6">
                                            <div id="arrow-mobile" className="animate-on-scroll">
                                                <div className="transform transition-all duration-1500 delay-500 rotate-90 opacity-100 scale-100">
                                                    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-full shadow-xl">
                                                        <FontAwesomeIcon icon={faChevronRight} className="text-white text-xl animate-pulse" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* AFTER カード */}
                                        <div id="after-card" className="animate-on-scroll">
                                            <div className="transform transition-all duration-1000 delay-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl opacity-100 translate-x-0">
                                                <div className="bg-gradient-to-br from-green-50 via-green-25 to-emerald-100 p-8 rounded-2xl border-l-4 border-green-500 shadow-lg relative overflow-hidden">
                                                    {/* 背景装飾 */}
                                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                                        <div className="w-full h-full bg-green-300 rounded-full blur-2xl"></div>
                                                    </div>

                                                    <div className="relative z-10">
                                                        <div className="flex items-center justify-between mb-6">
                                                            <h4 className="text-xl font-bold text-green-800 flex items-center">
                                                                <div className="bg-green-200 p-3 rounded-full mr-4">
                                                                    <FontAwesomeIcon icon={faChevronRight} className="text-green-600 text-lg" />
                                                                </div>
                                                                <div>
                                                                    <div className="text-sm text-green-600 font-medium">After</div>
                                                                    <div className="text-lg">AI実装可能レベル</div>
                                                                </div>
                                                            </h4>
                                                            <div className="bg-green-200 p-2 rounded-lg">
                                                                <span className="text-green-700 text-2xl">🚀</span>
                                                            </div>
                                                        </div>

                                                        <ul className="space-y-4">
                                                            <li className="flex items-start group">
                                                                <div className="bg-green-200 rounded-full p-1 mr-3 mt-1">
                                                                    <span className="text-green-600 text-sm">✓</span>
                                                                </div>
                                                                <span className="text-gray-800 font-medium group-hover:text-green-800 transition-colors">
                                                                    ChatGPT APIを活用したAIアプリ開発
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start group">
                                                                <div className="bg-green-200 rounded-full p-1 mr-3 mt-1">
                                                                    <span className="text-green-600 text-sm">✓</span>
                                                                </div>
                                                                <span className="text-gray-800 font-medium group-hover:text-green-800 transition-colors">
                                                                    AIエージェントによるコード生成
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start group">
                                                                <div className="bg-green-200 rounded-full p-1 mr-3 mt-1">
                                                                    <span className="text-green-600 text-sm">✓</span>
                                                                </div>
                                                                <span className="text-gray-800 font-medium group-hover:text-green-800 transition-colors">
                                                                    コスト管理とパフォーマンス最適化
                                                                </span>
                                                            </li>
                                                        </ul>

                                                        <div className="mt-6 p-3 bg-green-100 rounded-lg border border-green-200">
                                                            <p className="text-green-700 text-sm font-medium text-center">
                                                                🎯 上級レベル：本格的な開発・実装
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 開発したアプリケーション */}
                                <div className="mb-8">
                                    <div className="w-full">
                                        <div className="bg-gradient-to-br from-white via-blue-25 to-blue-50 p-8 shadow-xl border-2 border-blue-300 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:via-blue-100 hover:to-blue-150 hover:border-blue-400 cursor-pointer relative overflow-hidden">

                                            <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                                <div className="w-full h-full bg-blue-400 rounded-full blur-3xl"></div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                                                <div className="w-full h-full bg-indigo-400 rounded-full blur-2xl"></div>
                                            </div>

                                            <div className="relative z-10">
                                                <div className="flex items-center mb-6">
                                                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-4 mr-4 transition-all duration-300 hover:from-blue-200 hover:to-blue-300 hover:scale-110">
                                                        <FontAwesomeIcon icon={faBullseye} className="text-blue-600 text-2xl transition-transform hover:scale-125 hover:rotate-12" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-blue-800 mb-2">目標達成支援アプリ</h4>
                                                        <p className="text-blue-600 text-lg font-medium">AIタスク提案機能付き</p>
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <p className="text-gray-700 text-base mb-4 transition-colors hover:text-blue-700 leading-relaxed">
                                                        理想のライフスタイルから四半期目標、1か月、1週間、1日のタスクを自動生成する
                                                    </p>


                                                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-blue-200">
                                                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                            <span className="text-blue-600 mr-2">🛠️</span>
                                                            技術スタック
                                                        </h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">Next.js</span>
                                                            <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">ChatGPT API</span>
                                                            <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">TailwindCSS</span>
                                                            <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-yellow-200 hover:to-yellow-300 hover:scale-105">TypeScript</span>
                                                            <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">Dify</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <a href="https://achivo-mock3.vercel.app/" target="_blank" rel="noopener noreferrer"
                                                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:translate-x-2 hover:shadow-lg group">
                                                    <FontAwesomeIcon icon={faChevronRight} className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1" />
                                                    デモを見る
                                                    <span className="ml-2 text-sm opacity-75">→</span>
                                                </a>                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* GitHub Copilotを活用したWebサイトのモダナイズ化 */}
                                <div className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200">
                                    <h4 className="font-bold text-orange-700 mb-4 flex items-center">
                                        <FontAwesomeIcon icon={faRocket} className="mr-3 text-orange-600" />
                                        GitHub Copilotを活用したWebサイトのモダナイズ化
                                    </h4>
                                    <p className="text-gray-700 text-sm mb-6">
                                        既存のHTML/CSS/JavaScriptサイトをNext.js/TypeScript/TailwindCSSを使用してモダンなアーキテクチャに全面刷新
                                    </p>
                                    {/* Before/After比較 */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                        {/* Before */}
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-red-50 hover:border-red-300 cursor-pointer">
                                            <div className="flex items-center mb-3">
                                                <div className="bg-red-100 rounded-full p-2 mr-3 transition-all duration-300 hover:bg-red-200">
                                                    <FontAwesomeIcon icon={faWrench} className="text-red-600 text-lg transition-transform hover:scale-125" />
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-red-800 transition-colors hover:text-red-900">Before</h5>
                                                    <p className="text-red-600 text-xs">従来のWebサイト</p>
                                                </div>
                                            </div>
                                            <ul className="text-gray-600 text-sm space-y-2 mb-4">
                                                <li className="transition-all duration-200 hover:text-red-700 hover:font-medium hover:translate-x-2">• HTML/CSS/JavaScript</li>
                                                <li className="transition-all duration-200 hover:text-red-700 hover:font-medium hover:translate-x-2">• 静的な構造</li>
                                                <li className="transition-all duration-200 hover:text-red-700 hover:font-medium hover:translate-x-2">• 保守性に課題</li>
                                                <li className="transition-all duration-200 hover:text-red-700 hover:font-medium hover:translate-x-2">• モバイル対応が不十分</li>
                                            </ul>
                                            <a href="https://hiro0211.github.io/Self-Introduction-webSite9-4/" target="_blank" rel="noopener noreferrer"
                                                className="inline-flex items-center text-red-600 hover:text-red-800 font-medium text-sm transition-all duration-200 hover:translate-x-2">
                                                <FontAwesomeIcon icon={faEye} className="mr-2 transition-transform hover:scale-125" />
                                                旧サイトを見る
                                            </a>
                                        </div>

                                        {/* After */}
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 hover:border-green-300 cursor-pointer">
                                            <div className="flex items-center mb-3">
                                                <div className="bg-green-100 rounded-full p-2 mr-3 transition-all duration-300 hover:bg-green-200">
                                                    <FontAwesomeIcon icon={faRocket} className="text-green-600 text-lg transition-transform hover:scale-125" />
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-green-800 transition-colors hover:text-green-900">After</h5>
                                                    <p className="text-green-600 text-xs">モダンWebサイト</p>
                                                </div>
                                            </div>
                                            <ul className="text-gray-600 text-sm space-y-2 mb-4">
                                                <li className="transition-all duration-200 hover:text-green-700 hover:font-medium hover:translate-x-2">• Next.js + TypeScript</li>
                                                <li className="transition-all duration-200 hover:text-green-700 hover:font-medium hover:translate-x-2">• TailwindCSS + コンポーネント設計</li>
                                                <li className="transition-all duration-200 hover:text-green-700 hover:font-medium hover:translate-x-2">• レスポンシブデザイン</li>
                                                <li className="transition-all duration-200 hover:text-green-700 hover:font-medium hover:translate-x-2">• モダンなアニメーション</li>
                                            </ul>
                                            <a href="https://claude-ojt-plan5-15.vercel.app/" target="_blank" rel="noopener noreferrer"
                                                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm transition-all duration-200 hover:translate-x-2">
                                                <FontAwesomeIcon icon={faEye} className="mr-2 transition-transform hover:scale-125" />
                                                新サイトを見る
                                            </a>
                                        </div>                                    </div>

                                    {/* パフォーマンス比較 */}
                                    <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
                                        <h5 className="font-semibold text-gray-800 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faTachometerAlt} className="text-blue-600 mr-2" />
                                            パフォーマンス比較（Lighthouse測定結果）
                                        </h5>                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">                                            {/* Before パフォーマンス */}
                                            <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                                                <h6 className="font-semibold text-red-700 mb-3">改善前</h6>
                                                <div className="bg-red-50 p-4 rounded-lg border border-red-200 hover:bg-red-100 transition-colors h-full flex flex-col">
                                                    <div className="flex-1 flex items-center justify-center mb-4">
                                                        <Image
                                                            src="/BeforeOJTWebSite.png"
                                                            alt="改善前のパフォーマンススコア"
                                                            width={400}
                                                            height={350}
                                                            className="w-full h-[350px] object-contain rounded-lg shadow-md"
                                                        />
                                                    </div>
                                                    <div className="mt-auto p-2 bg-red-100 rounded">
                                                        <p className="text-red-700 text-lg font-bold">74</p>
                                                        <p className="text-red-600 text-sm">パフォーマンススコア</p>
                                                        <p className="text-red-500 text-xs">改善の余地あり</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* After パフォーマンス */}
                                            <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                                                <h6 className="font-semibold text-green-700 mb-3">改善後</h6>
                                                <div className="bg-green-50 p-4 rounded-lg border border-green-200 hover:bg-green-100 transition-colors h-full flex flex-col">
                                                    <div className="flex-1 flex items-center justify-center mb-4">
                                                        <Image
                                                            src="/AfterOJTWebSite2.png"
                                                            alt="改善後のパフォーマンススコア"
                                                            width={400}
                                                            height={350}
                                                            className="w-full h-[350px] object-contain rounded-lg shadow-md"
                                                        />
                                                    </div>
                                                    <div className="mt-auto p-2 bg-green-100 rounded">
                                                        <p className="text-green-700 text-lg font-bold">97</p>
                                                        <p className="text-green-600 text-sm">パフォーマンススコア</p>
                                                        <p className="text-green-500 text-xs">優秀レベル達成！</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                        {/* パフォーマンス改善の数値 */}
                                        <div className="mt-6 text-center">
                                            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-green-100 px-6 py-3 rounded-full mt-6 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                                                <span className="text-2xl font-bold text-red-600 mr-2">74</span>
                                                <span className="text-gray-600 mr-2">→</span>
                                                <span className="text-2xl font-bold text-green-600 mr-3">100</span>
                                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    +26ポイント向上
                                                </span>
                                            </div>

                                            {/* より詳細な改善指標 */}
                                            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                                                    <div className="text-lg font-bold text-blue-600">100</div>
                                                    <div className="text-xs text-blue-500 mb-1">パフォーマンス</div>
                                                    <div className="text-xs text-green-600 font-semibold">+35%向上</div>
                                                </div>
                                                <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
                                                    <div className="text-lg font-bold text-green-600">100</div>
                                                    <div className="text-xs text-green-500 mb-1">ユーザー補助</div>
                                                    <div className="text-xs text-green-600 font-semibold">+12%向上</div>
                                                </div>
                                                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                                                    <div className="text-lg font-bold text-purple-600">100</div>
                                                    <div className="text-xs text-purple-500 mb-1">SEO</div>
                                                    <div className="text-xs text-green-500 font-semibold">+11%向上</div>
                                                </div>
                                                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 text-center">
                                                    <div className="text-lg font-bold text-orange-600">100</div>
                                                    <div className="text-xs text-orange-500 mb-1">ベストプラクティス</div>
                                                    <div className="text-xs text-green-600 font-semibold">+4%向上</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 改善効果 */}
                                    <div className="bg-white p-4 rounded-lg border border-orange-200">
                                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                            <FontAwesomeIcon icon={faTachometerAlt} className="text-orange-600 mr-2" />
                                            モダナイズ化による改善効果
                                        </h5>                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer p-2 rounded-lg hover:bg-orange-50">
                                                <div className="text-2xl mb-2 transition-transform hover:scale-125">⚡</div>
                                                <p className="text-xs font-medium text-gray-700 transition-colors hover:text-orange-700">読み込み速度</p>
                                                <p className="text-xs text-gray-600 transition-colors hover:text-orange-600">大幅に向上</p>
                                            </div>
                                            <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer p-2 rounded-lg hover:bg-orange-50">
                                                <div className="text-2xl mb-2 transition-transform hover:scale-125">🔧</div>
                                                <p className="text-xs font-medium text-gray-700 transition-colors hover:text-orange-700">保守性</p>
                                                <p className="text-xs text-gray-600 transition-colors hover:text-orange-600">コンポーネント化</p>
                                            </div>
                                            <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer p-2 rounded-lg hover:bg-orange-50">
                                                <div className="text-2xl mb-2 transition-transform hover:scale-125">📱</div>
                                                <p className="text-xs font-medium text-gray-700 transition-colors hover:text-orange-700">可読性</p>
                                                <p className="text-xs text-gray-600 transition-colors hover:text-orange-600">TypeScript導入</p>
                                            </div>
                                            <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer p-2 rounded-lg hover:bg-orange-50">
                                                <div className="text-2xl mb-2 transition-transform hover:scale-125">🎨</div>
                                                <p className="text-xs font-medium text-gray-700 transition-colors hover:text-orange-700">UI/UX</p>
                                                <p className="text-xs text-gray-600 transition-colors hover:text-orange-600">モダンデザイン</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* VivaEngageでのAIツール共有 */}
                                <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                                    <h4 className="font-bold text-purple-700 mb-4 flex items-center">
                                        <FontAwesomeIcon icon={faShare} className="mr-3 text-purple-600" />
                                        VivaEngageでのAIツール・活用事例共有
                                    </h4>
                                    <p className="text-gray-700 text-sm mb-6">
                                        VivaEngageを通じて、最新のAIツールや活用方法を積極的に共有し、組織全体のAI活用レベル向上に貢献
                                    </p>                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-purple-50 hover:border-purple-300 cursor-pointer">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-purple-100 rounded-full p-2 mr-3 transition-all duration-300 hover:bg-purple-200">
                                                <FontAwesomeIcon icon={faLightbulb} className="text-purple-600 text-lg transition-transform hover:scale-125" />
                                            </div>
                                            <h5 className="font-semibold text-gray-800 transition-colors hover:text-purple-800">Gemini DeepResearch</h5>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3 transition-colors hover:text-purple-700">
                                            深い調査・分析に特化したAIツールの活用方法と具体的な使用例を紹介
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs transition-all hover:bg-purple-200">調査・分析</span>
                                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs transition-all hover:bg-blue-200">深掘り</span>
                                        </div>
                                        <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm transition-all duration-200 hover:translate-x-2">
                                            <FontAwesomeIcon icon={faChevronRight} className="mr-2 transition-transform hover:scale-125" />
                                            Geminiにアクセス
                                        </a>
                                    </div>                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-100 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-pink-50 hover:border-pink-300 cursor-pointer">
                                            <div className="flex items-center mb-3">
                                                <div className="bg-pink-100 rounded-full p-2 mr-3 transition-all duration-300 hover:bg-pink-200">
                                                    <FontAwesomeIcon icon={faImage} className="text-pink-600 text-lg transition-transform hover:scale-125" />
                                                </div>
                                                <h5 className="font-semibold text-gray-800 transition-colors hover:text-pink-800">ChatGPT画像生成</h5>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-3 transition-colors hover:text-pink-700">
                                                DALL-E 3を活用した高品質な画像生成のテクニックとビジネス活用事例を共有
                                            </p>
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs transition-all hover:bg-pink-200">画像生成</span>
                                                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs transition-all hover:bg-orange-200">クリエイティブ</span>
                                            </div>
                                            <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer"
                                                className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium text-sm transition-all duration-200 hover:translate-x-2">
                                                <FontAwesomeIcon icon={faChevronRight} className="mr-2 transition-transform hover:scale-125" />
                                                ChatGPTにアクセス
                                            </a>
                                        </div>                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-indigo-50 hover:border-indigo-300 cursor-pointer">
                                            <div className="flex items-center mb-3">
                                                <div className="bg-indigo-100 rounded-full p-2 mr-3 transition-all duration-300 hover:bg-indigo-200">
                                                    <FontAwesomeIcon icon={faMagicWandSparkles} className="text-indigo-600 text-lg transition-transform hover:scale-125" />
                                                </div>
                                                <h5 className="font-semibold text-gray-800 transition-colors hover:text-indigo-800">Bolt</h5>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-3 transition-colors hover:text-indigo-700">
                                                プロンプト1行でWebアプリケーションを高速に開発できるツールを紹介
                                            </p>
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs transition-all hover:bg-indigo-200">Web開発</span>
                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs transition-all hover:bg-green-200">高速化</span>
                                            </div>
                                            <a href="https://bolt.new/?rid=7wgm0g" target="_blank" rel="noopener noreferrer"
                                                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-all duration-200 hover:translate-x-2">
                                                <FontAwesomeIcon icon={faChevronRight} className="mr-2 transition-transform hover:scale-125" />
                                                Boltにアクセス
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-6 bg-white p-4 rounded-lg border border-purple-200">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h5 className="font-semibold text-gray-800 mb-2">共有による効果</h5>
                                                <ul className="text-gray-600 text-sm space-y-1">
                                                    <li>• 上司、同僚からの質問対応と活用共有</li>
                                                    <li>• 全社交流コミュニティのカバー写真作成</li>
                                                    <li>• 企画書作成のプロンプトテンプレートを作成</li>
                                                </ul>
                                            </div>
                                            <div className="text-purple-600 text-3xl">
                                                📈
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 習得した技術スキル */}
                                {/* <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-blue-700 mb-4">🎯 習得した技術スキル</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="text-center">
                                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                                <div className="text-blue-600 text-2xl mb-2">🤖</div>
                                                <p className="text-sm font-medium text-gray-800">API統合</p>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                                <div className="text-green-600 text-2xl mb-2">💰</div>
                                                <p className="text-sm font-medium text-gray-800">コスト管理</p>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                                <div className="text-purple-600 text-2xl mb-2">⚡</div>
                                                <p className="text-sm font-medium text-gray-800">性能最適化</p>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                                <div className="text-orange-600 text-2xl mb-2">🎨</div>
                                                <p className="text-sm font-medium text-gray-800">UX設計</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* サブセクション② 課題収集システム概要 */}
                    <div id="system-overview" className="mb-20 animate-on-scroll">
                        <div className="transition-all duration-1000 opacity-100 translate-y-0">
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-green-500 mb-8">
                                <h3 className="text-2xl font-bold mb-6 text-green-700 flex items-center">
                                    <FontAwesomeIcon icon={faUsers} className="mr-3" />
                                    課題収集システム
                                </h3>

                                {/* システム概要 */}                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-red-200 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-red-50 hover:border-red-400 cursor-pointer">
                                        <h4 className="font-bold text-red-700 mb-3 flex items-center transition-colors hover:text-red-800">
                                            <span className="text-xl mr-2 transition-transform hover:scale-125">🚨</span>
                                            解決すべき課題
                                        </h4>
                                        <ul className="space-y-2 text-gray-700 text-sm">
                                            <li className="hover:text-red-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• アイデアを管理しきれない</li>
                                            <li className="hover:text-red-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• Excelシートが使いにくい</li>
                                            <li className="hover:text-red-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• アイデア共有の非効率性</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-green-200 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-green-50 hover:border-green-400 cursor-pointer">
                                        <h4 className="font-bold text-green-700 mb-3 flex items-center transition-colors hover:text-green-800">
                                            <span className="text-xl mr-2 transition-transform hover:scale-125">✨</span>
                                            Vision
                                        </h4>
                                        <ul className="space-y-2 text-gray-700 text-sm">
                                            <li className="hover:text-green-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• PoCや新規事業構築までのスピードを上げる</li>
                                            <li className="hover:text-green-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• 部署内の課題共有を円滑にする</li>
                                            <li className="hover:text-green-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• システム自体を他社に販売する</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-blue-50 hover:border-blue-400 cursor-pointer">
                                        <h4 className="font-bold text-blue-700 mb-3 flex items-center transition-colors hover:text-blue-800">
                                            <span className="text-xl mr-2 transition-transform hover:scale-125">🎯</span>
                                            私のアプローチ
                                        </h4>
                                        <ul className="space-y-2 text-gray-700 text-sm">
                                            <li className="hover:text-blue-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• スクラム開発手法の導入</li>
                                            <li className="hover:text-blue-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• プロダクトオーナーとして牽引</li>
                                            <li className="hover:text-blue-700 hover:font-medium transition-all duration-200 hover:translate-x-2">• ユーザーインタビューと課題分析</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* システム機能概要 */}
                                {/* <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                                        <FontAwesomeIcon icon={faCogs} className="text-green-600 mr-3" />
                                        開発予定の機能
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="font-semibold text-green-700 mb-3">📝 課題投稿・管理機能</h5>
                                            <ul className="space-y-2 text-gray-700 text-sm">
                                                <li className="flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                                    <span>直感的なフォームでの課題投稿</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                                    <span>カテゴリ別の課題分類</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-yellow-500 mr-2 mt-1">⚡</span>
                                                    <span>優先度設定と進捗管理</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-green-700 mb-3">👥 コラボレーション機能</h5>
                                            <ul className="space-y-2 text-gray-700 text-sm">
                                                <li className="flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                                    <span>コメント機能</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-yellow-500 mr-2 mt-1">⚡</span>
                                                    <span>チーム内投票・評価システム</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-gray-400 mr-2 mt-1">🔒</span>
                                                    <span>通知・アラート機能</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                {/* デモアクセス */}
                                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl text-center">
                                    <h4 className="font-bold text-green-700 mb-3">🚀 開発中システムのデモ</h4>
                                    <p className="text-gray-700 mb-4">課題収集システムのプロトタイプをご覧いただけます</p>
                                    <a href="https://issu-collect-app-mock.vercel.app/" target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                                        <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                                        デモシステムにアクセス
                                    </a>
                                    <p className="text-gray-600 text-xs mt-2">※ 開発中のため、UIのみの実装になります</p>
                                </div>

                                {/* チームリーダーとしての学び */}
                                <div className="mt-8 bg-green-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-green-700 mb-4">👑 チームリーダーとして学んだこと</h4>                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                                            <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-2xl hover:bg-green-50">
                                                <FontAwesomeIcon icon={faBullseye} className="text-green-600 text-2xl mb-2 transition-transform hover:scale-125" />
                                                <h5 className="font-semibold text-gray-800 mb-2 transition-colors hover:text-green-800">ビジョン共有</h5>
                                                <p className="text-gray-600 text-sm transition-colors hover:text-green-700">明確な目標設定で チーム方向性を統一</p>
                                            </div>
                                        </div>
                                        <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                                            <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-2xl hover:bg-blue-50">
                                                <FontAwesomeIcon icon={faUsers} className="text-blue-600 text-2xl mb-2 transition-transform hover:scale-125" />
                                                <h5 className="font-semibold text-gray-800 mb-2 transition-colors hover:text-blue-800">継続的対話</h5>
                                                <p className="text-gray-600 text-sm transition-colors hover:text-blue-700">ステークホルダーとの 定期的なコミュニケーション</p>
                                            </div>
                                        </div>
                                        <div className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                                            <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-2xl hover:bg-purple-50">
                                                <FontAwesomeIcon icon={faHeart} className="text-purple-600 text-2xl mb-2 transition-transform hover:scale-125" />
                                                <h5 className="font-semibold text-gray-800 mb-2 transition-colors hover:text-purple-800">タスク管理</h5>
                                                <p className="text-gray-600 text-sm transition-colors hover:text-purple-700">業務不可に応じてタスクを調整</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 統合的な学び */}
                    {/* <div id="integrated-learning" className="animate-on-scroll">
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border-l-4 border-indigo-500 transform transition-all duration-1000 opacity-100 translate-y-0">
                            <h3 className="text-2xl font-bold mb-6 text-indigo-700 flex items-center">
                                <FontAwesomeIcon icon={faGem} className="mr-3" />
                                2つのプロジェクトから得た統合的な学び
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-blue-600 text-3xl mb-3">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">技術×ビジネス視点</h4>
                                    <p className="text-gray-700 text-sm">AIエンジニアには技術だけでなく、ビジネス課題を理解し解決に導く力が必要</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-green-600 text-3xl mb-3">
                                        <FontAwesomeIcon icon={faCogs} />
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">課題設定の重要性</h4>
                                    <p className="text-gray-700 text-sm">正しい課題を見つけることが、価値あるソリューション創出の第一歩</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-purple-600 text-3xl mb-3">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">チーム力の可能性</h4>
                                    <p className="text-gray-700 text-sm">明確なビジョンがあれば、メンバーの力を最大限に引き出せる</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default GrowthStorySection;
