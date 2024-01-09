import React, { forwardRef, Ref } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiSend } from "react-icons/bi";

const Contact = forwardRef((props, ref: Ref<HTMLElement>) => {
    return (
        <section id="contact" className="contact section bg-white dark:bg-gray-900" ref={ref}>
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <AiOutlinePhone className="contact__icon" />
                        <div>
                            <h3 className="contact__title">Call me</h3>
                            <span className="contact__subtitle">
                                +52 (656) 131-1408
                            </span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <AiOutlineMail className="contact__icon" />
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">
                                contact@irvingzamora.com
                            </span>
                        </div>
                    </div>
                </div>
                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <input type="text" className="contact__input" id="input_name" name="input_name" />
                            <label htmlFor="input_name" className="contact__label">Name</label>
                        </div>
                        <div className="contact__content">
                            <input type="email" className="contact__input" id="input_email" name="input_email" />
                            <label htmlFor="input_email" className="contact__label">Email</label>
                        </div>
                    </div>
                    <div className="contact__content">
                        <textarea name="input_message" id="input_message" cols={0} rows={7} className="contact__input"></textarea>
                        <label htmlFor="input_message" className="contact__label">Message</label>
                    </div>
                    <div>
                        <a href="" className="contact__button button button-flex">
                            Send Message
                            <BiSend className="button_icon" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
});
Contact.displayName = "Contact";
export default Contact;