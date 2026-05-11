import github from '../assets/contato/GitHub.jpg'
import email from '../assets/contato/gmail.png'
import linkedin from '../assets/contato/linkedin.png'
import whatsapp from '../assets/contato/wpp.jpeg'
import cv from '../assets/cv.png'
import listme from '../assets/experiencia/listme.jpeg'
import phoenix from '../assets/experiencia/Phoenix.jpg'
import samba from '../assets/experiencia/samba.jpeg'
import todos from '../assets/experiencia/todos.jpeg'
import ufma from '../assets/experiencia/UFMA.jpg'
import unasus from '../assets/experiencia/unasus.png'
import usp from '../assets/experiencia/usp.png'
import ambev from '../assets/portifolio/ambev.png'
import rimasraras from '../assets/portifolio/rimasraras.png'
import vokaoImg from '../assets/portifolio/vokao.jpg'
import figma from '../assets/skills/figma.png'
import git from '../assets/skills/git.png'
import next from '../assets/skills/nextjs.png'
import radix from '../assets/skills/radix.png'
import reactjs from '../assets/skills/reactjs.png'
import tail from '../assets/skills/tailwind.png'
import ts from '../assets/skills/TS.png'
const zustand       = { src: '/skills/zustand.svg' }
const reactquery    = { src: '/skills/reactquery.svg' }
const shadcnui      = { src: '/skills/shadcnui.svg' }
const vite          = { src: '/skills/vite.svg' }
const turborepo     = { src: '/skills/turborepo.svg' }
const eslint        = { src: '/skills/eslint.svg' }
const prettier      = { src: '/skills/prettier.svg' }
const webpack       = { src: '/skills/webpack.svg' }
const vitest        = { src: '/skills/vitest.svg' }
const playwright    = { src: '/skills/playwright.svg' }
const vercelAi      = { src: '/skills/vercel-ai.svg' }
const vercel        = { src: '/skills/vercel.svg' }
const docker        = { src: '/skills/docker.svg' }
const githubactions = { src: '/skills/githubactions.svg' }

export const abas = [
  { title: 'Home', path: '' },
  { title: 'Skills', path: 'skills' },
  { title: 'Experiência', path: 'experiencia' },
  { title: 'Portfólio', path: 'portifolio' },
  { title: 'Contato', path: 'contato' },
  { title: 'Currículo', path: 'curriculo' }
]

