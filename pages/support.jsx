import React from 'react';
import { Footer } from '../src/components/footer';
import { TextInput } from '../src/components/input_text';
import { NavBar } from '../src/components/navBar';
import { RadioButton } from '../src/components/radio_buttons';
import { SupportImage } from '../src/components/support_img';
import ReCAPTCHA from 'react-google-recaptcha';
import { DefaultHeader } from '../src/components/header';

export default function Support() {
    const AMOUNTS = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250];

    const [amount, seteAmount] = React.useState({ value: 50, error: false, helper: 'Amount must be over than $20!' });

    /**
     * Fonction qu ipermet de sauvegarder les informations du formulaire.
     */
    function save_data() {
        // TODO
    }

    return (
        <div className="bg-white">
            <DefaultHeader />

            <NavBar color="default" current={-1} />

            <div className="row my-30 mx-0 p-0">
                <div className="col-12 col-m-10 col-l-9 col-center">
                    <div className="row p-0 m-0">
                        <div className="col-12 col-m-6 m-0 p-0">
                            <div className="row m-0 p-0">
                                {AMOUNTS.map((item) => (
                                    <div className="col-12 col-l-6 m-0 p-3 l-p-5" key={item}>
                                        <div
                                            tabIndex="0"
                                            onClick={() =>
                                                seteAmount((state) => ({ ...state, value: item, error: false }))
                                            }
                                            onKeyPress={(e) => {
                                                if (e.code === 'Space' || e.key === 'Enter') {
                                                    seteAmount((state) => ({ ...state, value: item, error: false }));
                                                }
                                            }}
                                            className={`switch-default t-20 p-9 text-center text-bold ${
                                                amount.value === item ? 'select' : ''
                                            }`}
                                        >
                                            ${item}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 m-0 px-10">
                                    <div className="text-default t-17">Enter other support amount :</div>
                                    <TextInput
                                        type="number"
                                        placeholder="First name"
                                        value={amount.value}
                                        error={amount.error}
                                        helperText={amount.helper}
                                        onValueChange={(value) => {
                                            if (parseInt(value) < 20)
                                                seteAmount((state) => ({ ...state, value: value, error: true }));
                                            else seteAmount((state) => ({ ...state, value: value, error: false }));
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="p-10">
                                <hr />
                            </div>

                            <div className="row m-0 p-0">
                                <div className="col-12 m-0 p-10">
                                    <button
                                        onClick={() => save_data()}
                                        className="btn contained-primary t-20 w-100 m-0"
                                    >
                                        PayPal ${amount.value}
                                    </button>
                                </div>
                            </div>

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
