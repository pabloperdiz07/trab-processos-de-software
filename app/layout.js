import './global.css';

export const metadata = {
    title: 'MechAdmin',
    description: 'Management system',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    )
}
