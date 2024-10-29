import React from "react";

interface ScheduleItem {
  time: string;
  room1?: { theme: string; speaker: string };
  room2?: { theme?: string; speaker?: string };
  room3?: { theme?: string; speaker?: string };
}

const schedule: ScheduleItem[] = [
  { time: "09:20", room1: { theme: "Mitigação de Viéses Discriminatórios em Código", speaker: "Cíntia Esteves" }, room2: { theme: "Arquiteturas reativas com exemplos reais", speaker: "João Medina" }, room3: { theme: "-" } },
  { time: "10:00", room1: { theme: "Transição de Carreira", speaker: "Daniele Garcia de Castro Alves" }, room2: { theme: "Independência e Mocks: Como desenvolver e testar APIs sem depender de serviços reais.", speaker: "Camila Castro" }, room3: { theme: "-" } },
  { time: "10:40", room1: { theme: "Coffee Break", speaker: "" } },
  { time: "11:10", room1: { theme: "Gerenciamento de Defeitos e Métricas de Qualidade", speaker: "Emerson Pombo" }, room2: { theme: "Containers - O Microcosmos do Linux", speaker: "Paulo Cerqueira" }, room3: { theme: "Ganhe Dinheiro Programando para Si", speaker: "Igor Nascimento" } },
  { time: "11:50", room1: { theme: "Como conseguir seu primeiro estágio, e ser desejado pelo mercado", speaker: "Tiago Gouvêa" }, room2: { theme: "DuckDB - O Patinho no Lago de Dados", speaker: "Danilo Oliveira Santos" }, room3: { theme: "A importância da inovação e tecnóloga em uma empresa do setor de serviços – Case EasyDr", speaker: "Nathan Vasconcellos" } },
  { time: "12:30", room1: { theme: "Almoço", speaker: "" }, },
  { time: "14:00", room1: { theme: "ignite talks", speaker: "" } },
  { time: "14:20", room1: { theme: "Saúde Física e Mental: Vamos Recarregar Nossas Baterias", speaker: "Rafael Rocha Ribeiro" }, room2: { theme: "Analisando falhas de Segurança nas Aplicaçoes Web", speaker: "Brendo Freitas" }, room3: { theme: "O papel do Consultor no Mercado de Tecnologia", speaker: "Higor Silva Souza (Higor Souza) & Maykon Vieira" } },
  { time: "15:00", room1: { theme: "Construindo soluções para problemas que não existem - O ponto cego dos Devs", speaker: "Humberto Almeida" }, room2: { theme: "Criatividade, configure o seu ambiente", speaker: "Rafael Brasil" }, room3: { theme: "Modelagem Dimensional: O que tem no sangue das pessoas engenheiras de dados", speaker: "Fabrício Lima" } },
  { time: "15:40", room1: { theme: "Coffee Break", speaker: "" }},
  { time: "16:10", room1: { theme: "Ecossistemas Locais de Inovação: vetores de protótipos de futuros necessários e possíveis para o Brasil", speaker: "Arthur Avelar" }, room2: { theme: "Multi-Tenant com Multi-Database em Laravel", speaker: "Rafael Patrocinio Machado" }, room3: { theme: "" } },
  { time: "16:50", room1: { theme: "Open Space", speaker: "" } },
  { time: "18:00", room1: { theme: "Final", speaker: "" } },
];

