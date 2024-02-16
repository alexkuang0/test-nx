import { useDocumentTitle } from 'usehooks-ts';

export const createPageTitleHook = (defaultTitle: string) => {
  return (title: string) => {
    useDocumentTitle(`${title} - ${defaultTitle}`);
  };
};
