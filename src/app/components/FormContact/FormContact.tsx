import React from "react";
import { useState } from 'react';
import './formContact.css'
import { useTranslation } from 'react-i18next';
import LoaderForm from "../Icons/LoaderForm";


const FormContact = () => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);


        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const message = formData.get("message");

        try {
            const result = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, phone, email, message }),
            });

            if (result.ok) {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 5000);
                setError(false);
                form.reset();
            } else {
                setError(true);
                setTimeout(() => setSuccess(false), 5000);
            }
        } catch (err) {
            setError(true);
            setTimeout(() => setSuccess(false), 5000);
            console.error(err)

        } finally {
            setLoading(false);
        }
    };

    const { t } = useTranslation('home');
    return (
        <div className="formContainer">
                {error && (
                    <div className="toastForm fixed top-20 right-4 md:right-10 bg-[#A61F11] px-4 py-3 shadow-lg z-50">
                        Hubo un error. Intentá de nuevo
                    </div>
                )}
                
                {success && (
                    <div className="toastForm fixed top-20 right-4 md:right-10 bg-[#107D70] px-4 py-3 shadow-lg z-50">
                        {t('formSuccessMessage')}
                    </div>
                )}
            
            <img className="h-24 w-auto" src="../logo.svg" alt="iweb logo" />

            <form className="form" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM16 24C21.4 24 27.6 26.58 28 28H4C4.46 26.56 10.62 24 16 24ZM16 0C11.58 0 8 3.58 8 8C8 12.42 11.58 16 16 16C20.42 16 24 12.42 24 8C24 3.58 20.42 0 16 0ZM16 20C10.66 20 0 22.68 0 28V32H32V28C32 22.68 21.34 20 16 20Z" fill="#838383" />
                    </svg>
                    <input id="name" required type="text" name="name" placeholder={t('formInputName')} />
                </div>

                <div className="inputContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <path d="M28.0337 17.651C27.6804 17.651 27.3111 17.5382 26.9578 17.4577C26.2424 17.2998 25.5394 17.0899 24.8543 16.8296C24.1094 16.5578 23.2905 16.572 22.5553 16.8693C21.8202 17.1666 21.2206 17.7261 20.872 18.4401L20.5187 19.1648C18.9549 18.2919 17.5178 17.2081 16.2474 15.9439C14.9868 14.6698 13.9062 13.2285 13.0359 11.6601L13.7103 11.2092C14.4222 10.8596 14.9801 10.2583 15.2765 9.52095C15.573 8.78362 15.5871 7.9624 15.3161 7.21529C15.0596 6.52721 14.8503 5.82234 14.6898 5.10561C14.6095 4.75132 14.5453 4.38091 14.4971 4.01051C14.3021 2.87615 13.7097 1.84888 12.8265 1.11371C11.9433 0.378541 10.8275 -0.0162233 9.67982 0.000510998H4.86252C4.17049 -0.00600572 3.48518 0.137098 2.85325 0.42008C2.22131 0.703062 1.65759 1.11928 1.20047 1.6404C0.743337 2.16151 0.403532 2.77529 0.204181 3.43995C0.00483125 4.10462 -0.0493828 4.80455 0.0452299 5.49212C0.900682 12.2389 3.97298 18.5075 8.77682 23.3079C13.5807 28.1082 19.8422 31.1666 26.5725 32H27.1827C28.3668 32.0017 29.51 31.566 30.3942 30.7761C30.9022 30.3204 31.308 29.7618 31.5848 29.1371C31.8616 28.5125 32.0031 27.8361 31.9999 27.1526V22.3212C31.9803 21.2026 31.5741 20.1255 30.8508 19.2737C30.1274 18.422 29.1318 17.8484 28.0337 17.651ZM28.8366 27.3136C28.8363 27.5423 28.7875 27.7682 28.6933 27.9765C28.5992 28.1848 28.4619 28.3705 28.2906 28.5214C28.1117 28.6777 27.902 28.7943 27.6751 28.8637C27.4482 28.933 27.2093 28.9536 26.9739 28.9241C20.9602 28.1507 15.3742 25.3915 11.0973 21.0817C6.82027 16.7718 4.09563 11.1566 3.35311 5.12172C3.32848 4.88586 3.35132 4.64744 3.42028 4.4206C3.48923 4.19376 3.6029 3.98312 3.75455 3.80115C3.90502 3.62937 4.09025 3.49169 4.2979 3.39728C4.50556 3.30287 4.73088 3.25389 4.95887 3.2536H9.77616C10.1496 3.24527 10.5142 3.36775 10.8073 3.59996C11.1004 3.83217 11.3036 4.15959 11.3819 4.52585C11.4462 4.96604 11.5264 5.40086 11.6228 5.83031C11.8076 6.67942 12.0545 7.51373 12.3614 8.3265L10.1134 9.37328C9.92116 9.46173 9.74826 9.58739 9.6046 9.74303C9.46094 9.89868 9.34935 10.0813 9.27624 10.2803C9.20313 10.4793 9.16994 10.6908 9.17858 10.9028C9.18721 11.1147 9.2375 11.3228 9.32655 11.5152C11.6387 16.479 15.6175 20.4694 20.5669 22.7883C20.9578 22.9493 21.3963 22.9493 21.7873 22.7883C21.9875 22.7164 22.1716 22.6054 22.3287 22.4616C22.4858 22.3179 22.6129 22.1443 22.7026 21.9508L23.6981 19.6962C24.5286 19.9928 25.3758 20.2402 26.2353 20.437C26.6635 20.5336 27.097 20.6142 27.5359 20.6786C27.9011 20.7572 28.2276 20.961 28.4591 21.2549C28.6907 21.5488 28.8128 21.9145 28.8045 22.289L28.8366 27.3136Z" fill="#838383" />
                    </svg>
                    <input id="phone" required type="number" name="phone" placeholder={t('formInputPhone')}  inputMode="numeric" pattern="[0-9]*"/>
                </div>

                <div className="inputContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 32 28" fill="none">
                        <path d="M3.2 28C2.32 28 1.56693 27.6576 0.9408 26.9727C0.314667 26.2879 0.00106667 25.4637 0 24.5V3.5C0 2.5375 0.3136 1.71383 0.9408 1.029C1.568 0.344166 2.32107 0.00116667 3.2 0H28.8C29.68 0 30.4336 0.343 31.0608 1.029C31.688 1.715 32.0011 2.53867 32 3.5V24.5C32 25.4625 31.6869 26.2867 31.0608 26.9727C30.4347 27.6587 29.6811 28.0012 28.8 28H3.2ZM16 15.75L3.2 7V24.5H28.8V7L16 15.75ZM16 12.25L28.8 3.5H3.2L16 12.25ZM3.2 7V3.5V24.5V7Z" fill="#838383" />
                    </svg>
                    <input id="email" required type="email" name="email" placeholder={t('formInputEmail')} />
                </div>

                <div className="inputContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 34 34" fill="none">
                        <path d="M22.0526 5.20968L28.7895 11.9465M3.52632 24.5781L9.42105 30.4728M6.89474 27.1044L25.4211 8.5781M2.68421 24.5781L26.2632 1L33 7.736L9.42105 31.3149L1 32.9992L2.68421 24.5781Z" stroke="#838383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <textarea id="textarea" required name="message" placeholder={t('formInputMessage')}></textarea>
                </div>

                <button type="submit" disabled={loading} className="w-[90%] md:w-[70%] btn btn-lg bg-accent hover:bg-accent-hover disabled:opacity-50"
                >
                    {loading && (<LoaderForm />)}
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </div>
    )
}

export default FormContact