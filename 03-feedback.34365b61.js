const e={email:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]'),form:document.querySelector("form")},t={};(()=>{const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e.email.value=t.email,e.textarea.value=t.message)})();e.form.addEventListener("input",(e=>{t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.form.addEventListener("submit",(e=>{console.log(t),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.34365b61.js.map