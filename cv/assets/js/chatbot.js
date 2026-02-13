// AI Chatbot using OpenAI API
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your API key

// Portfolio context for the AI
const portfolioContext = `
You are a helpful assistant for Xhafer Ibrahimi's portfolio website. You have knowledge about:
- Skills: HTML5, CSS3, JavaScript, Bootstrap, PHP, C#, MySQL, PostgreSQL, Git, AI Tools, AutoCAD
- Background: Computer Science & Engineering Student
- Expertise: Web Development, Full Stack Development
- Be friendly, professional, and concise in responses.
- If asked about projects, mention that the user can visit the Projects page for more details.
- Always encourage visitors to explore the portfolio.
`;

class PortfolioCharbot {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createChatbotUI();
    this.attachEventListeners();
  }

  createChatbotUI() {
    const chatbotHTML = `
      <div id="chatbot-container" class="chatbot-container">
        <!-- Chat Toggle Button -->
        <button id="chatbot-toggle" class="chatbot-toggle" title="Chat with AI">
          <i class="bi bi-chat-dots"></i>
        </button>

        <!-- Chat Window -->
        <div id="chatbot-window" class="chatbot-window hidden">
          <div class="chatbot-header">
            <h3>Portfolio Assistant</h3>
            <button id="chatbot-close" class="chatbot-close">
              <i class="bi bi-x"></i>
            </button>
          </div>
          
          <div id="chatbot-messages" class="chatbot-messages">
            <div class="chatbot-message bot">
              <p>Hello! I'm Xhafer's AI assistant. Ask me anything about the portfolio, skills, or projects!</p>
            </div>
          </div>

          <div class="chatbot-input-area">
            <input 
              type="text" 
              id="chatbot-input" 
              class="chatbot-input" 
              placeholder="Ask me something..."
              autocomplete="off"
            />
            <button id="chatbot-send" class="chatbot-send">
              <i class="bi bi-send"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  attachEventListeners() {
    const toggle = document.getElementById('chatbot-toggle');
    const close = document.getElementById('chatbot-close');
    const send = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');

    toggle.addEventListener('click', () => this.toggleChat());
    close.addEventListener('click', () => this.closeChat());
    send.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggleChat() {
    const window = document.getElementById('chatbot-window');
    this.isOpen = !this.isOpen;
    window.classList.toggle('hidden');
    if (this.isOpen) {
      document.getElementById('chatbot-input').focus();
    }
  }

  closeChat() {
    this.isOpen = false;
    document.getElementById('chatbot-window').classList.add('hidden');
  }

  async sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();

    if (!message) return;

    // Add user message to chat
    this.addMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    this.showTypingIndicator();

    try {
      // For demo purposes, use local responses if API key not set
      if (OPENAI_API_KEY === 'YOUR_OPENAI_API_KEY') {
        this.handleDemoResponse(message);
      } else {
        await this.getAIResponse(message);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      this.addMessage('Sorry, I encountered an error. Please try again later.', 'bot');
    }

    this.removeTypingIndicator();
    this.scrollToBottom();
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;
    messageDiv.innerHTML = `<p>${this.escapeHtml(text)}</p>`;
    messagesContainer.appendChild(messageDiv);
  }

  showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot typing';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    messagesContainer.appendChild(typingDiv);
  }

  removeTypingIndicator() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
  }

  scrollToBottom() {
    const messagesContainer = document.getElementById('chatbot-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  handleDemoResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    let response = '';

    // Demo responses
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
      response = "Hello! I'm the AI assistant for Xhafer's portfolio. How can I help you today?";
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      response = "Xhafer is skilled in Frontend (HTML, CSS, JavaScript, Bootstrap), Backend (PHP, C#), Databases (MySQL, PostgreSQL), and various tools. Check out the Skills page for more details!";
    } else if (lowerMessage.includes('project')) {
      response = "Xhafer has several exciting projects! Visit the Projects page to see the full portfolio of work.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
      response = "You can contact Xhafer through the Contact page on the website. Feel free to reach out!";
    } else if (lowerMessage.includes('about')) {
      response = "Xhafer is a Computer Science & Engineering Student working as a Web Developer. Check the About page to learn more!";
    } else {
      response = "That's an interesting question! Feel free to explore the portfolio or contact Xhafer directly for more detailed information.";
    }

    this.addMessage(response, 'bot');
  }

  async getAIResponse(userMessage) {
    const messages = [
      {
        role: 'system',
        content: portfolioContext
      },
      ...this.messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      {
        role: 'user',
        content: userMessage
      }
    ];

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 150,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;
      this.addMessage(aiResponse, 'bot');
      this.messages.push({ text: userMessage, sender: 'user' });
      this.messages.push({ text: aiResponse, sender: 'bot' });
    } catch (error) {
      console.error('OpenAI API error:', error);
      this.handleDemoResponse(userMessage);
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PortfolioCharbot();
  });
} else {
  new PortfolioCharbot();
}
