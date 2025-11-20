'use client'

import { useState } from 'react'
import { Copy, Sparkles, TrendingUp, Clock, Users, Hash, Zap, CheckCircle2 } from 'lucide-react'

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const titles = [
    "This Mind-Blowing Fact Will Change How You See Everything 🤯",
    "POV: You Finally Understand This Concept 📊 #Explained",
    "Wait For The End... 😱 (99% Don't Know This)",
    "The Secret They Don't Want You To Know 🔥",
    "How It Actually Works 👀 | Animation Breakdown"
  ]

  const description = `🎯 Drop a follow for more mind-blowing facts!

This animation breaks down [YOUR TOPIC] in the simplest way possible. No fluff, just pure knowledge!

💡 Did this help you understand it better? Let me know in the comments!

🔔 Turn on notifications so you never miss another video

#infographic #animation #explained #educational #learnontiktok #knowledge #viral #fyp #foryou #trending #mindblown #satisfying #tutorial #howto #science`

  const beforeTips = [
    {
      icon: Clock,
      title: "Optimal Upload Time",
      desc: "Post between 6-10 PM when engagement is highest",
      details: "Peak times: Tuesday-Thursday 7-9 PM, Friday 5 PM"
    },
    {
      icon: Hash,
      title: "Hashtag Strategy",
      desc: "Use 3-5 trending + 3-5 niche hashtags",
      details: "Mix popular (#fyp) with specific (#infographics)"
    },
    {
      icon: Sparkles,
      title: "First 3 Seconds",
      desc: "Hook viewers immediately with bold text/visuals",
      details: "Use pattern interrupts or shocking statements"
    },
    {
      icon: Users,
      title: "Caption Perfection",
      desc: "Write captions that encourage comments",
      details: "Ask questions, create controversy, request opinions"
    }
  ]

  const afterTips = [
    {
      icon: TrendingUp,
      title: "Engage Within 1 Hour",
      desc: "Respond to ALL comments in the first hour",
      details: "TikTok prioritizes videos with high early engagement"
    },
    {
      icon: Zap,
      title: "Share Immediately",
      desc: "Share to your other social media platforms",
      details: "Cross-post to Instagram Reels, YouTube Shorts"
    },
    {
      icon: Users,
      title: "Engage With Community",
      desc: "Comment on similar videos using your account",
      details: "Builds connections and signals activity to algorithm"
    },
    {
      icon: CheckCircle2,
      title: "Pin Top Comment",
      desc: "Pin a comment asking a question or teasing next video",
      details: "Drives conversation and watch time"
    }
  ]

  const viralTricks = [
    "Use subtitles/captions - 85% watch without sound",
    "Keep it under 21 seconds for maximum retention",
    "Add trending sounds (but lower volume for voice-over)",
    "Use color psychology: Red/Yellow = attention, Blue = trust",
    "Include a 'watch till end' hook at 3-5 seconds",
    "Post consistently - minimum 1-3 videos daily",
    "Study your analytics - double down on what works",
    "Use TikTok's native effects and features",
    "Create series/parts to build anticipation",
    "Duet/stitch trending videos in your niche"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl mb-4 animate-gradient">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            TikTok Viral Optimizer
          </h1>
          <p className="text-lg text-gray-600">
            Generate trending titles & master the algorithm
          </p>
        </div>

        {/* Trending Titles */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-pink-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              🔥 Trending Title Options
            </h2>
          </div>
          <div className="space-y-3">
            {titles.map((title, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{title}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(title, `title-${idx}`)}
                  className="flex-shrink-0 p-2 hover:bg-white rounded-lg transition-colors"
                  title="Copy title"
                >
                  {copied === `title-${idx}` ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-gray-900">
                📝 Optimized Description
              </h2>
            </div>
            <button
              onClick={() => copyToClipboard(description, 'description')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              {copied === 'description' ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <pre className="whitespace-pre-wrap font-sans text-gray-800">
              {description}
            </pre>
          </div>
        </div>

        {/* Before Upload Tips */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ⏰ Before You Upload
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {beforeTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 border-2 border-pink-100 rounded-xl hover:border-pink-300 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <tip.icon className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-gray-700 text-sm mb-2">{tip.desc}</p>
                    <p className="text-gray-500 text-xs">{tip.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* After Upload Tips */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🚀 After You Upload
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {afterTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 border-2 border-blue-100 rounded-xl hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <tip.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-gray-700 text-sm mb-2">{tip.desc}</p>
                    <p className="text-gray-500 text-xs">{tip.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Viral Tricks */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl shadow-xl p-6 sm:p-8 animate-gradient">
          <h2 className="text-2xl font-bold text-white mb-6">
            💎 10 Viral Tricks That Actually Work
          </h2>
          <div className="grid gap-3">
            {viralTricks.map((trick, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-white/95 backdrop-blur rounded-xl"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg">
                  {idx + 1}
                </div>
                <p className="text-gray-800 font-medium pt-1">{trick}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            💡 Pro Tip: Consistency beats perfection. Upload daily and analyze what works!
          </p>
        </div>
      </div>
    </div>
  )
}
