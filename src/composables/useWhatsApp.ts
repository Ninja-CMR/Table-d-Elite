export function useWhatsApp() {
    const WHATSAPP_NUMBER = "237686151717";

    const sendReservationToWhatsApp = (formData: any) => {

        const message = `*NOUVELLE RÉSERVATION - LA TABLE DE L'ELITE* 🥂
------------------------------------------
👤 *Client :* ${formData.firstName} ${formData.lastName}
📧 *Email :* ${formData.email}
📞 *Tel :* ${formData.phone}

📅 *Date :* ${formData.date}
⏰ *Heure :* ${formData.time}
👥 *Couverts :* ${formData.guests}

✨ *Occasion :* ${formData.occasion || 'Aucune'}
📝 *Demandes :* ${formData.requests || 'Aucune'}
------------------------------------------
_Envoyé depuis le site web._`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return {
        sendReservationToWhatsApp
    };
}