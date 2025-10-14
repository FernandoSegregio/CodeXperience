import React from "react";

import avatar from '@assets/patrocinadores/avatar-2.webp'

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
  { time: "11:50", room1: { theme: "Como conseguir seu primeiro estágio, e ser desejado pelo mercado", speaker: "Tiago Gouvêa" }, room2: { theme: "Workshop - DuckDB - O Patinho no Lago de Dados", speaker: "Danilo Oliveira Santos" }, room3: { theme: "A importância da inovação e tecnóloga em uma empresa do setor de serviços – Case EasyDr", speaker: "Nathan Vasconcellos" } },
  { time: "12:30", room1: { theme: "Almoço", speaker: "" }, },
  { time: "14:00", room1: { theme: "ignite talks", speaker: "" } },
  { time: "14:20", room1: { theme: "Saúde Física e Mental: Vamos Recarregar Nossas Baterias", speaker: "Rafael Rocha Ribeiro" }, room2: { theme: "Analisando falhas de Segurança nas Aplicaçoes Web", speaker: "Brendo Freitas" }, room3: { theme: "O papel do Consultor no Mercado de Tecnologia", speaker: "Higor Silva Souza (Higor Souza) & Maykon Vieira" } },
  { time: "15:00", room1: { theme: "Construindo soluções para problemas que não existem - O ponto cego dos Devs", speaker: "Humberto Almeida" }, room2: { theme: "Criatividade, configure o seu ambiente", speaker: "Rafael Brasil" }, room3: { theme: "Modelagem Dimensional: O que tem no sangue das pessoas engenheiras de dados", speaker: "Fabrício Lima" } },
  { time: "15:40", room1: { theme: "Coffee Break", speaker: "" } },
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
              <td className="px-4 py-2 border border-green-500 font-semibold flex flex-wrap" colSpan={4}>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 border border-green-500">18:00</th>
              <td className="px-4 py-2 border border-green-500 font-semibold flex flex-wrap" colSpan={4}>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
                <div>
                  <a href="#" className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                    <img
                      src={avatar}
                      srcSet={`${avatar} 50w, ${avatar} 25w`}
                      sizes="(max-width: 240px) 50px, 25px"
                      alt="logo UniAcademia patrocinador platina"
                      className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                    />
                  </a>
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;

