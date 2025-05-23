import { Metadata } from 'next';
import { useTranslation } from 'next-i18next';
import AIFeature from '@/components/AIFeature';
import { generateExplanation } from '@/lib/openai';

export const metadata: Metadata = {
  title: 'AI Study Assistant - StudyMate',
  description: 'Get instant answers and explanations for your academic questions',
};

export default function StudyAssistantPage() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {t('features.aiAssistant.title')}
      </h1>
      
      <AIFeature
        title={t('features.aiAssistant.title')}
        description={t('features.aiAssistant.description')}
        onSubmit={generateExplanation}
        placeholder={t('features.aiAssistant.placeholder')}
      />

      <div className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{t('howToUse')}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t('features.aiAssistant.tip1')}</li>
          <li>{t('features.aiAssistant.tip2')}</li>
          <li>{t('features.aiAssistant.tip3')}</li>
        </ul>
      </div>
    </div>
  );
} 