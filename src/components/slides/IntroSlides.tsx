import { ChevronRight, Shield, Zap, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { SlideWrapper, SlideTitle, GlassCard, useCountUp } from './SlideComponents';

// ─────────────────────────────────────────────
// SLIDE 1 — CAPA
// ─────────────────────────────────────────────
export const CoverSlide = ({ onNext }: { onNext?: () => void }) => (
  <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
    {/* Ambient glows */}
    <div
      className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[160px] animate-pulse-glow"
      style={{ background: 'rgba(201,168,76,0.07)' }}
    />
    <div
      className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-[130px] animate-pulse-glow"
      style={{ background: 'rgba(30,58,95,0.22)' }}
    />
    {/* Decorative rings */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/[0.03]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-white/[0.02]" />

    <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in">
      {/* Badge */}
      <div
        className="inline-flex items-center px-5 py-2 rounded-full mb-8 text-sm font-medium tracking-wider uppercase"
        style={{ background: 'rgba(201,168,76,0.09)', border: '1px solid rgba(201,168,76,0.28)', color: '#c9a84c' }}
      >
        Proposta Personalizada · Samir Advocacia
      </div>

      {/* Headline */}
      <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white mb-5 leading-[1.08]">
        Escale seu escritório<br />
        <span className="gradient-text">sem escalar sua equipe</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
        Um sistema de atendimento inteligente que qualifica 1.000 leads por mês, filtra as
        oportunidades de alto valor e entrega apenas o que importa para os seus consultores.
      </p>

      {/* Checkpoints */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
        {[
          'Atendimento 24h sem custo operacional adicional',
          'Filtragem automática de leads acima de R$ 1M',
          'CRM que se atualiza sozinho',
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={onNext}
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
        style={{ background: '#c9a84c', color: '#070b14', boxShadow: '0 0 32px rgba(201,168,76,0.32)' }}
      >
        Ver o diagnóstico
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// SLIDE 2 — O PROBLEMA
// ─────────────────────────────────────────────
export const ProblemSlide = () => {
  const leads = useCountUp(30);

  return (
    <SlideWrapper>
      <SlideTitle subtitle="É o volume atual. Um número que exige um processo — não uma pessoa.">
        1.000 leads por mês. Quantos estão sendo atendidos a tempo?
      </SlideTitle>

      <div className="flex-1 flex flex-col justify-center gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stat 1 */}
          <GlassCard
            className="text-center py-8 stagger-0"
            style={{ border: '1px solid rgba(201,168,76,0.2)' } as React.CSSProperties}
          >
            <div className="text-5xl font-bold font-serif mb-3" style={{ color: '#c9a84c' }}>
              {leads}
              <span className="text-2xl font-normal">/dia</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed px-2">
              É o volume chegando pelos formulários de tráfego pago. Um número que exige um
              processo — não uma pessoa.
            </p>
          </GlassCard>

          {/* Stat 2 */}
          <GlassCard className="text-center py-8 stagger-1">
            <div className="text-2xl font-bold font-serif text-white mb-3 leading-snug">
              Fora do horário<br />comercial
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed px-2">
              Leads de alto valor chegam à noite e no fim de semana. Sem resposta imediata,
              eles vão para o concorrente.
            </p>
          </GlassCard>

          {/* Stat 3 */}
          <GlassCard className="text-center py-8 stagger-2">
            <div className="text-2xl font-bold font-serif text-zinc-500 mb-3 leading-snug">
              Atualização<br />manual
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed px-2">
              A equipe perde horas movendo cards no Agendor e planilhas — tempo que deveria
              estar em atendimento qualificado.
            </p>
          </GlassCard>
        </div>

        {/* Closing phrase */}
        <div
          className="p-4 rounded-2xl text-center"
          style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.14)' }}
        >
          <p className="text-sm md:text-base text-zinc-300 italic">
            "O gargalo não é falta de leads. É falta de um sistema que os processe automaticamente."
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};

// ─────────────────────────────────────────────
// SLIDE 3 — O CUSTO DO MODELO ATUAL
// ─────────────────────────────────────────────
export const CostSlide = () => (
  <SlideWrapper>
    <SlideTitle subtitle="O que o modelo manual está custando ao escritório">
      O custo do modelo atual
    </SlideTitle>

    <div className="flex-1 flex flex-col justify-center gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Custo Visível */}
        <GlassCard className="p-6 stagger-0">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <span className="text-[10px] font-bold" style={{ color: '#c9a84c' }}>VIS</span>
            </div>
            <h3 className="font-serif font-semibold text-lg text-white">Custo Visível</h3>
          </div>
          <ul className="space-y-3">
            {[
              'Horas da equipe em tarefas administrativas (CRM manual, follow-up)',
              'Investimento em tráfego pago com conversão não rastreada com precisão',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#c9a84c' }} />
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* Custo Invisível */}
        <GlassCard
          className="p-6 stagger-1"
          style={{ border: '1px solid rgba(201,168,76,0.15)' } as React.CSSProperties}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(30,58,95,0.5)', border: '1px solid rgba(30,58,95,0.8)' }}
            >
              <AlertTriangle className="w-3.5 h-3.5" style={{ color: '#c9a84c' }} />
            </div>
            <h3 className="font-serif font-semibold text-lg text-white">Custo Invisível</h3>
          </div>
          <ul className="space-y-3">
            {[
              'Lead de R$ 1M+ que chegou às 23h e foi para o concorrente',
              'Consultor qualificado atendendo dívida de R$ 50k quando poderia estar fechando R$ 2M',
              'Decisões de tráfego baseadas em feeling, não em dados de conversão reais',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-destructive" />
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {/* Impact element */}
      <div
        className="p-5 rounded-2xl text-center stagger-2"
        style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.22)' }}
      >
        <p className="text-sm md:text-base text-white font-medium">
          Cada lead de alto valor perdido por falta de resposta pode representar{' '}
          <span style={{ color: '#c9a84c' }}>R$ 50k a R$ 200k em honorários não faturados.</span>
        </p>
      </div>
    </div>
  </SlideWrapper>
);

// ─────────────────────────────────────────────
// SLIDE 4 — ARQUITETURA DO SISTEMA
// ─────────────────────────────────────────────
const FlowNode = ({
  label,
  gold,
  small,
}: {
  label: string;
  gold?: boolean;
  small?: boolean;
}) => (
  <div
    className={`px-3 py-2 rounded-xl text-center ${small ? 'text-[11px]' : 'text-xs'} font-medium`}
    style={{
      background: gold ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.05)',
      border: gold ? '1px solid rgba(201,168,76,0.38)' : '1px solid rgba(255,255,255,0.09)',
      color: gold ? '#c9a84c' : 'rgba(255,255,255,0.85)',
    }}
  >
    {label}
  </div>
);

const FlowArrow = ({ gold }: { gold?: boolean }) => (
  <div className="flex flex-col items-center gap-0">
    <div className="w-px h-4" style={{ background: gold ? 'rgba(201,168,76,0.45)' : 'rgba(255,255,255,0.18)' }} />
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTop: `5px solid ${gold ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.2)'}`,
      }}
    />
  </div>
);

export const SolutionSlide = () => (
  <SlideWrapper>
    <SlideTitle subtitle="Um ecossistema que trabalha enquanto o escritório descansa">
      A solução: arquitetura do sistema
    </SlideTitle>

    <div className="flex-1 flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Flow diagram */}
        <div className="flex flex-col items-center gap-1 text-sm animate-fade-in">
          <FlowNode label="Meta / Instagram Ads" />
          <FlowArrow />
          <FlowNode label="Formulário de Lead" />
          <FlowArrow />
          <FlowNode label="AIOS — IA de Qualificação" gold />
          {/* Split */}
          <div className="flex items-start gap-6 mt-1">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono text-zinc-500">&lt; R$100k</span>
              <FlowArrow />
              <FlowNode label="Fluxo A — Automação total" small />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono" style={{ color: '#c9a84c' }}>&gt; R$1M</span>
              <FlowArrow gold />
              <FlowNode label="Fluxo B — IA + Alerta Consultor" small gold />
            </div>
          </div>
          <FlowArrow />
          <FlowNode label="CRM Invisível — atualização automática" />
          <FlowArrow />
          <FlowNode label="Resumo · Dashboard · Relatório" small />
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Shield, title: 'IA de Qualificação Dupla', desc: 'Dois comportamentos distintos por faixa de valor' },
            { icon: Zap, title: 'CRM Invisível', desc: 'Funil Kanban atualizado por gatilhos automáticos' },
            { icon: TrendingUp, title: 'Dados para Tráfego', desc: 'Conversão real alimenta otimização de campanhas' },
            { icon: Users, title: 'Multi-atendente', desc: 'Um número, vários consultores identificados' },
          ].map((p, i) => (
            <GlassCard
              key={i}
              className={`p-4 hover:scale-[1.03] transition-transform stagger-${i}`}
            >
              <p.icon className="w-5 h-5 mb-3" style={{ color: '#c9a84c' }} />
              <h4 className="font-semibold text-sm text-white mb-1">{p.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  </SlideWrapper>
);
