import { ExampleForm } from '@/components/ExampleForm';
import {useTranslations} from 'next-intl';
import '../globals.css';
 
export default function Index() {
  const t = useTranslations('home');
  return (
    <>
      <h1>{t('title')}</h1>
      <ExampleForm />
    </>
  );
}