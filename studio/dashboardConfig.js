export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d560b39abbb4d5492048359',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qo5wvqp7',
                  apiId: 'bf345f96-5e6c-41f5-8d8f-5d2403af028c'
                },
                {
                  buildHookId: '5d560b3977381d6fb9aabef8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-exnpjk2z',
                  apiId: '78912aa9-833f-4feb-9d6f-299e96a2e50e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/admarble/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-exnpjk2z.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
