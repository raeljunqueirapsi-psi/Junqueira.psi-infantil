import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Lightbulb } from "lucide-react";

/**
 * Design System: Editorial Minimalista com Tipografia Forte
 * Paleta: Off-white bege (#F8F6F1), Verde menta (#A8D5BA), Cinza escuro (#2C2C2C)
 * Tipografia: Poppins (display/headings), Inter (body)
 * Filosofia: Profissionalismo com humanidade, espaço generoso, hierarquia clara
 */

export default function Home() {
  // WhatsApp e formulário configurados
  const whatsappLink = "https://wa.me/5514998804890?text=Olá%20Rafael,%20gostaria%20de%20agendar%20uma%20triagem";
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSe9a__nt02nsYDgota8MQAdorbjYwnrN_lFJMSgQYScUMzoTg/viewform?usp=sharing&ouid=105183272294207868106";

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663708373675/3awDf8JWJAjhJp9NEo8Fe4/hero-background-new-5yHzdn2DGsjfdd73avjzJd.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay para melhorar legibilidade */}
        <div className="absolute inset-0 bg-[#F8F6F1] opacity-20" />

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-[#2C2C2C] mb-6 leading-tight">
              Psicoterapia infantil e orientação para pais
            </h1>

            <p className="text-lg text-[#8B8B8B] mb-10 leading-relaxed max-w-xl mx-auto">
              Um espaço de escuta para compreender o comportamento, a linguagem emocional e o desenvolvimento da criança e do adolescente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#A8D5BA] hover:bg-[#8BC9A8] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-250 hover:scale-105"
                onClick={() => window.location.href = formLink}
              >
                Formulário de triagem
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#A8D5BA] text-[#A8D5BA] hover:bg-[#F0EDE8] font-semibold px-8 py-3 rounded-lg transition-all duration-250"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conhecer o atendimento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUANDO PROCURAR ATENDIMENTO ===== */}
      <section id="when" className="py-20 bg-[#F8F6F1]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[#2C2C2C] text-center mb-16">
              Quando a psicoterapia pode ajudar?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <Card className="p-6 border border-[#E8E3DE] bg-white hover:shadow-lg transition-all duration-250 rounded-lg">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-[#A8D5BA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#2C2C2C] font-semibold mb-2">
                      Dificuldades emocionais frequentes
                    </h3>
                    <p className="text-[#8B8B8B] text-sm">
                      Quando a criança apresenta tristeza, ansiedade ou dificuldades em lidar com emoções.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 2 */}
              <Card className="p-6 border border-[#E8E3DE] bg-white hover:shadow-lg transition-all duration-250 rounded-lg">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-[#A8D5BA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#2C2C2C] font-semibold mb-2">
                      Crises de choro, irritabilidade ou agressividade
                    </h3>
                    <p className="text-[#8B8B8B] text-sm">
                      Mudanças de humor intensas ou comportamentos agressivos sem causa aparente.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 3 */}
              <Card className="p-6 border border-[#E8E3DE] bg-white hover:shadow-lg transition-all duration-250 rounded-lg">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-[#A8D5BA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#2C2C2C] font-semibold mb-2">
                      Dificuldades na comunicação e expressão de sentimentos
                    </h3>
                    <p className="text-[#8B8B8B] text-sm">
                      Quando a criança tem dificuldade em expressar o que sente ou comunicar suas necessidades.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 4 */}
              <Card className="p-6 border border-[#E8E3DE] bg-white hover:shadow-lg transition-all duration-250 rounded-lg">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-[#A8D5BA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#2C2C2C] font-semibold mb-2">
                      Mudanças bruscas de comportamento
                    </h3>
                    <p className="text-[#8B8B8B] text-sm">
                      Alterações significativas no comportamento, isolamento ou regressão.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 5 */}
              <Card className="p-6 border border-[#E8E3DE] bg-white hover:shadow-lg transition-all duration-250 rounded-lg">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-[#A8D5BA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#2C2C2C] font-semibold mb-2">
                      Sofrimento relacionado à escola, família ou vínculos
                    </h3>
                    <p className="text-[#8B8B8B] text-sm">
                      Dificuldades em relacionamentos, desempenho escolar ou adaptação a mudanças.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 6 */}
              <Card className="p-6 border border-[#E8E3DE] bg-white hover:shadow-lg transition-all duration-250 rounded-lg">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-[#A8D5BA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#2C2C2C] font-semibold mb-2">
                      Necessidade de orientação parental
                    </h3>
                    <p className="text-[#8B8B8B] text-sm">
                      Quando os pais buscam compreender melhor o desenvolvimento e as necessidades da criança.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-white border border-[#E8E3DE] rounded-lg">
              <p className="text-[#8B8B8B] text-center text-sm">
                <strong>Nota importante:</strong> Não usamos linguagem alarmista. A psicoterapia infantil é um espaço de acolhimento e compreensão, onde cada criança e adolescente é visto em sua singularidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO EXPLICATIVA ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#2C2C2C] text-center mb-10">
              A criança não comunica apenas com palavras
            </h2>

            <div
              className="relative h-96 rounded-lg overflow-hidden mb-10"
              style={{
                backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663708373675/3awDf8JWJAjhJp9NEo8Fe4/emotional-landscape-new-JMtASSEvBWtdcdoG4quvZN.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <p className="text-lg text-[#8B8B8B] leading-relaxed mb-6">
              A infância se expressa por meio do brincar, do corpo, dos gestos, dos silêncios, dos vínculos e da linguagem que se constrói nas relações. A psicoterapia infantil oferece um espaço de escuta qualificada para compreender o que muitas vezes aparece como comportamento, mas carrega sofrimento, necessidade de mediação ou dificuldade de expressão.
            </p>

            <p className="text-base text-[#8B8B8B] leading-relaxed">
              Neste espaço, a criança e o adolescente encontram acolhimento, compreensão e ferramentas para expressar suas emoções e desenvolver-se de forma saudável.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[#2C2C2C] text-center mb-16">
              Como funciona o atendimento
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#A8D5BA] text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-[#2C2C2C] font-semibold mb-2">
                    Triagem inicial
                  </h3>
                  <p className="text-[#8B8B8B]">
                    Conversa inicial para compreender a demanda da família, conhecer a história e o contexto da criança ou adolescente.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-12 flex items-center justify-center">
                <div className="h-8 w-1 bg-gradient-to-b from-[#A8D5BA] to-transparent" />
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#A8D5BA] text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-[#2C2C2C] font-semibold mb-2">
                    Avaliação do caso
                  </h3>
                  <p className="text-[#8B8B8B]">
                    Escuta cuidadosa da história, do contexto e das necessidades da criança ou adolescente. Identificação de pontos de força e áreas de desenvolvimento.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-12 flex items-center justify-center">
                <div className="h-8 w-1 bg-gradient-to-b from-[#A8D5BA] to-transparent" />
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#A8D5BA] text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-[#2C2C2C] font-semibold mb-2">
                    Acompanhamento psicológico
                  </h3>
                  <p className="text-[#8B8B8B]">
                    Processo terapêutico com devolutivas e orientação aos responsáveis quando necessário. Acompanhamento contínuo do desenvolvimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOBRE O PROFISSIONAL ===== */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#2C2C2C] text-center mb-16">
              Sobre Rafael Junqueira
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagem */}
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663708373675/JkqOjeHIzgTZClJr.png"
                    alt="Rafael Junqueira - Psicólogo Infantil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Texto */}
              <div>
                <p className="text-lg text-[#8B8B8B] leading-relaxed mb-6">
                  Rafael Junqueira é psicólogo, com atuação voltada à infância, adolescência e orientação parental. Seu trabalho considera o desenvolvimento humano, os vínculos, a linguagem, a escuta clínica e os contextos sociais que atravessam a vida da criança e do adolescente.
                </p>

                <div className="bg-[#F8F6F1] p-6 rounded-lg border border-[#E8E3DE]">
                  <p className="text-[#2C2C2C] font-semibold mb-2">
                    Rafael Junqueira
                  </p>
                  <p className="text-[#8B8B8B] mb-1">
                    Psicólogo Infantil
                  </p>
                  <p className="text-[#A8D5BA] font-semibold">
                    CRP 06/206927
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-[#8B8B8B]">
                    <strong className="text-[#2C2C2C]">Atendimento:</strong> Online e presencial em Bauru/SP
                  </p>
                  <p className="text-[#8B8B8B]">
                    <strong className="text-[#2C2C2C]">Instagram:</strong>{" "}
                    <a href="https://instagram.com/psico.educa_junqueira" target="_blank" rel="noopener noreferrer" className="text-[#A8D5BA] hover:text-[#8BC9A8]">
                      @psico.educa_junqueira
                    </a>
                  </p>
                  <p className="text-[#8B8B8B]">
                    <strong className="text-[#2C2C2C]">E-mail:</strong>{" "}
                    <a href="mailto:rael.junqueirapsi@gmail.com" className="text-[#A8D5BA] hover:text-[#8BC9A8]">
                      rael.junqueirapsi@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[#2C2C2C] mb-6">
              Quer compreender melhor o que seu filho está tentando comunicar?
            </h2>

            <p className="text-lg text-[#8B8B8B] mb-10">
              Agende uma triagem inicial para avaliar a demanda e entender qual caminho de cuidado pode ser mais adequado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#A8D5BA] hover:bg-[#8BC9A8] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-250 hover:scale-105"
                onClick={() => window.location.href = formLink}
              >
                Formulário de triagem
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#A8D5BA] text-[#A8D5BA] hover:bg-[#F0EDE8] font-semibold px-8 py-3 rounded-lg transition-all duration-250"
                onClick={() => window.location.href = whatsappLink}
              >
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Rafael Junqueira</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Psicólogo — CRP 06/206927
                </p>
                <p className="text-sm text-gray-300">
                  Psicoterapia Infantil, Adolescentes e Orientação Parental
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Contato</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Instagram:{" "}
                  <a href="https://instagram.com/psico.educa_junqueira" target="_blank" rel="noopener noreferrer" className="text-[#A8D5BA] hover:text-white">
                    @psico.educa_junqueira
                  </a>
                </p>
                <p className="text-sm text-gray-300">
                  E-mail:{" "}
                  <a href="mailto:rael.junqueirapsi@gmail.com" className="text-[#A8D5BA] hover:text-white">
                    rael.junqueirapsi@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-xs text-gray-400 text-center">
                <strong>Aviso ético:</strong> Este site tem caráter informativo e não substitui avaliação psicológica individualizada.
              </p>
              <p className="text-xs text-gray-400 text-center mt-4">
                © {new Date().getFullYear()} Rafael Junqueira. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
