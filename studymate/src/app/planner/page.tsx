import { Metadata } from 'next';
import { useTranslation } from 'next-i18next';
import AIFeature from '@/components/AIFeature';
import { generateStudyPlan } from '@/lib/openai';

export const metadata: Metadata = {
  title: 'Study Planner - StudyMate',
  description: 'Create personalized study schedules and track your progress',
};

export default function PlannerPage() {
  const { t } = useTranslation('common');

  const handleSubmit = async (input: string) => {
    const [subject, duration] = input.split(',').map(str => str.trim());
    const weeks = parseInt(duration) || 4;
    return generateStudyPlan(subject, weeks);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {t('features.planner.title')}
      </h1>
      
      <AIFeature
        title={t('features.planner.title')}
        description={t('features.planner.description')}
        onSubmit={handleSubmit}
        placeholder={t('features.planner.placeholder')}
      />

      <div className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{t('howToUse')}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t('features.planner.tip1')}</li>
          <li>{t('features.planner.tip2')}</li>
          <li>{t('features.planner.tip3')}</li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <h3 className="font-semibold mb-2">{t('features.planner.format')}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t('features.planner.formatExample')}
          </p>
          <code className="block mt-2 p-2 bg-white dark:bg-gray-800 rounded">
            Mathematics, 6
          </code>
        </div>
      </div>
    </div>
  );
} 