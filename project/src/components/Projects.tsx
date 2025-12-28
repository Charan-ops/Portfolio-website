import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github_url: string | null;
  live_url: string | null;
  image_url: string | null;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultProjects: Project[] = [
    {
      id: '1',
      title: 'KubeAutoPilot',
      description: 'KubeAutoPilot is an end-to-end automation framework designed to provision production-ready Kubernetes clusters using Terraform and Ansible with minimal manual intervention. The solution automates infrastructure creation, VM configuration, Kubernetes control-plane initialization, worker node onboarding, and essential cluster add-ons deployment.',
      technologies: ['IaC (Terraform and AWS & MetalLb)', 'Configuration Management & Automation (Bash Scripting)', 'Kubernetes components', 'OS / Linux coniguration', 'Data Formats & Templates (YAML, JSON)', 'Security & Secrets'],
      github_url: 'https://github.com',
      live_url: null,
      image_url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
    },
    {
      id: '2',
      title: 'KubeCrafter',
      description: 'Built a comprehensive CI/CD pipeline reducing deployment time by 70% and improving code quality with automated testing.',
      technologies: ['Jenkins', 'Docker', 'SonarQube', 'Nexus', 'Git'],
      github_url: 'https://github.com',
      live_url: null,
      image_url: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world implementations of DevOps best practices and infrastructure solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                {project.image_url ? (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white text-6xl opacity-50">{'{ }'}</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
