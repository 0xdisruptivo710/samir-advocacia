import { Shield, Clock, Zap, FileText, TrendingUp, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { SlideWrapper, SlideTitle, GlassCard } from './SlideComponents';

// ─────────────────────────────────────────────
// SLIDE 5 — FLUXO A: LEADS ATÉ R$ 100K
// ─────────────────────────────────────────────
export const FluxoASlide = () => (
  <SlideWrapper>
    <SlideTitle subtitle="Automação total para o volume do dia a dia">
      Fluxo A: leads até R$ 100k
    </SlideTitle>

    <div className="flex-1 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Features list */}
        <div className="space-y-4">
          <p className="text-zinc-400 text-sm leading-relaxed">
            Para o volume do dia a dia, o sistema opera com autonomia completa. A IA qualifica,
            registra e acompanha — sem nenhuma intervenção humana.
          </p>
          <div className="space-y-3">
            {[
              { icon: Shield, text: 'Qualificação completa sem intervenção humana' },
              { icon: Clock, text: 'Follow-up automático em 24h, 48h e 7 dias' },
              { icon: FileText, text: 'Resumo da conversa gerado para o consultor revisar' },
              { icon: Zap, text: 'Card movido automaticamente no Kanban conforme evolução' },
            ].map((f, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 glass rounded-xl px-4 py-3 stagger-${i}`}
              >
                <f.icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#c9a84c' }} />
                <span className="text-sm text-zinc-300">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp mockup */}
        <div
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: '#0d1117',
            border: '1px solid rgba(255,255,255,0.09)',
            maxHeight: '330px',
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 flex-shrink-0"
            style={{ background: '#111827', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(201,168,76,0.15)' }}
            >
              <Shield className="w-4 h-4" style={{ color: '#c9a84c' }} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Samir Advocacia</div>
              <div className="text-xs" style={{ color: '#22c55e' }}>online agora</div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-2.5 flex-1 overflow-hidden">
            {/* Lead msg 1 */}
            <div className="flex justify-start msg-0">
              <div
                className="max-w-[80%] rounded-xl rounded-bl-sm px-3 py-2 text-[13px] leading-relaxed"
                style={{ background: '#27272a', color: '#d4d4d8' }}
              >
                Oi, tenho uma dívida no banco, quero saber se vocês podem me ajudar.
              </div>
            </div>

            {/* AI response 1 — coleta valor + tipo (qualificação) */}
            <div className="flex justify-end msg-1">
              <div
                className="max-w-[85%] rounded-xl rounded-br-sm px-3 py-2 text-[13px] leading-relaxed"
                style={{ background: '#1e3a5f', color: '#e2e8f0' }}
              >
                Olá! Seja bem-vindo ao escritório Samir Advocacia. Para iniciar sua
                qualificação, qual é o valor da dívida e o tipo — banco, cartão ou
                financiamento?
              </div>
            </div>

            {/* Lead msg 2 */}
            <div className="flex justify-start msg-2">
              <div
                className="max-w-[80%] rounded-xl rounded-bl-sm px-3 py-2 text-[13px] leading-relaxed"
                style={{ background: '#27272a', color: '#d4d4d8' }}
              >
                R$ 40 mil, cartão de crédito Bradesco
              </div>
            </div>

            {/* AI response 2 — confirma registro automático, sem mencionar consultor */}
            <div className="flex justify-end msg-3">
              <div
                className="max-w-[88%] rounded-xl rounded-br-sm px-3 py-2 text-[13px] leading-relaxed"
                style={{ background: '#1e3a5f', color: '#e2e8f0' }}
              >
                Caso registrado ✓ — R$ 40k, cartão Bradesco. Nossa análise já identificou
                alternativas de renegociação para o seu perfil. Vou enviar o resumo aqui
                nos próximos instantes. Pode confirmar seu nome completo?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// ─────────────────────────────────────────────
// SLIDE 6 — FLUXO B: LEADS ACIMA DE R$ 1M
// ─────────────────────────────────────────────
const events = [
  { time: '23:47', text: 'Lead preenche formulário', detail: '"Dívida corporativa de R$ 3,2M"', gold: false },
  { time: '23:47', text: 'IA detecta valor > R$ 1M — ativa Fluxo B', detail: 'Comportamento de alta prioridade ativado', gold: true },
  { time: '23:47', text: 'IA responde em segundos', detail: 'Atendimento imediato, cria vínculo, coleta dados', gold: true },
  { time: '23:47', text: 'Alerta interno + resumo gerado', detail: 'Consultor notificado com contexto completo', gold: true },
  { time: '08:01', text: 'Consultor chega e lê o resumo de 3 linhas', detail: 'Faz a ligação com contexto completo', gold: false },
  { time: '08:15', text: 'Lead ainda quente — reunião agendada', detail: '', gold: false },
];

export const FluxoBSlide = () => (
  <SlideWrapper>
    <SlideTitle subtitle="Alta prioridade merece atenção imediata — mesmo à meia-noite">
      Fluxo B: leads acima de R$ 1M
    </SlideTitle>

    <div className="flex-1 flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{ left: '56px', background: 'rgba(201,168,76,0.18)' }}
          />
          <div className="space-y-3">
            {events.map((e, i) => (
              <div key={i} className={`relative flex items-start gap-4 tl-${i}`}>
                {/* Time label */}
                <div className="w-[48px] text-right pt-0.5 flex-shrink-0">
                  <span
                    className="text-[11px] font-mono"
                    style={{ color: e.gold ? '#c9a84c' : 'rgba(255,255,255,0.35)' }}
                  >
                    {e.time}
                  </span>
                </div>
                {/* Dot */}
                <div className="relative flex items-center justify-center w-4 flex-shrink-0 mt-1 z-10">
                  <div
                    className="w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: e.gold ? '#c9a84c' : 'rgba(255,255,255,0.25)',
                      background: e.gold ? 'rgba(201,168,76,0.28)' : '#070b14',
                    }}
                  />
                </div>
                {/* Content */}
                <div className="flex-1 pb-0.5">
                  <div
                    className="text-sm font-medium"
                    style={{ color: e.gold ? '#c9a84c' : 'white' }}
                  >
                    {e.text}
                  </div>
                  {e.detail && (
                    <div className="text-xs text-zinc-500 mt-0.5">{e.detail}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact side */}
        <div className="flex flex-col justify-center gap-4">
          <div
            className="p-5 rounded-2xl"
            style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}
          >
            <h3 className="font-serif font-semibold text-white mb-3">Com o sistema</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              {[
                'Lead atendido imediatamente às 23:47',
                'Consultor chega preparado na manhã seguinte',
                'Reunião agendada às 08:15',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#c9a84c' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-4 rounded-2xl"
            style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.14)' }}
          >
            <p className="text-sm text-zinc-400 italic">
              Sem o sistema: o lead esperaria até segunda-feira e já teria falado com{' '}
              <span className="text-red-400 font-medium">dois concorrentes.</span>
            </p>
          </div>

          <div
            className="p-4 rounded-xl text-center"
            style={{ background: 'rgba(30,58,95,0.3)', border: '1px solid rgba(30,58,95,0.6)' }}
          >
            <p className="text-xs text-zinc-400">
              Casos como esse podem representar{' '}
              <span className="text-white font-semibold">R$ 100k a R$ 500k</span> em honorários.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// ─────────────────────────────────────────────
// SLIDE 7 — CRM INVISÍVEL
// ─────────────────────────────────────────────
const kanbanColumns = [
  { title: 'Novo Lead', count: 8, color: '#c9a84c' },
  { title: 'Em Qualificação', count: 5, color: '#1e3a5f' },
  { title: 'Aguardando Consultor', count: 3, color: '#7c3aed' },
  { title: 'Em Negociação', count: 4, color: '#2563eb' },
  { title: 'Fechado', count: 2, color: '#16a34a' },
];

export const CRMSlide = () => (
  <SlideWrapper>
    <SlideTitle subtitle="Seu funil se atualiza. Sua equipe só fecha negócios.">
      CRM invisível
    </SlideTitle>

    <div className="flex-1 flex flex-col justify-center gap-6">
      {/* Kanban visual */}
      <div className="overflow-x-auto pb-2 -mx-2 px-2">
        <div className="flex gap-3 min-w-max">
          {kanbanColumns.map((col, i) => (
            <div key={i} className={`w-40 flex-shrink-0 stagger-${i}`}>
              {/* Column header */}
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] font-semibold text-zinc-400">{col.title}</span>
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                  style={{ background: `${col.color}22`, color: col.color }}
                >
                  {col.count}
                </span>
              </div>
              {/* Cards */}
              <div className="space-y-2">
                {Array.from({ length: Math.min(col.count, 3) }).map((_, j) => (
                  <div
                    key={j}
                    className="h-14 rounded-xl glass p-2.5 flex flex-col justify-between"
                    style={{ borderLeft: `3px solid ${col.color}55` }}
                  >
                    <div className="h-2 rounded-sm bg-white/10 w-3/4" />
                    <div className="flex items-center justify-between">
                      <div className="h-1.5 rounded-sm bg-white/5 w-1/2" />
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: `${col.color}66` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: 'Gatilhos automáticos', desc: 'IA lê a conversa e move o card sem ação humana' },
          { label: 'VGV em tempo real', desc: 'Valor total em cada etapa do funil visível no dashboard' },
          { label: 'Performance por horário', desc: 'Relatório mostra quando seus leads convertem mais' },
        ].map((f, i) => (
          <div key={i} className="glass rounded-xl px-4 py-3">
            <div className="text-sm font-semibold mb-1" style={{ color: '#c9a84c' }}>{f.label}</div>
            <div className="text-xs text-zinc-400">{f.desc}</div>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-zinc-500 italic">
        "Chega de atualização manual. O CRM trabalha; a equipe fecha."
      </div>
    </div>
  </SlideWrapper>
);

// ─────────────────────────────────────────────
// SLIDE 8 — DADOS QUE OTIMIZAM O TRÁFEGO
// ─────────────────────────────────────────────
export const TrafficDataSlide = () => (
  <SlideWrapper>
    <SlideTitle subtitle="Seus anúncios vão melhorar porque você vai saber o que realmente converte">
      Dados que otimizam o tráfego
    </SlideTitle>

    <div className="flex-1 flex items-center">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* Antes */}
          <GlassCard className="p-6 stagger-0">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              Antes
            </div>
            <ul className="space-y-3">
              {[
                'Decisão baseada em CPL (custo por lead)',
                'Não sabe quais criativos geram leads de alto valor',
                'Budget alocado por intuição',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <XCircle className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Connector arrow */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-2 px-2">
            <div
              className="w-8 h-px md:w-px md:h-8"
              style={{ background: 'rgba(201,168,76,0.35)' }}
            />
            <div
              className="p-2 rounded-full"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              <TrendingUp className="w-5 h-5" style={{ color: '#c9a84c' }} />
            </div>
            <div
              className="w-8 h-px md:w-px md:h-8"
              style={{ background: 'rgba(201,168,76,0.35)' }}
            />
          </div>

          {/* Depois */}
          <GlassCard
            className="p-6 stagger-1"
            style={{ border: '1px solid rgba(201,168,76,0.2)' } as React.CSSProperties}
          >
            <div
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#c9a84c' }}
            >
              Depois
            </div>
            <ul className="space-y-3">
              {[
                'Decisão baseada em custo por lead qualificado',
                'Sabe exatamente quais campanhas trazem dívidas acima de R$ 1M',
                'Budget alocado com base em dados reais de conversão',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#c9a84c' }} />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Closing phrase */}
        <div
          className="mt-6 p-4 rounded-2xl text-center stagger-2"
          style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.14)' }}
        >
          <p className="text-sm text-zinc-300">
            O AIOS fecha o loop entre o{' '}
            <span style={{ color: '#c9a84c' }}>anúncio</span> e o{' '}
            <span style={{ color: '#c9a84c' }}>contrato assinado.</span>
          </p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);
