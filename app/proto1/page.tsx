"use client";

import React, { useState, useEffect } from "react";
import {
    ChevronDown,
    Code2,
    Users,
    Rocket,
    Lightbulb,
    Target,
    Zap,
    Brain,
    Award,
} from "lucide-react";

const PresentationSite = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // セクション検出
            const sections = document.querySelectorAll("section");
            let current = 0;
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = index;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const experiences = [
        {
            id: 1,
            title: "AI×ノーコード開発",
            tech: "Next.js, TypeScript, Dify API",
            description: "目標達成支援アプリ開発",
            details:
                "理想のライフスタイルから3ヶ月・1ヶ月・1週間・1日のタスクに自動分解",
            url: "https://achivo-mock3.vercel.app/dashboard",
            icon: <Brain className="w-8 h-8" />,
            highlight: "新技術の学習と実践への適用能力",
        },
        {
            id: 2,
            title: "スピード開発",
            tech: "Next.js, TypeScript, Cursor AI",
            description: "1日でブログアプリ構築",
            details: "AIツールを活用した高速開発の実践",
            url: "https://knownext-gamma.vercel.app/",
            icon: <Zap className="w-8 h-8" />,
            highlight: "品質とスピードの両立",
        },
        {
            id: 3,
            title: "プロジェクトリード",
            tech: "スクラム開発, プロダクトオーナー",
            description: "社内アイデア管理システム化",
            details: "300行以上のアイデアを効率的に管理するシステムの立ち上げ",
            url: "https://issu-collect-app-mock.vercel.app/",
            icon: <Users className="w-8 h-8" />,
            highlight: "複数のステークホルダーが関わるプロジェクトのリード経験",
        },
        {
            id: 4,
            title: "品質改善への取り組み",
            tech: "Next.js, パフォーマンス最適化",
            description: "OJT育成計画での技術改善",
            details: "HTML/CSS/JSからNext.jsへの移行でパフォーマンス向上",
            beforeUrl: "https://hiro0211.github.io/Self-Introduction-webSite9-4/",
            afterUrl: "https://claude-ojt-plan5-15.vercel.app/",
            icon: <Target className="w-8 h-8" />,
            highlight: "開発基準や品質基準の策定・改善経験",
        },
    ];

    const skills = [
        { name: "システムアーキテクチャ設計", level: 85 },
        { name: "アジャイル開発", level: 90 },
        { name: "AI技術の実践活用", level: 80 },
        { name: "ステークホルダー管理", level: 85 },
        { name: "品質とスピードの両立", level: 90 },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen">
            {/* プログレスバー */}
            <div className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
                <div
                    className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />
                <div className="flex justify-between px-8 py-2 text-xs">
                    <span className="text-gray-400">10分プレゼンテーション</span>
                    <span className="text-purple-400 font-bold">
                        {Math.round(scrollProgress)}%
                    </span>
                </div>
            </div>

            {/* ヒーローセクション */}
            <section className="min-h-screen flex flex-col justify-center items-center relative px-8">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                        有村大旭
                    </h1>
                    <p className="text-2xl text-gray-300">Hiroaki Arimura</p>
                    <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                    <h2 className="text-4xl font-light">
                        AI共通プラットフォーム構築で
                        <br />
                        <span className="font-bold text-purple-400">
                            ビジネス価値を創出
                        </span>
                    </h2>
                    <ChevronDown className="w-12 h-12 mx-auto animate-bounce text-purple-400" />
                </div>
            </section>

            {/* 結論セクション */}
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
                <div className="max-w-6xl w-full">
                    <h2 className="text-5xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            私が貢献できること
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Rocket className="w-12 h-12" />,
                                title: "スピード開発",
                                description: "AIツールを活用した高速プロトタイピングとMVP開発",
                            },
                            {
                                icon: <Users className="w-12 h-12" />,
                                title: "プロジェクト推進",
                                description:
                                    "複数ステークホルダーとの協働とアジャイル開発の実践",
                            },
                            {
                                icon: <Lightbulb className="w-12 h-12" />,
                                title: "技術革新",
                                description: "新技術の素早い習得と実践への適用",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                                onMouseEnter={() => setHoveredCard(`contrib-${index}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`text-purple-400 mb-4 transition-transform duration-300 ${hoveredCard === `contrib-${index}` ? "scale-110" : ""
                                        }`}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* スキルセクション */}
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
                <div className="max-w-6xl w-full">
                    <h2 className="text-5xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            保有スキル・経験
                        </span>
                    </h2>

                    <div className="space-y-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="group">
                                <div className="flex justify-between mb-2">
                                    <span className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                                        {skill.name}
                                    </span>
                                    <span className="text-purple-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            width: `${skill.level}%`,
                                            transform: `translateX(${activeSection >= 2 ? "0" : "-100%"
                                                })`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
                            <Award className="w-12 h-12 text-purple-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-4">求人要件との親和性</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    ✓ 複数のステークホルダーが関わるプロジェクトのリード経験
                                </li>
                                <li>✓ 新技術の学習と実践への適用能力</li>
                                <li>✓ 品質とスピードを両立する設計・実装の経験</li>
                                <li>✓ 開発基準や品質基準の策定・改善経験</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
                            <Code2 className="w-12 h-12 text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-4">技術スタック</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "TypeScript",
                                    "Next.js",
                                    "Python",
                                    "Dify",
                                    "Tailwind CSS",
                                    "スクラム開発",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-pointer"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 実績セクション */}
            <section className="min-h-screen px-8 py-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            具体的な実績
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
                                onMouseEnter={() => setHoveredCard(exp.id.toString())}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className={`text-purple-400 transition-all duration-300 ${hoveredCard === exp.id.toString()
                                                    ? "scale-110 rotate-6"
                                                    : ""
                                                }`}
                                        >
                                            {exp.icon}
                                        </div>
                                        <span className="text-xs px-3 py-1 bg-purple-500/20 rounded-full">
                                            {exp.tech}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{exp.description}</p>
                                    <p className="text-sm text-gray-400 mb-4">{exp.details}</p>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${hoveredCard === exp.id.toString() ? "max-h-40" : "max-h-0"
                                            }`}
                                    >
                                        <div className="pt-4 border-t border-white/10">
                                            <p className="text-sm text-purple-300 font-semibold mb-2">
                                                💡 {exp.highlight}
                                            </p>
                                            {exp.url && (
                                                <a
                                                    href={exp.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-blue-400 hover:text-blue-300 underline"
                                                >
                                                    デモサイトを見る →
                                                </a>
                                            )}
                                            {exp.beforeUrl && (
                                                <div className="space-y-1">
                                                    <a
                                                        href={exp.beforeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block text-sm text-blue-400 hover:text-blue-300 underline"
                                                    >
                                                        Before →
                                                    </a>
                                                    <a
                                                        href={exp.afterUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block text-sm text-blue-400 hover:text-blue-300 underline"
                                                    >
                                                        After →
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* まとめセクション */}
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
                <div className="max-w-4xl text-center">
                    <h2 className="text-5xl font-bold mb-12">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            AI共通プラットフォーム構築で
                        </span>
                    </h2>

                    <div className="space-y-8 text-2xl leading-relaxed">
                        <p className="animate-fade-in-up">
                            <span className="text-purple-400 font-bold">技術的挑戦</span>
                            を楽しみながら
                        </p>
                        <p className="animate-fade-in-up animation-delay-200">
                            <span className="text-blue-400 font-bold">ビジネス価値</span>
                            を創出し
                        </p>
                        <p className="animate-fade-in-up animation-delay-400">
                            <span className="text-pink-400 font-bold">全社の生産性向上</span>
                            に貢献します
                        </p>
                    </div>

                    <div className="mt-16 animate-fade-in-up animation-delay-600">
                        <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xl font-bold transform hover:scale-105 transition-transform shadow-2xl shadow-purple-500/50">
                            有村大旭
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
        </div>
    );
};

export default PresentationSite;
