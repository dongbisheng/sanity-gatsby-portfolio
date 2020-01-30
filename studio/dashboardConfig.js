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
                  buildHookId: '5e32ccea91ca4111211b2b50',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8x9dxky7',
                  apiId: 'b7ff2d5a-9ca9-459e-87da-11c93a50aa32'
                },
                {
                  buildHookId: '5e32ccea5623e74ebeac9bfa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-96gxbixt',
                  apiId: 'bb8b4f90-729a-4889-a805-0a3f85f6a596'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dongbisheng/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-96gxbixt.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
