import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  KR = "ko-KR",
}

function getLocaleFromString(text: string) {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.KR:
      return Locale.KR;
    default:
      return Locale.US;
  }
}

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState<Locale>(Locale.US);

  useEffect(() => {
    setTimeout(() => {
      setTimestamp(new Date());
    }, 1000);
  });

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale) setLocale(getLocaleFromString(savedLocale));
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(getLocaleFromString(e.target.value));
  }, []);

  return (
    <div>
      <p>
        <span>현재 시각</span>
        <span>: {timestamp.toLocaleString(locale)}</span>
      </p>
      <select value={locale} onChange={onChange}>
        <option value="en-US">en-US</option>
        <option value="ko-KR">ko-KR</option>
      </select>
    </div>
  );
};

export default Clock;
