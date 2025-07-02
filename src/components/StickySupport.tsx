// src/components/StickySupport.tsx
import React, { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

const StickySupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [hasUnread, setHasUnread] = useState(true)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) setHasUnread(false)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // TODO: send message logic
      setMessage('')
    }
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 sm:bottom-28 right-4 sm:right-8 w-72 sm:w-80 h-80 sm:h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-[#F3BF18] p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#BE3C21] rounded-full flex items-center justify-center mr-2 sm:mr-3"
                style={{
                  clipPath:
                    'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
                }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0D0D0D] text-sm sm:text-base">
                  Hive Support
                </h3>
                <p className="text-xs sm:text-sm text-[#0D0D0D] opacity-80">
                  We're here to help!
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-[#0D0D0D] hover:bg-[#F2A516] p-1 sm:p-2 rounded-full transition-colors duration-300"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-2 sm:p-4 overflow-y-auto bg-[#F2F2F2]">
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <p className="text-xs sm:text-sm text-gray-700">
                  Hi! 👋 Welcome to Plan B. How can we help you build or join
                  your hive today?
                </p>
                <span className="text-[10px] sm:text-xs text-gray-500">
                  Support Team • Just now
                </span>
              </div>

              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <p className="text-xs sm:text-sm text-gray-700">Quick links:</p>
                <div className="mt-1 sm:mt-2 space-y-1">
                  <button
                    onClick={() =>
                      document
                        .getElementById('build-hive')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-[10px] sm:text-xs text-[#BE3C21] hover:underline block"
                  >
                    • Build Your Hive (For Clients)
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById('join-hive')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-[10px] sm:text-xs text-[#BE3C21] hover:underline block"
                  >
                    • Join Your Hive (For Students)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-2 sm:p-4 border-t border-gray-200 flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
              className="flex-1 px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F3BF18] focus:border-transparent text-xs sm:text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#F3BF18] text-[#0D0D0D] p-2 rounded-lg hover:bg-[#F2A516] transition-colors duration-300"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Support Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 sm:w-14 h-12 sm:h-14 bg-[#F3BF18] rounded-full flex items-center justify-center shadow-lg hover:bg-[#F2A516] transition-transform duration-300 transform hover:scale-110 z-50 group"
        style={{
          clipPath:
            'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)',
        }}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D0D0D]" />

        {/* Unread indicator */}
        {hasUnread && !isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-[#BE3C21] rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
          </div>
        )}

        {/* Tooltip */}
        <div className="absolute right-14 sm:right-16 bottom-0 bg-[#0D0D0D] text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-xs sm:text-sm">
          Hive Support
          <div className="absolute right-2 sm:right-3 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#0D0D0D] border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </div>
      </button>
    </>
  )
}

export default StickySupport
