import React from 'react';
import CTAButtons from '@/components/common/CTAButtons';

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-16 py-12 md:py-20">
            {/* Hero / Intro Section */}
            <section className="text-center space-y-6">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    상담 안내
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-medium break-keep">
                    부담 없이 현재 상황을 정리해드립니다.
                </p>
            </section>

            <hr className="border-slate-200" />

            {/* Channels Section */}
            <section className="space-y-10 text-center">
                <h2 className="text-2xl font-bold text-slate-900">
                    상담 채널
                </h2>

                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 space-y-12 shadow-sm">
                    {/* Phone Section - Emphasized */}
                    <div className="space-y-4">
                        <div className="flex flex-col items-center space-y-3">
                            <span className="text-lg font-bold text-slate-500 tracking-wide uppercase">Telephone</span>
                            <a
                                href="tel:010-9825-8816"
                                className="text-4xl md:text-5xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors tracking-tight"
                            >
                                010-9825-8816
                            </a>
                            <p className="text-slate-500">
                                상담 가능 시간: 평일 09:00 - 18:00
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-200" />

                    {/* Kakao Section - Emphasized */}
                    <div className="space-y-6">
                        <span className="text-lg font-bold text-slate-500 tracking-wide uppercase">Kakao Talk</span>
                        <div className="flex justify-center transform scale-110">
                            <CTAButtons />
                        </div>
                        <p className="text-slate-500 text-sm">
                            카카오톡 채널을 통해 24시간 문의를 남기실 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200" />

            {/* Disclaimer Section */}
            <section className="text-center space-y-2 text-slate-500 text-sm md:text-base">
                <p>※ 성적·취업·수익을 약속하지 않습니다.</p>
                <p>※ 상담 후 결정하셔도 됩니다.</p>
            </section>
        </div>
    );
}
