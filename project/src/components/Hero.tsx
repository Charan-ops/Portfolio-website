import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl">
                <Terminal size={64} className="text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            DevOps Engineer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Building & Automating Infrastructure at Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about cloud infrastructure, CI/CD pipelines, containerization and Linux administration.
            Experienced in AWS, Kubernetes, Docker, Terraform, and modern DevOps practices.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Charan-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/charan-921815190/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Mail size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
