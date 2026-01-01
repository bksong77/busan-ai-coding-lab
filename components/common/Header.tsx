import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row h-auto md:h-16 items-center justify-between py-4 md:py-0 gap-4 md:gap-0">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            부산AI코딩랩
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600">
                        <Link href="/students" className="hover:text-blue-600 transition-colors">
                            학생·학부모
                        </Link>
                        <Link href="/adults" className="hover:text-blue-600 transition-colors">
                            성인
                        </Link>
                        <Link href="/curriculum" className="hover:text-blue-600 transition-colors">
                            커리큘럼
                        </Link>
                        <Link href="/cases" className="hover:text-blue-600 transition-colors">
                            사례
                        </Link>
                        <Link href="/reviews" className="hover:text-blue-600 transition-colors">
                            후기
                        </Link>
                        <Link href="/contact" className="hover:text-blue-600 transition-colors">
                            상담
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
