import { SlideWrapper, SlideTitle, GlassCard } from './SlideComponents';
import { Bot, ShoppingCart, Database, ArrowRight, Smartphone, Zap, BrainCircuit } from 'lucide-react';

export const CoverSlide = () => (
  <div className="flex flex-col items-center justify-center h-full relative">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/[0.03]" />

    <div className="relative z-10 text-center max-w-3xl px-6 animate-fade-in">
      <div className="inline-flex px-5 py-2 rounded-full glass text-primary text-sm font-semibold mb-8 tracking-wider">
        AIOS CRM × MATRIX
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold gradient-text mb-6 leading-[1.1] tracking-tight">
        Roadmap de Implementação
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10">
        Transformação Digital da Gestão Comercial Matrix
      </p>
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground animate-fade-in-delay">
        <span className="w-12 h-px bg-border" />
        <span className="tracking-wide">16 Semanas • 3 Etapas • 1 Transformação</span>
        <span className="w-12 h-px bg-border" />
      </div>
    </div>
  </div>
);

export const OverviewSlide = () => {
  const pillars = [
    {
      icon: Bot, title: 'CRM Inteligente', subtitle: 'Etapa 1 • Semanas 1–4',
      items: ['Descentralização de números', 'IA para atendimento 24/7', 'Gestão hierárquica', 'Automações de vendas'],
      gradient: 'from-primary to-primary/40',
    },
    {
      icon: ShoppingCart, title: 'Integração E-commerce', subtitle: 'Etapa 2 • Semanas 5–10',
      items: ['Conexão Auryn Gateway', 'Carrinho abandonado', 'Acompanhamento de pedidos', 'Painel kanban de vendas'],
      gradient: 'from-secondary to-secondary/40',
    },
    {
      icon: Database, title: 'Enriquecimento de Dados', subtitle: 'Etapa 3 • Semanas 11–16',
      items: ['Importação XML do ERP', 'Banco de dados externo', 'Análises e Dashboards', 'Decisões data-driven'],
      gradient: 'from-accent to-accent/40',
    },
  ];

  const colors = ['text-primary', 'text-secondary', 'text-accent'];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Os 3 pilares da transformação digital">Visão Geral do Projeto</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {pillars.map((p, i) => (
            <GlassCard key={i} className="relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient}`} />
              <p.icon className={`w-9 h-9 mb-4 ${colors[i]}`} />
              <h3 className="text-xl font-bold mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 font-medium">{p.subtitle}</p>
              <ul className="space-y-2.5">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className={`w-3 h-3 flex-shrink-0 ${colors[i]}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export const ArchitectureSlide = () => (
  <SlideWrapper>
    <SlideTitle subtitle="Como o sistema se conecta">Arquitetura do Sistema</SlideTitle>
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
        <GlassCard className="px-8 py-5 border-primary/20 glow-primary">
          <div className="flex items-center gap-3">
            <BrainCircuit className="w-7 h-7 text-primary" />
            <div>
              <p className="font-bold text-lg">AIOS / Inteligência Artificial</p>
              <p className="text-xs text-muted-foreground">Centro de Operações</p>
            </div>
          </div>
        </GlassCard>

        <div className="flex items-center gap-2">
          <div className="w-px h-6 bg-primary/30" />
          <div className="w-px h-6 bg-primary/30" />
          <div className="w-px h-6 bg-primary/30" />
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          {[
            { label: 'Revelação / Portal Matrix', sub: 'Revelação Varejo' },
            { label: 'Matrix Pro / Revelação', sub: 'Portal Matrix / Criativa / Emoldura' },
            { label: 'Matrix Molduras', sub: 'Matrix Pro / Profissional / Molduras' },
          ].map((n, i) => (
            <GlassCard key={i} className="text-center py-4">
              <Smartphone className="w-5 h-5 mx-auto mb-2 text-accent" />
              <p className="font-semibold text-sm">{n.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{n.sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-2">
          <GlassCard className="text-center py-4 border-secondary/20">
            <Zap className="w-5 h-5 mx-auto mb-2 text-secondary" />
            <p className="text-sm font-semibold">Auryn Gateway</p>
            <p className="text-xs text-muted-foreground">E-commerce</p>
          </GlassCard>
          <GlassCard className="text-center py-4 border-accent/20">
            <Database className="w-5 h-5 mx-auto mb-2 text-accent" />
            <p className="text-sm font-semibold">Banco Externo</p>
            <p className="text-xs text-muted-foreground">Supabase / PostgreSQL</p>
          </GlassCard>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

export const Stage1TimelineSlide = () => {
  const steps = [
    { week: '1', title: 'Setup CRM', desc: '3 números WhatsApp Business API, hierarquia, kanban personalizado' },
    { week: '2', title: 'Treinamento', desc: '3 sessões presenciais com equipe, boas práticas' },
    { week: '3', title: 'IA Conversacional', desc: 'Prompts especializados, base de conhecimento, testes internos' },
    { week: '3–4', title: 'Validação IA', desc: 'Deploy do agente, testes com equipe, ajustes finais' },
    { week: '4', title: 'Automações', desc: 'Kanban automatizado, etiquetagem, follow-ups, reativação' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Semanas 1–4 • CRM Inteligente">Etapa 1 — Implementação do CRM</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="w-full space-y-6">
          {/* Flowchart style */}
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="relative flex items-start gap-5 pl-14">
                  {/* Node circle */}
                  <div className="absolute left-4 top-3 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <GlassCard className="p-4 flex-1 hover:scale-[1.01] transition-transform">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-flex px-2.5 py-0.5 rounded-md text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                        Sem {s.week}
                      </span>
                      <h4 className="font-semibold text-sm">{s.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 justify-end text-sm">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-accent font-medium">✓ Validação Etapa 1 — Fim da Semana 4</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
