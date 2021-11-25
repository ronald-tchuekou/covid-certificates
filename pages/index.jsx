import React from 'react';
import { Banner } from '../src/components/banner';
import { Title } from '../src/components/bases';
import { HomeBannerImage } from '../src/components/home_banner_iamge';
import { SideBar } from '../src/components/side_bar';
import { useRouter } from 'next/router';
import { Footer } from '../src/components/footer';
import { Header } from '../src/components/header';

export default function Home() {
    const side_contents = [
        {
            url: '#digital-certificate',
            title: 'Your COVID-19 digital certificate',
        },
        {
            url: '#info-missing-wrong',
            title: 'If you information is missing or wrong',
        },
        {
            url: '#medicare-card',
            title: "If you don't have Medicate Card",
        },
        {
            url: '#vaccinate-overseas',
            title: 'If you where vaccinate overseas',
        },
        {
            url: '#ressources-communities',
            title: 'Ressources for businesse and cummunities',
        },
        {
            url: '#get-vaccinated',
            title: 'Wno can get vaccinated',
        },
        {
            url: '#update',
            title: 'Update',
        },
    ];

    const router = useRouter();

    return (
        <div className="bg-white">
            <Header />

            <Banner reverse color="white" current={1}>
                <div className="banner-item text">
                    <Title>COVID-19 digital certificates</Title>
                    <p className="text-description t-18">
                        Once your details are recorded and your certificates are registered,it shows and reflects in the
                        Medicare database of Australia that you have been fully vaccinated and when scanned or looked up
                        your details shows clearly that you have been been vaccinated and so you can use it wherever and
                        when ever you want without any problem.
                    </p>
                    <div className="py-10">
                        <button onClick={() => router.push('/subscribe')} className="btn contained-success">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="banner-item">
                    <HomeBannerImage />
                </div>
            </Banner>

            <main className="container  overflow-hidden m-0">
                <div className="row m-0 p-0">
                    <div className="col-12 col-m-10 col-l-8 col-center">
                        <div className="row m-0 p-0 bg-container">
                            <div className="col-0 col-m-4 m-0 p-0 overflow-hidden">
                                <div data-constraint="#constraint">
                                    <SideBar contents={side_contents} />
                                </div>
                            </div>
                            <div className="col-12 col-m-8 m-0 p-0">
                                <div className="container-side bg-white p-10 text-default_dark">
                                    <section id={side_contents[0].url.slice(1)} className="p-10">
                                        <h1>Your COVID-19 digital certificate</h1>
                                        <p className="my-10 t-18">
                                            Your digital vaccination certificate is updated when you receive each dose
                                            of vaccine. This includes a third dose if you are someone with severe
                                            immunocompromise or if it is your booster dose.
                                        </p>
                                        <p className="my-10 t-18">You can see it in your Medicare account through:</p>
                                        <ul className="my-20 mx-30 t-18">
                                            <li>the Express Plus Medicare app</li>
                                            <li>myGov.</li>
                                        </ul>
                                        <p className="my-10 t-18">
                                            You will need to link your myGov account to Medicare.
                                        </p>
                                        <p className="my-10 t-18">
                                            You can also see your digital certificate in My Health Record. If you havent
                                            logged into your record yet, you will need to link your myGov account to My
                                            Health Record.
                                        </p>
                                        <p className="my-10 t-18">
                                            You can save your digital certificate to your Apple Wallet or Google Pay if
                                            this option suits you.
                                        </p>
                                    </section>

                                    <section id={side_contents[1].url.slice(1)} className="p-10">
                                        <h1>If your information is missing or wrong</h1>
                                        <p className="my-10 t-18">
                                            It may take up to 10 days for the certificate to show in your account.
                                        </p>
                                        <p className="my-10 t-18">
                                            {
                                                "If you can't find it there, your vaccination provider can print your immunisation history statement for you."
                                            }
                                        </p>
                                        <p className="my-10 t-18">
                                            You can also call the Australian Immunisation Register (AIR) and ask them to
                                            send your statement to you.
                                        </p>
                                        <p className="my-10 t-18">
                                            If your information is wrong, ask your vaccination provider to correct it
                                            with the AIR.
                                        </p>
                                    </section>

                                    <section id={side_contents[2].url.slice(1)} className="p-10">
                                        <h1>{"If you don't have a Medicare card"}</h1>
                                        <p className="my-10 t-18">
                                            {
                                                "You can still get proof that you are vaccinated, even if you don't have a Medicare card."
                                            }
                                        </p>
                                        <p className="my-10 t-18">
                                            {
                                                'See Services Australia for details on how to get proof through the individual healthcare identifiers service. Services Australia provides this information in many community languages. '
                                            }
                                        </p>
                                    </section>

                                    <section id={side_contents[3].url.slice(1)} className="p-10">
                                        <h1>{'If you were vaccinated overseas'}</h1>
                                        <p className="my-10 t-18">
                                            {
                                                'If you receive a TGA-approved COVID-19 vaccine overseas, you can register your vaccination on the AIR when you return to Australia.'
                                            }
                                        </p>
                                        <p className="my-10 t-18">
                                            {
                                                'See Services Australia for more on how to register overseas vaccinations. '
                                            }
                                        </p>
                                        <p className="my-10 t-18">
                                            See Smartraveller for advice on travel and COVID-19 vaccines.
                                        </p>
                                    </section>

                                    <section id={side_contents[4].url.slice(1)} className="p-10">
                                        <h1>{'Resources for businesses and communities'}</h1>
                                        <p className="my-10 t-18">
                                            {
                                                'Services Australia have created digital and printed vaccination proof resources for business and community organisations.'
                                            }
                                        </p>
                                        <p className="my-10 t-18">
                                            {
                                                'These resources support communication with customers and community members, and include:'
                                            }
                                        </p>
                                        <ul className="my-20 mx-30 t-18">
                                            <li>posters</li>
                                            <li>social media items</li>
                                            <li>fact sheets</li>
                                            <li>translated materials.</li>
                                        </ul>
                                        <p className="my-10 t-18">
                                            There are specific resources for CALD and Indigenous communities, as well as
                                            community groups.
                                        </p>
                                        <p className="my-10 t-18">
                                            Doctors, health professionals, practice staff and pharmacy assistants can
                                            also order printed copies of a flyer and poster on getting proof of COVID-19
                                            vaccinations.
                                        </p>
                                    </section>

                                    <section id={side_contents[5].url.slice(1)} className="p-10">
                                        <h1>Wno can get vaccinated</h1>
                                        <p className="my-10 t-18">
                                            Everyone in Australia aged 12 year and over is eligible for a free COVID-19
                                            vaccination. You will get 2 doses of the same vaccine. Learn which vaccine
                                            is available to you.
                                        </p>
                                    </section>

                                    <section id={side_contents[6].url.slice(1)} className="p-10">
                                        <h1>{'Updates'}</h1>
                                        <p className="my-10 t-18">
                                            {
                                                "You can check Services Australia's news listing for the latest updates on proof of vaccination and other issues. "
                                            }
                                        </p>
                                        <hr />
                                        <p className="my-10 t-18">
                                            Last updated: <span className="text-primary">11 November 2021</span>
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
