import { SlideWrapper, SlideTitle, GlassCard, TimelineBadge } from './SlideComponents';
import { Bot, BarChart3, Tag, Users, Phone, RefreshCw, TrendingUp, ShoppingCart, CreditCard, XCircle, ArrowRight, MessageSquare } from 'lucide-react';

export const Stage1DeliverablesSlide = () => {
  const deliverables = [
    { icon: Bot, title: 'IA Conversacional', desc: 'Atendimento 24/7 com qualificação automática', metric: '−70% tempo resposta' },
    { icon: BarChart3, title: 'Painel Kanban', desc: 'Visualização completa do pipeline de vendas', metric: 'Gestão visual' },
    { icon: Tag, title: 'Etiquetagem Inteligente', desc: 'Classificação automática por estágio', metric: 'Auto-organização' },
    { icon: Users, title: 'Hierarquia de Usuários', desc: 'Gestão de permissões e acessos', metric: 'Controle total' },
    { icon: Phone, title: '3 Números WhatsApp', desc: 'Separação por canal e vertical', metric: 'Rastreabilidade' },
    { icon: RefreshCw, title: 'Distribuição de Leads', desc: 'Roteamento automático inteligente', metric: 'Equidade' },
    { icon: TrendingUp, title: 'Follow-ups Automáticos', desc: 'Sequências programadas de reengajamento', metric: '+Conversão' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Entregas da Etapa 1 — CRM Inteligente">Entregas Detalhadas</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {deliverables.map((d, i) => (
            <GlassCard key={i} className={`p-4 hover:scale-[1.03] transition-transform ${i === 6 ? 'md:col-start-2' : ''}`}>
              <d.icon className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-semibold text-sm mb-1">{d.title}</h4>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{d.desc}</p>
              <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                {d.metric}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export const Stage2Slide = () => {
  const steps = [
    { week: '7', title: 'Apresentação da Estrutura', desc: 'Arquitetura de integração, fluxos Auryn ↔ CRM, aprovação técnica' },
    { week: '8–9', title: 'Desenvolvimento', desc: 'Conexão CRM ↔ Auryn, webhooks de status, automações por evento' },
    { week: '9', title: 'Dashboard de Vendas', desc: 'Métricas em tempo real, conversão, abandono, ticket médio' },
    { week: '10', title: 'Validação', desc: 'Testes ponta a ponta, simulações, ajustes finais, aprovação' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Semanas 7–10 • Integração E-commerce">Etapa 2 — E-commerce</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="w-full space-y-6">
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[83%] bg-gradient-to-r from-primary via-secondary to-secondary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <GlassCard key={i} className="p-5 hover:scale-[1.03] transition-transform">
                <TimelineBadge>Sem {s.week}</TimelineBadge>
                <h4 className="font-semibold mt-3 mb-1.5">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className="flex items-center gap-2 justify-end text-sm">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-accent font-medium">✓ Validação Etapa 2 — Fim da Semana 10</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const AutomationsSlide = () => {
  const flows = [
    {
      icon: ShoppingCart, title: 'Carrinho Abandonado', color: 'text-secondary',
      steps: [
        { time: 'Aguarda 2h', msg: '"Notamos que você deixou itens no carrinho..."' },
        { time: 'Aguarda 24h', msg: '"Oferta especial: 10% de desconto!"' },
      ],
    },
    {
      icon: CreditCard, title: 'Pagamento Aprovado', color: 'text-accent',
      steps: [
        { time: 'Imediato', msg: '"Confirmado! Pedido #XXX em processamento"' },
        { time: 'CRM', msg: 'Etiqueta atualizada → Cliente Ativo' },
      ],
    },
    {
      icon: XCircle, title: 'Pagamento Recusado', color: 'text-destructive',
      steps: [
        { time: 'Imediato', msg: '"Houve um problema. Vamos tentar novamente?"' },
        { time: 'Alternativa', msg: 'Oferece PIX com link direto' },
      ],
    },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Fluxos automatizados de e-commerce">Automações Detalhadas</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {flows.map((f, i) => (
            <GlassCard key={i} className="p-5">
              <div className="flex items-center gap-2 mb-5">
                <f.icon className={`w-5 h-5 ${f.color}`} />
                <h4 className="font-bold text-sm">{f.title}</h4>
              </div>
              <div className="space-y-3">
                {f.steps.map((s, j) => (
                  <div key={j} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                      {j < f.steps.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs font-medium text-primary">{s.time}</span>
                      <div className="mt-1 glass-strong rounded-xl px-3 py-2 text-xs text-muted-foreground flex items-start gap-2">
                        <MessageSquare className="w-3 h-3 mt-0.5 text-accent flex-shrink-0" />
                        {s.msg}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

export const Stage3Slide = () => {
  const items = [
    { title: 'Parser XML do ERP', desc: 'Importação automatizada de dados do ERP Matrix, validação e mapeamento de campos' },
    { title: 'Banco Supabase', desc: 'Estrutura relacional otimizada, índices, conexão segura com CRM' },
    { title: 'Enriquecimento Auto', desc: 'Processo executado pela AIOS — zero demanda interna para Matrix' },
    { title: 'Dashboards & BI', desc: 'Painéis em tempo real, insights de comportamento, relatórios personalizados' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Semanas 11–12 • Enriquecimento via ERP">Etapa 3 — Dados & Inteligência</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="w-full space-y-6">
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <GlassCard key={i} className="p-5 flex gap-4 items-start hover:scale-[1.02] transition-transform">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-4 border-accent/20 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-accent font-medium text-sm">Sistema em Produção — Fim da Semana 12</span>
            <ArrowRight className="w-4 h-4 text-accent ml-auto" />
            <span className="text-xs text-muted-foreground">Manutenção periódica contínua</span>
          </GlassCard>
        </div>
      </div>
    </SlideWrapper>
  );
};
