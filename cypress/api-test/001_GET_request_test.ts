describe('Test with GET request', () => {
  it('Create a post', () => {
    cy.request({
      url: '/posts',
      method: 'GET',
    }).then(($response) => {
      let { status, body } = $response;
      expect(status).to.equal(200);
      expect(body.length).to.equal(100);
    });
  });
});
