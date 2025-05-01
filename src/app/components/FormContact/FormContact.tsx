'use client'
import React from "react";
import { useState } from 'react';
import './formContact.css'
import { useTranslation } from 'react-i18next';
import LoaderForm from "../Icons/LoaderForm";
import NombreForm from "../Icons/NombreForm";
import PhoneForm from "../Icons/PhoneForm";
import MailForm from "../Icons/MailForm";
import MessageForm from "../Icons/MessageForm";


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
                        {t('formErrorMessage')}
                    </div>
                )}
                
                {success && (
                    <div className="toastForm fixed top-20 right-4 md:right-10 bg-[#107D70] px-4 py-3 shadow-lg z-50">
                        {t('formSuccessMessage')}
                    </div>
                )}
            <div className="flex justify-center mt-[20px]">
                <img className="h-24 w-auto " src="../logo.svg" alt="iweb logo" />
            </div>

            <form className="form px-2 md:px-6 lg:px-10 py-5 md:py-8 lg:py-10" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <NombreForm />
                    <input id="name" required type="text" name="name" placeholder={t('formInputName')} />
                </div>

                <div className="inputContainer">
                    <PhoneForm />
                    <input id="phone" required type="number" name="phone" placeholder={t('formInputPhone')}  inputMode="numeric" pattern="[0-9]*"/>
                </div>

                <div className="inputContainer">
                    <MailForm />
                    <input id="email" required type="email" name="email" placeholder={t('formInputEmail')} />
                </div>

                <div className="inputContainer">
                    <MessageForm />
                    <textarea id="textarea" required name="message" placeholder={t('formInputMessage')}></textarea>
                </div>

                <button type="submit" disabled={loading} className="w-[90%] md:w-[70%] btn btn-lg bg-accent hover:bg-accent-hover disabled:opacity-50 bg-[#191919] text-[#f3f3f3] hover:bg-opacity-20 hover:text-[#191919] transition shadow-[0px_3px_8px_rgba(0,0,0,0.9)] hover:shadow-[0px_1px_4px_rgba(0,0,0,0.9)]">
                    {loading && (<LoaderForm />)}
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </div>
    )
}

export default FormContact