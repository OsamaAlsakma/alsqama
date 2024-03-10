import { useState } from "react";
import { useTranslation } from "react-i18next";

import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from "@mui/material/Select/Select";
import { StyledLocalizationButtonFormControl } from "./style";
import { LANGS } from "../../../bootstrap/i18n/init-i18n";

const HeaderLocalizationSelectBox = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState<LANGS>(i18n.language as LANGS);

  const handleSetLanguage = (language: LANGS) => {
    setLang(language);
    i18n.changeLanguage(language);
  };

  return (
    <StyledLocalizationButtonFormControl>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={lang}
        onChange={(e) => handleSetLanguage(e.target.value as LANGS)}
        autoWidth
      >
        <MenuItem value={LANGS.EN}>EN</MenuItem>
        <MenuItem value={LANGS.AR}>AR</MenuItem>
        <MenuItem value={LANGS.RU}>RU</MenuItem>
      </Select>
    </StyledLocalizationButtonFormControl>
  );
};

export default HeaderLocalizationSelectBox;
