// ==========================================================
// EMAIL CONFIGURATION
// ==========================================================
const EMAIL = "info@management-inc.site";

// ==========================================================
// DETECT MOBILE DEVICE
// ==========================================================
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ==========================================================
// OPEN EMAIL (SMART DETECTION)
// ==========================================================
function openGmail(subject, body) {
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (isMobileDevice()) {
        // MOBILE: Open native mail app (Gmail, Apple Mail, etc.)
        window.location.href = mailtoLink;
    } else {
        // DESKTOP: Open Gmail in a new browser tab
        window.open(gmailWebLink, '_blank');
    }
}

// ==========================================================
// ALL EMAIL TEMPLATES
// ==========================================================
const emailTemplates = {

    // ---------- BOOKING ----------
    booking: {
        subject: "Booking Inquiry - Riley Green",
        body: `Hello,

I would like to inquire about booking Riley Green.

Name:
Company / Organization:
Event Name:
Event Date:
Event Location:
Expected Attendance:

Additional Information:

Thank you,`
    },

    // ---------- VIP ----------
    vip: {
        subject: "VIP Experience Inquiry - Riley Green",
        body: `Hello,

I'm interested in learning more about Riley Green VIP experiences.

Name:
City:
Preferred Show:
Preferred VIP Package (if known):
Number of Guests:
Questions:

Thank you,`
    },

    // ---------- BUSINESS & MEDIA ----------
    business: {
        subject: "Business & Media Inquiry - Riley Green",
        body: `Hello,

I'm reaching out regarding a business opportunity or media request.

Company:
Contact Name:
Title:
Purpose of Inquiry:

Additional Details:

Thank you,`
    },

    // ---------- GENERAL ----------
    general: {
        subject: "General Inquiry - Riley Green",
        body: `Hello,

I have a question regarding:

Name:

Message:

Thank you,`
    },

    // ---------- DONATION / CHARITY ----------
    donation: {
        subject: "Donation / Sponsorship Inquiry - Buford Bonds Fund",
        body: `Hello,

I am interested in supporting the Buford Bonds Charitable Fund.

Name:
Organization (if applicable):
Donation Type (Individual / Corporate / Sponsorship):
Donation Amount (if known):
Additional Details:

Thank you,`
    },

    // ---------- DUCKS CLUB ----------
    ducks: {
        subject: "Ducks Club Inquiry - Riley Green",
        body: `Hello,

I am interested in learning more about Ducks Club.

Name:
City:
Questions about Ducks Club:

Thank you,`
    },

    // ---------- TOUR / EVENT SPECIFIC ----------
    tour: {
        subject: "Tour Inquiry - Riley Green",
        body: `Hello,

I am interested in information for the following event:

Event: 
Date: 
Location: 

Please send me details about availability and pricing.

Name:
Number of Guests:

Thank you.`
    }

};

// ==========================================================
// UNIVERSAL: Any element with data-type
// Works for contact cards, management buttons, VIP buttons, etc.
// ==========================================================
document.querySelectorAll('[data-type]').forEach(el => {

    el.addEventListener("click", function (e) {
        e.preventDefault();

        const type = this.dataset.type;
        const template = emailTemplates[type];

        if (!template) {
            console.warn(`No template found for type: "${type}"`);
            return;
        }

        // Special handling for tour buttons (data-event, data-date, data-location)
        const eventName = this.dataset.event;
        const date = this.dataset.date;
        const location = this.dataset.location;

        let subject = template.subject;
        let body = template.body;

        // If this is a tour button with event data
        if (eventName && date && location) {
            const inquiryType = this.textContent.trim().toUpperCase();
            subject = `${inquiryType} Inquiry - ${eventName}`;
            body = `Hello,

I am interested in ${inquiryType.toLowerCase()} information for the following event:

Event: ${eventName}
Date: ${date}
Location: ${location}

Please send me details about availability and pricing.

Name:
Number of Guests:

Thank you.`;
        }

        // If the button has a package name (VIP packages)
        const packageName = this.dataset.package;
        if (packageName && type === 'vip') {
            subject = `VIP Inquiry - ${packageName}`;
            body = `Hello,

I am interested in the following VIP experience:

Package: ${packageName}

Please send me details about availability, pricing, and next steps.

Name:
Preferred Show:
Number of Guests:

Thank you.`;
        }

        // If the button has a fund type (Buford Bonds support cards)
        const fundType = this.dataset.fund;
        if (fundType && type === 'donation') {
            subject = `Buford Bonds Fund - ${fundType}`;
            body = `Hello,

I am interested in supporting the Buford Bonds Charitable Fund through ${fundType}.

Name:
Organization (if applicable):
Additional Details:

Thank you.`;
        }

        openGmail(subject, body);

    });

});

// ==========================================================
// TOUR BUTTONS (Fallback / Legacy)
// ==========================================================
document.querySelectorAll(".tour-btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        const eventName = this.dataset.event;
        const date = this.dataset.date;
        const location = this.dataset.location;

        // Skip if this button was already handled by data-type listener
        if (this.dataset.type) return;

        const type = this.textContent.trim().toLowerCase();

        let subject = `${type.toUpperCase()} Inquiry - ${eventName || 'Riley Green Tour'}`;
        let body = `Hello,

I am interested in ${type} information for the following event:

Event: ${eventName || 'Not specified'}
Date: ${date || 'Not specified'}
Location: ${location || 'Not specified'}

Please send me details about availability and pricing.

Name:
Number of Guests:

Thank you.`;

        openGmail(subject, body);

    });

});

// ==========================================================
// LOG READY
// ==========================================================
console.log('📧 mailto.js loaded with:', Object.keys(emailTemplates).join(', '));
console.log('📱 Device detected:', isMobileDevice() ? 'Mobile (using mail app)' : 'Desktop (using Gmail web)');