import { useState } from 'react';
import { useTranslation } from 'next-i18next';

interface AIFeatureProps {
  title: string;
  description: string;
  onSubmit: (input: string) => Promise<string>;
  placeholder: string;
  maxLength?: number;
}

export default function AIFeature({
  title,
  description,
  onSubmit,
  placeholder,
  maxLength = 1000,
}: AIFeatureProps) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const response = await onSubmit(input);
      setResult(response);
    } catch (error) {
      console.error('Error:', error);
      setResult(t('error.general'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          disabled={isLoading}
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {input.length}/{maxLength}
          </span>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? t('loading') : t('submit')}
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="font-semibold mb-2">{t('result')}:</h3>
          <p className="whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  );
} 