// TODO: replace with the real business WhatsApp number (international format, no leading 0 or +).
const WHATSAPP_NUMBER = "972501234567";

const WHATSAPP_MESSAGE = "היי, אשמח לקבוע שיחת ייעוץ אישית ללא עלות.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
