import React, { useState } from 'react'

const Contact = () => {
    return (
        <div id="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Type your message"></textarea>
            <button>Submit</button>

        </div>
    );
};

export default Contact;