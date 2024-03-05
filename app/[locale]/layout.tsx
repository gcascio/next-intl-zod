import { useTranslations } from "next-intl";
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const t = useTranslations('nav');
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <header>
          <nav>
            <a href="/en">{t('english')}</a>
            <a href="/de">{t('german')}</a>
          </nav>
        </header>
        <main>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}