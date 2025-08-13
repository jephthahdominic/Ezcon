export const LinkToMail = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a href={href} className="w-max bg-white text-[#8b4513] font-normal px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
            {children}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
        </a>
    );
};