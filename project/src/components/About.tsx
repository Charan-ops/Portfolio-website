import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Engineering Reliable Systems Through DevOps Excellence
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As a DevOps Engineer specializing in cloud platforms, Kubernetes-based orchestration, Linux systems, infrastructure as code, 
              and CI/CD automation, I focus on building scalable, secure, and production-ready environments. My work emphasizes reliability, 
              efficiency, and seamless deployment workflows, enabling engineering teams to deliver with confidence and consistency.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I am a strong advocate of automation as a means to eliminate manual overhead, reduce operational risk, and enhance overall system 
              reliability. My approach blends modern DevOps principles with a deep understanding of development workflows, allowing me to design 
              streamlined deployment experiences and accelerate delivery cycles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Outside of optimizing pipelines and managing cloud infrastructure, I enjoy contributing to open-source projects and staying 
              up to date with emerging tools, technologies, and best practices within the DevOps ecosystem.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Professional Experience</h4>
                  <p className="text-gray-600">
                    2+ years building and optimizing cloud infrastructure for enterprise applications
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Certifications</h4>
                  <p className="text-gray-600">
                    AWS Certified Developer Associate , Certified Kubernetes Administrator
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-600">
                    Bachelor's Degree in Electronics and Communication Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">
                    Actively open to DevOps opportunities globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
