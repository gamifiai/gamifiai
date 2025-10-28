// FIX: Replaced corrupted file content with a valid React component and added the missing default export.
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Logo = () => (
    <a href="#home" className="flex-shrink-0">
      <img
        className="h-8 w-auto"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAmCAYAAAA0s52bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVLSURBVGhD7Zp/T9tVGMf/s3svJ3Zjk9K2lI4lBqZlZnQp7C61l4mBLoogwY+YQcVEQRK/wZ/gh4ggEV1EkCgiA4MMRnRjZgrm4S1N8Esl2A5L1x52Z5/sR5I01sve53t+z/k9z/P7uQ4IIYQQQgghhBBCCHkR103AGV3XfSoavA7WnO85XfIe53c43Xf2nBcgEAF4i3PFMGLiG/h4N39oFth0bNzqdPycK2r/Vg4s24GvO3uOa+b5D/b/k/M931rG3dD/Pz52v+b5D/Z/jO98S/M+x+893//5Pnf23Ctwl13XGfClZSyVufm4q7c+o+V8zxvWcvZWzvd84/1/8jwX/985X7Kec8g1c14PjH6C1/2A8y2v+xHne5/t+Vbv+Q3nO9/d+u/U/oB3/+S8D+e+ZSyV03P/n7Wcu3K+5x3LeP453/ON9/+v55wX/58533M2h2/j0hGkRylqW6316r57Nf/5yfd5zvd8a/s+x/s+53s+53u+5/s/ZJ/v+c4L+P8n/o94Tve9/ZfzHch9zvf5nqv7H+d7vjVzD1vG8y+cr3m+44fP+Z7/bPx/S/P9n/M933M533Mu5308X/M533M5z/f5+Z7v+RzPfz7f4/nO1/N9/l84X/M81+fne77nc/y/OF/zPJbn+zzP9/mfzvd8j+f/m+e1PM/3+fme7/kcz/83z2t5nu/zPM/3+Z7P8f/N81qe5/s8z/f5nu/x/H/zvJbn+T7P83y+53s8//853/N8j+f7PM/zfZ7nezz/3zxf8zyX/6/ne77nczz/8+U8z/f5nu/5Hu/5H89/nef7PM/3+fmez/H8/3O+53k83+f5nu/zPM/j+f/m+ZrnOZ/v+Z7v8Zz/8fznc57n+zzP93me5/H8/3O+53k8z/d5nu/zPM/j+f/m+ZrnubzP83y+53M8//l8nuf7PM/zfZ7n8Zz/8fznc57n+zzP93me5/n+x+f7PM/3/Mfn+/z//5yfcTq/uuv+hOu6T2+aYoyx/3+nUv6b6XlKKaWUUkoppZRSSiml/F/ReF6n/BqUUgcGgePzPQ9sA22z1fH5nqdUf08w6/q8zz+d7/mc7/me7/n+p/U9r+d5vuf1PO/z9Tzv8/U87/P1PO/z9Tzv8/U87/P1PO/z9Tzv8/U87/P1PO/z9Tzv8/U87/P1PO/z9Tzv8/U87/P1PO/z9Tzv8/U8z/f8nu/zPO/z9Tzv8/U8z/f5fs/zPM/z9Tzv8/U8z/f5fs/zPO/z9Tzv8/U8z/f5/t/ned7nez7f83m+5/N8n+f7Ps/3+f7/1vO8z/M93/M9n+f/W8/zPc/3eL7n8+V8n+/zPZ/j+f/X87zP9+X8z5fzfd7n+T7H8//W87zP9+X8z9fzfZ7n+zzH83/M93y+x/P8/n+c7+P5eJ5/16P5+H/K1/N5+P/J+f8+G3+fP/R/yP/hR4U8qYkKKaU4j/f5nu/5nu/zfL7n8zy/r/me33fH519H2B/hD0s+hHkIpRS1+3o+a0K6rjfA755X5/l+34y63x/n+v09F6+xTf5/3TqO4/l+r9/f1z3/VzL3d34/o34c1wA3zPfzdf/9X709+F/zPL1+/+N+Tvc/z/c6z/f+z9e5g/M7v+u5t/d+P8//W+3sO6/n+D+e7vuc7u+/vua7T/R173f4+/n+t65i/5/n8/2N47kO6/n+D+e7vuc7u+/vua7T/R173f4+nuf7HsdzvT/n+z/k63zHd7wv5Tpf5/v+5vneD+c73pdy3d9//z/v85z/8//e41zP/znd9zfX9f+M+3vO//n/9f8D4bEshhBCCCGEEEIIIeQr/AduK0h26+y5UAAAAABJRU5ErkJggg=="
        alt="GAMIFIAI Logo"
      />
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-slate-700">
            <div className="px-5">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all duration-300"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;