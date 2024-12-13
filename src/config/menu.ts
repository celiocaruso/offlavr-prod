import { MenuItem } from '@/types/menu';

export const menuItems: MenuItem[] = [
  {
    title: 'Suprimentos',
    items: [
      { title: 'Insumos', path: '/suprimentos/insumos' },
      { title: 'Compras', path: '/suprimentos/compras' },
      { title: 'Estoque', path: '/suprimentos/estoque' },
    ],
  },
  {
    title: 'Produtos',
    items: [
      { title: 'Produtos', path: '/produtos/lista' },
      { title: 'Rotulagem', path: '/produtos/rotulagem' },
    ],
  },
  {
    title: 'Produção',
    items: [
      { title: 'Programação', path: '/producao/programacao' },
      { title: 'Produzido', path: '/producao/produzido' },
    ],
  },
  {
    title: 'Vendas',
    path: '/vendas',
  },
  {
    title: 'Finanças',
    path: '/financas',
  },
  {
    title: 'Pessoas',
    path: '/pessoas',
  },
  {
    title: 'Configurações',
    path: '/configuracoes',
  },
  {
    title: 'Sair',
    path: '/logout',
  },
];