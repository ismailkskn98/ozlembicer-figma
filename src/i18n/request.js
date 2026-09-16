import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

function mergeMessages(source, translations) {
  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => {
      const translatedValue = translations?.[key];

      if (value && typeof value === "object" && !Array.isArray(value)) {
        return [key, mergeMessages(value, translatedValue)];
      }

      return [key, translatedValue ?? value];
    }),
  );
}

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const englishMessages = (await import("../../messages/en.json")).default;
  const localeMessages = locale === routing.defaultLocale
    ? englishMessages
    : (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages: mergeMessages(englishMessages, localeMessages),
  };
});
