import React from 'react';
import { Phone, Mail, MapPin, User } from 'lucide-react';

const Structure: React.FC = () => {
  const pengurus = [
    {
      nama: 'Bapak AJIP',
      jabatan: 'Ketua RT',
      telepon: '0812-3456-7890',
      email: 'ketua.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 12',
      color: 'bg-blue-500'
    },
    {
      nama: 'Ibu Siti Aminah',
      jabatan: 'Sekretaris RT',
      telepon: '0856-7890-1234',
      email: 'sekretaris.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 25',
      color: 'bg-green-500'
    },
    {
      nama: 'Bapak Ahmad Fauzi',
      jabatan: 'Bendahara RT',
      telepon: '0821-5678-9012',
      email: 'bendahara.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 8',
      color: 'bg-purple-500'
    },
    {
      nama: 'Bapak Rizky Pratama',
      jabatan: 'Koordinator Keamanan',
      telepon: '0878-9012-3456',
      email: 'keamanan.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 33',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Struktur Pengurus</h2>
        <p className="text-lg text-gray-600">Pengurus RT 003 / RW 05 periode 2024-2027</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pengurus.map((person, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 ${person.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{person.nama}</h3>
                <p className="text-green-600 font-medium mb-4">{person.jabatan}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{person.telepon}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{person.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{person.alamat}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Jadwal Pelayanan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Senin - Jumat</h4>
            <p>08.00 - 12.00 WIB</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sabtu</h4>
            <p>08.00 - 10.00 WIB</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Minggu</h4>
            <p>Libur (Kecuali darurat)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;