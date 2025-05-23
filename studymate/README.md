# StudyMate 📚

StudyMate is a smart web platform designed to help university students across all majors manage their studies, improve performance, and access intelligent learning tools — in both Arabic and English.

## ✨ Features

- 🤖 **AI Study Assistant**: Get instant answers and explanations for academic questions
- 📝 **Smart Summarizer**: Convert long texts and lectures into concise summaries
- 📅 **Study Planner**: Create personalized study schedules and track progress
- 📚 **Shared File Library**: Upload and browse study materials
- 🌐 **Bilingual Support**: Full Arabic and English language support
- 📱 **Mobile-Friendly**: Responsive design for all devices
- 🎨 **Modern UI**: Clean, intuitive interface with dark mode support

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **UI Components**: DaisyUI, Heroicons
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI API
- **Internationalization**: next-i18next

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- OpenAI API key

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/studymate.git
cd studymate
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a .env file in the root directory with the following variables:
\`\`\`env
# Database URL for PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/studymate"

# NextAuth configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OpenAI API configuration
OPENAI_API_KEY="your-openai-api-key-here"
\`\`\`

4. Initialize the database:
\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000 to see the application.

## 📁 Project Structure

\`\`\`
studymate/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions and configurations
│   └── styles/             # Global styles and Tailwind config
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets and translations
│   └── locales/           # Translation files
└── package.json           # Project dependencies
\`\`\`

## 🌍 Internationalization

The application supports both English and Arabic languages. Translation files are located in \`public/locales/\`:

- \`public/locales/en/common.json\` - English translations
- \`public/locales/ar/common.json\` - Arabic translations

## 🔒 Authentication

User authentication is handled by NextAuth.js. To create an account:

1. Click the "Sign Up" button
2. Enter your email and password
3. Verify your email address
4. Log in with your credentials

## 🤖 AI Features

The application uses OpenAI's GPT-3.5 Turbo model for:

- Generating study explanations
- Summarizing text content
- Creating personalized study plans

## 🎯 Future Enhancements

- [ ] Study progress tracking
- [ ] Collaborative study groups
- [ ] Real-time chat support
- [ ] Mobile app version
- [ ] Integration with learning management systems

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for providing the AI capabilities
- Next.js team for the amazing framework
- All contributors and users of StudyMate 