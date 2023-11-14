var chatBox = $('#chatBox');
var chatContainer = $('#chatContainer');
var isBotTyping = false;
var lastUserMessage = '';

function sendMessage() {
    var userInput = $('#userInput');
    var message = userInput.val();

    if (message.trim() === '') {
        return;
    }

    var userMessage = createMessage('user', message);

    chatBox.append(userMessage);
    userInput.val('');

    checkSpecialCommands(message);

    saveChatHistory();

    animateMessage(userMessage);

    setTimeout(function() {
        if (!isBotTyping && message === lastUserMessage) {
            return;
        }
        if (!isBotTyping) {
            lastUserMessage = message;
            respondToUser(message);
        }
    }, 1000);
}

function checkSpecialCommands(message) {
    var lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage === 'selamla') {
        greetUser();
    } else if (lowerCaseMessage === 'naber') {
        respondToNaber();
    }

}

function greetUser() {
    var botMessage = createMessage('bot', 'Merhaba! Sana nasıl yardımcı olabilirim?');
    chatBox.append(botMessage);
    saveChatHistory();
    animateMessage(botMessage);
}

function respondToNaber() {
    var botMessage = createMessage('bot', 'Ben bir chatbot\'um. Sana yardımcı olabilir miyim?');
    chatBox.append(botMessage);
    saveChatHistory();
    animateMessage(botMessage);
}

function respondToUser(userMessage) {
    var botMessage;

    
    if (userMessage.toLowerCase().includes('merhaba')) {
        
        botMessage = createMessage('bot', 'Merhaba! Size nasıl yardımcı olabilirim?');
    } else if (userMessage.toLowerCase().includes('teşekkür')) {
        botMessage = createMessage('bot', 'Rica ederim! Başka bir şey sormak istersen sormaktan çekinme.');
    } else if (userMessage.toLowerCase().includes('naber')) {
        botMessage = createMessage('bot', 'Sizin sayenizde daha iyiyim! Size nasıl yardımcı olabilirim?');
        
    
    } else if (userMessage.toLowerCase().includes('nbr')) {
        botMessage = createMessage('bot', 'Sanırım kısaltmalı kelimeler seviyorsunuz! İyiyim siz nasılsınız?');
    } else if (userMessage.toLowerCase().includes('iyiyim')) {
        botMessage = createMessage('bot', 'Sevindim! Bende iyiyim');
    } else if (userMessage.toLowerCase().includes('iyym')) {
        botMessage = createMessage('bot', 'Sanırım kısaltmalı kelimeler seviyorsunuz! Sevindim...');
    } else {
        botMessage = createMessage('bot', 'Üzgünüm, bu soruya henüz bir yanıtım yok.');
    }


    if (userMessage.toLowerCase().includes('!tarih')) {
        
        botMessage = createMessage('bot', 'Tabiki size tarih hakkında bilgi verebilirim, fakat ne hakkında olduğunu yazarsınız yardım edebilirim ama maalesef komutlarımda varsa yazabilirim.Örnek"!adolfhitler, !uygurlar, !göktürkler" gibi.');
    } else if (userMessage.toLowerCase().includes('!adolfhitler')) {
        botMessage = createMessage('bot', 'Wikipedia dan aldığım bilgiye göre;Adolf Hitler özetce, 20 Nisan 1889 da doğan Alman politikacı ve Nasyonal Sosyalist Alman İşçi Partisi lideridir. 1933 te Şansölye olarak atanmasıyla diktatörlüğe geçti. II. Dünya Savaşı nı başlatarak saldırgan bir dış politika izledi. Holokost ta rol aldı ve 30 Nisan 1945 te intihar etti. Hitler in politikaları ve ırkçı ideolojisi en az 5,5 milyon kişinin ölümüne neden oldu.');
    } else if (userMessage.toLowerCase().includes('!göktürkler')) {
        botMessage = createMessage('bot', 'Wikipedia dan aldığım bilgiye göre;Göktürkler özetce, 6. yüzyılın sonlarında Çin in Sui Hanedanlığı na saldırdı. Yami Kağan ın iç savaşı kazanmasına rağmen, Göktürk İmparatorluğu Doğu ve Batı olarak bölündü. Zayıflayan Yami Kağan, Sui Hanedanlığı na bağlılık ilan etti. Suilerin gerilemesi üzerine Şipi Kağan liderliğinde Göktürkler, Sui topraklarına sefer düzenledi. Sui İmparatoru Yang ı Yen-Men Kuşatması nda kuşattılar. Sui Hanedanlığı nın çöküşünden sonra Göktürkler, Çin iç savaşlarına müdahale ederek Tang Hanedanlığı nı destekledi. Ancak, Göktürk destekli isyancı Liu Heita, Tang generalleri tarafından mağlup edilerek Tang Hanedanı kuruldu.');
    } else if (userMessage.toLowerCase().includes('!uygurlar')) {
        botMessage = createMessage('bot', 'Wikipedia dan aldığım bilgiye göre;Uygurlar özetce, Uygurlar, Orta ve Doğu Asya kökenli kültürel olarak bu bölgelerle bağlantılı bir Türk azınlık etnik grubudur. Çin in kuzeybatısındaki Sincan Uygur Özerk Bölgesi, Uygurların yaşadığı ana bölgedir. Ancak, Çin Hükûmeti Uygurları sadece çok kültürlü bir ulusa ait bölgesel bir azınlık olarak tanır ve Uygurların yerli halk olduğu kavramını reddeder.Geleneksel olarak Taklamakan Çölü ndeki vaha yerleşimlerinde yaşayan Uygurlar, tarih boyunca farklı medeniyetlerin yönetimi altında bulunmuştur. İslamlaşma süreci 10. yüzyılda başlamış ve İslam, Uygur kültürü ve kimliğinde önemli bir rol oynamıştır.Sincan daki Uygurların çoğunluğu hala Tarım Havzası nda yaşarken, geri kalan kısmı Sincan ın farklı bölgelerine dağılmış durumdadır. Ayrıca Orta Asya ülkelerinde büyük Uygur diaspora toplulukları bulunmaktadır. 20. yüzyılın başlarından bu yana, özellikle Çin sınırları içinde yaşayan Uygurlar, etnik ve dini çatışmalara maruz kalmıştır. Bir milyondan fazla Uygurun 2015 ten beri Sincan daki eğitim kamplarında tutulduğu tahmin edilmektedir. Eleştirmenler, bu kampların ulusal ideolojiye uyum sağlama amacı güttüğünü belirterek Çin i Uygurlara karşı soykırım veya etnosit uygulamakla suçlamaktadır.');

    }
    if (userMessage.toLowerCase().includes('!ödev')) {
        
        botMessage = createMessage('bot', 'Tabiki size ödevleriniz hakkında yardım edebilirim.Ama maalesef şuanlık 6.sınıflar için bilgilerim var.İlerleyen dönemlerde güncelleme ile yenileri gelecek.Örneğin"!sosyalbilgiler, !fen" gibi dersler var. Hangisini istersin?');
    } else if (userMessage.toLowerCase().includes('!sosyalbilgiler')) {
        botMessage = createMessage('bot', 'Tamam.Sana 6.sınıf sosyal bilgiler dersi için yardım edeceğim. İlk olarak sana önereceğim kanallar var. Bunlar ise; TONGUÇ AKADEMİ 6.SINIF:https://www.youtube.com/@tonguc6  SOSYAL BİLGİLER DERSLİĞİ:https://www.youtube.com/@SosyalBilgilerDersligi');
    } else if (userMessage.toLowerCase().includes('!fen')) {
        botMessage = createMessage('bot', 'Bu özellik maalesef şuan yok.Yardım edebileceğim başka bir şey var mı?');

    }

    chatBox.append(botMessage);
    saveChatHistory();
    animateMessage(botMessage);
}
function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); 
        sendMessage();
    }
}

