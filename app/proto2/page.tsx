"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faChalkboardTeacher,
  faPenFancy,
  faBolt,
  faExternalLinkAlt,
  faHandshake,
  faLightbulb,
  faSearch,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

const GrowthStorySection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented.
        console.error("Video autoplay was prevented:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* 新しいメッセージセクション */}
          <div
            id="mission-message"
            className="mb-32 animate-on-scroll relative overflow-hidden rounded-2xl"
            style={{ height: "70vh", minHeight: "600px", maxHeight: "800px" }}
          >
            {/* 背景動画 */}
            <div className="absolute inset-0 w-full h-full">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/ArimuraPortfolio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* 動画の上にオーバーレイを追加してテキストを読みやすくする */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* 音声オンオフボタン */}
              <div className="absolute top-6 right-6 z-20">
                <button
                  onClick={toggleMute}
                  className="bg-white/90 backdrop-blur-sm hover:bg-white/95 text-gray-700 hover:text-gray-900 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                  aria-label={isMuted ? "音声をオンにする" : "音声をオフにする"}
                >
                  <FontAwesomeIcon
                    icon={isMuted ? faVolumeMute : faVolumeUp}
                    className="text-lg transition-transform group-hover:scale-110"
                  />
                </button>
              </div>
            </div>

            <div className="relative z-10 transition-all duration-1000 opacity-100 translate-y-0 py-20 h-full flex items-end pb-20">
              {/* メインメッセージ - 下部左寄せレイアウト（動画のメッセージと重ならない配置） */}
              <div className="text-left max-w-xl ml-8 md:ml-16 lg:ml-20">
                {/* <div className="inline-block bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg border border-gray-200">
                  <span className="text-gray-700 font-semibold text-sm">
                    AI共通プラットフォーム構築への想い
                  </span>
                </div> */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-white drop-shadow-2xl">
                    AIは、人の心と時間を
                    <br />
                    を守るためにある。
                  </span>
                  <br />
                </h1>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg mb-8 max-w-lg">
                  この想いを、AIとビジネスの力で社会の仕組みに変える。
                </p>

                {/* シンプルで信頼感のあるCTA */}
              </div>
            </div>
          </div>

          {/* サブセクション③ 自己紹介 */}
          <div id="self-introduction" className="mb-20 animate-on-scroll">
            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-l-4 border-purple-500 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-700 flex items-center">
                  <FontAwesomeIcon icon={faHeart} className="mr-3" />
                  自己紹介
                </h3>

                {/* プロフィール画像セクション */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative group mb-4">
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

                  {/* 名前セクション */}
                  <div className="text-center">
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-1 transition-all duration-300 hover:scale-105">
                      有村大旭
                    </h4>
                    <p className="text-lg text-purple-500 font-medium tracking-wide transition-colors duration-300 hover:text-pink-500">
                      Arimura Hiroaki
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 食べること */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-orange-50 hover:border-orange-400 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 rounded-full p-3 mr-4 transition-all duration-300 hover:bg-orange-200">
                        <FontAwesomeIcon
                          icon={faUtensils}
                          className="text-orange-600 text-xl transition-transform hover:scale-125"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-orange-700 transition-colors hover:text-orange-800">
                        食べること
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-sm transition-colors hover:text-orange-700">
                        とにかく大食いです！食べることが大好きで、回転寿司行くと20皿くらい食べます🍣
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
                        <FontAwesomeIcon
                          icon={faBrain}
                          className="text-blue-600 text-xl transition-transform hover:scale-125"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-blue-700 transition-colors hover:text-blue-800">
                        AI・生成AI
                      </h4>
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
                        <FontAwesomeIcon
                          icon={faGamepad}
                          className="text-green-600 text-xl transition-transform hover:scale-125"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-green-700 transition-colors hover:text-green-800">
                        アプリ・ゲーム開発
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-sm transition-colors hover:text-green-700">
                        React
                        NativeやUnityを使って、アプリやゲームの開発を趣味で行っています。
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

          {/* サブセクション③-1 期待される役割 */}
          <div id="expected-roles" className="mb-20 animate-on-scroll">
            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border-l-4 border-indigo-500 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-indigo-700 flex items-center">
                  <FontAwesomeIcon icon={faBullseye} className="mr-3" />
                  期待される役割
                </h3>

                <div className="space-y-4">
                  {/* Role 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-indigo-50 hover:border-indigo-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-indigo-600 mb-2 flex items-center">
                      <FontAwesomeIcon icon={faBullseye} className="mr-2" />
                      顧客価値ベースのAIプロダクトのMVPを素早く開発する
                    </h4>
                  </div>

                  {/* Role 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50 hover:border-blue-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-blue-600 mb-2 flex items-center">
                      <FontAwesomeIcon icon={faBullseye} className="mr-2" />
                      特定技術分野を主導し、研究技術を商用安定版へと転換する
                    </h4>
                  </div>

                  {/* Role 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-purple-50 hover:border-purple-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-purple-600 mb-2 flex items-center">
                      <FontAwesomeIcon icon={faBullseye} className="mr-2" />
                      複数のステークホルダーが関わるプロジェクトをリードする
                    </h4>
                  </div>

                  {/* Role 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 hover:border-green-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-green-600 mb-2 flex items-center">
                      <FontAwesomeIcon icon={faBullseye} className="mr-2" />
                      安定的なシステム運用と素早い変更対応を両立する設計・実装の基準を確立する
                    </h4>
                  </div>

                  {/* Role 5 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-teal-50 hover:border-teal-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-teal-600 mb-2 flex items-center">
                      <FontAwesomeIcon icon={faBullseye} className="mr-2" />
                      AIなどの新技術を活用し、開発のスピードと品質を向上させる
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* サブセクション③-2 発揮できる私の強み */}
          <div id="my-strengths" className="mb-20 animate-on-scroll">
            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-8 rounded-2xl border-l-4 border-rose-500 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-rose-700 flex items-center">
                  <FontAwesomeIcon icon={faRocket} className="mr-3" />
                  発揮できる私の強み
                </h3>

                <div className="space-y-6">
                  {/* Strength 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-rose-50 hover:border-rose-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-orange-600 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                      高速MVP開発での貢献
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      高速なMVP開発で、アイデアを即、形にします。
                      <br />
                      LLM等を活用した企画から、Next.js/TypeScriptによる実装・テストまで全工程を独力で完遂。ユーザー課題を起点とした高速な価値検証サイクルで、ビジネスを加速させます。
                    </p>
                  </div>

                  {/* Strength 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50 hover:border-blue-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-purple-600 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                      研究技術の商用化での貢献
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      AI技術を「研究」で終わらせません。
                      <br />
                      最新AI技術と堅牢なフレームワーク(Django/Next.js)を融合させるアーキテクチャ設計が強みです。技術シーズをビジネス要件と両立させ、安定稼働する商用サービスへと昇華させます。
                    </p>
                  </div>

                  {/* Strength 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 hover:border-green-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-emerald-600 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                      プロジェクトリーダーシップでの貢献
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      POとしてチームを牽引し、複雑なプロジェクトを成功へ導きます。
                      <br />
                      経営層を含む多様な関係者を巻き込む合意形成力と、スクラム開発の主導経験が強み。メンバーの心理まで踏み込み、チームの推進力を最大化します。
                    </p>
                  </div>

                  {/* Strength 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-yellow-50 hover:border-yellow-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-amber-600 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                      品質基準確立での貢献
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      品質とスピードを両立する「仕組み」を構築します。
                      <br />
                      TypeScript導入で実証済みの、変更に強く安定した開発プロセスを設計。組織全体の生産性を向上させる、実用的な開発/品質基準を確立します。
                    </p>
                  </div>

                  {/* Strength 5 */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:bg-teal-50 hover:border-teal-400 cursor-pointer">
                    <h4 className="text-lg font-bold text-cyan-600 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                      新技術活用での貢献
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      技術探求を、チームと組織の力に変えます。
                      <br />
                      最新AIツール等を常に探求し、開発へ即応用。得た知見は技術記事として積極的に発信し、組織全体の技術力向上とナレッジ共有文化に貢献します。
                    </p>
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
                  プロジェクト実績
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
                              <FontAwesomeIcon
                                icon={faBullseye}
                                className="text-blue-600 text-2xl transition-transform hover:scale-125 hover:rotate-12"
                              />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-blue-800 mb-2">
                                目標達成支援アプリ
                              </h4>
                              <p className="text-blue-600 text-lg font-medium">
                                AIタスク自動生成機能付き
                              </p>
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
                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">
                                  Next.js
                                </span>
                                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">
                                  ChatGPT API
                                </span>
                                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">
                                  TailwindCSS
                                </span>
                                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-yellow-200 hover:to-yellow-300 hover:scale-105">
                                  TypeScript
                                </span>
                                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">
                                  Dify
                                </span>
                              </div>
                            </div>
                          </div>

                          <a
                            href="https://achivo-mock3.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:translate-x-2 hover:shadow-lg group"
                          >
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1"
                            />
                            デモを見る
                            <span className="ml-2 text-sm opacity-75">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* ②Cursorによる1日ブログアプリ開発 */}
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
                              <FontAwesomeIcon
                                icon={faBolt}
                                className="text-green-600 text-2xl transition-transform hover:scale-125 hover:rotate-12"
                              />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-green-800 mb-2">
                                Cursorによる1日ブログアプリ開発
                              </h4>
                              <p className="text-green-600 text-lg font-medium">
                                高速開発の実証実験
                              </p>
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
                                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">
                                  Cursor
                                </span>
                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">
                                  Next.js
                                </span>
                                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-yellow-200 hover:to-yellow-300 hover:scale-105">
                                  TypeScript
                                </span>
                                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">
                                  TailwindCSS
                                </span>
                              </div>
                            </div>
                          </div>

                          <a
                            href="https://knownext-gamma.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:translate-x-2 hover:shadow-lg group"
                          >
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1"
                            />
                            デモを見る
                            <span className="ml-2 text-sm opacity-75">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* ③課題収集システム - 詳細バージョン */}
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
                              <FontAwesomeIcon
                                icon={faUsers}
                                className="text-emerald-600 text-2xl transition-transform hover:scale-125 hover:rotate-12"
                              />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-emerald-800 mb-2">
                                課題収集システム
                              </h4>
                              <p className="text-emerald-600 text-lg font-medium">
                                プロダクトオーナーとしてのプロジェクト管理
                              </p>
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
                                <span className="text-emerald-600 mr-2">
                                  👑
                                </span>
                                プロダクトオーナーとして学んだこと
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                <span className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-emerald-200 hover:to-emerald-300 hover:scale-105">
                                  スクラム開発
                                </span>
                                <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-orange-200 hover:to-orange-300 hover:scale-105">
                                  プロジェクト管理
                                </span>
                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">
                                  チームリーダー
                                </span>
                                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">
                                  ユーザーインタビュー
                                </span>
                                <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-pink-200 hover:to-pink-300 hover:scale-105">
                                  要件定義
                                </span>
                              </div>
                            </div>
                          </div>

                          <a
                            href="https://issu-collect-app-mock.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-emerald-600 hover:to-emerald-700 hover:translate-x-2 hover:shadow-lg group"
                          >
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1"
                            />
                            デモシステムにアクセス
                            <span className="ml-2 text-sm opacity-75">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}

                                {/* ⑦GitHub Copilotを活用したWebサイトのモダナイズ化 */}
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
                            <FontAwesomeIcon
                              icon={faRocket}
                              className="text-orange-600 text-2xl transition-transform hover:scale-125 hover:rotate-12"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-orange-800 mb-2">
                              GitHub Copilotを活用したWebサイトのモダナイズ化
                            </h4>
                            <p className="text-orange-600 text-lg font-medium">
                              レガシーサイトの全面刷新
                            </p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <p className="text-gray-700 text-base mb-6 transition-colors hover:text-orange-700 leading-relaxed">
                            既存のHTML/CSS/JavaScriptサイトをNext.js/TypeScript/TailwindCSSを使用してモダンなアーキテクチャに全面刷新。パフォーマンスとユーザー体験の大幅改善を実現しました。
                          </p>

                          {/* パフォーマンス改善のビフォーアフター画像 */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Before Image */}
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-red-50 hover:border-red-300 cursor-pointer">
                              <div className="flex items-center mb-3">
                                <div className="bg-red-100 rounded-full p-2 mr-3 transition-all duration-300 hover:bg-red-200">
                                  <FontAwesomeIcon
                                    icon={faWrench}
                                    className="text-red-600 text-lg transition-transform hover:scale-125"
                                  />
                                </div>
                                <div>
                                  <h5 className="font-semibold text-red-800 transition-colors hover:text-red-900">
                                    Before
                                  </h5>
                                  <p className="text-red-600 text-xs">
                                    従来のWebサイト
                                  </p>
                                </div>
                              </div>
                              <div className="mb-4">
                                <Image
                                  src="/BeforeOJTWebSite.png"
                                  alt="モダナイズ前のWebサイトのパフォーマンス - PageSpeed Insights スコア74"
                                  width={400}
                                  height={300}
                                  className="w-full h-auto rounded-lg border border-red-200 transition-all duration-300 hover:scale-105"
                                />
                              </div>
                              <ul className="text-gray-600 text-sm space-y-2 mb-4">
                                <li className="transition-all duration-200 hover:text-red-700 hover:font-medium hover:translate-x-2">
                                  • HTML/CSS/JavaScript
                                </li>
                                <li className="transition-all duration-200 hover:text-red-700 hover:font-medium hover:translate-x-2">
                                  • パフォーマンススコア: 74
                                </li>
                                <li className="transition-all duration-200 hover:text-red-700 hover:font-medium hover:translate-x-2">
                                  • 保守性に課題
                                </li>
                                <li className="transition-all duration-200 hover:text-red-700 hover:font-medium hover:translate-x-2">
                                  • モバイル対応が不十分
                                </li>
                              </ul>
                              <a
                                href="https://hiro0211.github.io/Self-Introduction-webSite9-4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-red-600 hover:text-red-800 font-medium text-sm transition-all duration-200 hover:translate-x-2"
                              >
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="mr-2 transition-transform hover:scale-125"
                                />
                                旧サイトを見る
                              </a>
                            </div>

                            {/* After Image */}
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50 hover:border-green-300 cursor-pointer">
                              <div className="flex items-center mb-3">
                                <div className="bg-green-100 rounded-full p-2 mr-3 transition-all duration-300 hover:bg-green-200">
                                  <FontAwesomeIcon
                                    icon={faRocket}
                                    className="text-green-600 text-lg transition-transform hover:scale-125"
                                  />
                                </div>
                                <div>
                                  <h5 className="font-semibold text-green-800 transition-colors hover:text-green-900">
                                    After
                                  </h5>
                                  <p className="text-green-600 text-xs">
                                    モダンWebサイト
                                  </p>
                                </div>
                              </div>
                              <div className="mb-4">
                                <Image
                                  src="/AfterOJTWebSite2.png"
                                  alt="モダナイズ後のWebサイトのパフォーマンス - PageSpeed Insights 全項目100点"
                                  width={400}
                                  height={300}
                                  className="w-full h-auto rounded-lg border border-green-200 transition-all duration-300 hover:scale-105"
                                />
                              </div>
                              <ul className="text-gray-600 text-sm space-y-2 mb-4">
                                <li className="transition-all duration-200 hover:text-green-700 hover:font-medium hover:translate-x-2">
                                  • Next.js + TypeScript
                                </li>
                                <li className="transition-all duration-200 hover:text-green-700 hover:font-medium hover:translate-x-2">
                                  • パフォーマンススコア: 100
                                </li>
                                <li className="transition-all duration-200 hover:text-green-700 hover:font-medium hover:translate-x-2">
                                  • レスポンシブデザイン
                                </li>
                                <li className="transition-all duration-200 hover:text-green-700 hover:font-medium hover:translate-x-2">
                                  • モダンなアニメーション
                                </li>
                              </ul>
                              <a
                                href="https://claude-ojt-plan5-15.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm transition-all duration-200 hover:translate-x-2"
                              >
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="mr-2 transition-transform hover:scale-125"
                                />
                                新サイトを見る
                              </a>
                            </div>
                          </div>

                          {/* 改善効果 */}
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-200">
                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <FontAwesomeIcon
                                icon={faTachometerAlt}
                                className="text-orange-600 mr-2"
                              />
                              モダナイズ化による改善効果
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                              <div className="text-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                                <div className="text-2xl mb-2 transition-transform hover:scale-125">
                                  ⚡
                                </div>
                                <p className="text-xs font-medium text-gray-700 transition-colors hover:text-orange-700 hover:font-bold">
                                  パフォーマンス
                                </p>
                                <p className="text-xs text-gray-600 transition-colors hover:text-orange-600">
                                  74 → 100点
                                </p>
                              </div>
                              <div className="text-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                                <div className="text-2xl mb-2 transition-transform hover:scale-125">
                                  🔧
                                </div>
                                <p className="text-xs font-medium text-gray-700 transition-colors hover:text-orange-700 hover:font-bold">
                                  保守性
                                </p>
                                <p className="text-xs text-gray-600 transition-colors hover:text-orange-600">
                                  コンポーネント化
                                </p>
                              </div>
                              <div className="text-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                                <div className="text-2xl mb-2 transition-transform hover:scale-125">
                                  📱
                                </div>
                                <p className="text-xs font-medium text-gray-700 transition-colors hover:text-orange-700 hover:font-bold">
                                  型安全性
                                </p>
                                <p className="text-xs text-gray-600 transition-colors hover:text-orange-600">
                                  TypeScript導入
                                </p>
                              </div>
                              <div className="text-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                                <div className="text-2xl mb-2 transition-transform hover:scale-125">
                                  🎨
                                </div>
                                <p className="text-xs font-medium text-gray-700 transition-colors hover:text-orange-700 hover:font-bold">
                                  UI/UX
                                </p>
                                <p className="text-xs text-gray-600 transition-colors hover:text-orange-600">
                                  モダンデザイン
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-200 mt-4">
                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <span className="text-orange-600 mr-2">🛠️</span>
                              技術スタック
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-orange-200 hover:to-orange-300 hover:scale-105">
                                GitHub Copilot
                              </span>
                              <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">
                                Next.js
                              </span>
                              <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-yellow-200 hover:to-yellow-300 hover:scale-105">
                                TypeScript
                              </span>
                              <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">
                                TailwindCSS
                              </span>
                            </div>
                          </div>
                        </div>

                        <a
                          href="https://claude-ojt-plan5-15.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:translate-x-2 hover:shadow-lg group"
                        >
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1"
                          />
                          モダンサイトを見る
                          <span className="ml-2 text-sm opacity-75">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ⑤プログラミング指導経験 */}
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
                            <FontAwesomeIcon
                              icon={faChalkboardTeacher}
                              className="text-teal-600 text-2xl transition-transform hover:scale-125 hover:rotate-12"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-teal-800 mb-2">
                              プログラミング指導経験
                            </h4>
                            <p className="text-teal-600 text-lg font-medium">
                              初学者サポートの実績
                            </p>
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
                              <span className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-teal-200 hover:to-teal-300 hover:scale-105">
                                基礎文法
                              </span>
                              <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-blue-200 hover:to-blue-300 hover:scale-105">
                                実践開発
                              </span>
                              <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">
                                サポート力
                              </span>
                              <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">
                                コミュニケーション
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-teal-600 hover:to-teal-700 hover:translate-x-2 hover:shadow-lg group">
                          <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                            className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1"
                          />
                          指導経験あり
                          <span className="ml-2 text-sm opacity-75">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* ⑥Supabaseでのブログ執筆 */}
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
                            <FontAwesomeIcon
                              icon={faPenFancy}
                              className="text-cyan-600 text-2xl transition-transform hover:scale-125 hover:rotate-12"
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 transition-colors hover:text-cyan-800 mb-2">
                              Supabaseでのブログ執筆
                            </h4>
                            <p className="text-cyan-600 text-lg font-medium">
                              技術記事アウトプット
                            </p>
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
                              <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-cyan-200 hover:to-cyan-300 hover:scale-105">
                                技術記事
                              </span>
                              <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-purple-200 hover:to-purple-300 hover:scale-105">
                                Supabase
                              </span>
                              <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-orange-200 hover:to-orange-300 hover:scale-105">
                                アウトプット
                              </span>
                              <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:from-green-200 hover:to-green-300 hover:scale-105">
                                文章力
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-cyan-700 hover:translate-x-2 hover:shadow-lg group">
                          <FontAwesomeIcon
                            icon={faPenFancy}
                            className="mr-3 transition-transform group-hover:scale-125 group-hover:translate-x-1"
                          />
                          執筆実績あり
                          <span className="ml-2 text-sm opacity-75">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* Vision セクション */}
              <div id="vision" className="mb-20 animate-on-scroll">
                <div className="transition-all duration-1000 opacity-100 translate-y-0">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-8 rounded-2xl border-l-4 border-violet-500 mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-violet-700 flex items-center">
                      <FontAwesomeIcon icon={faEye} className="mr-3" />
                      Vision
                    </h3>

                    {/* タイトル */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-200 mb-6">
                      <h4 className="text-xl font-bold text-violet-700 text-center leading-relaxed">
                        技術とビジネスを繋ぐ「架け橋」として、
                        <br />
                        Kozuchiの事業価値を最大化します
                      </h4>
                    </div>

                    {/* 本文 */}
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-violet-200 space-y-4">
                      <p className="text-gray-700 text-base leading-relaxed">
                        私の強みである
                        <span className="font-bold text-violet-700 bg-violet-100 px-2 py-1 rounded mx-1">
                          「①アイデアを即、形にする行動力」
                        </span>
                        <span className="font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded mx-1">
                          「②多様な関係者を巻き込む共創力」
                        </span>
                        <span className="font-bold text-indigo-700 bg-indigo-100 px-2 py-1 rounded mx-1">
                          「③目標を完遂するプロジェクト推進力」
                        </span>
                        を掛け合わせ、Kozuchiのビジネス価値最大化をリードします。
                      </p>

                      <p className="text-gray-700 text-base leading-relaxed font-medium">
                        しかし、私の役割は単なる「橋渡し」に留まりません。
                      </p>

                      <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-lg border-l-4 border-violet-400">
                        <p className="text-gray-700 text-base leading-relaxed">
                          研究技術に顧客のニーズという火を灯し、価値あるMVPを最速で生み出す。
                          <br />
                          そして、プロダクトオーナーとして自らが先頭に立ち、PoCで終わらせることなく、情熱をもって商用化への道を切り拓く。
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-200 text-center">
                        <p className="text-gray-800 text-base leading-relaxed">
                          技術と人、ビジネスと顧客が出会うことで生まれる化学反応を最大化する
                          <span className="font-bold text-amber-700 bg-amber-200 px-3 py-1 rounded-full mx-2 text-lg">
                            「触媒」
                          </span>
                          となり、
                          <span className="font-bold text-red-700">
                            KPI10億円
                          </span>
                          という目標達成を必ず実現させてみせます。
                        </p>
                      </div>
                    </div>
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
