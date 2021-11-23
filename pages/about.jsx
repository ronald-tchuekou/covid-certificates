import React from 'react';
import Head from 'next/head';
import { NavBar } from '../src/components/navBar';
import { Banner } from '../src/components/banner';
import { Title } from '../src/components/bases';
import { AboutBannerImage } from '../src/components/about_banner_image';
import { Footer } from '../src/components/footer';

export default function About() {
    const list = [
        {
            image: '/about_icons/fa_assistive-listening-systems.svg',
            title: 'The Australian health system',
            description: 'Learn about the role that the Australian Government plays in our world-class health system.',
        },
        {
            image: '/about_icons/fluent_person-info-16-regular.svg',
            title: 'Who we are',
            description:
                'Meet our ministers and leadership team, view our organisational chart and find out about the Health portfolio.',
        },
        {
            image: '/about_icons/healthicons_info-outline.svg',
            title: 'What we do',
            description:
                'Find out about our work in awareness and education, consultation and engagement, initiatives and programs, grants and tenders, policy, regulation, compliance and research.',
        },
        {
            image: '/about_icons/ic_outline-connect-without-contact.svg',
            title: 'Contact us',
            description: 'Find all the ways you can contact us, send us your feedback or ask a question.',
        },
        {
            image: '/about_icons/iwwa_year.svg',
            title: '100 years of Health',
            description: 'Learn about the achievements at Health from 7 March 1921 to now.',
        },
        {
            image: '/about_icons/ps_work-case.svg',
            title: 'Work with us',
            description: 'Learn about the benefits of working at Health. Join our team to help us achieve our goals.',
        },
        {
            image: '/about_icons/simple-icons_yamahacorporation.svg',
            title: 'Corporate reporting',
            description:
                'Browse our corporate plan, annual reports, budget statements, senate order listings, and Freedom of Information (FOI) disclosures.',
        },
    ];

    return (
        <div className="bg-white">
            <Head>
                <title>COVID-19 Certificates</title>
                <meta name="description" content="COVID-19 Certificates" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner color="white" current={4}>
                <div className="banner-item">
                    <AboutBannerImage />
                </div>
                <div className="banner-item text">
                    <Title>About us</Title>
                    <p className="text-description t-18">
                        We develop and deliver policies and programs and advise the Australian Government on health,
                        aged care and sport. We work with a wide range of stakeholders to ensure better health for all
                        Australians.Once your details are recorded and your certificates are registered,it shows and
                        reflects in the Medicare database of Australia that you have been fully vaccinated and when
                        scanned or looked up your details shows clearly that you have been been vaccinated and so you
                        can use it wherever and when ever you want without any problem.
                    </p>
                </div>
            </Banner>

            <div className="row my-30 mx-0 p-0">
                <div className="col-12 col-m-9 col-l-8 col-center">
                    <div className="row p-0 m-0 container">
                        <div className="row m-0 p-0">
                            <Item item={list[0]} />
                            <Item item={list[1]} />
                        </div>
                        <div className="row m-0 p-0">
                            <Item item={list[2]} />
                            <Item item={list[3]} />
                        </div>
                        <div className="row m-0 p-0">
                            <Item item={list[4]} />
                            <Item item={list[5]} />
                        </div>
                        <div className="row m-0 p-0">
                            <Item item={list[6]} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export const Item = (props) => {
    const { item } = props;
    return (
        <div className="col-12 col-m-6 m-0 p-0">
            <div className="about-item">
                <div className="logo mr-5">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="ml-5">
                    <div className="text-bold t-20">{item.title}</div>
                    <div className="text-default_gray t-17">{item.description}</div>
                </div>
            </div>
        </div>
    );
};
