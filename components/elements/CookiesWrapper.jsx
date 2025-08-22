"use client";

import Cookies from "@/components/elements/Cookies";
import { useTranslation } from "react-i18next";
import { useFetchData } from "@/components/customHooks/useFetchData";

export default function CookiesWrapper() {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: btnsText } = useFetchData("buttons-text", language, true);
  const { data: cookiesContent } = useFetchData("cookie-modal-content", language, true);

  if (!btnsText || !cookiesContent) return null;
  return <Cookies btnsText={btnsText} cookiesContent={cookiesContent} />;
}
