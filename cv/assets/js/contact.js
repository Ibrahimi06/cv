// ============ CONTACT FORM - SIMPLIFIED VERSION ============
// Social links are primary contact method
// Email form is OPTIONAL below

const USE_FORMSPREE = false;
const FORMSPREE_ID = "xyzabc";

const USE_EMAILJS = false;
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "service_xhafibr";
const EMAILJS_TEMPLATE_ID = "template_xhafibr";

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  
  if (!form) return;

  // Character counter
  const msgField = form.querySelector('textarea[name="message"]');
  if (msgField) {
    msgField.addEventListener("input", function() {
      const count = Math.min(this.value.length, 500);
      document.getElementById("charCount").textContent = count;
      if (count >= 500) this.value = this.value.substring(0, 500);
    });
  }

  // Form submission
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]')?.value?.trim();
    const email = form.querySelector('input[name="email"]')?.value?.trim();
    const subject = form.querySelector('input[name="subject"]')?.value?.trim();
    const message = form.querySelector('textarea[name="message"]')?.value?.trim();

    if (!name || !email || !subject || !message) {
      showMessage("❌ Please fill all fields", "danger");
      return;
    }

    const honeypot = form.querySelector('input[name="phone"]');
    if (honeypot && honeypot.value) {
      showMessage("⚠️ Spam detected", "danger");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

    // Show success message
    showMessage("✅ Thank you for your message! I'll get back to you soon.", "success");
    form.reset();
    document.getElementById("charCount").textContent = "0";
    
    submitBtn.disabled = false;
    submitBtn.innerHTML = "Send Message";
  });
});


function showMessage(text, type) {
  const msgDiv = document.getElementById("formMsg");
  msgDiv.className = `alert alert-${type} mt-3`;
  msgDiv.textContent = text;
  msgDiv.style.display = "block";
  
  if (type === "success") {
    setTimeout(() => msgDiv.style.display = "none", 5000);
  }
}

