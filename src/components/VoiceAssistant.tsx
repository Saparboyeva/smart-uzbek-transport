import { useState } from "react";
import { Mic, MicOff, Volume2, Car, MapPin, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRegion } from "@/contexts/RegionContext";
import { regionVoiceCommands } from "@/data/regionData";

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState<{ command: string; response: string; action: string } | null>(null);
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();
  const { selected, regionName } = useRegion();
  const commands = regionVoiceCommands[selected];

  const simulateVoice = (cmd: typeof commands[0]) => {
    setListening(true);
    setCurrentCommand(null);
    setProcessing(false);

    setTimeout(() => {
      setListening(false);
      setProcessing(true);
    }, 1500);

    setTimeout(() => {
      setProcessing(false);
      setCurrentCommand(cmd);
      toast({ title: "🎤 " + cmd.action, description: cmd.response });
    }, 3000);
  };

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
            Ovoz bilan buyruq bering — AI tushunadi va darrov bajaradi
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              {listening && <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />}
              <button
                className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                  listening ? "bg-destructive text-destructive-foreground scale-110" : "bg-primary text-primary-foreground hover:scale-105"
                }`}
                onClick={() => {
                  if (!listening && !processing) {
                    const cmd = commands[Math.floor(Math.random() * commands.length)];
                    simulateVoice(cmd);
                  }
                }}
              >
                {listening ? <Mic className="h-10 w-10 animate-pulse" /> : processing ? (
                  <div className="w-8 h-8 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <MicOff className="h-10 w-10" />
                )}
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mb-8">
            {listening ? "🎤 Tinglayapman..." : processing ? "🧠 AI tahlil qilmoqda..." : "Mikrofon tugmasini bosing"}
          </p>

          {currentCommand && (
            <div className="bg-card rounded-2xl shadow-card p-6 mb-8 animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <Volume2 className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase">AI javobi</span>
              </div>
              <div className="bg-muted rounded-xl p-3 mb-3">
                <p className="text-sm text-muted-foreground italic">"{currentCommand.command}"</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Car className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-card-foreground font-medium">{currentCommand.response}</p>
              </div>
            </div>
          )}

          <h3 className="font-semibold text-foreground mb-4 text-sm">Namuna buyruqlar:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commands.map((cmd, i) => (
              <button
                key={i}
                onClick={() => simulateVoice(cmd)}
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
