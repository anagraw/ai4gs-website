import React from 'react';
import { MessageCircle, HelpCircle, ExternalLink } from 'lucide-react';

export default function Questions() {
  // Replace this URL with your actual Google Form link
  const googleFormLink = "https://forms.google.com/YOUR-FORM-LINK";

  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MessageCircle className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Submit Your Questions</h2>
          <p className="text-xl text-gray-600">
            Have questions for our speakers and experts? We'd love to hear from you!
          </p>
        </div>

        {/* Information Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg mb-8 border-2 border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-indigo-600" />
            How It Works
          </h3>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              AI4GS brings together leading voices from AI, HCI, development studies, policy, and more. 
              This is your opportunity to engage with experts and shape the discussion.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">What You Can Submit:</h4>
              <ul className="space-y-2 list-disc list-inside">
                <li>Questions for specific speakers or panelists</li>
                <li>Topics you'd like to see discussed during the seminar</li>
                <li>Ideas for thematic discussions</li>
                <li>Suggestions for collaborative research directions</li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
              All submissions will be reviewed by our organizing committee. Selected questions 
              will be addressed during panel discussions, Q&A sessions, and thematic workshops.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-lg shadow-lg border-2 border-indigo-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Submit?</h3>
          <p className="text-gray-600 mb-6">
            Click the button below to access our submission form. Your questions will help shape 
            meaningful discussions at AI4GS.
          </p>
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg text-lg"
          >
            Submit Your Questions
            <ExternalLink className="h-5 w-5" />
          </a>
          <p className="text-gray-500 text-sm mt-4">
            This will open the Google Form in a new tab
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-indigo-50 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-3">Important Notes:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Submissions are open until <strong>December xyz</strong></li>
            <li>• You'll receive a confirmation email after submission</li>
            <li>• Selected questions will be announced before the seminar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}