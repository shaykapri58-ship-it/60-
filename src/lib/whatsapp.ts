const WHATSAPP_NUMBER = "972548053379";

const WHATSAPP_MESSAGE =
  "היי שי,\nהגעתי דרך האתר ורציתי לבדוק האם התוכנית מתאימה לי.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