const ScheduleTable: React.FC = () => {
  return (
    <div id="4" className="bg-black p-4 text-white">
      {/* Título Principal */}
      <div className="hidden md:block overflow-x-auto lg:max-w-7xl m-auto mb-32">
        {/* Tabela para telas grandes */}
        <table className="min-w-full border border-green-500">
          <thead>
            <tr className="bg-gray-800">
              <th colSpan={4} className="px-4 py-2 text-xl font-semibold border-b border-green-500 text-center">
                Programação
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2 border border-green-500">8:00</th>
              <td className="px-4 py-2 border border-green-500 font-semibold" colSpan={4}>
                Credenciamento
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 border border-green-500">9:00</th>
              <td className="px-4 py-2 border border-green-500 font-semibold" colSpan={4}>
                Abertura 
              </td>
            </tr>
          </thead>

          {/* Título das Salas */}
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 border border-green-500"></th>
              <th className="px-4 py-2 border border-green-500">Auditório - Cobal</th>
              <th className="px-4 py-2 border border-green-500">Sala - Fortran</th>
              <th className="px-4 py-2 border border-green-500">Sala - Assembly</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => {
              // Verifica se room2 e room3 estão ausentes
              const isRoom1Only = !item.room2 && !item.room3;

              return (
                <tr key={index} className={`${item.time === "12:30" || item.time === "10:40" || item.time === "15:40" ? "bg-gray-700" : "bg-black"}`}>
                  <td className="px-4 py-2 border border-green-500 font-semibold">{item.time}</td>
                  <td className="px-4 py-2 border border-green-500" colSpan={isRoom1Only ? 3 : 1}>
                    {item.room1 ? (
                      <>
                        <p className="font-bold">{item.room1.theme}</p>
                        {item.room1.speaker && <p className="text-gray-400">{item.room1.speaker}</p>}
                      </>
                    ) : (
                      <span className="text-white text-center">Almoço</span>
                    )}
                  </td>
                  {/* Renderiza room2 e room3 apenas se não for a linha de almoço ou se room1 não for a única sala */}
                  {!isRoom1Only && (
                    <>
                      <td className="px-4 py-2 border border-green-500">
                        {item.room2 ? (
                          <>
                            <p className="font-bold">{item.room2.theme}</p>
                            {item.room2.speaker && <p className="text-gray-400">{item.room2.speaker}</p>}
                          </>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-4 py-2 border border-green-500">
                        {item.room3 ? (
                          <>
                            <p className="font-bold">{item.room3.theme}</p>
                            {item.room3.speaker && <p className="text-gray-400">{item.room3.speaker}</p>}
                          </>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4 max-w-[92%] m-auto">
        {/* Versão em cards para mobile */}
        <h2 className="text-2xl font-bold mb-4">Programação</h2>
        <div className="p-4 border border-green-500 rounded-lg bg-gray-800 mb-4">
          <p className="text-lg font-semibold">08:00 - Credenciamento</p>
        </div>
        <div className="p-4 border border-green-500 rounded-lg bg-gray-800 mb-4">
          <p className="text-lg font-semibold">09:00 - Abertura</p>
        </div>
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`p-4 border border-green-500 rounded-lg space-y-2 ${
              item.time === "12:30" ? "bg-gray-600" : item.time === "10:40" || item.time === "15:40" ? "bg-gray-700" : "bg-gray-800"
            } mb-4`}
          >
            <p className="text-lg font-semibold">{item.time}</p>
            <div>
              { item.room1?.theme !== "Almoço" && item.room1?.theme !== "Coffee Break" && 
              <p className="font-extrabold">Auditório - Cobal</p>}
              <p className={` ${
              item.room1?.theme === "Almoço" && "bg-gray-600 font-bold"
            }`}>{item.room1?.theme}</p>
              {item.room1?.speaker && <p className="text-gray-400">{item.room1.speaker}</p>}
            </div>
            {item.room2 && item.room2?.theme !== '-' && (
              <div>
                <p className="font-extrabold">Sala - Fortran</p>
                <p className="">{item.room2.theme}</p>
                {item.room2.speaker && <p className="text-gray-400">{item.room2.speaker}</p>}
              </div>
            )}
            {item.room3 && item.room3?.theme !== '-' && (
              <div>
                <p className="font-extrabold">Sala - Assembly</p>
                <p className="">{item.room3.theme}</p>
                {item.room3.speaker && <p className="text-gray-400">{item.room3.speaker}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTable;
