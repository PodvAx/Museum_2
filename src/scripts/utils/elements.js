import {
  CLASS_HEADER_BOTTOM_PART,
  CLASS_HEADER_MAIN_PART,
  CLASS_LANGUAGE_SELECTOR,
  CLASS_LANGUAGE_SELECTOR_BUTTON,
  CLASS_LANGUAGE_SELECTOR_DROPDOWN,
  CLASS_LANGUAGE_SELECTOR_ITEM,
  CLASS_MENU,
  CLASS_MENU_BTN,
} from './constants';

export const languageSelector = document.querySelector(
  '.' + CLASS_LANGUAGE_SELECTOR,
);
export const languageSelectorButton = languageSelector.querySelector(
  '.' + CLASS_LANGUAGE_SELECTOR_BUTTON,
);
export const languageSelectorDropdown = languageSelector.querySelector(
  '.' + CLASS_LANGUAGE_SELECTOR_DROPDOWN,
);
export const languageSelectorItems = languageSelectorDropdown.querySelectorAll(
  '.' + CLASS_LANGUAGE_SELECTOR_ITEM,
);

export const menuBtn = document.querySelector('.' + CLASS_MENU_BTN);
export const menu = document.querySelector('.' + CLASS_MENU);

export const headerMainPart = document.querySelector(
  '.' + CLASS_HEADER_MAIN_PART,
);

export const headerBottomPart = document.querySelector(
  '.' + CLASS_HEADER_BOTTOM_PART,
);

const elements = {
  languageSelector,
  languageSelectorButton,
  languageSelectorDropdown,
  languageSelectorItems,
  menuBtn,
  menu,
};

export default elements;
