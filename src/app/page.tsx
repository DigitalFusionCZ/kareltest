'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.title = 'Karel Visuals | motorsport & automotive fotograf Brno – Capture Emotion';
        const favicon = document.querySelector("link[rel~='icon']");
        const faviconHref = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='15' fill='%231A1A1A'/%3E%3Ctext x='50' y='55' font-family='serif' font-size='48' fill='%23D4AF37' text-anchor='middle' dominant-baseline='middle'%3EKV%3C/text%3E%3C/svg%3E`;

        if (!favicon) {
            const newFavicon = document.createElement('link');
            newFavicon.rel = 'icon';
            newFavicon.href = faviconHref;
            document.head.appendChild(newFavicon);
        } else if (favicon instanceof HTMLLinkElement) {
            favicon.href = faviconHref;
        }
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: '#o-mne', label: 'O mně' },
        { href: '#sluzby', label: 'Služby' },
        { href: '#kontakt', label: 'Kontakt' },
    ];

    const services = [
        {
            icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/camera.svg',
            title: 'Motorsport Fotografie',
            description: 'Profesionální focení závodů, driftových show, rallye a track-dayů. Zachycení akce a atmosféry přímo na trati.'
        },
        {
            icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/car.svg',
            title: 'Automotive Promo',
            description: 'Fotografování závodních a silničních aut pro týmy, jezdce a sponzory. Důraz na detail, exteriér i interiér.'
        },
        {
            icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/video.svg',
            title: 'Video & Reels',
            description: 'Tvorba krátkých dynamických klipů ze závodů a akcí pro sociální sítě, včetně střihu a profesionální barevné gradace.'
        },
        {
            icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/glass-full.svg',
            title: 'Event & Lifestyle Fotografie',
            description: 'Reportážní focení doprovodných akcí, prezentací, testovacích jízd nebo týmových setkání.'
        },
        {
            icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/photo-edit.svg',
            title: 'Postprodukce a Tisk',
            description: 'Profesionální úprava fotografií, tvorba grafiky pro merchandising a tisk vybraných snímků na plátna či plakáty.'
        }
    ];

    return (
        <div style={{ fontFamily: 'sans-serif' }} className="bg-[#1A1A1A] text-[#F0F0F0]">
             <header className="bg-[#1A1A1A]/80 backdrop-blur-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Karel<span className="text-[#D4AF37]">Visuals</span>
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-lg hover:text-[#D4AF37] transition-colors duration-300">{link.label}</a>
                        ))}
                    </nav>
                    <button onClick={() => setIsMenuOpen(true)} className="md:hidden z-50">
                         <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" alt="Menu Icon" className="w-8 h-8 filter invert" />
                    </button>
                </div>
            </header>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-[#1A1A1A] z-50 flex flex-col items-center justify-center md:hidden">
                    <button onClick={closeMenu} className="absolute top-6 right-6">
                        <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" alt="Close Icon" className="w-10 h-10 filter invert" />
                    </button>
                    <nav className="flex flex-col space-y-8 text-center">
                       {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={closeMenu} className="text-3xl hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>{link.label}</a>
                        ))}
                    </nav>
                </div>
            )}

            <main>
                <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 1)), url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop)' }}>
                    <div className="text-center px-4">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Karel Visuals</h1>
                        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            „Capture Emotion – Zachytit emoce rychlosti.“
                        </p>
                        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                           Dynamické a emotivní fotografie z automobilových závodů, které vkládají do snímků pohyb, dramatičnost a barvy.
                        </p>
                    </div>
                </section>

                <section id="o-mne" className="py-20 sm:py-32">
                    <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
                        <div className="md:col-span-3">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Příběh za objektivem</h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>Jmenuji se Karel Czehovský a pod značkou Karel Visuals se věnuji fotografii motorsportu a automobilů. Pocházím z Moravy a s fotoaparátem cestuji po celém Česku i do zahraničí. Mou vášní je zachytit emoce, které provázejí závodní atmosféru – od startu po šachovnicový praporek.</p>
                                <p>V mé tvorbě najdete akční záběry driftujících aut, dokumentaci závodů, portréty jezdců i detaily techniky. Spojuji technickou preciznost s uměleckým citem, abych vyprávěl příběh každého závodu a zakládám si na spolehlivosti a osobním přístupu.</p>
                            </div>
                        </div>
                         <div className="md:col-span-2 flex justify-center">
                            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-800 border-4 border-[#D4AF37] rounded-full flex items-center justify-center text-center p-4">
                                <span className="text-gray-400 italic">Prostor pro portrét fotografa</span>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="sluzby" className="py-20 sm:py-32 bg-[#212121]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                             <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Kompletní vizuální servis</h2>
                             <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Od trati až po finální úpravy pro vaše sponzory a fanoušky.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                           {services.map((service, index) => (
                               <div key={index} className="bg-[#1A1A1A] p-8 rounded-lg border border-transparent hover:border-[#D4AF37]/50 transition-all duration-300 transform hover:-translate-y-1">
                                   <img src={service.icon} alt={`${service.title} icon`} className="w-10 h-10 mb-4 filter invert opacity-70" />
                                   <h3 className="text-2xl font-bold mb-3 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>{service.title}</h3>
                                   <p className="text-gray-400 leading-relaxed">{service.description}</p>
                               </div>
                           ))}
                             <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#1A1A1A] p-8 rounded-lg border border-[#D4AF37]/50 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center">
                                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>A mnohem více</h3>
                                <p className="text-gray-300">Máte specifický projekt na mysli? Jsem otevřený novým výzvám a kreativním nápadům. Ozvěte se!</p>
                             </div>
                        </div>
                    </div>
                </section>

                <section id="kontakt" className="py-20 sm:py-32">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Spojme se</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">Máte zájem o spolupráci nebo jen dotaz? Neváhejte mě kontaktovat.</p>
                        
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
                            <div className="bg-transparent p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Kontaktní údaje</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email" className="w-6 h-6 mt-1 filter invert opacity-70" />
                                        <div>
                                            <strong>E-mail (preferováno)</strong>
                                            <a href="mailto:karel.czehovsky@seznam.cz" className="block text-gray-300 hover:text-[#D4AF37] transition-colors">karel.czehovsky@seznam.cz</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                         <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-instagram.svg" alt="Instagram" className="w-6 h-6 mt-1 filter invert opacity-70" />
                                        <div>
                                            <strong>Instagram</strong>
                                            <a href="https://www.instagram.com/karel_visuals" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#D4AF37] transition-colors">@karel_visuals</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="bg-transparent p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Působnost a fakturace</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                         <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" alt="Location" className="w-6 h-6 mt-1 filter invert opacity-70" />
                                        <div>
                                            <strong>Oblast působení</strong>
                                            <p className="block text-gray-300">Brno, Jihomoravský kraj a dle dohody po celé ČR i v zahraničí.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/file-invoice.svg" alt="Invoice" className="w-6 h-6 mt-1 filter invert opacity-70" />
                                        <div>
                                            <strong>Fakturační údaje</strong>
                                            <p className="block text-gray-300">Karel Czehovský<br/>IČO: 66542251<br/>Znojemská 422, 671 67 Hrušovany nad Jevišovkou</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-[#111111]">
                <div className="container mx-auto px-6 py-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Karel Visuals. Všechna práva vyhrazena.</p>
                    <p className="mt-2"><a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vytvořeno s láskou od DigitalFusion</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Page;
