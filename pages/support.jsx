import React from 'react';
import { Footer } from '../src/components/footer';
import { TextInput } from '../src/components/input_text';
import { NavBar } from '../src/components/navBar';
import { RadioButton } from '../src/components/radio_buttons';
import { SupportImage } from '../src/components/support_img';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Support() {
    const [name, setName] = React.useState({ value: '', error: false });
    const [first_name, setFirstName] = React.useState({ value: '', error: false });
    const [birthday, setBirthday] = React.useState({ value: '', error: false });
    const [born_at, setBornAt] = React.useState({ value: '', error: false });
    const [email, setEmail] = React.useState({ value: '', error: false });
    const [phone, setPhone] = React.useState({ value: '', error: false });
    const [individual_id, setIndividualId] = React.useState({ value: '', error: false });

    const [state, setState] = React.useState('single');
    const [amount, seteAmount] = React.useState(50);
    const [pay_method, setPayMethod] = React.useState('credit-debit-card');

    /**
     * Fonction qu ipermet de sauvegarder les informations du formulaire.
     */
    function save_data() {
        // TODO
    }

    return (
        <div className="bg-white">
            <NavBar color="default" current={-1} />

            <div className="row my-30 mx-0 p-0">
                <div className="col-12 col-m-10 col-l-9 col-center">
                    <div className="row p-0 m-0">
                        <div className="col-12 col-m-6 m-0 p-0">
                            <div className="row m-0 p-0">
                                <div className="col-12 col-l-4 m-0 p-3 l-p-5">
                                    <div
                                        tabIndex="0"
                                        onClick={() => setState('single')}
                                        onKeyPress={(e) => {
                                            if (e.code === 'Space' || e.key === 'Enter') {
                                                setState('single');
                                            }
                                        }}
                                        className={`switch-default t-20 p-9 text-center text-bold ${
                                            state === 'single' ? 'select' : ''
                                        }`}
                                    >
                                        Single
                                    </div>
                                </div>

                                <div className="col-12 col-l-4 m-0 p-3 l-p-5">
                                    <div
                                        tabIndex="0"
                                        onClick={() => setState('monthly')}
                                        onKeyPress={(e) => {
                                            if (e.code === 'Space' || e.key === 'Enter') {
                                                setState('monthly');
                                            }
                                        }}
                                        className={`switch-default t-20 p-9 text-center text-bold ${
                                            state === 'monthly' ? 'select' : ''
                                        }`}
                                    >
                                        Monthly
                                    </div>
                                </div>

                                <div className="col-12 col-l-4 m-0 p-3 l-p-5">
                                    <div
                                        tabIndex="0"
                                        onClick={() => setState('annual')}
                                        onKeyPress={(e) => {
                                            if (e.code === 'Space' || e.key === 'Enter') {
                                                setState('annual');
                                            }
                                        }}
                                        className={`switch-default t-20 p-9 text-center text-bold ${
                                            state === 'annual' ? 'select' : ''
                                        }`}
                                    >
                                        Annual
                                    </div>
                                </div>
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 col-l-6 m-0 p-3 l-p-5">
                                    <div
                                        tabIndex="0"
                                        onClick={() => seteAmount(50)}
                                        onKeyPress={(e) => {
                                            if (e.code === 'Space' || e.key === 'Enter') {
                                                seteAmount(50);
                                            }
                                        }}
                                        className={`switch-default t-20 p-9 text-center text-bold ${
                                            amount === 50 ? 'select' : ''
                                        }`}
                                    >
                                        $50
                                    </div>
                                </div>

                                <div className="col-12 col-l-6 m-0 p-3 l-p-5">
                                    <div
                                        tabIndex="0"
                                        onClick={() => seteAmount(100)}
                                        onKeyPress={(e) => {
                                            if (e.code === 'Space' || e.key === 'Enter') {
                                                seteAmount(100);
                                            }
                                        }}
                                        className={`switch-default t-20 p-9 text-center text-bold ${
                                            amount === 100 ? 'select' : ''
                                        }`}
                                    >
                                        $100
                                    </div>
                                </div>
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 col-l-6 m-0 p-3 l-p-5">
                                    <div
                                        tabIndex="0"
                                        onClick={() => seteAmount(150)}
                                        onKeyPress={(e) => {
                                            if (e.code === 'Space' || e.key === 'Enter') {
                                                seteAmount(150);
                                            }
                                        }}
                                        className={`switch-default t-20 p-9 text-center text-bold ${
                                            amount === 150 ? 'select' : ''
                                        }`}
                                    >
                                        $150
                                    </div>
                                </div>

                                <div className="col-12 col-l-6 m-0 p-3 l-p-5">
                                    <div
                                        tabIndex="0"
                                        onClick={() => seteAmount(250)}
                                        onKeyPress={(e) => {
                                            if (e.code === 'Space' || e.key === 'Enter') {
                                                seteAmount(250);
                                            }
                                        }}
                                        className={`switch-default t-20 p-9 text-center text-bold ${
                                            amount === 250 ? 'select' : ''
                                        }`}
                                    >
                                        $250
                                    </div>
                                </div>
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 m-0 p-3 l-p-5">
                                    <div
                                        tabIndex="0"
                                        onClick={() => seteAmount('Other')}
                                        onKeyPress={(e) => {
                                            if (e.code === 'Space' || e.key === 'Enter') {
                                                seteAmount('Other');
                                            }
                                        }}
                                        className={`switch-default t-20 p-9 text-center text-bold ${
                                            amount === 'Other' ? 'select' : ''
                                        }`}
                                    >
                                        Other
                                    </div>
                                </div>
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 m-0 p-10">
                                    <div className="text-default t-17">Enter yout amount:</div>
                                    <TextInput
                                        type="number"
                                        placeholder="Amount"
                                        value={amount}
                                        onValueChange={(value) => seteAmount(value)}
                                    />
                                </div>
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 m-0 px-10">
                                    <div className="text-default t-17">E-mail address</div>
                                    <TextInput
                                        type="text"
                                        placeholder="E-mail address"
                                        value={first_name.value}
                                        error={first_name.error}
                                        onValueChange={(value) => setFirstName({ value: value, error: false })}
                                    />
                                </div>
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 m-0 px-10">
                                    <div className="text-default t-17">First name:</div>
                                    <TextInput
                                        type="text"
                                        placeholder="First name"
                                        value={first_name.value}
                                        error={first_name.error}
                                        onValueChange={(value) => setFirstName({ value: value, error: false })}
                                    />
                                </div>
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 m-0 px-10">
                                    <div className="text-default t-17">Last name:</div>
                                    <TextInput
                                        type="text"
                                        placeholder="Last name"
                                        value={name.value}
                                        error={name.error}
                                        onValueChange={(value) => setName({ value: value, error: false })}
                                    />
                                </div>
                            </div>

                            <div className="p-10">
                                <hr />
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 m-0 px-10">
                                    <div className="text-default t-17">Pay method:</div>
                                    <div className="col-6 text-default p-10">
                                        <RadioButton
                                            label={'Credit/Debit card'}
                                            checked={pay_method === 'credit-debit-card'}
                                            onClick={() => setPayMethod('credit-debit-card')}
                                        />
                                    </div>
                                    <div className="col-6 text-default p-10">
                                        <RadioButton
                                            label={'PayPal'}
                                            checked={pay_method === 'paypal'}
                                            onClick={() => setPayMethod('paypal')}
                                        />
                                    </div>
                                </div>
                            </div>

                            {pay_method === 'paypal' ? (
                                <div className="row m-0 p-0">
                                    <div className="col-12 m-0 py-10">
                                        <button
                                            onClick={() => save_data()}
                                            className="btn contained-primary t-20 w-100"
                                        >
                                            PayPal
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="text-title t-20 m-10">Your card details</div>

                                    <div className="row m-0 px-10">
                                        <div className="col-12 m-0 p-0">
                                            <div className="d-flex content-between items-center">
                                                <div className="text-default t-17">Card number</div>
                                                <div>
                                                    <svg height="20" viewBox="0 0 314.03 60" ariaHidden="true">
                                                        <rect
                                                            x="108.4"
                                                            y=".38"
                                                            width="97.25"
                                                            height="59.25"
                                                            rx="8.63"
                                                            ry="8.63"
                                                            fill="#fff"
                                                        ></rect>
                                                        <path
                                                            d="M197.03.75A8.26 8.26 0 01205.27 9v42a8.26 8.26 0 01-8.24 8.25h-80a8.26 8.26 0 01-8.26-8.25V9a8.26 8.26 0 018.26-8.25h80m0-.75h-80a9 9 0 00-9 9v42a9 9 0 009 9h80a9 9 0 009-9V9a9 9 0 00-9-9z"
                                                            fill="#dcdcdc"
                                                        ></path>
                                                        <path
                                                            d="M180.81 48.5a1.45 1.45 0 00-1.52 1.35V50a1.43 1.43 0 001.44 1.41 1.44 1.44 0 00.08-2.87zM171.23 48.49a1.45 1.45 0 00-1.52 1.35V50a1.43 1.43 0 101.52-1.46zM142.14 48.5a1.45 1.45 0 00-1.52 1.35V50a1.43 1.43 0 001.45 1.4 1.44 1.44 0 00.08-2.87zM157.26 48.28a1.23 1.23 0 00-1.23 1.15h2.48a1.17 1.17 0 00-1.25-1.15zM184.97 51.69a.34.34 0 00-.28 0 .2.2 0 00-.12.08.36.36 0 000 .49.25.25 0 00.12.08.33.33 0 00.15 0 .31.31 0 00.13 0 .5.5 0 00.12-.08.36.36 0 000-.49.23.23 0 00-.12-.08zm-.05.53l-.13-.16v.16h-.1v-.43h.21a.2.2 0 01.13 0 .1.1 0 010 .1.12.12 0 010 .09.16.16 0 01-.11.05l.15.16z"
                                                            fill="none"
                                                        ></path>
                                                        <path
                                                            d="M184.92 51.94H184.75V52h.11a.06.06 0 00.06 0v-.06z"
                                                            fill="none"
                                                        ></path>
                                                        <path
                                                            d="M177.18 47.36a1.41 1.41 0 00-1.25.7v-.58h-1v4.74h1v-2.66c0-.78.34-1.22 1-1.22a1.82 1.82 0 01.65.12l.32-1a2.35 2.35 0 00-.74-.13zM162.85 47.36a1.41 1.41 0 00-1.25.7v-.58h-1v4.74h1v-2.66c0-.78.34-1.22 1-1.22a1.73 1.73 0 01.64.12l.32-1a2.35 2.35 0 00-.74-.13zM172.52 48.06a1.81 1.81 0 00-1.49-.7 2.5 2.5 0 100 5 1.83 1.83 0 001.49-.69v.57h1v-4.76h-1zm-1.37 3.3a1.42 1.42 0 01-1.44-1.36v-.11a1.45 1.45 0 011.52-1.35 1.44 1.44 0 01-.08 2.87zM166.39 48.31a2.14 2.14 0 011.24.43l.5-.83a2.48 2.48 0 00-1.71-.57 2.41 2.41 0 00-2.53 2.26v.24a2.39 2.39 0 002.31 2.48h.22a2.52 2.52 0 001.71-.56l-.5-.84a2.14 2.14 0 01-1.24.43 1.52 1.52 0 010-3zM185.03 52a.12.12 0 000-.09.1.1 0 000-.1.2.2 0 00-.13 0h-.21v.43h.1v-.16l.13.16h.11l-.15-.16a.16.16 0 00.15-.08zm-.25 0v-.12H184.95a.06.06 0 01-.06 0zM182.12 48.06a1.81 1.81 0 00-1.49-.7 2.5 2.5 0 100 5 1.83 1.83 0 001.49-.69v.57h1v-6.66h-1zm-1.39 3.31a1.43 1.43 0 01-1.44-1.37v-.11a1.44 1.44 0 111.44 1.52z"
                                                            fill="#231f20"
                                                        ></path>
                                                        <path
                                                            d="M185.17 51.67a.36.36 0 00-.15-.1.39.39 0 00-.18 0 .45.45 0 00-.2 0 .31.31 0 00-.15.1.49.49 0 00-.11.14.48.48 0 000 .37.49.49 0 00.45.29.43.43 0 00.19 0 .49.49 0 00.15-.1.42.42 0 00.11-.15.48.48 0 000-.37.49.49 0 00-.11-.18zm-.08.59a.5.5 0 01-.12.08.31.31 0 01-.13 0 .33.33 0 01-.15 0 .25.25 0 01-.12-.08.36.36 0 010-.49.2.2 0 01.12-.08.34.34 0 01.28 0 .23.23 0 01.12.08.36.36 0 010 .49zM184.83 51.53h.02-.02zM137.03 47.36h-.23a1.85 1.85 0 00-1.67.84 1.73 1.73 0 00-1.56-.84 1.55 1.55 0 00-1.39.71v-.59h-1v4.74h1v-2.61a1.11 1.11 0 011-1.25h.21c.68 0 1 .45 1 1.25v2.64h1v-2.64a1.11 1.11 0 011-1.25h.2c.71 0 1 .45 1 1.25v2.64h1.05v-3a1.78 1.78 0 00-1.61-1.89zM153.03 51.38c-.49 0-.68-.32-.68-.8v-2.16h1.68v-.94h-1.7V46h-1v1.44h-.94v.94h1v2.22c0 1.11.42 1.76 1.64 1.76a2.42 2.42 0 001.29-.37l-.29-.88a1.86 1.86 0 01-1 .27zM148.03 49.37l-.49-.06c-.45-.06-.8-.15-.8-.47s.33-.56.9-.56a3.15 3.15 0 011.49.41l.45-.83a3.53 3.53 0 00-1.93-.5c-1.2 0-2 .58-2 1.52 0 .77.58 1.25 1.64 1.4l.5.07c.56.08.83.22.83.49s-.38.58-1.08.58a2.56 2.56 0 01-1.58-.5l-.49.81a3.41 3.41 0 002.05.61c1.37 0 2.16-.64 2.16-1.55s-.65-1.27-1.65-1.42zM143.43 48.06a1.8 1.8 0 00-1.49-.7 2.5 2.5 0 100 5 1.82 1.82 0 001.49-.69v.57h1v-4.76h-1zm-1.4 3.31a1.43 1.43 0 01-1.45-1.4v-.12a1.44 1.44 0 111.45 1.52zM157.28 47.37a2.5 2.5 0 00.07 5 2.86 2.86 0 002-.64l-.49-.77a2.27 2.27 0 01-1.38.5 1.32 1.32 0 01-1.45-1.21h3.52v-.4a2.25 2.25 0 00-2.27-2.48zm1.18 2.06h-2.43a1.23 1.23 0 011.26-1.15 1.17 1.17 0 011.2 1.15z"
                                                            fill="#231f20"
                                                        ></path>
                                                        <path
                                                            d="M160.03 14.36a17.86 17.86 0 00-3-3 17.86 17.86 0 000 28.08 17.86 17.86 0 003-25.08z"
                                                            fill="#ff5f00"
                                                        ></path>
                                                        <path
                                                            d="M150.2 25.39a17.84 17.84 0 016.82-14 17.85 17.85 0 100 28.08 17.85 17.85 0 01-6.82-14.08z"
                                                            fill="#eb001b"
                                                        ></path>
                                                        <path
                                                            d="M182.09 14.35a17.86 17.86 0 00-25.07-3 17.85 17.85 0 010 28.08 17.86 17.86 0 0028.89-14 17.82 17.82 0 00-3.82-11.08zM184.97 36.25l-.21-.49h-.16v.69h.13v-.52l.19.45h.13l.2-.45v.52h.1v-.69h-.18l-.2.49zM184.44 35.76h-.59v.12h.25v.57h.11v-.57h.23v-.12z"
                                                            fill="#f79e1b"
                                                        ></path>
                                                        <rect
                                                            x="216.41"
                                                            y=".38"
                                                            width="97.25"
                                                            height="59.25"
                                                            rx="8.63"
                                                            ry="8.63"
                                                            fill="#fff"
                                                        ></rect>
                                                        <path
                                                            d="M305.03.75A8.26 8.26 0 01313.28 9v42a8.26 8.26 0 01-8.25 8.25h-80a8.26 8.26 0 01-8.25-8.25V9a8.26 8.26 0 018.25-8.25h80m0-.75h-80a9 9 0 00-9 9v42a9 9 0 009 9h80a9 9 0 009-9V9a9 9 0 00-9-9z"
                                                            fill="#dcdcdc"
                                                        ></path>
                                                        <path
                                                            fill="#286db6"
                                                            d="M273.64 28.66v-9.32h-2.49v9.32h2.49zM267.36 25.29a2.94 2.94 0 002.49-2.94c0-1.79-1.28-3-3.33-3h-5.4v9.32h2.49V25.4h.91l2.84 3.26h3.09zm-1.14-1.95h-2.61v-1.88h2.61c.75 0 1.12.44 1.12.94s-.37.94-1.12.94zM279.49 28.66h.85l1-2.11h-1.46a2.23 2.23 0 01-2.43-2.47v-.17a2.19 2.19 0 012.37-2.39h2.77v-2.18h-3a4.28 4.28 0 00-4.65 4.57v.18a4.21 4.21 0 004.55 4.57zM229.85 19.34l-4.11 9.32h2.74l.79-1.89h4.31l.8 1.89h2.81l-4.11-9.32zm.27 5.38l1.31-3.12 1.3 3.12zM240.11 21.95l2.47 6.71h2.21l2.46-6.71v6.71h2.46v-9.32h-3.88l-2.12 5.87-2.13-5.87h-3.92v9.32h2.45v-6.71zM259.5 26.55h-5.4v-1.5h5.26v-2.12h-5.26v-1.47h5.4v-2.12h-7.89v9.32h7.89v-2.11zM284.25 28.66l.78-1.89h4.32l.8 1.89h2.81l-4.12-9.32h-3.22l-4.12 9.32zm2.94-7.06l1.31 3.12h-2.61zM295.9 22.76l3.92 5.9h3.01v-9.32h-2.46v5.69l-3.8-5.69h-3.14v9.32h2.47v-5.9zM292.16 34.93h-2.29a.75.75 0 110-1.48h4.16l1-2.11h-5.13c-2.12 0-3.33 1.25-3.33 2.93a2.67 2.67 0 003 2.78h2.29a.75.75 0 110 1.49h-5v2.12h5c2.09 0 3.33-1.22 3.33-3s-1.16-2.73-3.03-2.73zM276.29 34.35c0-1.79-1.28-3-3.33-3h-5.39v9.32h2.46V37.4h.9l2.84 3.26h3.09l-3.09-3.37a2.93 2.93 0 002.52-2.94zm-3.62 1h-2.64v-1.9h2.61c.74 0 1.12.44 1.12.95s-.35.93-1.09.93zM277.6 40.66h7.89v-2.12h-5.4v-1.49h5.26v-2.12h-5.26v-1.48h5.4v-2.11h-7.89v9.32zM263.17 31.34h-5.46v9.32h2.49v-3h2.89a3.11 3.11 0 003.41-3.14 3 3 0 00-3.33-3.18zm-.29 4.17h-2.68v-2.06h2.68a1.03 1.03 0 110 2.06zM301.32 34.93h-2.29a.75.75 0 110-1.48h4.15l1-2.11h-5.15c-2.12 0-3.33 1.25-3.33 2.93a2.67 2.67 0 003 2.78h2.33a.75.75 0 110 1.49h-5v2.12h5c2.09 0 3.33-1.22 3.33-3s-1.13-2.73-3.04-2.73zM237.66 40.66h7.89v-2.12h-5.4v-1.49h5.27v-2.12h-5.27v-1.48h5.4v-2.11h-7.89v9.32zM257.26 31.34h-3.17l-2.43 2.81-2.42-2.81h-3.25l4.1 4.61-4.18 4.71h3.17l2.54-2.96 2.55 2.96h3.25l-4.21-4.77 4.05-4.55z"
                                                        ></path>
                                                        <rect
                                                            x=".38"
                                                            y=".38"
                                                            width="97.25"
                                                            height="59.25"
                                                            rx="8.63"
                                                            ry="8.63"
                                                            fill="#fff"
                                                        ></rect>
                                                        <path
                                                            d="M89.03.75A8.26 8.26 0 0197.25 9v42a8.26 8.26 0 01-8.22 8.25h-80A8.26 8.26 0 01.75 51V9A8.26 8.26 0 019.03.75h80m0-.75h-80a9 9 0 00-9 9v42a9 9 0 009 9h80a9 9 0 009-9V9a9 9 0 00-9-9z"
                                                            fill="#dcdcdc"
                                                        ></path>
                                                        <path
                                                            d="M46.93 18.69l-4.85 22.68h-5.87l4.82-22.68zm24.7 14.65l3.09-8.52 1.78 8.52zm6.55 8h5.42l-4.73-22.65h-5a2.66 2.66 0 00-2.5 1.66l-8.81 21h6.16L69.94 38h7.53zM62.86 34c0-6-8.28-6.32-8.23-9 0-.81.8-1.68 2.49-1.9a11.09 11.09 0 015.79 1l1-4.81a15.59 15.59 0 00-5.49-1c-5.8 0-9.88 3.09-9.92 7.5 0 3.27 2.92 5.09 5.14 6.18s3 1.82 3 2.81c0 1.53-1.82 2.2-3.51 2.23a12.31 12.31 0 01-6-1.44l-1.06 5a17.81 17.81 0 006.53 1.21c6.16 0 10.2-3 10.22-7.76M38.55 18.69l-9.52 22.68h-6.2l-4.68-18.1a2.48 2.48 0 00-1.39-2 25 25 0 00-5.79-1.93l.14-.65h10A2.73 2.73 0 0123.8 21l2.47 13.13 6.11-15.44z"
                                                            fill="#1a1f70"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <TextInput
                                                type="text"
                                                placeholder="1234 1324 1324 1324"
                                                value={name.value}
                                                error={name.error}
                                                onValueChange={(value) => setName({ value: value, error: false })}
                                            />
                                        </div>
                                    </div>

                                    <div className="row m-0 px-10">
                                        <div className="col-12 m-0 py-10 px-0">
                                            <div className="col-6 m-0 py-0 pl-0 pr-5">
                                                <div className="text-default t-17">Expiry date</div>
                                                <TextInput
                                                    type="text"
                                                    placeholder="MM / YY"
                                                    value={name.value}
                                                    error={name.error}
                                                    onValueChange={(value) => setName({ value: value, error: false })}
                                                />
                                            </div>
                                            <div className="col-6 m-0 py-0 pr-0 pl-5">
                                                <div className="text-default t-17">Security code</div>
                                                <TextInput
                                                    type="text"
                                                    placeholder="CVC"
                                                    value={name.value}
                                                    error={name.error}
                                                    onValueChange={(value) => setName({ value: value, error: false })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row m-0 px-10">
                                        <div className="col-12 m-0 p-0">
                                            <ReCAPTCHA
                                                sitekey="Your client site key"
                                                onChange={(e) => console.log(e)}
                                            />
                                        </div>
                                        <div className="col-12 m-0 p-0">
                                            <small className="text-default_gray">
                                                By ticking this box, you agree to let Google perform a security check to
                                                confirm you are a human. Please refer to their Terms and Privacy
                                                policies.
                                            </small>
                                        </div>
                                    </div>

                                    <div className="row my-20 px-10">
                                        <div className="col-12 p-0 m-0">
                                            <button
                                                onClick={() => save_data()}
                                                className="btn contained-warning w-100 m-0"
                                            >
                                                Contribute {amount}€
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="row m-0 p-10">
                                <div className="col-12 m-0 px-0">
                                    <div className="small">
                                        We will attempt to take payment of €10, on the 24th day of every month, from now
                                        on until you cancel your contribution. Payments may take up to 6 days to be
                                        recorded in your bank account.{' '}
                                        <strong>
                                            You can change how much you give or cancel your contributions at any time.
                                        </strong>
                                        <br />
                                        By proceeding, you are agreeing to our Terms and Conditions. To find out what
                                        personal data we collect and how we use it, please visit our Privacy Policy.
                                    </div>
                                </div>
                                <div className="col-12 m-0 px-0 py-10">
                                    <small>
                                        <p className="t-14 text-bold">Guardian Patrons programme</p> If you would like
                                        to support us at a higher level, from €117 a month, you can join us as a
                                        Guardian Patron. Find out more today
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-0 col-m-6 m-0 p-0 overflow-h">
                            <h1 className="text-primary">The Guardian</h1>

                            <div className="d-flex content-center items-center w-100">
                                <div style={{ width: 250, flex: 'none' }}>
                                    <SupportImage />
                                </div>
                            </div>

                            <h2 className="text-danger">Support our journalism with a contribution of any size</h2>

                            <p className="text-default t-19 my-10">
                                Your support helps protect the Guardian’s independence and it means we can keep
                                delivering quality journalism that’s open for everyone around the world. Every
                                contribution, however big or small, is so valuable for our future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
