export interface GalleryItem {
  id: string;
  title: string;
  category: 'caixas' | 'topos' | 'lembrancinhas' | 'luxo';
  tag: string;
  description: string;
  pieces: string;
  accentColor: string;
  gradient: string;
  imageUrl?: string;
  fallbackUrl?: string;
  linkUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  time: string;
  messageText: string;
  photoUrl?: string;
  photoCaption?: string;
  audioDuration?: string;
  audioTime?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Kit Safari Baby de Luxo',
    category: 'caixas',
    tag: 'Mais Vendido',
    description: 'Caixas Milk, Pirâmide e Cone com apliques 3D e corte simples na tesoura.',
    pieces: '5 modelos inclusos',
    accentColor: '#10b981',
    gradient: 'from-amber-100 to-emerald-100',
    imageUrl: '/assets/safari-baby.png',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/YrR8Btt/Captura-de-tela-2026-09-15-162727.png',
    linkUrl: 'https://ibb.co/ZZLKzhh',
  },
  {
    id: '2',
    title: 'Topo de Bolo Jardim Encantado',
    category: 'topos',
    tag: 'Pronto para Imprimir',
    description: 'Camadas florais delicadas, borboletas em 3D e faixas para nome editáveis.',
    pieces: 'Alta Resolução 300DPI',
    accentColor: '#ec4899',
    gradient: 'from-pink-100 to-rose-100',
    imageUrl: '/assets/jardim-encantado.png',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/FkTFxx5s/Captura-de-tela-2026-09-15-162856.png',
    linkUrl: 'https://ibb.co/JWJ9BBvx',
  },
  {
    id: '3',
    title: 'Kit Princesas & Castelo Real',
    category: 'caixas',
    tag: 'Festa Menina',
    description: 'Caixa Meia Bala, Sushi e Carruagem com detalhes dourados pré-renderizados.',
    pieces: 'Formatos PDF e Studio',
    accentColor: '#8b5cf6',
    gradient: 'from-purple-100 to-indigo-100',
  },
  {
    id: '4',
    title: 'Kit Dino Park Aventura',
    category: 'lembrancinhas',
    tag: 'Festa Menino',
    description: 'Lembrancinhas interativas com dentes e texturas, fácil de vincar e colar.',
    pieces: 'Montagem em 5 min',
    accentColor: '#f59e0b',
    gradient: 'from-orange-100 to-amber-100',
  },
  {
    id: '5',
    title: 'Batizado Anjinho Dourado',
    category: 'luxo',
    tag: 'Ocasiões Especiais',
    description: 'Linha clean e minimalista para batizados, primeira comunhão e crisma.',
    pieces: 'Papel Offset ou Opaline',
    accentColor: '#6366f1',
    gradient: 'from-sky-100 to-blue-100',
  },
  {
    id: '6',
    title: 'Topo de Bolo Astronauta Cósmico',
    category: 'topos',
    tag: 'Em Alta',
    description: 'Planetas com efeito holográfico simulado e foguete com encaixe para canudo.',
    pieces: 'Pronto em Folha A4',
    accentColor: '#3b82f6',
    gradient: 'from-cyan-100 to-blue-100',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Souza',
    role: 'Confeiteira & Papeleira',
    city: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    time: '14:22',
    messageText: 'Gente do céu, eu precisava passar aqui pra agradecer! Peguei uma encomenda de última hora de 40 caixinhas milk do Safari. Achei o molde pronto em menos de 2 minutos no drive, imprimi na minha Epson L3250 e ficou perfeito! Minha cliente amou e já indicou pra irmã dela. Esse pack valeu cada centavo!',
    photoCaption: 'Foto enviada pela cliente: 40 caixinhas prontas para entrega.',
  },
  {
    id: '2',
    name: 'Fernanda Rocha',
    role: 'Mãe do Lucas (4 anos)',
    city: 'Campinas - SP',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    time: '16:08',
    messageText: 'Oi equipe do Mundo dos Moldes! Passei um orçamento na papelaria do shopping e cobraram R$ 520,00 só no kit festa. Comprei o pack de vocês por R$ 29, comprei papel fotográfico 180g e fiz TUDO em casa com minha tesoura. Economizei quase R$ 450 reais! Olhem a foto como ficou lindo:',
    photoCaption: 'Mesa do aniversário montada pela mamãe.',
  },
  {
    id: '3',
    name: 'Juliana Mendes',
    role: 'Iniciante no Artesanato',
    city: 'Curitiba - PR',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    time: '19:45',
    audioDuration: '0:38',
    audioTime: '19:46',
    messageText: 'Ouvi falar do pack e comprei com receio porque não sei mexer no Corel nem no Silhouette Studio. Mas os arquivos em PDF já vêm com as linhas pontilhadas de dobra! Não precisei instalar nada, só cliquei em imprimir e cortei na régua. Já estou fazendo encomendas pras amigas do trabalho!',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como recebo o material após a compra?',
    answer: 'O envio é 100% automático e imediato! Assim que o seu pagamento for aprovado (no cartão ou no PIX é na mesma hora), você recebe um e-mail com o link de acesso exclusivo para a área de membros no Google Drive. Você poderá baixar imediatamente no seu celular, tablet ou computador.',
  },
  {
    question: 'Preciso ter uma impressora profissional?',
    answer: 'Não! Todos os moldes foram projetados para serem impressos em folhas de tamanho comum (A4) em qualquer impressora caseira a jato de tinta ou laser (Epson, HP, Canon, Brother, etc.). Basta usar papéis com gramatura entre 180g e 240g (Offset, Fotográfico Matte ou Glossy) para um acabamento perfeito e firme.',
  },
  {
    question: 'Em quais formatos vêm os arquivos?',
    answer: 'Você recebe em 2 formatos completos: 1) Arquivos em PDF de alta resolução (300 DPI), prontos para imprimir e cortar na tesoura/estilete; 2) Arquivos em formato .STUDIO (editáveis no programa gratuito Silhouette Studio), ideais para quem já tem ou deseja usar máquina de corte.',
  },
  {
    question: 'Eu não tenho máquina de corte (Silhouette), consigo fazer?',
    answer: 'Sim, com certeza! Mais de 80% das nossas alunas e clientes usam apenas tesoura comum, régua e estilete. Os arquivos possuem linhas de corte contínuas e linhas pontilhadas de dobra, tornando o corte e a montagem muito simples e rápidos.',
  },
  {
    question: 'Por quanto tempo terei acesso aos moldes?',
    answer: 'O seu acesso é VITALÍCIO! Não há mensalidades, taxas ocultas ou limites de download. Uma vez adquirido, o acervo é seu para sempre, incluindo todas as atualizações e novos temas que forem adicionados.',
  },
  {
    question: 'Como funciona a garantia incondicional de 7 dias?',
    answer: 'Confiamos tanto na qualidade impecável dos nossos +1000 moldes que oferecemos risco zero: se por qualquer motivo você achar que o material não supriu suas expectativas, basta enviar um único e-mail ou mensagem no suporte dentro de 7 dias e devolveremos 100% do seu dinheiro, sem perguntas nem burocracia.',
  },
];
