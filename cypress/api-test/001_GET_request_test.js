describe('Test with GET', () => {
  it('ABC', () => {
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
