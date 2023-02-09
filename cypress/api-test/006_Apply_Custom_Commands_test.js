describe('Apply Custom Commands in Cypress', () => {
  it('should be able wait until a request resolved', () => {
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

    cy.createPost(createBody).then(($res) => {
      let id = (Number($res.body.id) - 1).toString();
      cy.getPost(id).then(($res) => {
        cy.updatePost(updateBody.id, updateBody).then(($res) => {
          cy.deletePost(updateBody.id).then(($res) => {
            cy.log(JSON.stringify($res.body));
            let { status, body } = $res;
            expect(status).to.eql(200, 'Verifying status code: ');
            expect(body).be.empty;
          });
        });
      });
    });
  });
});
