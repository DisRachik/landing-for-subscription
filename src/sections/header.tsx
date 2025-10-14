import { getT } from '@/app/i18n';

const Header = async () => {
  const { t, i18n } = await getT('header');
  return <header className='container'>{t('navbar.structure')}</header>;
};

export default Header;
