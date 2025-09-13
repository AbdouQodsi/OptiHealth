import "app/favicon.ico"
import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/bootstrap.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
export const metadata = {
    title: 'The Great Place of Eyecare | OptiHealth',
    description: 'Discover advanced eye treatments at The Great Place of Eyecare Hospital Center. Expert doctors, modern technology & trusted vision care for all ages.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
