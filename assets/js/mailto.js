const EMAIL = "info@inc-management.site";

const emailTemplates = {

    booking: {
        subject: "Booking Inquiry",
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

    vip: {
        subject: "VIP Experience Inquiry",
        body: `Hello,

I'm interested in learning more about Riley Green VIP experiences.

Name:
City:
Preferred Show:
Questions:


Thank you,`
    },

    business: {
        subject: "Business & Media Inquiry",
        body: `Hello,

I'm reaching out regarding a business opportunity or media request.

Company:
Contact Name:
Purpose of Inquiry:

Additional Details:


Thank you,`
    },

    general: {
        subject: "General Inquiry",
        body: `Hello,

I have a question regarding:

Name:

Message:


Thank you,`
    }

};

document.querySelectorAll(".contact-card").forEach(card => {

    card.addEventListener("click", () => {

        const type = card.dataset.type;

        const template = emailTemplates[type];

        if (!template) return;

        const mailto =
            `mailto:${EMAIL}?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.body)}`;

        window.location.href = mailto;

    });

});