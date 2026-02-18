'use client';

export default function Section2() {
    return (
        <div className="contact-map-page">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158885207.20503202!2d-95.67954535!3d20.195440000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sen!2sen!5e0!3m2!1sen!2sus!4v1770923960042"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
