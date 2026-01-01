import React from 'react';
import CTAButtons from '@/components/common/CTAButtons';

export default function AdultsPage() {
    return (
        <div className="space-y-20 pb-12">
            {/* Hero / Intro Section */}
            <section className="text-center space-y-6 py-12 md:py-16 bg-slate-50 rounded-3xl">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    성인을 위한 AI·코딩 실전 과정
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto break-keep px-4">
                    배우는 데서 끝나지 않습니다.<br className="hidden md:block" />
                    당신의 상황에 맞게 AI·코딩을 적용합니다.
                </p>
            </section>

            <hr className="border-slate-200" />

            {/* Courses Section */}
            <section className="space-y-12">
                <h2 className="text-3xl font-bold text-slate-900 text-center">
                    성인 과정은 이렇게 나뉩니다
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                            실무·업무 적용
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-600 font-bold">•</span>
                                문서·보고서·기획 자동화
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-600 font-bold">•</span>
                                AI 툴 실습
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                            프리랜서·창업 확장
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-600 font-bold">•</span>
                                바이브코딩
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-600 font-bold">•</span>
                                랜딩페이지·웹 구조 이해
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-600 font-bold">•</span>
                                프로젝트 기반 확장
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                            AI·개발 이해
                        </h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-600 font-bold">•</span>
                                파이썬 기초
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-blue-600 font-bold">•</span>
                                AI·웹·데이터 구조 이해
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200" />

            {/* Methodology Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center">
                    수업 방식
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {['오프라인 실습', '소수 인원', '결과물 중심'].map((item, index) => (
                        <span
                            key={index}
                            className="inline-block bg-blue-50 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold border border-blue-100"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="text-center py-12 md:py-16 bg-slate-50 rounded-3xl">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                    상담 안내
                </h2>
                <div className="flex justify-center">
                    <CTAButtons />
                </div>
            </section>
        </div>
    );
}
