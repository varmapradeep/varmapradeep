import { Component } from '@angular/core';

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
}

interface QA {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  currentYear: number = new Date().getFullYear();
  mobileMenuOpen = false;
  email: any = 'varmapradeepvp@gmail.com';
  mobileDropdownOpen: { [key: number]: boolean } = {};

  // Chatbot properties
  chatMessages: ChatMessage[] = [];
  predefinedQuestions: QA[] = [
    {
      question: "What services do you offer?",
      answer: "I offer Web Development, Mobile App Development, Software Development, UI/UX Design, and Consulting services. Each service includes custom solutions tailored to your needs."
    },
    {
      question: "What is your experience?",
      answer: "I have extensive experience in building web and mobile applications using modern technologies like Angular, React, Node.js, and Flutter. I've successfully completed numerous projects across various industries."
    },
    {
      question: "What technologies do you use?",
      answer: "I work with Angular, React, Vue.js, Node.js, Python, Java, Flutter, React Native, Ionic, and various other modern frameworks and tools depending on project requirements."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach me at +91 9061497342 or email me at varmapradeepvp@gmail.com. I'm also available on LinkedIn, GitHub, Instagram, and Twitter for professional inquiries."
    },
    {
      question: "What is your location?",
      answer: "I'm based in Idukki, Kerala, India. I work with clients worldwide and can accommodate different time zones for project collaboration."
    },
    {
      question: "How long do projects typically take?",
      answer: "Project duration depends on complexity and scope. Simple projects may take 2-4 weeks, while complex applications can take 3-6 months or longer. We'll provide a detailed timeline after discussing your requirements."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, I provide comprehensive post-launch support including bug fixes, performance optimization, feature enhancements, and maintenance services to ensure your application runs smoothly."
    }
  ];

  openMobileMenu() {
    this.mobileMenuOpen = true;
  }
  openCoffee() {
    window.open('https://razorpay.me/@varmapradeep', '_blank');
  }


  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.mobileDropdownOpen = {};
  }

  toggleMobileDropdown(idx: number) {
    this.mobileDropdownOpen[idx] = !this.mobileDropdownOpen[idx];
  }

  selectQuestion(qa: QA) {
    // Add user question to chat
    this.chatMessages.push({
      type: 'user',
      message: qa.question
    });

    // Add bot answer with slight delay for better UX
    setTimeout(() => {
      this.chatMessages.push({
        type: 'bot',
        message: qa.answer
      });
      // Scroll to bottom
      setTimeout(() => {
        const chatBox = document.querySelector('.chat-messages-container');
        if (chatBox) {
          chatBox.scrollTop = chatBox.scrollHeight;
        }
      }, 0);
    }, 300);
  }

  clearChat() {
    this.chatMessages = [];
  }

  ngOnInit() {
    // Initialize with empty chat
    this.chatMessages = [];
  }

  closeCheckbox() {
    const checkbox = document.getElementById('click') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
