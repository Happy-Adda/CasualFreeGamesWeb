import React, { useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

const Favicon: React.FC = () => {
    useEffect(() => {
        const iconString = renderToStaticMarkup(<Gamepad2 color="black" />);
        const svgBlob = new Blob([iconString], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(svgBlob);

        const link: HTMLLinkElement = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/svg+xml';
        link.href = url;

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
            URL.revokeObjectURL(url);
        };
    }, []);

    return null;
};

export default Favicon;
