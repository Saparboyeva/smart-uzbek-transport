import { useState, useRef, useCallback } from "react";
import { Mic, MicOff, Volume2, Car, Navigation, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRegion } from "@/contexts/RegionContext";
import { regionVoiceCommands } from "@/data/regionData";

interface AIResponse {
  text: string;
  icon: "car" | "nav" | "alert";
  action: string;
}

const keywordResponses: Record<string, AIResponse> = {
  taksi: { text: "Sizga eng yaqin taksi 2 daqiqada yetib keladi. Narxi taxminan 15,000 so'm.", icon: "car", action: "🚕 Taksi qidirilmoqda" },
  taxi: { text: "Sizga eng yaqin taksi 2 daqiqada yetib keladi. Narxi taxminan 15,000 so'm.", icon: "car", action: "🚕 Taksi qidirilmoqda" },
  avtobus: { text: "Sizga yaqin avtobus — 5-marshrut, 3 daqiqada keladi. Bekat: 200m oldinda.", icon: "nav", action: "🚌 Avtobus ma'lumoti" },
  bus: { text: "Sizga yaqin avtobus — 5-marshrut, 3 daqiqada keladi. Bekat: 200m oldinda.", icon: "nav", action: "🚌 Avtobus ma'lumoti" },
  metro: { text: "Eng yaqin metro bekati — Tinchlik, 500m. Keyingi poyezd 2 daqiqada.", icon: "nav", action: "🚇 Metro ma'lumoti" },
  tirbandlik: { text: "Hozir asosiy yo'llarda o'rtacha tirbandlik. Chilonzor yo'nalishi tiqilinch.", icon: "alert", action: "🚦 Tirbandlik holati" },
  tiqilinch: { text: "Hozir asosiy yo'llarda o'rtacha tirbandlik. Muqobil yo'l tavsiya qilinadi.", icon: "alert", action: "🚦 Tirbandlik holati" },
  yo_l: { text: "Tanlangan yo'nalish bo'yicha eng tez marshrut topildi. Taxminiy vaqt: 25 daqiqa.", icon: "nav", action: "🗺️ Yo'l topildi" },
  marshrut: { text: "Sizga optimal marshrut tuzildi. 3 ta variant mavjud.", icon: "nav", action: "🗺️ Marshrut tayyor" },
  xavf: { text: "Oldinda yo'l ta'miri ishlari bor. Ehtiyot bo'ling, tezlikni kamaytiring.", icon: "alert", action: "⚠️ Xavf haqida ogohlantirish" },
  halokat: { text: "Oldinda avtohalokat ro'y bergan. Muqobil yo'ldan boring.", icon: "alert", action: "🚨 Halokat xabari" },
  ob_havo: { text: "Bugun ob-havo: 28°C, quyoshli. Yo'l holati yaxshi.", icon: "nav", action: "🌤️ Ob-havo" },
  narx: { text: "Hozirgi taksi narxi: km/2,500 so'm. Avtobus: 1,500 so'm.", icon: "car", action: "💰 Narxlar" },
  ish: { text: "Ishga boradigan yo'lingizda hozir tirbandlik past. Taxminiy vaqt: 20 daqiqa.", icon: "nav", action: "🏢 Ish yo'nalishi" },
  uy: { text: "Uyga qaytish yo'lida tirbandlik o'rtacha. Taxminiy vaqt: 30 daqiqa.", icon: "nav", action: "🏠 Uy yo'nalishi" },
  salom: { text: "Salom! Men sizning transport yordamchingizman. Taksi, avtobus, marshrut yoki tirbandlik haqida so'rang!", icon: "nav", action: "👋 Salomlashish" },
  rahmat: { text: "Arzimaydi! Yana yordam kerak bo'lsa, menga murojaat qiling.", icon: "nav", action: "😊 Javob" },
  bozor: { text: "Chorsu bozoriga eng yaqin transport: Metro (Chorsu bekati) — 10 daqiqa.", icon: "nav", action: "🏪 Bozor yo'nalishi" },
  aeroport: { text: "Aeroportga taksi — 45 daqiqa, ~50,000 so'm. Avtobus — 1 soat.", icon: "car", action: "✈️ Aeroport" },
  vokzal: { text: "Temir yo'l vokzaliga — 20 daqiqa, avtobus 67-marshrut.", icon: "nav", action: "🚂 Vokzal" },
};

