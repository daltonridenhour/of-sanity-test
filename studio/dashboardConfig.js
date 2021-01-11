export default {
  widgets: [
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
                  buildHookId: '5ffc62522b73fc360e9165d2',
                  title: 'Sanity Studio',
                  name: 'of-sanity-test-studio',
                  apiId: '9872451f-348f-45b0-9ebe-28bbe99cec13'
                },
                {
                  buildHookId: '5ffc62521e180937f840edea',
                  title: 'Blog Website',
                  name: 'of-sanity-test',
                  apiId: '9c7191ab-8902-43fa-9e1b-7c53a517f39a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/daltonridenhour/of-sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://of-sanity-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
