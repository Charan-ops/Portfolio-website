import { Cloud, Code, Container, Database, GitBranch, Server, Shield, Workflow } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      skills: ['AWS (EC2, S3, Lambda, RDS, IAM, EKS)', 'Azure', 'GCP (Compute Engine, Cloud Storage, IAM, CloudFunctions, GKE, CloudSQL)']
    },
    {
      title: 'Containerization',
      icon: Container,
      color: 'from-cyan-500 to-cyan-600',
      skills: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose', 'Minikube', 'Rancher (RMS)']
    },
    {
      title: 'CI/CD',
      icon: Workflow,
      color: 'from-green-500 to-green-600',
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions']
    },
    {
      title: 'Infrastructure as Code',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      skills: ['Terraform', 'Ansible', 'CloudFormation']
    },
    {
      title: 'Monitoring & Logging',
      icon: Server,
      color: 'from-orange-500 to-orange-600',
      skills: ['Prometheus', 'Grafana', 'ELK Stack']
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'from-red-500 to-red-600',
      skills: ['Git', 'GitHub', 'GitLab']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-indigo-500 to-indigo-600',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Security',
      icon: Shield,
      color: 'from-yellow-500 to-yellow-600',
      skills: ['HashiCorp Vault', 'AWS IAM', 'SSL/TLS']
    },
    {
      title: 'Operating Systems',
      icon: Server,
      color: 'from-gray-500 to-gray-600',
      skills: ['Linux (Ubuntu, Alpine)', 'Windows Server']
    },
    {
      title: 'Scripting & Programming',
      icon: Code,
      color: 'from-pink-500 to-pink-600',
      skills: ['Python', 'Bash', 'Go', 'PowerShell', 'YAML', 'JSON', 'Batch', 'JavaScript']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps practices and cloud infrastructure management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <Icon className="text-white mb-2" size={32} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="leading-relaxed">
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {/* <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-gray-700 flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
