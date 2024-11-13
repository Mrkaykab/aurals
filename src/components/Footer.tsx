import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const links = {
    company: [
      { name: 'About Aurals', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ],
    social: [
      { name: 'Twitter', icon: Twitter, href: 'https://x.com/aural_xyz?s=21&t=Ew_NB4_cxxtfx5xRqNUKlg' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/aurals-xyz/' },
      { name: 'GitHub', icon: Github, href: '#' }
    ]
  };

  return (
    <footer className="bg-[#3F043F] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-[#EDEDED]/80 max-w-md">
              Join the revolution in music ownership and fan engagement. 
              Aurals is building the future of music, powered by Web3 technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[#EDEDED]/80 hover:text-[#03E5DF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-[#EDEDED]/80 hover:text-[#03E5DF] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-[#EDEDED]/60">
            Aurals © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}