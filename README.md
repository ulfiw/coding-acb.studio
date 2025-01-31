# coding-acb.studio
 Coding Challenge Ulf for acb.studio
## Frontend Coding Challenge — Password Strength Meter
### Description
Please create a minimal registration form with a password strength meter. The form should contain the following elements:

- Email input field
- Password input field
- Submit button
- Password Strength Rules: It should validate the following rules:
    - minimal length of 8 characters
    - should contain at least one special character
    - should contain at least one number
    - should contain at least one upper-case letter
    - should contain at least one lower-case letter
- Visual representation of strength levels (e.g. weak/medium/strong)
    - Create a color-coded strength meter (e.g. red/yellow/green)
    - Dynamically update as user types
- Visual feedback for each validation rule with clear, instructive feedback
- Add guidance on displaying validation errors
- BONUS: A checkbox for Terms of Service
- BONUS: A button to toggle password visibility

**No need to submit the form or store any data.**

### Evaluation criteria
- Is it working like expected?
- Is the solution accessible?
    - ARIA labels for form elements
    - Keyboard navigation support
    - Screen reader-friendly error messages
    - Color contrast compliance
    - Focus management
- Is it performing well?
    - Debounce validation inputs
    - Minimal DOM manipulations
    - Lightweight validation logic
    - Avoid blocking main thread
    - Efficient event listeners
- Choice of tools and dependencies.
- Would the CSS scale and is the JavaScript modular?
- Is the markup semantic?
- Is it easy to extend the form and the rules?
- BONUS: Is the code tested (e.g. Vites, Jest)?
- BONUS: Are code quality tools in place (e.g. Prettier, ESLint)?

### Submission
Please create a GitHub repository and try to do regular Git commits, just like you would do it in your daily work. Share the URL of the repository with us as soon as you are ready.
Let us know if you have any questions. We’d prefer to talk about a problem first before investing too much time into the wrong solution. We are happy to help!