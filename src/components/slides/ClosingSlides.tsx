import { SlideWrapper, SlideTitle, GlassCard } from './SlideComponents';
import { CheckCircle2, Rocket, Handshake, ArrowRight, Target, Clock, Shield, Eye, Zap, TrendingUp } from 'lucide-react';

export const RoadmapSlide = () => {
  const months = [
    {
      label: 'Mês 1', title: 'CRM Inteligente', weeks: '1–6', color: 'bg-primary',
      items: ['Setup 3 números', 'Treinamento presencial', 'IA conversacional', 'Automações & kanban'],
    },
    {
      label: 'Mês 2', title: 'E-commerce', weeks: '7–10', color: 'bg-secondary',
      items: ['Integração Auryn', 'Automações de carrinho', 'Dashboard de vendas', 'Validação ponta a ponta'],
    },
    {
      label: 'Mês 3', title: 'Dados & BI', weeks: '11–12', color: 'bg-accent',
      items: ['XML Parser do ERP', 'Banco Supabase', 'Enriquecimento auto', 'Analytics & dashboards'],
    },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Visão consolidada de 12 semanas">Roadmap Completo</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="w-full space-y-6">
          {/* Full progress bar */}
          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[50%] bg-primary rounded-full" />
            <div className="absolute inset-y-0 left-[50%] w-[33%] bg-secondary rounded-full" />
            <div className="absolute inset-y-0 left-[83%] w-[17%] bg-accent rounded-full" />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground font-mono px-1">
            {Array.from({ length: 13 }, (_, i) => (
              <span key={i}>{i === 0 ? 'Início' : `S${i}`}</span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {months.map((m, i) => (
              <GlassCard key={i} className="p-5 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${m.color}`} />
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-lg">{m.label}</span>
                  <span className="text-xs text-muted-foreground font-mono">Sem {m.weeks}</span>
                </div>
                <h4 className="font-semibold text-sm mb-3">{m.title}</h4>
                <ul className="space-y-2">
                  {m.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          <div className="flex justify-center gap-8 text-sm">
            {[
              { label: 'Semana 6', desc: 'CRM Operacional' },
              { label: 'Semana 10', desc: 'E-commerce Integrado' },
              { label: 'Semana 12', desc: 'Projeto Completo' },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-accent font-medium">{m.label}</span>
                <span className="text-muted-foreground">— {m.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const TechStackSlide = () => {
  const stack = [
    { emoji: '💬', title: 'WhatsApp Business API', desc: 'Comunicação com clientes', category: 'Mensageria' },
    { emoji: '🤖', title: 'n8n', desc: 'Workflows e integrações', category: 'Automação' },
    { emoji: '🗄️', title: 'Supabase (PostgreSQL)', desc: 'Armazenamento e análise', category: 'Banco de Dados' },
    { emoji: '🧠', title: 'OpenAI / Claude', desc: 'IA conversacional', category: 'Inteligência' },
    { emoji: '💳', title: 'Auryn Gateway', desc: 'Processamento de transações', category: 'Pagamentos' },
    { emoji: '📊', title: 'Sistema AIOS', desc: 'Gestão de relacionamento', category: 'CRM' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Ferramentas e integrações do projeto">Stack Tecnológico</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {stack.map((t, i) => (
            <GlassCard key={i} className="p-5 hover:scale-[1.03] transition-transform text-center">
              <span className="text-3xl mb-3 block">{t.emoji}</span>
              <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-2">
                {t.category}
              </span>
              <h4 className="font-bold text-sm mb-1">{t.title}</h4>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export const BenefitsSlide = () => {
  const comparisons = [
    { before: '1 número compartilhado', after: '3 números segmentados' },
    { before: 'Gestão desorganizada', after: 'Hierarquia estruturada' },
    { before: 'Processos manuais', after: 'Automação inteligente' },
    { before: 'Sem follow-up', after: 'Follow-up 24/7 com IA' },
    { before: 'Sem dados', after: 'BI em tempo real' },
    { before: 'Abordagem reativa', after: 'Estratégia proativa' },
  ];

  const kpis = [
    { icon: Clock, label: '−70% tempo de resposta' },
    { icon: TrendingUp, label: '+50% taxa de conversão' },
    { icon: Eye, label: '100% rastreabilidade' },
    { icon: Shield, label: '24/7 disponibilidade' },
    { icon: Target, label: 'Zero perda de oportunidades' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Impacto mensurável da transformação">Benefícios Esperados</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {comparisons.map((c, i) => (
              <div key={i} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <span className="text-xs text-destructive/70 line-through flex-1">{c.before}</span>
                <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs text-accent font-medium flex-1">{c.after}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {kpis.map((k, i) => (
              <GlassCard key={i} className="px-4 py-3 flex items-center gap-2 border-accent/20">
                <k.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold">{k.label}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const NextStepsSlide = () => {
  const steps = [
    {
      icon: CheckCircle2, title: 'Alinhamento Final', color: 'text-primary',
      items: ['Validação do escopo', 'Confirmação de timeline', 'Definição de responsáveis'],
    },
    {
      icon: Rocket, title: 'Kick-off do Projeto', color: 'text-secondary',
      items: ['Assinatura de contrato', 'Início Semana 1', 'Reunião de alinhamento'],
    },
    {
      icon: Handshake, title: 'Acompanhamento', color: 'text-accent',
      items: ['Reuniões semanais de status', 'Validações por etapa', 'Suporte contínuo'],
    },
  ];

  return (
    <SlideWrapper className="justify-center">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-3">Próximos Passos</h2>
        <p className="text-muted-foreground text-lg">Vamos transformar a gestão comercial da Matrix</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto w-full mb-10">
        {steps.map((s, i) => (
          <GlassCard key={i} className="p-6 hover:scale-[1.03] transition-transform">
            <s.icon className={`w-8 h-8 mb-4 ${s.color}`} />
            <h3 className="font-bold text-lg mb-3">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      <div className="text-center">
        <div className="inline-flex px-6 py-3 rounded-full glass glow-primary text-primary font-semibold tracking-wide">
          AIOS CRM — Transformação Digital Matrix
        </div>
      </div>
    </SlideWrapper>
  );
};
