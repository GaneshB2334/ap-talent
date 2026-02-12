'use client';

export default function Section2() {
    return (
        <div className="contact-map-page">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29332256.252269365!2d133.41701195!3d-26.1772288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1770923960042!5m2!1sen!2sin"
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
