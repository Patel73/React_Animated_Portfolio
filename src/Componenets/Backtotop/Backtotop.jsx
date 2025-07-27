import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 border border-cyan-400 text-cyan-400 rounded-full bg-transparent hover:bg-cyan-600 hover:text-white transition duration-300 shadow-md backdrop-blur-sm flex items-center justify-center text-lg"
            aria-label="Back to top"
            title="Back to Top"
        >
            ↑
        </button>


    );
};

export default BackToTop;
