const WHATSAPP_NUMBER = "972548053379";

const WHATSAPP_MESSAGE =
  "היי שי,\nהגעתי דרך האתר ורוצה לבדוק אם התוכנית מתאימה לי. אשמח לשמוע איך מתחילים.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