const findResponse = (transcript: string): AIResponse => {
  const lower = transcript.toLowerCase().replace(/ʻ|'/g, "");
  for (const [keyword, resp] of Object.entries(keywordResponses)) {
    if (lower.includes(keyword.replace("_", ""))) return resp;
  }
  return {
    text: `"${transcript}" — tushundim. Hozircha bu so'rov uchun ma'lumot yig'ilmoqda. Taksi, avtobus, marshrut yoki tirbandlik haqida so'rab ko'ring!`,
    icon: "nav",
    action: "🤖 AI javob bermoqda",
  };
};

const iconMap = {
  car: Car,
  nav: Navigation,
  alert: AlertTriangle,
};

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState<AIResponse | null>(null);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();
  const { selected, regionName } = useRegion();
  const commands = regionVoiceCommands[selected];

  const supportsRecognition = typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const startListening = useCallback(() => {
    if (!supportsRecognition) {
      toast({ title: "❌ Xato", description: "Brauzeringiz ovozni qo'llab-quvvatlamaydi. Chrome ishlatib ko'ring." });
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "uz-UZ";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setListening(true);
      setResponse(null);
      setTranscript("");
    };

    recognition.onresult = (event: any) => {
      const result = Array.from(event.results)
        .map((r: any) => r[0].transcript)
        .join("");
      setTranscript(result);
    };

    recognition.onend = () => {
      setListening(false);
      setProcessing(true);

      setTimeout(() => {
        const finalTranscript = transcript || "noma'lum buyruq";
        setProcessing(false);
        const aiResp = findResponse(finalTranscript);
        setResponse(aiResp);
        toast({ title: "🎤 " + aiResp.action, description: aiResp.text });
      }, 1000);
    };

    recognition.onerror = (event: any) => {
      setListening(false);
      setProcessing(false);
      if (event.error === "no-speech") {
        toast({ title: "🎤 Ovoz eshitilmadi", description: "Iltimos, mikrofonga gapirib ko'ring." });
      } else {
        toast({ title: "❌ Xato", description: `Ovoz tanish xatosi: ${event.error}` });
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [supportsRecognition, toast, transcript]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, []);

  const simulateCommand = (cmd: typeof commands[0]) => {
    setTranscript(cmd.command);
    setListening(false);
    setProcessing(true);
    setResponse(null);

    setTimeout(() => {
      setProcessing(false);
      const aiResp = findResponse(cmd.command);
      setResponse(aiResp);
      toast({ title: "🎤 " + aiResp.action, description: aiResp.text });
    }, 1500);
  };

  const ResponseIcon = response ? iconMap[response.icon] : Car;

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Volume2 className="h-4 w-4" /> Voice Assistant
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Ovozli AI yordamchi — {regionName}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Gapirib buyruq bering — AI eshitadi, tushunadi va javob beradi
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Mic Button */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {listening && <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />}
              <button
                className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                  listening
                    ? "bg-destructive text-destructive-foreground scale-110"
                    : processing
                    ? "bg-muted text-muted-foreground"
                    : "bg-primary text-primary-foreground hover:scale-105"
                }`}
                onClick={() => {
                  if (listening) {
                    stopListening();
                  } else if (!processing) {
                    startListening();
                  }
                }}
                disabled={processing}
              >
                {listening ? (
                  <Mic className="h-10 w-10 animate-pulse" />
                ) : processing ? (
                  <div className="w-8 h-8 border-3 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
                ) : (
                  <MicOff className="h-10 w-10" />
                )}
              </button>
            </div>
          </div>

          {/* Status */}
          <p className="text-center text-sm text-muted-foreground mb-4">
            {listening
              ? "🎤 Tinglayapman... gapiravering"
              : processing
              ? "🧠 AI tahlil qilmoqda..."
              : supportsRecognition
              ? "Mikrofon tugmasini bosib gapiring"
              : "⚠️ Brauzer ovozni qo'llab-quvvatlamaydi"}
          </p>

          {/* Live transcript */}
          {(listening || transcript) && !response && (
            <div className="bg-card rounded-2xl shadow-card p-4 mb-6 animate-fade-in text-center">
              <p className="text-sm text-muted-foreground">Siz aytdingiz:</p>
              <p className="text-lg font-semibold text-foreground mt-1">
                "{transcript || "..."}"
              </p>
            </div>
          )}

          {/* AI Response */}
          {response && (
            <div className="bg-card rounded-2xl shadow-card p-6 mb-8 animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <Volume2 className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase">AI javobi</span>
              </div>
              {transcript && (
                <div className="bg-muted rounded-xl p-3 mb-3">
                  <p className="text-sm text-muted-foreground italic">"{transcript}"</p>
                </div>
              )}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <ResponseIcon className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-card-foreground font-medium">{response.text}</p>
              </div>
            </div>
          )}

          {/* Example commands */}
          <h3 className="font-semibold text-foreground mb-4 text-sm">Namuna buyruqlar (bosing yoki o'zingiz gapiring):</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commands.map((cmd, i) => (
              <button
                key={i}
                onClick={() => simulateCommand(cmd)}
                disabled={listening || processing}
                className="bg-card rounded-xl p-4 shadow-card text-left hover:shadow-card-hover transition-shadow disabled:opacity-50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Navigation className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">Buyruq</span>
                </div>
                <p className="text-sm text-card-foreground font-medium">"{cmd.command}"</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAssistant;
