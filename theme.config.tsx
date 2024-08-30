import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <span>Documentation</span>,
  footer: {
    text: (
      <span>
        Copyright {new Date().getFullYear()} ©{' '}
        <a href="/" target="_blank">
        Marie-Laure Edjour
        </a>
        .
      </span>
    ),
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "fr", text: "Français" },
  ],
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Documentation",
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  search: {
    placeholder: () => {
      const { locale } = useRouter();

      if (locale === 'fr') {
        return 'Rechercher...';
      } else {
        return 'Search...';
      }
        
    },
  },
  toc: {
    extraContent: null,
    backToTop: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  }
};

export default config;
