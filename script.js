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
    if (lowerCaseMessage === '!komutlistesi') {
        showCommandList();
    }
}

function showCommandList() {
    var botMessage = createMessage('bot', 'Mevcut Komutlar:\n' +
    '- !tarih\n' +
    '- !adolfhitler\n' +
    '- !göktürkler\n' +
    '- !uygurlar\n' +
    '- !ödev\n' +
    '- !sosyalbilgiler\n' +
    '- !fen\n' +
    '- !hava\n' +
    '- !müzik\n' +
    '- !filmönerisi\n' +
    '- !programlama\n' +
    '- !motivasyon\n' +
    '- !spor\n' +
    '- !kitapönerisi\n' +
    '- !teknoloji\n' +
    '- !trendler\n' +
    '- !sağlık\n' +
    '- !gezi\n' +
    '- !tatil\n' +
    '- !tezatıştırma\n' +
    '- !güvenlik\n' +
    '- !doğa\n' +
    '- !yemektarifi\n' +
    '- !bulut\n' +
    '- !öğrenme\n' +
    '- !girişimcilik\n' +
    '- !insanilişkileri\n' +
    '- !evdekal\n' +
    '- !gönüllülük\n' +
    '- !yoga\n' +
    '- !oyun\n' +
    '- !gitar\n' +
    '- !bahçe\n' +
    '- !çizim\n' +
    '- !fotoğrafçılık\n' +
    '- !güneşkremi\n' +
    '- !bisiklet\n' +
    '- !müze');
    chatBox.append(botMessage);
    saveChatHistory();
    animateMessage(botMessage);
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

if (userMessage.toLowerCase().includes('!hava')) {
    botMessage = createMessage('bot', 'Hava durumu için bir hizmet sunamıyorum. Ancak, hava durumu sitelerini ziyaret ederek güncel bilgileri öğrenebilirsiniz.');
} else if (userMessage.toLowerCase().includes('!müzik')) {
    botMessage = createMessage('bot', 'Spotify, Apple Music veya YouTube gibi platformlardan müzik dinleyebilirsin.');
} else if (userMessage.toLowerCase().includes('!filmönerisi')) {
    botMessage = createMessage('bot', 'Son zamanlarda popüler olan bir filmi izleyebilirsin. Örneğin, "Dune" veya "No Time to Die" gibi.');
} else if (userMessage.toLowerCase().includes('!programlama')) {
    botMessage = createMessage('bot', 'Programlamayla ilgileniyorsanız, JavaScript, Python veya Java gibi dilleri öğrenmeyi düşünebilirsiniz.');
} else if (userMessage.toLowerCase().includes('!motivasyon')) {
    botMessage = createMessage('bot', 'Başarı, disiplin ve azimle her şeyi başarabilirsiniz! Unutmayın ki her gün biraz daha iyiyim.');
} else if (userMessage.toLowerCase().includes('!spor')) {
    botMessage = createMessage('bot', 'Spor yapmak önemlidir. Egzersiz, sağlıklı yaşamın anahtarıdır.');
} else if (userMessage.toLowerCase().includes('!kitapönerisi')) {
    botMessage = createMessage('bot', 'Kitap önerileri: "Sapiens" by Yuval Noah Harari veya "Atomic Habits" by James Clear.');
} else if (userMessage.toLowerCase().includes('!teknoloji')) {
    botMessage = createMessage('bot', 'Teknolojideki gelişmeleri takip etmek için teknoloji haber sitelerini düzenli olarak okuyabilirsiniz.');
} else if (userMessage.toLowerCase().includes('!trendler')) {
    botMessage = createMessage('bot', 'Gündemdeki trendlere ayak uydurmak önemlidir. Sosyal medyayı ve haber sitelerini takip edin.');
} else if (userMessage.toLowerCase().includes('!sağlık')) {
    botMessage = createMessage('bot', 'Sağlığınıza dikkat edin! Düzenli egzersiz yapın, sağlıklı beslenin ve yeterince uyuyun.');
} else if (userMessage.toLowerCase().includes('!gezi')) {
    botMessage = createMessage('bot', 'Farklı kültürleri keşfetmek için seyahat etmek harika bir deneyim olabilir.');
} else if (userMessage.toLowerCase().includes('!tatil')) {
    botMessage = createMessage('bot', 'Tatil planları yaparken rahatlamayı unutmayın. Seyahat edin veya evinizde keyifli zaman geçirin.');
} else if (userMessage.toLowerCase().includes('!tezatıştırma')) {
    botMessage = createMessage('bot', 'Tezatıştırmak, farklı fikirleri bir araya getirerek daha iyi sonuçlar elde etmenin bir yolu olabilir.');
} else if (userMessage.toLowerCase().includes('!güvenlik')) {
    botMessage = createMessage('bot', 'İnternet güvenliği konusunda bilgi sahibi olun. Güçlü şifreler kullanın ve güvenilir siteleri tercih edin.');
} else if (userMessage.toLowerCase().includes('!doğa')) {
    botMessage = createMessage('bot', 'Doğayı keşfetmek sakinleştirici bir etki yapabilir. Ormanda yürüyüşe çıkın veya deniz kenarında vakit geçirin.');
} else if (userMessage.toLowerCase().includes('!yemektarifi')) {
    botMessage = createMessage('bot', 'Yemek tarifi istiyorsanız, bir tarif kitabı veya çevrimiçi yemek tarifi siteleri size ilham verebilir.');
} else if (userMessage.toLowerCase().includes('!bulut')) {
    botMessage = createMessage('bot', 'Verilerinizi yedeklemek ve paylaşmak için bulut depolama hizmetlerini kullanabilirsiniz.');
} else if (userMessage.toLowerCase().includes('!öğrenme')) {
    botMessage = createMessage('bot', 'Sürekli öğrenmeye önem verin. Yeni beceriler kazanmak sizi daha yetenekli bir kişi yapacaktır.');
} else if (userMessage.toLowerCase().includes('!girişimcilik')) {
    botMessage = createMessage('bot', 'Girişimcilikle ilgileniyorsanız, başarılı girişimcilerin hikayelerini okuyun ve deneyim kazanmaya çalışın.');
} else if (userMessage.toLowerCase().includes('!insanilişkileri')) {
    botMessage = createMessage('bot', 'İnsan ilişkileri önemlidir. Empati kurmayı ve etkili iletişim becerilerini geliştirmeyi unutmayın.');
} else if (userMessage.toLowerCase().includes('!evdekal')) {
    botMessage = createMessage('bot', 'Covid-19 gibi salgın dönemlerinde evde kalmak, toplum sağlığı için önemlidir. Lütfen kurallara uyun.');
} else if (userMessage.toLowerCase().includes('!gönüllülük')) {
    botMessage = createMessage('bot', 'Topluma fayda sağlamak için gönüllü çalışmalara katılabilirsiniz.');
} else if (userMessage.toLowerCase().includes('!yoga')) {
    botMessage = createMessage('bot', 'Yoga yapmak zihinsel ve fiziksel sağlığınıza olumlu katkılarda bulunabilir.');
} else if (userMessage.toLowerCase().includes('!oyun')) {
    botMessage = createMessage('bot', 'Oyun oynamak stres atmanın ve eğlenmenin harika bir yoludur. Favori oyunlarınızı keşfedin.');
} else if (userMessage.toLowerCase().includes('!gitar')) {
    botMessage = createMessage('bot', 'Gitar çalmak istiyorsanız, temel akorları öğrenmekle başlayabilir ve çevrimiçi derslere katılabilirsiniz.');
} else if (userMessage.toLowerCase().includes('!bahçe')) {
    botMessage = createMessage('bot', 'Bahçe işleriyle ilgilenmek, doğayla iç içe olmanın keyifli bir yoludur. Bitki bakımı yapmayı deneyin.');
} else if (userMessage.toLowerCase().includes('!çizim')) {
    botMessage = createMessage('bot', 'Çizim yapmak yaratıcı bir uğraştır. Kağıda veya dijital platformlarda çizim becerilerinizi geliştirebilirsiniz.');
} else if (userMessage.toLowerCase().includes('!fotoğrafçılık')) {
    botMessage = createMessage('bot', 'Fotoğraf çekmek, anıları ölümsüzleştirmenin harika bir yoludur. Temel fotoğrafçılık tekniklerini öğrenmeye başlayın.');
} else if (userMessage.toLowerCase().includes('!güneşkremi')) {
    botMessage = createMessage('bot', 'Güneş kremi kullanmak, cildinizi güneşin zararlı etkilerinden korumanın önemli bir yoludur.');
} else if (userMessage.toLowerCase().includes('!bisiklet')) {
    botMessage = createMessage('bot', 'Bisiklet sürmek hem egzersiz yapmanın hem de çevreyi keşfetmenin harika bir yoludur.');
} else if (userMessage.toLowerCase().includes('!müze')) {
    botMessage = createMessage('bot', 'Müzeleri ziyaret ederek sanat ve tarih hakkında daha fazla bilgi edinebilirsiniz.');
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

