interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({name, email, phone, message,}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
        <h2>Nuevo mensaje del formulario</h2>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Teléfono:</strong> {phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>{message}</p>
    </div>
);