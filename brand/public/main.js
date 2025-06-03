export default {
  defaultTheme: 'auto',
  showLightbox: true,
  iconLinks: [
    {
      icon: 'discord',
      href: 'https://aka.ms/documentdb_discord',
      title: 'Discord'
    },
    {
      icon: 'github',
      href: 'https://github.com/microsoft/documentdb',
      title: 'GitHub'
    }
  ],
  configureHljs: (hljs) => {
    hljs.registerAliases(["docdb", "documentdb"], {
      languageName: 'javascript'
    });
    hljs.registerAliases(["output"], {
      languageName: 'plaintext'
    });
    hljs.registerAliases(["output-json"], {
      languageName: 'json'
    });
  },
}