import * as i18n from "../../i18n";
export declare const LanguageList: ({ onChange, languages, currentLangCode, }: {
    languages?: {
        code: string;
        label: string;
    }[] | undefined;
    onChange: (langCode: i18n.Language["code"]) => void;
    currentLangCode?: string | undefined;
}) => JSX.Element;
