import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SlideWrapper, SlideTitle, GlassCard, useCountUp } from './SlideComponents';

// ─────────────────────────────────────────────
// SLIDE 9 — REATIVAÇÃO DE BASE
// ─────────────────────────────────────────────
const contacts = [
  { name: 'Carlos M.', value: 'R$ 180k', reactivate: true },
  { name: 'Patricia S.', value: 'R$ 2,1M', reactivate: true },
  { name: 'Rodrigo L.', value: 'R$ 450k', reactivate: true },
  { name: 'Marina C.', value: 'R$ 850k', reactivate: false },
];

export const ReactivationSlide = () => {
  const percent = useCountUp(12, 1200);

  return (
    <SlideWrapper>
      <SlideTitle subtitle="Você tem leads antigos que ainda podem virar contratos">
        Reativação de base
      </SlideTitle>

      <div className="flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact list */}
          <div className="space-y-2">
            <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
              Base histórica — leads não convertidos
            </div>
            {contacts.map((c, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 glass rounded-xl px-4 py-3 stagger-${i}`}
              >
                <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-zinc-400">{c.name[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{c.name}</div>
                  <div className="text-xs text-zinc-500">{c.value}</div>
                </div>
                {c.reactivate ? (
                  <div className="flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: '#c9a84c' }} />
                    <span className="text-xs font-medium" style={{ color: '#c9a84c' }}>
                      reativar
                    </span>
                  </div>
                ) : (
                  <span className="text-xs text-zinc-600">adormecido</span>
                )}
              </div>
            ))}
          </div>

          {/* Mechanics + metric */}
          <div className="space-y-4">
            <div className="space-y-2">
              {[
                'Base histórica do Agendor + planilhas importada para o AIOS',
                'Segmentação por faixa de valor e motivo de não-conversão',
                'Disparo segmentado via API com mensagem personalizada',
                'IA qualifica os que respondem e insere no funil ativo',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 glass rounded-xl px-4 py-3">
                  <div
                    className="text-[10px] font-mono mt-0.5 flex-shrink-0 font-bold"
                    style={{ color: '#c9a84c' }}
                  >
                    0{i + 1}
                  </div>
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Animated metric */}
            <div
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.22)',
              }}
            >
              <div
                className="text-5xl font-bold font-serif mb-1"
                style={{ color: '#c9a84c' }}
              >
                {percent}%
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                Entre 8% e 15% de uma base inativa responde positivamente a uma campanha
                de reativação bem estruturada.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

// ─────────────────────────────────────────────
// SLIDE 10 — INVESTIMENTO
// ─────────────────────────────────────────────
const includes = [
  'Toda a configuração por conta da equipe AIOS',
  'IA parametrizada para os dois fluxos',
  'Integração com Meta / Instagram Ads',
  'Migração do Agendor',
  'Multi-atendente configurado',
  'Treinamento da equipe incluído',
  'Suporte contínuo',
];

export const InvestmentSlide = () => (
  <div className="flex flex-col items-center justify-center h-full relative px-6 overflow-hidden">
    {/* Ambient glow */}
    <div
      className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full blur-[130px] animate-pulse-glow"
      style={{ background: 'rgba(201,168,76,0.06)' }}
    />

    <div className="w-full max-w-xl relative z-10">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-7 leading-tight">
        Uma estrutura completa<br />por um custo previsível
      </h2>

      {/* Main pricing card */}
      <div
        className="rounded-2xl p-7 mb-5 animate-scale-in"
        style={{
          background: 'rgba(10,16,30,0.85)',
          border: '1px solid rgba(201,168,76,0.42)',
          boxShadow: '0 0 70px rgba(201,168,76,0.07)',
        }}
      >
        {/* Title */}
        <div className="text-center mb-5">
          <div
            className="text-[11px] font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#c9a84c' }}
          >
            Implementação AIOS · Samir Advocacia
          </div>
        </div>

        {/* Prices */}
        <div
          className="flex items-end justify-center gap-8 py-5 border-y"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        >
          <div className="text-center">
            <div className="text-xs text-zinc-500 mb-1">Setup único (turn-key)</div>
            <div className="text-3xl font-bold font-serif text-white">R$ 4.000</div>
          </div>
          <div className="text-zinc-700 text-xl mb-1">+</div>
          <div className="text-center">
            <div className="text-xs text-zinc-500 mb-1">Mensalidade</div>
            <div className="text-3xl font-bold font-serif" style={{ color: '#c9a84c' }}>
              R$ 1.800
              <span className="text-base font-normal text-zinc-400">/mês</span>
            </div>
          </div>
        </div>

        {/* Includes */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-5">
          {includes.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
              <CheckCircle2
                className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                style={{ color: '#c9a84c' }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Supporting lines */}
      <div className="flex items-center justify-center gap-5 text-xs text-zinc-500 mb-4">
        <span>Modelo turn-key: entregamos tudo pronto para uso.</span>
        <span className="w-px h-3 bg-zinc-700 flex-shrink-0" />
        <span>Sem fidelidade no primeiro mês.</span>
      </div>

      <div className="text-center text-xs text-zinc-600 italic">
        O custo mensal equivale a menos de 1% do honorário de um único caso de R$ 1M+
        captado pelo sistema.
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// SLIDE 11 — PRÓXIMOS PASSOS
// ─────────────────────────────────────────────
const timeline = [
  { week: 'Semana 1', title: 'Onboarding', desc: 'Acesso à plataforma, criação do grupo operacional' },
  { week: 'Semana 2', title: 'IA parametrizada', desc: 'Dois fluxos configurados e testados internamente' },
  { week: 'Semana 3', title: 'Integração ativa', desc: 'Meta Ads conectado + migração do Agendor' },
  { week: 'Semana 4', title: 'Produção completa', desc: 'Time treinado, sistema operando' },
];

export const NextStepsSlide = () => (
  <SlideWrapper>
    <SlideTitle subtitle="Da assinatura ao primeiro lead qualificado automaticamente">
      Próximos passos
    </SlideTitle>

    <div className="flex-1 flex flex-col justify-center gap-6">
      {/* Timeline weeks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {timeline.map((step, i) => (
          <GlassCard
            key={i}
            className={`p-4 relative overflow-hidden stagger-${i} hover:scale-[1.03] transition-transform`}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'rgba(201,168,76,0.55)' }}
            />
            <div
              className="text-[10px] font-mono mb-2 font-semibold"
              style={{ color: '#c9a84c' }}
            >
              {step.week}
            </div>
            <div className="font-semibold text-sm text-white mb-1">{step.title}</div>
            <div className="text-xs text-zinc-400 leading-relaxed">{step.desc}</div>
          </GlassCard>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          className="px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:opacity-90"
          style={{
            background: '#c9a84c',
            color: '#070b14',
            boxShadow: '0 0 32px rgba(201,168,76,0.28)',
          }}
        >
          Quero avançar com a proposta
        </button>
        <button
          className="px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:bg-white/5"
          style={{ border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c' }}
        >
          Tenho uma dúvida
        </button>
      </div>

      {/* Footer */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-3 pt-4 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-3 text-xs text-zinc-500 flex-wrap justify-center">
          <span>Felipe · Murilo — Equipe AIOS</span>
          <span className="w-px h-3 bg-zinc-700" />
          <span
            className="px-3 py-1 rounded-full"
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.22)',
              color: '#c9a84c',
            }}
          >
            Proposta válida por 7 dias
          </span>
        </div>
        <p className="text-xs text-zinc-500 italic text-center">
          "O escritório Samir Advocacia já tem os leads. Agora é hora de ter o sistema que os converte."
        </p>
      </div>
    </div>
  </SlideWrapper>
);
