import React from 'react';

export default function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <a
                href="tel:010-9825-8816"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
                전화 상담
            </a>
            <a
                href="http://pf.kakao.com/_KZGNb/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors duration-200"
            >
                카카오톡 상담
            </a>
        </div>
    );
}
