!function(){var e,t={email:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]'),form:document.querySelector("form")},a="feedback-form-state",r={};(e=JSON.parse(localStorage.getItem(a)))&&(t.email.value=e.email,t.textarea.value=e.message);t.form.addEventListener("input",(function(e){r[e.target.name]=e.target.value,localStorage.setItem(a,JSON.stringify(r))})),t.form.addEventListener("submit",(function(e){console.log(r),console.log(JSON.parse(localStorage.getItem(a))),e.preventDefault(),localStorage.removeItem(a),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.72ba5c89.js.map