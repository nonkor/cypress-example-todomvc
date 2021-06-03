describe('HTTP requests', () => {
  beforeEach(function () {
    cy.visit('http://demo.realworld.io')
  })

  it('records articles', () => {
    cy.intercept({
      method: 'GET',
      url: '/api/articles',
      query: { limit: '10', offset: '0' }
    }).as('articles')
    
    cy.reload()    
    cy.wait('@articles').then((res) => {
      cy.writeFile('cypress/fixtures/articles.json', res.response.body)
    })
  })

  context('stubbing some network requests', () => {
    it('renders feed with articles and tags', () => {
      let tags = ['foo', 'bar']

      cy.intercept('GET', '/api/tags', { tags: tags }).as('tags')
      cy.intercept('GET', '/api/articles', {
        fixture: 'articles copy.json'
      }).as('articles')

      // cy.intercept('GET', '/api/articles', {
      //   "articles": [
      //     {
      //       "title": "Artigo 2",
      //       "slug": "artigo-2-fr2is0",
      //       "body": "Artigo 2 iniciado",
      //       "createdAt": "2021-05-27T20:54:04.100Z",
      //       "updatedAt": "2021-05-27T20:54:04.100Z",
      //       "tagList": [],
      //       "description": "Iniciando o segundo artigo",
      //       "author": {
      //         "username": "Thanos77",
      //         "bio": null,
      //         "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      //         "following": false
      //       },
      //       "favorited": false,
      //       "favoritesCount": 0
      //     }
      //   ]        
      // }).as('articles')          

      cy.reload()
      cy.wait(['@tags', '@articles'])

      cy.get('.article-preview')
      .should('have.length.at.least', 1)

      cy.get('.tag-list>a')
      .should('have.length', 2)
      .each((el, index) => {
        expect(el).to.contain(tags[index])
      })
    })
  })

  context('testing non-UI login', () => {
    it.only('allows me to log in by API', () => {
      cy.request('POST', 'https://conduit.productionready.io/api/users/login', {
        user: {
          email: "foo+test@bar.com",
          password:	"testtest"    
        }
      }).then((res) => { 
        let token = res.body.user.token
        localStorage.setItem('jwtToken', token)
      })
  
      cy.reload()
      cy.get('.nav-link[ui-sref^="app.profile.main"]').should('contain', 'foo+test@bar.com')
    })
  })
})

