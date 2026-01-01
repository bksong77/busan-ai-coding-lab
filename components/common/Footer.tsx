import Link from 'next/link';
import CTAButtons from './CTAButtons';

export default function Footer() {
    return (
        <footer className="border-t bg-slate-50">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">부산AI코딩랩</h3>
                        <p className="text-sm text-slate-600 max-w-sm">
                            부산 경남 최고의 AI 코딩 전문 교육 기관. <br />
                            초중고 학생부터 성인 직무 교육까지, 미래를 위한 실제적 기술을 교육합니다.
                        </p>
                        <div className="flex flex-col space-y-2 text-sm text-slate-600">
                            <a href="tel:010-9825-8816" className="hover:text-blue-600 transition-colors">
                                Tel: 010-9825-8816
                            </a>
                            <a
                                href="https://blog.naver.com/rlaworlawo321"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition-colors"
                            >
                                Blog: blog.naver.com/rlaworlawo321
                            </a>
                        </div>
                    </div>

                    {/* Right Column: CTA */}
                    <div className="flex flex-col items-start md:items-end space-y-4">
                        <p className="text-sm font-medium text-slate-900">
                            상담이 필요하신가요?
                        </p>
                        <CTAButtons />
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8 text-center md:text-left">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} 부산AI코딩랩. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
