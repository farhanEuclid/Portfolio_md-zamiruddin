// script.js

function changeLanguage(lang) {
  if (lang === 'en') {
    // English language
    document.getElementById('about-heading').innerHTML = 'About Me';
    document.getElementById('about-content').innerHTML = 'I am a private attorney based in Muzaffarpur, Bihar, India. With over 25 years of experience, I have been providing legal services to clients in various practice areas. I am committed to providing effective legal representation and personalized attention to each client's needs.';
    document.getElementById('experience-heading').innerHTML = 'Experience';
    document.getElementById('services-heading').innerHTML = 'Services';
    document.getElementById('contact-heading').innerHTML = 'Contact Me';
    document.getElementById('contact-content').innerHTML = 'If you need legal assistance or have any inquiries, please feel free to reach out to me:';
  } else if (lang === 'hi') {
    // Hindi language
    document.getElementById('about-heading').innerHTML = 'मेरे बारे में';
    document.getElementById('about-content').innerHTML = 'मैं मुजफ्फरपुर, बिहार, भारत में स्थित एक निजी वकील हूँ। 30 साल से अधिक के अनुभव के साथ, मैंने विभिन्न प्रैक्टिस क्षेत्रों में ग्राहकोंको कानूनी सेवाएं प्रदान की हैं। मैं सक्रियतापूर्ण कानूनी प्रतिनिधि प्रदान करने और हर ग्राहक की आवश्यकताओं के प्रति व्यक्तिगत ध्यान प्रदान करने के प्रति समर्पित हूँ।';
    document.getElementById('experience-heading').innerHTML = 'अनुभव';
    document.getElementById('services-heading').innerHTML = 'सेवाएं';
    document.getElementById('contact-heading').innerHTML = 'मुझसे संपर्क करें';
    document.getElementById('contact-content').innerHTML = 'यदि आपको कानूनी सहायता चाहिए या कोई पूछताछ हो, कृपया मुझसे संपर्क करें:';
  }
}