import { createContext, useContext, useState, useEffect } from 'react';
import {
  HERO_CONTENT,
  ABOUT_US_CONTENT,
  BELIEF_TEXT,
  NAVIGATION_ITEMS,
} from '../constants';

const STORAGE_KEY = 'voith_admin_content';

const defaultContent = {
  hero: HERO_CONTENT,
  aboutUs: ABOUT_US_CONTENT,
  belief: BELIEF_TEXT,
  quotes: [
    {
      text: "Building excellence through innovation and integrity, we create lasting value for Nepal's future.",
      author: 'VOITH',
    },
  ],
  navItems: NAVIGATION_ITEMS,
};

const loadStored = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...defaultContent, ...parsed };
    }
  } catch (_) {}
  return defaultContent;
};

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContentState] = useState(loadStored);

  useEffect(() => {
    const stored = loadStored();
    setContentState(stored);
  }, []);

  const setContent = (section, data) => {
    setContentState((prev) => {
      const next = { ...prev, [section]: data };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (_) {}
      return next;
    });
  };

  const resetSection = (section) => {
    if (section === 'hero') setContent('hero', defaultContent.hero);
    if (section === 'aboutUs') setContent('aboutUs', defaultContent.aboutUs);
    if (section === 'belief') setContent('belief', defaultContent.belief);
    if (section === 'quotes') setContent('quotes', defaultContent.quotes);
    if (section === 'navItems') setContent('navItems', defaultContent.navItems);
  };

  return (
    <ContentContext.Provider value={{ content, setContent, resetSection, defaultContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) return { content: defaultContent, setContent: () => {}, resetSection: () => {} };
  return ctx;
}
