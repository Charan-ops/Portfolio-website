import { useEffect, useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issue_date: string | null;
  credential_id: string | null;
  credential_url: string | null;
  image_url: string | null;
}

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    try {
      const { data, error } = await supabase
        .from('certifications')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setCertifications(data || []);
    } catch (error) {
      console.error('Error fetching certifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultCertifications: Certification[] = [
    {
      id: '1',
      title: 'AWS Certified Developer - Associate (DVA-C02)',
      issuer: 'Amazon Web Services',
      issue_date: '2023-05-23',
      credential_id: '73T431T14MFQQ393',
      credential_url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/',
      image_url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },
    {
      id: '2',
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      issue_date: '2025-08-26',
      credential_id: 'LF-spj50o2ike',
      credential_url: 'https://training.linuxfoundation.org/certification/verify/?__hstc=60185074.7e198d6f10cb197fdd696172a9dbe942.1763984349186.1763984349186.1763984349186.1&__hssc=60185074.4.1763984349186&__hsfp=802021242',
      image_url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    },
  ];

  const displayCertifications = certifications.length > 0 ? certifications : defaultCertifications;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading certifications...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications showcasing my cloud and DevOps engineering expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-40 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                {cert.image_url ? (
                  <img
                    src={cert.image_url}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award size={64} className="text-white opacity-50" />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Award className="text-blue-600" size={24} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>

                <div className="space-y-2 mb-4">
                  {cert.issue_date && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(cert.issue_date)}</span>
                    </div>
                  )}
                  {cert.credential_id && (
                    <div className="text-gray-600 text-sm">
                      <span className="font-medium">ID:</span> {cert.credential_id}
                    </div>
                  )}
                </div>

                {cert.credential_url && (
                  <a
                    href={cert.credential_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
