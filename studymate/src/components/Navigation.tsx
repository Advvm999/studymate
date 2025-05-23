import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import {
  AcademicCapIcon,
  DocumentTextIcon,
  CalendarIcon,
  FolderIcon,
  LanguageIcon,
} from '@heroicons/react/24/outline';

export default function Navigation() {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    router.push(router.asPath, router.asPath, { locale: newLang });
  };

  const navigation = [
    {
      name: t('features.aiAssistant.title'),
      href: '/study-assistant',
      icon: AcademicCapIcon,
    },
    {
      name: t('features.summarizer.title'),
      href: '/summarizer',
      icon: DocumentTextIcon,
    },
    {
      name: t('features.planner.title'),
      href: '/planner',
      icon: CalendarIcon,
    },
    {
      name: t('features.library.title'),
      href: '/library',
      icon: FolderIcon,
    },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center flex-shrink-0 text-blue-600 dark:text-blue-400"
            >
              <span className="font-bold text-xl">StudyMate</span>
            </Link>

            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <item.icon className="h-5 w-5 mr-1" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label={t('switchLanguage')}
            >
              <LanguageIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="sr-only">{t('openMenu')}</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 