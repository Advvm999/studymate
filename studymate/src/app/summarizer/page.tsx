import { Metadata } from 'next';
import { useTranslation } from 'next-i18next';
import AIFeature from '@/components/AIFeature';
import { generateSummary } from '@/lib/openai';

export const metadata: Metadata = {
  title: 'Smart Summarizer - StudyMate',
  description: 'Convert long texts and lectures into concise, easy-to-understand summaries',
};

export default function SummarizerPage() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {t('features.summarizer.title')}
      </h1>
      
      <AIFeature
        title={t('features.summarizer.title')}
        description={t('features.summarizer.description')}
        onSubmit={generateSummary}
        placeholder={t('features.summarizer.placeholder')}
        maxLength={2000}
      />

      <div className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{t('howToUse')}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t('features.summarizer.tip1')}</li>
          <li>{t('features.summarizer.tip2')}</li>
          <li>{t('features.summarizer.tip3')}</li>
        </ul>
      </div>
    </div>
  );
} 