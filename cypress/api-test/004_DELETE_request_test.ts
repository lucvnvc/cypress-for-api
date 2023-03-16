describe('Test DELETE method request', () => {
  it('should be able send a reqeust with DELETE method', () => {
    // define
    let url = '/posts/1';
    // request
    cy.request({
      url: url,
      method: 'DELETE',
    }).then(($response) => {
      cy.log(JSON.stringify($response.body));
      expect($response.status).to.eql(200, 'Verifying status');
    });
  });
});
