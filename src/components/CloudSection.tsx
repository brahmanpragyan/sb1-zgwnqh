import { motion } from 'framer-motion';
import { useState } from 'react';
import { cloudTips } from '../data/cloudTips';
import { cloudShortcuts } from '../data/cloudShortcuts';
import { Copy, CheckCircle, Cloud, Terminal, Zap } from 'lucide-react';

export default function CloudSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'tips' | 'shortcuts'>('tips');

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-purple-300 flex items-center gap-2">
          <Cloud className="w-6 h-6" />
          Cloud Computing Guide
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'tips' 
                ? 'cyber-border bg-purple-900/30' 
                : 'text-gray-400'
            }`}
          >
            <Zap className="w-4 h-4 inline mr-2" />
            Tips
          </button>
          <button
            onClick={() => setActiveTab('shortcuts')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'shortcuts' 
                ? 'cyber-border bg-purple-900/30' 
                : 'text-gray-400'
            }`}
          >
            <Terminal className="w-4 h-4 inline mr-2" />
            Shortcuts
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTab === 'tips' ? (
          cloudTips.map((tip) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: tip.id * 0.1 }}
              className="cyber-border p-4 relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00e1ff]/10 via-[#ff006e]/10 to-[#b537f2]/10 rounded-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="text-cyan-400 font-mono mr-2">#{tip.id}</span>
              <span className="text-purple-300">{tip.tip}</span>
            </motion.div>
          ))
        ) : (
          cloudShortcuts.map((shortcut) => (
            <motion.div
              key={shortcut.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: shortcut.id * 0.1 }}
              className="cyber-border p-4 relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00e1ff]/10 via-[#ff006e]/10 to-[#b537f2]/10 rounded-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-cyan-400 font-mono">{shortcut.platform}</span>
                <button
                  onClick={() => copyToClipboard(shortcut.command, `shortcut-${shortcut.id}`)}
                  className="p-1 rounded hover:bg-purple-900/30 transition-colors"
                >
                  {copiedId === `shortcut-${shortcut.id}` ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-purple-300" />
                  )}
                </button>
              </div>
              <code className="block text-sm mb-2 text-[#00e1ff] font-mono">
                {shortcut.command}
              </code>
              <p className="text-sm text-purple-300">{shortcut.description}</p>
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
}