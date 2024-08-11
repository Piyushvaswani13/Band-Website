import React from 'react';

const ContactSection = () => (
    <div className="contact-section" id="contact">
        <div className="contact-header">
        <h2>CONTACT</h2>
        <p className="form-subtitle">Fan? Drop a note!</p>
    </div>

    <div className="contact-content">
        <div className="contact-info">
            <p><i className="fa fa-map-marker"></i> Chicago, US</p>
            <p><i className="fa fa-phone"></i> Phone: +00 151515</p>
            <p><i className="fa fa-envelope"></i> Email: mail@mail.com</p>
        </div>
        <div className="contact-form-wrapper">
        <form action="/submit" method="post">
            <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
                <textarea id="message" name="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit">SEND</button>
        </form>
        </div>
    </div>
</div>
//   <div classNameName="contact-section" id="contact">
//     <h2>CONTACT</h2>
//     <p classNameName="subtitle"><i>Fan? Drop a note!</i></p>
//     <div classNameName="contact-form">
//       <div classNameName="contact-info">
//         <p><i classNameName="fa fa-map-marker fa-fw"></i> Chicago, US</p>
//         <p><i classNameName="fa fa-phone fa-fw"></i> Phone: +00 151515</p>
//         <p><i classNameName="fa fa-envelope fa-fw"></i> Email: mail@mail.com</p>
//       </div>
//       <form action="/" method="post">
//         <p><input classNameName="input-field" type="text" placeholder="Name" required name="Name" /></p>
//         <p><input classNameName="input-field" type="email" placeholder="Email" required name="Email" /></p>
//         <p><input classNameName="input-field" type="text" placeholder="Message" required name="Message" /></p>
//         <button classNameName="send-btn" type="submit">SEND</button>
//       </form>
//     </div>
//   </div>
);

export default ContactSection;
