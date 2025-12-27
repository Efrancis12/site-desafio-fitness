"use client";

import { Flame, Zap, Target, Calendar, CheckCircle2, Download, Shield, Clock } from "lucide-react";

export default function Home() {
  const handleCTA = () => {
    // Link externo de pagamento (Eduzz/Hotmart/Kirvano)
    window.open("https://pay.hotmart.com/seu-link-aqui", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(234,88,12,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-8">
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Desafio de 7 Dias</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              7 dias que podem mudar sua relação com o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                seu corpo
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Treinos simples, em casa, para quem quer resultado real sem complicação
            </p>

            {/* CTA Principal */}
            <button
              onClick={handleCTA}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-lg px-8 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 mb-4"
            >
              <Zap className="w-6 h-6 group-hover:animate-pulse" />
              COMEÇAR MEU DESAFIO AGORA
            </button>

            <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Acesso imediato após confirmação do pagamento
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 sm:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              O que você vai conquistar
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Resultados reais, sem promessas milagrosas
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Flame,
                  title: "Queima de Gordura",
                  description: "Treinos eficientes para acelerar seu metabolismo"
                },
                {
                  icon: Zap,
                  title: "Mais Disposição",
                  description: "Sinta-se mais energizado no dia a dia"
                },
                {
                  icon: Target,
                  title: "Corpo Definido",
                  description: "Resultados visíveis em apenas 7 dias"
                },
                {
                  icon: Calendar,
                  title: "Disciplina",
                  description: "Crie o hábito de treinar regularmente"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Este desafio é para você que...
            </h2>
            <p className="text-slate-400 text-center mb-12">
              Sem julgamentos, sem pressão. Apenas resultados.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Está parado há tempo",
                  description: "E quer dar o primeiro passo sem medo"
                },
                {
                  title: "Não gosta de academia",
                  description: "Prefere treinar no conforto de casa"
                },
                {
                  title: "Quer começar sem pressão",
                  description: "Treinos simples e acessíveis para todos"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Recebe */}
      <section className="py-16 sm:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              O que está incluído no desafio
            </h2>
            <p className="text-slate-400 text-center mb-12">
              Tudo que você precisa para começar hoje mesmo
            </p>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 sm:p-12">
              <div className="space-y-6">
                {[
                  {
                    icon: Download,
                    title: "PDF Completo do Desafio 7 Dias",
                    description: "Material digital de alta qualidade, pronto para usar"
                  },
                  {
                    icon: Calendar,
                    title: "Rotina Diária de Treino",
                    description: "Cada dia com treino específico e progressivo"
                  },
                  {
                    icon: Target,
                    title: "Dicas Simples de Execução",
                    description: "Instruções claras para fazer os exercícios corretamente"
                  },
                  {
                    icon: Clock,
                    title: "Cronograma Fácil de Seguir",
                    description: "20 a 30 minutos por dia, sem equipamentos"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Desafio criado para pessoas reais
              </h2>
              <div className="space-y-4 text-slate-300 text-lg">
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  Método simples e direto
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  Sem complicação, sem enrolação
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  Resultados que você pode alcançar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Comece sua transformação hoje
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              7 dias para criar um novo hábito e ver resultados reais
            </p>

            <button
              onClick={handleCTA}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-lg px-8 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 mb-4"
            >
              <Zap className="w-6 h-6 group-hover:animate-pulse" />
              COMEÇAR MEU DESAFIO AGORA
            </button>

            <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Acesso imediato após confirmação do pagamento
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Shape Real</h3>
              <p className="text-slate-400">Desafio de Treino 7 Dias</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
              <p className="mb-2">
                © {new Date().getFullYear()} Shape Real. Todos os direitos reservados.
              </p>
              <p className="text-xs">
                Aviso: Os resultados podem variar de pessoa para pessoa. Este produto não substitui orientação médica ou nutricional profissional.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
