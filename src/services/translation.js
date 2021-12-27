import LocalizedStrings from 'react-native-localization';
import english from './languages/english';
import urdu from './languages/urdu';

export const strings = new LocalizedStrings({
  en: english,
  ur: urdu,
});

export const changelanguage = languageKey => {
  strings.setLanguage(languageKey);
};
