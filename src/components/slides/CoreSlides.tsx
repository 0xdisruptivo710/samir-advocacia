import { SlideWrapper, SlideTitle, GlassCard, TimelineBadge } from './SlideComponents';
import { Bot, BarChart3, Tag, Users, Phone, RefreshCw, TrendingUp, ShoppingCart, CreditCard, XCircle, ArrowRight, MessageSquare } from 'lucide-react';

export const Stage1DeliverablesSlide = () => {
  const deliverables = [
    { icon: Bot, title: 'IA Conversacional', desc: 'Atendimento 24/7 com qualificação automática', metric: '−70% tempo resposta' },
    { icon: BarChart3, title: 'Painel Kanban', desc: 'Visualização completa do pipeline de vendas', metric: 'Gestão visual' },
    { icon: Tag, title: 'Etiquetagem Inteligente', desc: 'Classificação automática por estágio', metric: 'Auto-organização' },
    { icon: TrendingUp, title: 'Follow-ups Automáticos', desc: 'Sequências programadas de reengajamento', metric: '+Conversão' },
    { icon: Users, title: 'Hierarquia de Usuários', desc: 'Gestão de permissões e acessos', metric: 'Controle total' },
    { icon: Phone, title: '3 Números WhatsApp', desc: 'Separação por canal e vertical', metric: 'Rastreabilidade' },
    { icon: RefreshCw, title: 'Distribuição de Leads', desc: 'Roteamento automático inteligente', metric: 'Equidade' },
    { icon: MessageSquare, title: 'Disparo em Massa', desc: 'Envio estratégico para listagens segmentadas', metric: 'Alcance máximo' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Entregas da Etapa 1 — CRM Inteligente">Entregas Detalhadas</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {deliverables.map((d, i) => (
            <GlassCard key={i} className="p-4 hover:scale-[1.03] transition-transform">
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
    { week: '5', title: 'Apresentação da Estrutura', desc: 'Arquitetura de integração, fluxos Auryn ↔ CRM, aprovação técnica' },
    { week: '6–7', title: 'Desenvolvimento', desc: 'Conexão CRM ↔ Auryn, webhooks de status, automações por evento' },
    { week: '8–9', title: 'Dashboard de Vendas', desc: 'Métricas em tempo real, conversão, abandono, ticket médio' },
    { week: '10', title: 'Validação', desc: 'Testes ponta a ponta, simulações, ajustes finais, aprovação' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Semanas 5–10 • Integração E-commerce">Etapa 2 — E-commerce</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="w-full space-y-6">
          {/* Flowchart style */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary to-accent" />
            
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="relative flex items-start gap-5 pl-14">
                  <div className="absolute left-4 top-3 w-5 h-5 rounded-full border-2 border-secondary bg-background flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  
                  <GlassCard className="p-4 flex-1 hover:scale-[1.01] transition-transform">
                    <div className="flex items-center gap-3 mb-1">
                      <TimelineBadge>Sem {s.week}</TimelineBadge>
                      <h4 className="font-semibold text-sm">{s.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </GlassCard>

                  {/* Arrow connector to next */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-6 -bottom-2 transform -translate-x-1/2">
                      <ArrowRight className="w-3 h-3 text-secondary rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
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
    { week: '11', title: 'Parser XML do ERP', desc: 'Importação automatizada de dados do ERP Matrix, validação e mapeamento de campos' },
    { week: '12–13', title: 'Banco Supabase', desc: 'Estrutura relacional otimizada, índices, conexão segura com CRM' },
    { week: '14', title: 'Enriquecimento Auto', desc: 'Processo executado pela AIOS — zero demanda interna para Matrix' },
    { week: '15–16', title: 'Dashboards', desc: 'Painéis em tempo real, insights de comportamento, relatórios personalizados' },
  ];

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Semanas 11–16 • Enriquecimento via ERP">Etapa 3 — Dados & Inteligência</SlideTitle>
      <div className="flex-1 flex items-center">
        <div className="w-full space-y-6">
          {/* Flowchart style */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-primary" />
            
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="relative flex items-start gap-5 pl-14">
                  <div className="absolute left-4 top-3 w-5 h-5 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  
                  <GlassCard className="p-4 flex-1 hover:scale-[1.01] transition-transform">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-flex px-2.5 py-0.5 rounded-md text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                        Sem {item.week}
                      </span>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          <GlassCard className="p-4 border-accent/20 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-accent font-medium text-sm">Sistema em Produção — Fim da Semana 16</span>
            <ArrowRight className="w-4 h-4 text-accent ml-auto" />
            <span className="text-xs text-muted-foreground">Manutenção periódica contínua</span>
          </GlassCard>
        </div>
      </div>
    </SlideWrapper>
  );
};
