import { useSwiper } from "swiper/react";
import './carousel.css'

const SlideNavButtons = () => {
    const swiper = useSwiper()

    return (
        <div className="slideNavContainer mb-6 md:mb-12 mt-3 md:mt-6">
            <button onClick={() => swiper.slidePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 19 33" fill="none">
                    <path d="M18.2014 1.21674C17.9523 0.967044 17.6559 0.768851 17.3294 0.633599C17.0029 0.498346 16.6527 0.428711 16.299 0.428711C15.9453 0.428711 15.5951 0.498346 15.2685 0.633599C14.942 0.768851 14.6457 0.967044 14.3966 1.21674L0.999594 14.5372C0.748458 14.7849 0.549126 15.0795 0.413096 15.4042C0.277066 15.7288 0.207031 16.077 0.207031 16.4287C0.207031 16.7804 0.277066 17.1286 0.413096 17.4533C0.549126 17.7779 0.748458 18.0726 0.999594 18.3202L14.3966 31.6407C14.6457 31.8904 14.942 32.0886 15.2685 32.2238C15.5951 32.3591 15.9453 32.4287 16.299 32.4287C16.6527 32.4287 17.0029 32.3591 17.3294 32.2238C17.6559 32.0886 17.9523 31.8904 18.2014 31.6407C18.4525 31.393 18.6518 31.0984 18.7879 30.7737C18.9239 30.4491 18.9939 30.1009 18.9939 29.7492C18.9939 29.3975 18.9239 29.0493 18.7879 28.7246C18.6518 28.4 18.4525 28.1053 18.2014 27.8577L6.67993 16.4287L18.2014 4.99976C18.4525 4.75209 18.6518 4.45744 18.7879 4.1328C18.9239 3.80815 18.9939 3.45994 18.9939 3.10825C18.9939 2.75656 18.9239 2.40835 18.7879 2.0837C18.6518 1.75906 18.4525 1.46441 18.2014 1.21674Z" fill="#F3F3F3" />
                </svg>
            </button>

            <div>
                <div className="custom-pagination"></div>
            </div>

            <button onClick={() => swiper.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 19 33" fill="none">
                    <path d="M0.798884 31.7833C1.04797 32.033 1.34431 32.2311 1.67082 32.3664C1.99733 32.5017 2.34755 32.5713 2.70126 32.5713C3.05497 32.5713 3.40519 32.5017 3.7317 32.3664C4.05821 32.2311 4.35455 32.033 4.60364 31.7833L18.0007 18.4628C18.2518 18.2151 18.4511 17.9205 18.5871 17.5958C18.7232 17.2712 18.7932 16.923 18.7932 16.5713C18.7932 16.2196 18.7232 15.8714 18.5871 15.5467C18.4511 15.2221 18.2518 14.9274 18.0007 14.6798L4.60364 1.35932C4.35455 1.10962 4.05821 0.911425 3.7317 0.776173C3.40519 0.640921 3.05498 0.571288 2.70126 0.571288C2.34755 0.571288 1.99734 0.640921 1.67083 0.776173C1.34432 0.911425 1.04797 1.10962 0.798886 1.35932C0.547749 1.60699 0.348418 1.90163 0.21239 2.22628C0.0763595 2.55092 0.00632355 2.89914 0.00632352 3.25083C0.00632349 3.60252 0.0763594 3.95073 0.21239 4.27538C0.348418 4.60002 0.547749 4.89467 0.798886 5.14233L12.3203 16.5713L0.798884 28.0002C0.547747 28.2479 0.348416 28.5426 0.212387 28.8672C0.0763572 29.1918 0.00632122 29.5401 0.00632119 29.8917C0.00632116 30.2434 0.0763571 30.5917 0.212387 30.9163C0.348415 31.2409 0.547747 31.5356 0.798884 31.7833Z" fill="#F3F3F3" />
                </svg>
            </button>
        </div>
    )
}

export default SlideNavButtons