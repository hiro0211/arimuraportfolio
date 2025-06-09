"use client";

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBrain,
    faChevronRight,
    faBullseye,
    faUsers,
    faHeart,
    faRocket,
    faTachometerAlt,
    faWrench,
    faEye,
    faUtensils,
    faGamepad,
    faCog,
    faChalkboardTeacher,
    faPenFancy,
    faBolt,
    faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const GrowthStorySection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-left mb-12 text-gray-800 border-l-4 border-blue-500 pl-4">
                    半年間の歩み
                </h2>
                <div className="max-w-7xl mx-auto">
                    {/* サブセクション③ 自己紹介 */}
                    <div id="self-introduction" className="mb-20 animate-on-scroll">
                        <div className="transition-all duration-1000 opacity-100 translate-y-0">                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-l-4 border-purple-500 mb-8">
                            <h3 className="text-2xl font-bold mb-6 text-purple-700 flex items-center">
                                <FontAwesomeIcon icon={faHeart} className="mr-3" />
                                自己紹介
                            </h3>

                            {/* プロフィール画像セクション */}
                            <div className="flex justify-center mb-8">
                                <div className="relative group">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-300 shadow-lg transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-xl group-hover:scale-105">
                                        <Image
                                            src="/profileImage.jpg"
                                            alt="プロフィール画像"
                                            width={128}
                                            height={128}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* 装飾的なリング */}
                                    <div className="absolute inset-0 rounded-full border-2 border-purple-200 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* 食べること */}
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-orange-50 hover:border-orange-400 cursor-pointer">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-orange-100 rounded-full p-3 mr-4 transition-all duration-300 hover:bg-orange-200">
                                            <FontAwesomeIcon icon={faUtensils} className="text-orange-600 text-xl transition-transform hover:scale-125" />
                                        </div>
                                        <h4 className="text-xl font-bold text-orange-700 transition-colors hover:text-orange-800">食べること</h4>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-gray-700 text-sm transition-colors hover:text-orange-700">
                                            とにかく大食いです！食べることが大好きで、特にお寿司は何貫でも食べられます🍣
                                        </p>
                                        <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                                            <p className="text-orange-700 text-xs font-medium">
                                                💡 好きな食べ物：寿司、ラーメン、焼肉
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* AI・生成AI */}
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50 hover:border-blue-400 cursor-pointer">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 rounded-full p-3 mr-4 transition-all duration-300 hover:bg-blue-200">
                                            <FontAwesomeIcon icon={faBrain} className="text-blue-600 text-xl transition-transform hover:scale-125" />
                                        </div>
                                        <h4 className="text-xl font-bold text-blue-700 transition-colors hover:text-blue-800">AI・生成AI</h4>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-gray-700 text-sm transition-colors hover:text-blue-700">
                                            毎月9000円をAIツールに投資しています。最新技術のキャッチアップと実践的な活用を心がけています。
                                        </p>
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                            <p className="text-blue-700 text-xs font-medium">
                                                💰 月額投資：ChatGPT Plus、Claude Pro、Cursor等
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* アプリ・ゲーム開発 */}
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 hover:border-green-400 cursor-pointer">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-100 rounded-full p-3 mr-4 transition-all duration-300 hover:bg-green-200">
                                            <FontAwesomeIcon icon={faGamepad} className="text-green-600 text-xl transition-transform hover:scale-125" />
                                        </div>
                                        <h4 className="text-xl font-bold text-green-700 transition-colors hover:text-green-800">アプリ・ゲーム開発</h4>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-gray-700 text-sm transition-colors hover:text-green-700">
                                            React NativeやUnityを使って、アプリやゲームの開発を趣味で行っています。
                                        </p>
                                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                                            <p className="text-green-700 text-xs font-medium">
                                                🛠️ 技術スタック：React Native、Unity、C#
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* サブセクション④ 活かせそうな経験・スキル */}
                    <div id="skills-experience" className="mb-20 animate-on-scroll">
                        <div className="transition-all duration-1000 opacity-100 translate-y-0">
                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border-l-4 border-indigo-500 mb-8">
                                <h3 className="text-2xl font-bold mb-6 text-indigo-700 flex items-center">
                                    <FontAwesomeIcon icon={faBolt} className="mr-3" />
                                    活かせそうな経験・スキル
                                </h3>

                                <div className="grid grid-cols-1 gap-8 mb-8">

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
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    {/* ②Cursorによる1日ブログアプリ開発 */}
                                    <div className="mb-8">
                                        <div className="w-full">
                                            <div className="bg-gradient-to-br from-white via-green-25 to-green-50 p-8 shadow-xl border-2 border-green-300 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:via-green-100 hover:to-green-150 hover:border-green-400 cursor-pointer relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                                    <div className="w-full h-full bg-green-400 rounded-full blur-3xl"></div>
                                                </div>
                                                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                                                    <div className="w-full h-full bg-emerald-400 rounded-full blur-2xl"></div>
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="flex items-center mb-6">
                                                        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full p-4 mr-4 transition-all duration-300 hover:from-green-200 hover:to-green-300 hover:scale-110">
                                                            <FontAwesomeIcon icon={faBolt} className="text-green-600 text-2xl transition-transform hover:scale-125 hover:rotate-12" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-green-800 mb-2">Cursorによる1日ブログアプリ開発</h4>
                                                            <p className="text-green-600 text-lg font-medium">高速開発の実証実験</p>
                                                        </div>
                                                    </div>

                                                    <div className="mb-6">
                                                        <p className="text-gray-700 text-base mb-4 transition-colors hover:text-green-700 leading-relaxed">
                                                            AIコーディングツールのCursorを活用して、わずか1日でブログアプリを開発。高速開発手法とAIツールの効果的な活用方法を習得しました。
                                                        </p>

                                                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-green-200">
                                                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                                <span className="text-green-600 mr-2">🛠️</span>
                                                                技術スタック
                                                            </h5>
                                                            <div className="flex flex-wrap gap-2">
                                                                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">Cursor</span>
                                                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">Next.js</span>
                                                                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-yellow-200 hover:to-yellow-300 hover:scale-105">TypeScript</span>
                                                                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">TailwindCSS</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="https://knownext-gamma.vercel.app/" target="_blank" rel="noopener noreferrer"
                                                        className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:translate-x-2 hover:shadow-lg group">
                                                        <FontAwesomeIcon icon={faChevronRight} className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1" />
                                                        デモを見る
                                                        <span className="ml-2 text-sm opacity-75">→</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    {/* ③課題収集システム - 詳細バージョン */}
                                    <div className="mb-8">
                                        <div className="w-full">
                                            <div className="bg-gradient-to-br from-white via-emerald-25 to-emerald-50 p-8 shadow-xl border-2 border-emerald-300 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:via-emerald-100 hover:to-emerald-150 hover:border-emerald-400 cursor-pointer relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                                    <div className="w-full h-full bg-emerald-400 rounded-full blur-3xl"></div>
                                                </div>
                                                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                                                    <div className="w-full h-full bg-green-400 rounded-full blur-2xl"></div>
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="flex items-center mb-6">
                                                        <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full p-4 mr-4 transition-all duration-300 hover:from-emerald-200 hover:to-emerald-300 hover:scale-110">
                                                            <FontAwesomeIcon icon={faUsers} className="text-emerald-600 text-2xl transition-transform hover:scale-125 hover:rotate-12" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-emerald-800 mb-2">課題収集システム</h4>
                                                            <p className="text-emerald-600 text-lg font-medium">プロダクトオーナーとしてのプロジェクト管理</p>
                                                        </div>
                                                    </div>

                                                    <div className="mb-6">
                                                        {/* システム概要 */}
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200 transition-all duration-300 hover:shadow-md hover:bg-red-50 hover:border-red-400">
                                                                <h5 className="font-bold text-red-700 mb-2 flex items-center">
                                                                    <span className="text-lg mr-2">🚨</span>
                                                                    解決すべき課題
                                                                </h5>
                                                                <ul className="space-y-1 text-gray-700 text-xs">
                                                                    <li>• アイデアを管理しきれない</li>
                                                                    <li>• Excelシートが使いにくい</li>
                                                                    <li>• アイデア共有の非効率性</li>
                                                                </ul>
                                                            </div>
                                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200 transition-all duration-300 hover:shadow-md hover:bg-green-50 hover:border-green-400">
                                                                <h5 className="font-bold text-green-700 mb-2 flex items-center">
                                                                    <span className="text-lg mr-2">✨</span>
                                                                    Vision
                                                                </h5>
                                                                <ul className="space-y-1 text-gray-700 text-xs">
                                                                    <li>• PoCや新規事業構築のスピード向上</li>
                                                                    <li>• 部署内の課題共有を円滑にする</li>
                                                                    <li>• システム自体を他社に販売する</li>
                                                                </ul>
                                                            </div>
                                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200 transition-all duration-300 hover:shadow-md hover:bg-blue-50 hover:border-blue-400">
                                                                <h5 className="font-bold text-blue-700 mb-2 flex items-center">
                                                                    <span className="text-lg mr-2">🎯</span>
                                                                    私のアプローチ
                                                                </h5>
                                                                <ul className="space-y-1 text-gray-700 text-xs">
                                                                    <li>• スクラム開発手法の導入</li>
                                                                    <li>• プロダクトオーナーとして牽引</li>
                                                                    <li>• ユーザーインタビューと課題分析</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-emerald-200">
                                                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                                <span className="text-emerald-600 mr-2">👑</span>
                                                                プロダクトオーナーとして学んだこと
                                                            </h5>
                                                            <div className="flex flex-wrap gap-2">
                                                                <span className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-emerald-200 hover:to-emerald-300 hover:scale-105">スクラム開発</span>
                                                                <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-orange-200 hover:to-orange-300 hover:scale-105">プロジェクト管理</span>
                                                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">チームリーダー</span>
                                                                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">ユーザーインタビュー</span>
                                                                <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-pink-200 hover:to-pink-300 hover:scale-105">要件定義</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a href="https://issu-collect-app-mock.vercel.app/" target="_blank" rel="noopener noreferrer"
                                                        className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-emerald-600 hover:to-emerald-700 hover:translate-x-2 hover:shadow-lg group">
                                                        <FontAwesomeIcon icon={faChevronRight} className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1" />
                                                        デモシステムにアクセス
                                                        <span className="ml-2 text-sm opacity-75">→</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                    {/* ④OJTのモダナイズ化プロジェクト */}
                                    <div className="mb-8">
                                        <div className="w-full">
                                            <div className="bg-gradient-to-br from-white via-orange-25 to-orange-50 p-8 shadow-xl border-2 border-orange-300 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:via-orange-100 hover:to-orange-150 hover:border-orange-400 cursor-pointer relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                                    <div className="w-full h-full bg-orange-400 rounded-full blur-3xl"></div>
                                                </div>
                                                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                                                    <div className="w-full h-full bg-yellow-400 rounded-full blur-2xl"></div>
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="flex items-center mb-6">
                                                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-full p-4 mr-4 transition-all duration-300 hover:from-orange-200 hover:to-orange-300 hover:scale-110">
                                                            <FontAwesomeIcon icon={faRocket} className="text-orange-600 text-2xl transition-transform hover:scale-125 hover:rotate-12" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-orange-800 mb-2">Webサイトのモダナイズ化</h4>
                                                            <p className="text-orange-600 text-lg font-medium">GitHub Copilotを活用したアーキテクチャ刷新</p>
                                                        </div>
                                                    </div>                                                    <div className="mb-6">
                                                        <p className="text-gray-700 text-base mb-6 transition-colors hover:text-orange-700 leading-relaxed">
                                                            既存のHTML/CSS/JavaScriptサイトをNext.js/TypeScript/TailwindCSSを使用してモダンなアーキテクチャに全面刷新しました。
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
                                                            </div>
                                                        </div>

                                                        {/* パフォーマンス比較 */}
                                                        <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
                                                            <h5 className="font-semibold text-gray-800 mb-4 flex items-center">
                                                                <FontAwesomeIcon icon={faTachometerAlt} className="text-blue-600 mr-2" />
                                                                パフォーマンス比較（Pagespeed insights測定結果）
                                                            </h5>
                                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                                {/* Before パフォーマンス */}
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
                                                                            <p className="text-green-700 text-lg font-bold">100</p>
                                                                            <p className="text-green-600 text-sm">パフォーマンススコア</p>
                                                                            <p className="text-green-500 text-xs">優秀レベル達成！</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* パフォーマンス改善の数値 */}
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
                                                                        <div className="text-lg font-bold text-blue-600">97</div>
                                                                        <div className="text-xs text-blue-500 mb-1">パフォーマンス</div>
                                                                        <div className="text-xs text-green-600 font-semibold">+31%向上</div>
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
                                                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-200 mb-6">
                                                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                                <FontAwesomeIcon icon={faTachometerAlt} className="text-orange-600 mr-2" />
                                                                モダナイズ化による改善効果
                                                            </h5>
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

                                                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-200">
                                                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                                <span className="text-orange-600 mr-2">🛠️</span>
                                                                技術スタック
                                                            </h5>
                                                            <div className="flex flex-wrap gap-2">
                                                                <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-orange-200 hover:to-orange-300 hover:scale-105">Next.js</span>
                                                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">TypeScript</span>
                                                                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">TailwindCSS</span>
                                                                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">GitHub Copilot</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-4">
                                                        <a href="https://hiro0211.github.io/Self-Introduction-webSite9-4/" target="_blank" rel="noopener noreferrer"
                                                            className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:translate-x-2 hover:shadow-lg group">
                                                            <FontAwesomeIcon icon={faEye} className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1" />
                                                            改善前サイト
                                                        </a>
                                                        <a href="https://claude-ojt-plan5-15.vercel.app/" target="_blank" rel="noopener noreferrer"
                                                            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:translate-x-2 hover:shadow-lg group">
                                                            <FontAwesomeIcon icon={faRocket} className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1" />
                                                            改善後サイト
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                    {/* ⑤プログラミング指導経験 */}
                                <div className="mb-8">
                                    <div className="w-full">
                                        <div className="bg-gradient-to-br from-white via-teal-25 to-teal-50 p-8 shadow-xl border-2 border-teal-300 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-teal-50 hover:via-teal-100 hover:to-teal-150 hover:border-teal-400 cursor-pointer relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                                <div className="w-full h-full bg-teal-400 rounded-full blur-3xl"></div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                                                <div className="w-full h-full bg-cyan-400 rounded-full blur-2xl"></div>
                                            </div>

                                            <div className="relative z-10">
                                                <div className="flex items-center mb-6">
                                                    <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-full p-4 mr-4 transition-all duration-300 hover:from-teal-200 hover:to-teal-300 hover:scale-110">
                                                        <FontAwesomeIcon icon={faChalkboardTeacher} className="text-teal-600 text-2xl transition-transform hover:scale-125 hover:rotate-12" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-teal-800 mb-2">プログラミング指導経験</h4>
                                                        <p className="text-teal-600 text-lg font-medium">初学者サポートの実績</p>
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <p className="text-gray-700 text-base mb-4 transition-colors hover:text-teal-700 leading-relaxed">
                                                        友人にプログラミングを教えた経験があります。初学者の視点に立った分かりやすい説明と段階的な学習サポートを提供しました。
                                                    </p>

                                                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-teal-200">
                                                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                            <span className="text-teal-600 mr-2">🎯</span>
                                                            指導内容
                                                        </h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            <span className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-teal-200 hover:to-teal-300 hover:scale-105">基礎文法</span>
                                                            <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">実践開発</span>
                                                            <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">サポート力</span>
                                                            <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">コミュニケーション</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-teal-600 hover:to-teal-700 hover:translate-x-2 hover:shadow-lg group">
                                                    <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1" />
                                                    指導経験あり
                                                    <span className="ml-2 text-sm opacity-75">✓</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                    {/* ⑥Supabaseでのブログ執筆 */}
                                <div className="mb-8">
                                    <div className="w-full">
                                        <div className="bg-gradient-to-br from-white via-cyan-25 to-cyan-50 p-8 shadow-xl border-2 border-cyan-300 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:via-cyan-100 hover:to-cyan-150 hover:border-cyan-400 cursor-pointer relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                                <div className="w-full h-full bg-cyan-400 rounded-full blur-3xl"></div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
                                                <div className="w-full h-full bg-blue-400 rounded-full blur-2xl"></div>
                                            </div>

                                            <div className="relative z-10">
                                                <div className="flex items-center mb-6">
                                                    <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full p-4 mr-4 transition-all duration-300 hover:from-cyan-200 hover:to-cyan-300 hover:scale-110">
                                                        <FontAwesomeIcon icon={faPenFancy} className="text-cyan-600 text-2xl transition-transform hover:scale-125 hover:rotate-12" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-cyan-800 mb-2">Supabaseでのブログ執筆</h4>
                                                        <p className="text-cyan-600 text-lg font-medium">技術記事アウトプット</p>
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <p className="text-gray-700 text-base mb-4 transition-colors hover:text-cyan-700 leading-relaxed">
                                                        Supabaseを活用したブログアプリの構築について記事を執筆。技術的な知見を分かりやすく共有する文章力とアウトプット能力を発揮しました。
                                                    </p>

                                                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-cyan-200">
                                                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                            <span className="text-cyan-600 mr-2">📝</span>
                                                            執筆スキル
                                                        </h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-cyan-200 hover:to-cyan-300 hover:scale-105">技術記事</span>
                                                            <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">Supabase</span>
                                                            <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-orange-200 hover:to-orange-300 hover:scale-105">アウトプット</span>
                                                            <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">文章力</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-cyan-700 hover:translate-x-2 hover:shadow-lg group">
                                                    <FontAwesomeIcon icon={faPenFancy} className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1" />
                                                    執筆実績あり
                                                    <span className="ml-2 text-sm opacity-75">✓</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* まとめ */}
                            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl border border-indigo-200">
                                <h4 className="font-bold text-indigo-700 mb-4 flex items-center">
                                    <FontAwesomeIcon icon={faBolt} className="mr-3 text-indigo-600" />
                                    活かせる2つの強み
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50 cursor-pointer">
                                        <div className="flex items-center mb-3">
                                            <FontAwesomeIcon icon={faBolt} className="text-blue-600 text-2xl mr-3 transition-transform hover:scale-125" />
                                            <h5 className="font-bold text-blue-700 transition-colors hover:text-blue-800">高速開発力</h5>
                                        </div>
                                        <p className="text-gray-700 text-sm transition-colors hover:text-blue-700">
                                            AIツールを効果的に活用して、短期間でプロダクトを開発できる技術力とスピード感
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 cursor-pointer">
                                        <div className="flex items-center mb-3">
                                            <FontAwesomeIcon icon={faRocket} className="text-green-600 text-2xl mr-3 transition-transform hover:scale-125" />
                                            <h5 className="font-bold text-green-700 transition-colors hover:text-green-800">実行力</h5>
                                        </div>
                                        <p className="text-gray-700 text-sm transition-colors hover:text-green-700">
                                            アイデアを形にして実際に動くプロダクトまで持っていく行動力と継続力
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthStorySection;