export const content = {
  skills: [
    { type: 'skills', image: ts.src,              title: 'TypeScript',                  subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: reactjs.src,          title: 'React',                       subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: next.src,             title: 'Next.js 14+ (App Router, RSC)',subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: zustand.src,          title: 'Zustand',                     subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: reactquery.src,       title: 'React Query (TanStack)',       subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: tail.src,             title: 'Tailwind CSS',                subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: radix.src,            title: 'Radix UI',                    subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: shadcnui.src,         title: 'Shadcn/ui',                   subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: vite.src,             title: 'Vite',                        subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: turborepo.src,        title: 'Turborepo',                   subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: eslint.src,           title: 'ESLint',                      subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: prettier.src,         title: 'Prettier',                    subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: webpack.src,          title: 'Webpack',                     subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: vitest.src,           title: 'Vitest',                      subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: playwright.src,       title: 'Playwright (E2E)',             subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: vercelAi.src,         title: 'Vercel AI SDK',               subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: figma.src,            title: 'Figma',                       subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: git.src,              title: 'Git',                         subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: githubactions.src,    title: 'GitHub Actions (CI/CD)',       subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: vercel.src,           title: 'Vercel',                      subtitle: '', content: '', link: '', file: '' },
    { type: 'skills', image: docker.src,           title: 'Docker',                      subtitle: '', content: '', link: '', file: '' },
  ],
  experiencia: [
    {
      type: 'experiencia',
      image: ufma.src,
      title: 'Bacharelado Interdisciplinar em Ciência e Tecnologia',
      subtitle: 'Universidade Federal do Maranhão · 2015 – 2019',
      content: '',
      file: ''
    },
    {
      type: 'experiencia',
      image: todos.src,
      title: 'Todos Empreendimentos',
      subtitle: 'Front-End Sênior · Agosto 2024 – Atual',
      content:
        'Responsável por projetos críticos de segurança e performance de interfaces. Liderei a implementação de soluções que blindaram o front-end contra vulnerabilidades, entregando telas modernas e confiáveis com React e TypeScript.',
      file: ''
    },
    {
      type: 'experiencia',
      image: listme.src,
      title: 'ListMe',
      subtitle: 'Front-End Sênior · Setembro 2023 – Agosto 2024',
      content:
        'Em uma plataforma de catálogos integrada a múltiplos marketplaces, otimizei a performance da aplicação e implementei IA para automatizar o cadastro de produtos — reduzindo significativamente o tempo de catalogação.',
      file: ''
    },
    {
      type: 'experiencia',
      image: samba.src,
      title: 'Samba Digital',
      subtitle: 'Front-End Pleno · Dezembro 2021 – Setembro 2023',
      content:
        'Desenvolvi o front-end do VisitaAmbev — sistema de agendamento de visitas às cervejarias da Ambev com tour virtual 360°. Também atuei em projetos para SEBRAE, Ouro Fino, Houer e outros clientes da carteira.',
      file: ''
    },
    {
      type: 'experiencia',
      image: usp.src,
      title: 'USPX / USP',
      subtitle: 'Front-End · 2021',
      content:
        'Portal de notícias, cursos e webinários da USP desenvolvido em Next.js. Acessibilidade completa — alto contraste, navegação por teclado, ajuste de fontes — e suporte a três idiomas: português, espanhol e inglês.',
      file: ''
    },
    {
      type: 'experiencia',
      image: unasus.src,
      title: 'UNA-SUS / UFMA',
      subtitle: 'Front-End · 2020 – 2021',
      content:
        'Infográficos interativos em ReactJS para cursos de saúde, responsivos de smartphones a TVs. Fui responsável pelo template base e pela acessibilidade: leitor de tela, alto contraste e navegação por teclado.',
      file: ''
    },
    {
      type: 'experiencia',
      image: phoenix.src,
      title: 'Phoenix App',
      subtitle: 'Front-End · Outubro 2020 – Outubro 2021',
      content:
        'Aplicativo completo em React Native para escola de inglês: music player, leitor de livros com marcador de página, área de vídeos e gestão de contratos. Dashboard administrativo em ReactJS para gestão interna.',
      file: ''
    }
  ],
  portifolio: [
    {
      type: 'portifolio',
      image: vokaoImg.src,
      title: 'Vokao',
      subtitle: 'Plataforma de karaokê · Next.js · YouTube',
      content:
        'Plataforma web de karaokê integrada ao YouTube, permitindo cantar qualquer música de forma instantânea. Um projeto pessoal que une tecnologia e entretenimento musical.',
      link: 'https://vokao.com.br',
      file: ''
    },
    {
      type: 'portifolio',
      image: ambev.src,
      title: 'Visita Ambev',
      subtitle: 'Sistema de agendamento · Tour Virtual 360°',
      content:
        'Plataforma de agendamento de visitas às cervejarias da Ambev com tour virtual imersivo em 360°. Desenvolvido durante meu tempo na Samba Digital.',
      link: 'https://www.visitaambev.com.br/home',
      file: ''
    },
    {
      type: 'portifolio',
      image: phoenix.src,
      title: 'Phoenix App',
      subtitle: 'React Native · App educacional',
      content:
        'App de inglês com music player, leitor de livros, área de vídeos dos professores e sistema de gestão de contratos.',
      link: 'https://play.google.com/store/apps/details?id=com.phoenix.english.course',
      file: ''
    },
    {
      type: 'portifolio',
      image: rimasraras.src,
      title: 'Rimas Raras',
      subtitle: 'Projeto musical independente',
      content:
        'Plataforma musical com player, letras e um universo sonoro próprio. Um projeto pessoal que une música e tecnologia.',
      link: 'https://rimasraras.com.br/',
      file: ''
    }
  ],
  contato: [
    {
      type: 'contato',
      image: whatsapp.src,
      title: 'WhatsApp',
      subtitle: 'Respondo rápido',
      content: '',
      link: 'https://api.whatsapp.com/send?phone=5599984023182',
      file: ''
    },
    {
      type: 'contato',
      image: email.src,
      title: 'E-mail',
      subtitle: 'Para conversas mais formais',
      content: 'victor.maya42@gmail.com',
      link: 'mailto:victor.maya42@gmail.com',
      file: ''
    },
    {
      type: 'contato',
      image: linkedin.src,
      title: 'LinkedIn',
      subtitle: 'Histórico profissional completo',
      content: '',
      link: 'https://www.linkedin.com/in/victor-maya/',
      file: ''
    },
    {
      type: 'contato',
      image: github.src,
      title: 'GitHub',
      subtitle: 'Repositórios e projetos',
      content: '',
      link: 'https://github.com/victormaya',
      file: ''
    }
  ],
  curriculo: [
    {
      type: 'curriculo',
      image: cv.src,
      title: 'Currículo — Victor Maya',
      subtitle: 'Versão atualizada · PDF',
      content: 'Clique para baixar o currículo completo em PDF.',
      link: '/cv.pdf',
      file: 'CV - Victor Maya'
    }
  ]
}
