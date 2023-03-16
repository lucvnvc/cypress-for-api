describe('Apply Custom Commands in Cypress with CRUD a POST', () => {
  const ENTITY_NAME = 'posts';
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

    cy.createEntity(ENTITY_NAME, createBody).then(($res) => {
      let id: number = $res.body.id;
      cy.getEntityDetail(ENTITY_NAME, Number($res.body.id) - 1).then(($res) => {
        cy.updateEntity(ENTITY_NAME, id, updateBody).then(($res) => {
          cy.deleteEntity(ENTITY_NAME, id).then(($res) => {
            cy.log(JSON.stringify($res.body));
            let { status, body } = $res;
            expect(status).to.eql(200, 'Verifying status code: ');
            expect(body).to.be.empty;
          });
        });
      });
    });
  });
});
