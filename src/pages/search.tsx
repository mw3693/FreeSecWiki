import React, {useEffect} from 'react';
import '@pagefind/default-ui/css/ui.css';

export default function Search() {
  useEffect(() => {
    const loadSearch = async () => {
      const {PagefindUI} = await import('@pagefind/default-ui');

      new PagefindUI({
        element: '#search',
        showSubResults: true,
        showImages: false,
      });
    };

    loadSearch();
  }, []);

  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <h1>Search FreeSecWiki</h1>

      <div id="search" />
    </main>
  );
}
