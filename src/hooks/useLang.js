import { useState } from "react";
import { textLang } from "../lang";

export const useLang = (lang = "en", view = "loginScreen") => {
  const [language, setlang] = useState(lang);

  const handleLangChange = (e) => {
    setlang(e.target.value);
  };


  const props = textLang[view];
  const texts = {}
  for(let p in props) {
    texts[p] = props[p][language]
  }

  return [language, texts, handleLangChange];
};
