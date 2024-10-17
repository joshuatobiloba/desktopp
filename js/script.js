// Detect if the device is mobile or desktop
if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Redirect mobile users to the mobile version of the website
    window.location.href = "https://joshuatobiloba.github.io/phone-/";
} else {
    // Redirect desktop users to the desktop version of the website
    window.location.href = "https://joshuatobiloba.github.io/desktop/";
}