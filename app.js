import { db } from './firebase.js'; // Firestore DB reference from firebase.js
import { collection, doc, getDoc } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js';

const output = document.getElementById('output');

// 🗣️ Trigger Speech Recognition
window.startVoice = function () {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'hi-IN'; // Hindi input
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  output.textContent = '🎧 Listening...';

  recognition.start();

  recognition.onresult = async (event) => {
    const voiceInput = event.results[0][0].transcript.trim().toLowerCase();
    output.textContent = `You said: "${voiceInput}"`;

    try {
      const productRef = doc(collection(db, 'products'), voiceInput);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        const data = productSnap.data();
        output.textContent = `🛍️ ${voiceInput} ka daam hai ₹${data.price}`;
      } else {
        output.textContent = `❌ "${voiceInput}" not found in bazaar. Try again!`;
      }
    } catch (error) {
      output.textContent = `⚠️ Error fetching price: ${error.message}`;
    }
  };

  recognition.onerror = (event) => {
    output.textContent = `🚫 Voice Error: ${event.error}`;
  };
};