import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/fontawesome.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/slick-slider.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/mobile-menu.css";
import "/public/assets/css/main.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AP Talent | Global Workforce Solutions",
    description: "Flexible workforce solutions across recruitment, EOR, and payroll management. Serving 50+ countries worldwide.",
    icons: {
        icon: [
            { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon_io/favicon.ico' },
        ],
        apple: '/favicon_io/apple-touch-icon.png',
        other: [
            {
                rel: 'manifest',
                url: '/favicon_io/site.webmanifest',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="body">{children}</body>
        </html>
    );
}
