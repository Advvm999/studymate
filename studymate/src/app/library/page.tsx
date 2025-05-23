import { Metadata } from 'next';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { DocumentIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Shared Library - StudyMate',
  description: 'Upload and browse study materials, notes, and guides',
};

export default function LibraryPage() {
  const { t } = useTranslation('common');
  const { data: session } = useSession();
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !session) return;
    // Handle file upload logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {t('features.library.title')}
      </h1>

      {session ? (
        <div className="max-w-4xl mx-auto">
          {/* Upload Section */}
          <div className="mb-8">
            <label
              htmlFor="file-upload"
              className="block w-full p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400"
            >
              <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-600 dark:text-gray-300">
                {t('features.library.uploadPrompt')}
              </span>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                multiple
                accept=".pdf,.doc,.docx,.txt"
              />
            </label>
          </div>

          {/* Files Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <DocumentIcon className="h-8 w-8 text-blue-500" />
                <h3 className="mt-2 font-medium">{file.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('features.library.loginPrompt')}
          </p>
        </div>
      )}
    </div>
  );
} 