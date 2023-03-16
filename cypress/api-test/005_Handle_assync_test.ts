describe('Handling async request in Cypress', () => {
  it('should be able wait until a request resolved', () => {
    let headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    let createBody = {
      title: 'Banh mi',
      body: 'Banh mi Viet Nam that la ngon',
      userId: 1,
    };

    let updateBody = {
      id: 2,
      title: 'foo',
      body: 'bar',
      userId: 2,
    };

    cy.request({
      url: '/posts',
      method: 'POST',
      headers: headers,
      body: createBody,
    }).then(($res) => {
      cy.log(JSON.stringify($res.body));
      let id = (Number($res.body.id) - 1).toString();
      cy.request({
        url: `/posts/${id}`,
        method: 'GET',
      }).then(($res) => {
        cy.log(JSON.stringify($res.body));
        cy.request({
          url: `/posts/${updateBody.id}`,
          headers: headers,
          method: 'PUT',
          body: updateBody,
        }).then(($res) => {
          cy.log(JSON.stringify($res.body));
          cy.request({
            url: '/posts/1',
            method: 'DELETE',
          }).then(($res) => {
            cy.log(JSON.stringify($res.body));
          });
        });
      });
    });
  });
});
