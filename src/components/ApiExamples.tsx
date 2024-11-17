import { motion } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const examples = [
  // ... previous examples remain the same
];

export default function ApiExamples() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold gradient-text mb-8 text-center"
        >
          API Usage Examples
        </motion.h1>

        <div className="space-y-8">
          {examples.map((example, i) => (
            <motion.section
              key={example.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="cyber-border-rainbow p-4 md:p-6 relative group"
            >
              <h2 className="text-2xl font-bold gradient-text mb-2">
                {example.title}
              </h2>
              <p className="text-[#00e1ff] mb-4">{example.description}</p>
              
              <div className="relative">
                <button
                  onClick={() => copyToClipboard(example.code, example.id)}
                  className="absolute right-2 top-2 p-2 rounded-lg bg-purple-900/50 hover:bg-purple-900/70 transition-colors z-10"
                >
                  {copiedId === example.id ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-purple-300" />
                  )}
                </button>
                <SyntaxHighlighter
                  language={example.id.includes('-js') ? 'javascript' : 'python'}
                  style={atomOneDark}
                  className="rounded-lg overflow-hidden"
                  customStyle={{ padding: '1.5rem' }}
                >
                  {example.code}
                </SyntaxHighlighter>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}