import Link from 'next/link';
import CTAButtons from '@/components/common/CTAButtons';

export default function Home() {
  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          부산AI코딩랩
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto break-keep">
          부산에서 AI·코딩을 가장 현실적으로 적용하는 교육 공간
        </p>
        <div className="flex justify-center pt-4">
          <CTAButtons />
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Why Us Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          왜 부산AI코딩랩인가
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800">현장 수업 경험 중심</h3>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800">AI 이해 + AI 활용 이원 구조</h3>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800">학생·성인·기관 모두 대응 가능한 설계</h3>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Approach Section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          AI 이해 · AI 활용 <span className="text-base font-medium text-slate-500 block mt-2">(사례로 설명합니다)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Student */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">학생</h3>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>엔트리 → 파이썬 → AI 이해</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>학교 수업과 진로를 연결</span>
              </li>
            </ul>
          </div>

          {/* Adult */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">성인</h3>
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>AI 툴 실습</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>바이브코딩·웹 구조 이해</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>결과물이 남는 수업</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Navigation Section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          당신에게 맞는 방향으로 시작하세요
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/students"
            className="group block bg-blue-50 border border-blue-100 p-8 rounded-xl hover:bg-blue-100 hover:border-blue-200 transition-all text-center"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">우리 아이에게 맞는 수업</h3>
            <span className="text-blue-600 font-bold group-hover:underline text-lg">
              학생·학부모 페이지로 이동 &rarr;
            </span>
          </Link>
          <Link
            href="/adults"
            className="group block bg-slate-50 border border-slate-100 p-8 rounded-xl hover:bg-slate-100 hover:border-slate-200 transition-all text-center"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">지금 바로 써먹는 AI·코딩</h3>
            <span className="text-slate-700 font-bold group-hover:underline text-lg">
              성인 페이지로 이동 &rarr;
            </span>
          </Link>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Cases Section */}
      <section className="space-y-8 bg-slate-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            실제 수업 사례
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {[
              '엔트리에서 파이썬으로 전환한 학생 사례',
              'AI 툴로 과제·보고서 완성도 향상 사례',
              '성인 바이브코딩 실습 사례'
            ].map((item, i) => (
              <li key={i} className="flex items-center text-lg text-slate-700 bg-white p-4 rounded-lg shadow-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="text-center pt-4">
            <a
              href="https://blog.naver.com/rlaworlawo321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              더 많은 사례 보기 <span className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum Preview Section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          커리큘럼 미리보기
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-slate-200 rounded-xl p-8 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">AI 이해</h3>
            <div className="flex items-center justify-center space-x-4 text-slate-600 font-medium">
              <span>개념</span>
              <span className="text-slate-300">&gt;</span>
              <span>구조</span>
              <span className="text-slate-300">&gt;</span>
              <span>진로</span>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-8 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">AI 활용</h3>
            <div className="flex items-center justify-center space-x-4 text-slate-600 font-medium">
              <span>도구</span>
              <span className="text-slate-300">&gt;</span>
              <span>실습</span>
              <span className="text-slate-300">&gt;</span>
              <span>결과물</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/curriculum"
            className="inline-block border-b-2 border-slate-900 pb-1 font-bold text-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            전체 커리큘럼 보기 &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-12 md:py-20 bg-blue-50 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
          지금 상황에 맞는 방향을 함께 정리해드립니다
        </h2>
        <div className="flex justify-center">
          <CTAButtons />
        </div>
      </section>
    </div>
  );
}
