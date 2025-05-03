import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTemplate/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req: Request) {
    const body = await req.json();
    const { name, email, phone, message } = body;

    try {
        const result = await resend.emails.send ({
            from: 'iWeb <onboarding@resend.dev>',
            to: 'iweb.contacto@gmail.com',
            subject: 'Nueva consulta de la pagina',
            react: EmailTemplate({ name, email, phone, message }) as React.ReactElement,
        })
        console.log(result);
        
        return NextResponse.json ({message: "Mail enviado"}, {
            status: 200 
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json ({message:"Error"}, {
            status: 500
        })
        
    }
}
