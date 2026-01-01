import React from 'react';
import CTAButtons from '@/components/common/CTAButtons';

export default function StudentsPage() {
    return (
        <div className="space-y-20 pb-12">
            {/* Hero / Intro Section */}
            <section className="text-center space-y-6 py-12 md:py-16 bg-slate-50 rounded-3xl">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    학생·학부모를 위한 AI·코딩 과정
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto break-keep px-4">
                    성적을 대신 올려주지는 않습니다.<br className="hidden md:block" />
                    하지만 학교 수업과 진로를 이해할 수 있는 기반은 만듭니다.
                </p>
            </section>

            <hr className="border-slate-200" />

            {/* Why Now Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center">
                    왜 지금 준비해야 할까요?
                </h2>
                <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <ul className="space-y-4 text-lg text-slate-700">
                        {[
                            '엔트리·파이썬·AI 수업이 빠르게 늘어나는 중',
                            '학교 수업만으로는 이해가 부족',
                            '수업을 따라가며 뒤늦게 필요성을 느낌'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-3 text-blue-600 font-bold">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Approach Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center">
                    부산AI코딩랩의 접근 방식
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        '성적보다 방향성',
                        '암기보다 이해',
                        '단기 성과보다 기초 체력'
                    ].map((item, index) => (
                        <span
                            key={index}
                            className="inline-block bg-blue-50 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold border border-blue-100"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            <hr className="border-slate-200" />

            {/* Curriculum Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* AI Understanding */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">
                        AI 이해
                    </h2>
                    <ul className="space-y-3 text-slate-700 text-lg">
                        <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>엔트리로 개념 이해 (초등)</li>
                        <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>파이썬 기반 사고 확장 (중·고등)</li>
                        <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>AI 구조와 진로 탐색</li>
                    </ul>
                </section>

                {/* AI Usage */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">
                        AI 활용
                    </h2>
                    <ul className="space-y-3 text-slate-700 text-lg">
                        <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>과제·보고서 구조 정리</li>
                        <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>탐구·발표·수행평가 효율화</li>
                        <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>AI를 정리 도구로 활용</li>
                    </ul>
                </section>
            </div>

            <hr className="border-slate-200" />

            {/* Levels Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900 text-center">
                    레벨 구조
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                        <span className="block text-blue-600 font-bold mb-2">Level 1</span>
                        <h3 className="text-xl font-bold text-slate-900">엔트리·코딩 개념</h3>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                        <span className="block text-blue-600 font-bold mb-2">Level 2</span>
                        <h3 className="text-xl font-bold text-slate-900">파이썬 사고 확장</h3>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                        <span className="block text-blue-600 font-bold mb-2">Level 3</span>
                        <h3 className="text-xl font-bold text-slate-900">AI·데이터·진로</h3>
                    </div>
                </div>
            </section>

            {/* Recommendations Section */}
            <section className="space-y-8 bg-blue-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-3xl">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center">
                        이런 경우에 추천합니다
                    </h2>
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                        <ul className="space-y-4 text-lg text-slate-700">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                                특목고 / 자사고 / 특성화고 고민
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                                파이썬 수업이 걱정되는 경우
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                                개발·AI 진로를 탐색 중인 경우
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="text-center py-12 md:py-16">
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
