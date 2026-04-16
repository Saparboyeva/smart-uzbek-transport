import { useState } from "react";
import { UserCheck, Clock, MapPin, Zap, Car, Train, ChevronRight, Plus, Pencil, Trash2, X, Check } from "lucide-react";
import { toast } from "sonner";
import { useRegion } from "@/contexts/RegionContext";

type Habit = {
  id: number;
  time: string;
  from: string;
  to: string;
  transport: string;
  frequency: string;
  icon: typeof Train;
};

const transportOptions = [
  { label: "Metro", icon: Train },
  { label: "Taksi", icon: Car },
  { label: "Avtobus", icon: Train },
  { label: "Yurish", icon: MapPin },
];

const frequencyOptions = ["Har kuni", "Shanba", "Yakshanba", "Du/Cho/Ju", "Se/Pa/Ju"];

const emptyHabit = { time: "08:00", from: "", to: "", transport: "Metro", frequency: "Har kuni" };

const PersonalAI = () => {
  const [activeTab, setActiveTab] = useState<"habits" | "suggestions">("suggestions");
  const { regionName } = useRegion();

  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, time: "08:30", from: "Uy", to: "Ish joyi", transport: "Metro", frequency: "Har kuni", icon: Train },
    { id: 2, time: "18:00", from: "Ish joyi", to: "Uy", transport: "Taksi", frequency: "Har kuni", icon: Car },
    { id: 3, time: "10:00", from: "Uy", to: "Bozor", transport: "Avtobus", frequency: "Shanba", icon: Train },
    { id: 4, time: "14:00", from: "Uy", to: "Fitness", transport: "Yurish", frequency: "Du/Cho/Ju", icon: MapPin },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyHabit);

  const getIcon = (transport: string) => transportOptions.find(t => t.label === transport)?.icon || Train;

  const handleSave = () => {
    if (!form.from.trim() || !form.to.trim()) {
      toast.error("'Qayerdan' va 'Qayerga' maydonlarini to'ldiring");
      return;
    }
    if (editingId !== null) {
      setHabits(prev => prev.map(h => h.id === editingId ? { ...h, ...form, icon: getIcon(form.transport) } : h));
      toast.success("Odat tahrirlandi");
    } else {
      const newId = Math.max(0, ...habits.map(h => h.id)) + 1;
      setHabits(prev => [...prev, { id: newId, ...form, icon: getIcon(form.transport) }]);
      toast.success("Yangi odat qo'shildi");
    }
    resetForm();
  };

  const handleEdit = (h: Habit) => {
    setForm({ time: h.time, from: h.from, to: h.to, transport: h.transport, frequency: h.frequency });
    setEditingId(h.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setHabits(prev => prev.filter(h => h.id !== id));
    toast.success("Odat o'chirildi");
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyHabit);
  };

  const mockSuggestions = [
    { id: 1, message: `Har kuni 8:30 da ${regionName}da ishga chiqasiz. Taksi chaqiraymi?`, action: "Taksi chaqirish", icon: Car, type: "action" as const },
    { id: 2, message: `Bugun ${regionName}da tirbandlik bor, ertaroq chiqing (08:00)`, action: "Eslatma qo'yish", icon: Clock, type: "warning" as const },
    { id: 3, message: `${regionName}da bozorga borasiz. Avtobus 15 daqiqada keladi`, action: "Kuzatish", icon: Train, type: "info" as const },
    { id: 4, message: `Bu hafta ${regionName}da metro bilan 12,000 so'm tejadingiz!`, action: "Batafsil", icon: Zap, type: "info" as const },
  ];

  const typeStyles: Record<string, string> = {
    info: "bg-primary/10 border-primary/20",
    action: "bg-success/10 border-success/20",
    warning: "bg-warning/10 border-warning/20",
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <UserCheck className="h-4 w-4" /> Personal AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Shaxsiy AI yordamchi — {regionName}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            AI sizning kundalik odatlaringizni o'rganib, aqlli tavsiyalar beradi
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex bg-muted rounded-xl p-1 mb-8">
            <button
              onClick={() => setActiveTab("suggestions")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "suggestions" ? "bg-card text-card-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              🤖 AI tavsiyalar
            </button>
            <button
              onClick={() => setActiveTab("habits")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "habits" ? "bg-card text-card-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              📊 Odatlarim
            </button>
          </div>

          {activeTab === "suggestions" && (
            <div className="space-y-4">
              {mockSuggestions.map((s) => (
                <div key={s.id} className={`rounded-2xl p-5 border ${typeStyles[s.type]}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center shrink-0 shadow-sm">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-card-foreground text-sm">{s.message}</p>
                      <button
                        onClick={() => toast.success(s.action + " — amalga oshirildi")}
                        className="mt-3 text-xs font-bold text-primary flex items-center gap-1 hover:underline"
                      >
                        {s.action} <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "habits" && (
            <div className="space-y-3">
              {/* Add button */}
              <button
                onClick={() => { resetForm(); setShowForm(true); }}
                className="w-full py-3 rounded-xl border-2 border-dashed border-primary/30 text-primary text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
              >
                <Plus className="h-4 w-4" /> Yangi odat qo'shish
              </button>

              {/* Add/Edit Form */}
              {showForm && (
                <div className="bg-card rounded-xl p-5 shadow-card border border-primary/20 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-card-foreground">
                      {editingId ? "Odatni tahrirlash" : "Yangi odat"}
                    </span>
                    <button onClick={resetForm} className="text-muted-foreground hover:text-foreground">
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Vaqt</label>
                      <input
                        type="time"
                        value={form.time}
                        onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Transport</label>
                      <select
                        value={form.transport}
                        onChange={e => setForm(f => ({ ...f, transport: e.target.value }))}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                      >
                        {transportOptions.map(t => <option key={t.label} value={t.label}>{t.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Qayerdan</label>
                      <input
                        type="text"
                        placeholder="Uy"
                        value={form.from}
                        onChange={e => setForm(f => ({ ...f, from: e.target.value }))}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Qayerga</label>
                      <input
                        type="text"
                        placeholder="Ish joyi"
                        value={form.to}
                        onChange={e => setForm(f => ({ ...f, to: e.target.value }))}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Takrorlanish</label>
                    <div className="flex flex-wrap gap-2">
                      {frequencyOptions.map(f => (
                        <button
                          key={f}
                          onClick={() => setForm(prev => ({ ...prev, frequency: f }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            form.frequency === f
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-accent"
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSave}
                    className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    <Check className="h-4 w-4" /> {editingId ? "Saqlash" : "Qo'shish"}
                  </button>
                </div>
              )}

              {/* Habits list */}
              {habits.map((h) => (
                <div key={h.id} className="bg-card rounded-xl p-4 shadow-card flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <h.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-sm text-card-foreground">{h.from} → {h.to}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {h.time} · {h.transport} · {h.frequency}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleEdit(h)}
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(h.id)}
                      className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              {habits.length === 0 && (
                <p className="text-center text-sm text-muted-foreground py-8">
                  Hali odatlar yo'q. Yangi odat qo'shing!
                </p>
              )}

              <p className="text-center text-xs text-muted-foreground mt-4">
                AI 7 kunlik ma'lumotlardan o'rgandi
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonalAI;
