# Original project notes

The rebuild keeps the original MentorCruise concept, mentor names, course categories, filters, search, signup validation, contact validation, imagery, and profile content where available in the supplied files.

The most important routing issue was the original HTML navigation. Several pages used relative `.html` links, and some used Windows backslashes such as `ContactUs\src\contact.html`. React needs client-side routes instead, so this version centralizes navigation in React Router.
