import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Profil RT', href: '#' },
    { name: 'Pengumuman', href: '#' },
    { name: 'Layanan', href: '#' },
    { name: 'Galeri', href: '#' },
    { name: 'Kontak', href: '#' }
  ];

  const services = [
    { name: 'Surat Keterangan', href: '#' },
    { name: 'Pelayanan Kesehatan', href: '#' },
    { name: 'Pengelolaan Sampah', href: '#' },
    { name: 'Infrastruktur', href: '#' },
    { name: 'Kegiatan Sosial', href: '#' },
    { name: 'Konsultasi RT', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* RT Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">RT 003 / RW 05</h3>
                <p className="text-gray-400 text-sm">Kelurahan Maju Jaya</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Membangun komunitas yang harmonis, gotong royong, dan sejahtera bersama melalui berbagai program dan kegiatan yang bermanfaat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Kelurahan Maju Jaya</p>
                  <p>RT 003 / RW 05</p>
                  <p>Jakarta Selatan 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-sm text-gray-300">0812-3456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-purple-500 mr-2" />
                <span className="text-sm text-gray-300">rt003rw05@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Jam Pelayanan</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Senin - Jumat: 08.00 - 12.00</p>
                <p>Sabtu: 08.00 - 10.00</p>
                <p>Minggu: Libur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} RT 003 / RW 05 Kelurahan Maju Jaya. All rights reserved.
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>for our community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;