function animateMessage(element) {
    anime({
        targets: element[0],
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeInOutQuad',
        duration: 800,
        complete: function(anim) {
            animateBotTyping();
        }
    });
}

function animateBotTyping() {
    if (!isBotTyping) {
        return; 
    }

    var botTyping = $('<div class="message bot-message bot-typing"></div>');
    var loader = $('<div class="loader"></div>');
    botTyping.append(loader);
    chatBox.append(botTyping);
    saveChatHistory();

    anime({
        targets: '.loader',
        rotate: '360deg',
        easing: 'linear',
        duration: 1000,
        loop: true
    });

    anime({
        targets: botTyping[0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 500,
        complete: function(anim) {
            setTimeout(function() {
                botTyping.remove();
                isBotTyping = false;
                var botResponse = createMessage('bot', 'Yardıma ihtiyacınız var mı?');
                chatBox.append(botResponse);
                saveChatHistory();
                animateMessage(botResponse);
            }, 1000);
        }
    });
}


function createMessage(sender, content) {
    var timestamp = new Date().toLocaleTimeString();
    var messageClass = sender === 'user' ? 'user-message' : 'bot-message';
    var message = $('<div class="message ' + messageClass + '"><span class="message-timestamp">' + timestamp + '</span><br>' + content + '</div>');
    return message;
}

function newChat() {
    var newChatDiv = $('<div class="chat-box"></div>');
    chatBox.empty().append(newChatDiv);
    chatBox = newChatDiv;
    localStorage.removeItem('chatHistory');
}

function saveChatHistory() {
    var chatHistory = chatBox.html();
    localStorage.setItem('chatHistory', chatHistory);
}

function toggleDarkMode() {
    chatContainer.toggleClass('dark-mode');
}
// ...

function toggleDarkMode() {
    chatContainer.toggleClass('dark-mode');

    var isDarkMode = chatContainer.hasClass('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

$(document).ready(function () {
    var savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode === 'true') {
        chatContainer.addClass('dark-mode');
    } else {
        chatContainer.removeClass('dark-mode');
    }
});

