import { useEffect } from 'react';

/**
 * Custom hook to update the document title, meta description, and meta keywords.
 *
 * @param {string} title - The title to set for the page.
 * @param {string} description - The meta description to set for the page.
 * @param {string} keywords - The meta keywords to set for the page.
 */
const usePageMeta = (title, description, keywords) => {
  useEffect(() => {
    // Set the document title
    document.title = `${title} | ${description}`;

    // Set the meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set the meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);
};

export default usePageMeta;