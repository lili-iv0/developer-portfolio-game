import { useEffect } from 'react';
import profile from '../data/profile';

export default function usePageTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} | ${profile.name}` : `${profile.name} | ${profile.title}`;
  }, [page]);
}
