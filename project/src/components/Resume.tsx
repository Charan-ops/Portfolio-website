import { useEffect, useState } from 'react';
import { Download, FileText, Upload } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ResumeFile {
  id: string;
  file_name: string;
  file_url: string;
  file_type: string;
  uploaded_at: string;
}

export default function Resume() {
  const [resumeFiles, setResumeFiles] = useState<ResumeFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResumeFiles();
  }, []);

  const fetchResumeFiles = async () => {
    try {
      const { data, error } = await supabase
        .from('resume_files')
        .select('*')
        .eq('is_active', true);

      if (error) throw error;
      setResumeFiles(data || []);
    } catch (error) {
      console.error('Error fetching resume files:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultFiles: ResumeFile[] = [
    {
      id: '1',
      file_name: 'DevOps_Engineer_Resume.pdf',
      file_url: '#',
      file_type: 'resume',
      uploaded_at: new Date().toISOString()
    },
    {
      id: '2',
      file_name: 'Cover_Letter.pdf',
      file_url: '#',
      file_type: 'cover_letter',
      uploaded_at: new Date().toISOString()
    }
  ];

  const displayFiles = resumeFiles.length > 0 ? resumeFiles : defaultFiles;

  const getFileTypeLabel = (type: string) => {
    return type === 'resume' ? 'Resume' : 'Cover Letter';
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading resume files...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume & Documents</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download my resume and cover letter to learn more about my experience and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {displayFiles.map((file) => (
              <div
                key={file.id}
                className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                    <FileText className="text-white" size={32} />
                  </div>
                  <span className="px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full shadow-sm">
                    {getFileTypeLabel(file.file_type)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{file.file_name}</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Last updated: {new Date(file.uploaded_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>

                <a
                  href={file.file_url}
                  download={file.file_name}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg w-full justify-center"
                >
                  <Download size={20} />
                  <span>Download {getFileTypeLabel(file.file_type)}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Upload className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Summary</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Experienced DevOps Engineer specializing in cloud infrastructure, automation, and CI/CD pipelines.
                Proven track record of improving deployment efficiency and system reliability across multiple
                cloud platforms. Skilled in Linux, Kubernetes, Docker, Terraform, and modern DevOps tools.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-bold text-gray-900 mb-1">Experience</div>
                  <div className="text-gray-600 text-sm">2+ years in DevOps</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-bold text-gray-900 mb-1">Certifications</div>
                  <div className="text-gray-600 text-sm">AWS, Kubernetes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-bold text-gray-900 mb-1">Availability</div>
                  <div className="text-gray-600 text-sm">Open to opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
