export default {
  openapi: '3.0.0',
  info: {
    title: 'TS-SKELETON',
    description: 'Estrutura base para projetos futuros',
    version: '1.0.0',
    contact: {
      name: 'Silvano Santana',
      email: 'silvano@svndev.com.br',
      url: 'https://www.svndev.com.br',
    },
  },
  servers: [
    {
      url: '/',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'Welcome',
      description: 'Página de boas vindas',
    },
  ],
  paths: {
    '/': {
      get: {
        tags: ['Welcome'],
        summary: 'Página de boas vindas',
        description: 'Essa rota mostra uma mensagem de boas vindas',
        responses: {
          200: {
            description: 'Sucesso',
          },
        },
      },
    },
  },
};
