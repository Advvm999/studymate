import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateExplanation(question: string, language: string = 'en') {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful study assistant. Provide clear, concise explanations in ${language === 'ar' ? 'Arabic' : 'English'}.`
        },
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating explanation:', error);
    throw new Error('Failed to generate explanation');
  }
}

export async function generateSummary(text: string, language: string = 'en') {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Summarize the following text in ${language === 'ar' ? 'Arabic' : 'English'}. Focus on key points and maintain clarity.`
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.5,
      max_tokens: 300,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating summary:', error);
    throw new Error('Failed to generate summary');
  }
}

export async function generateStudyPlan(subject: string, duration: number, language: string = 'en') {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Create a detailed study plan in ${language === 'ar' ? 'Arabic' : 'English'} for the following subject, broken down into ${duration} weeks.`
        },
        {
          role: "user",
          content: `Subject: ${subject}\nDuration: ${duration} weeks`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating study plan:', error);
    throw new Error('Failed to generate study plan');
  }
} 