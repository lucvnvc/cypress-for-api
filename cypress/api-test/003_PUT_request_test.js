describe('Test PUT method request', () => {
  it('should be able to send a request with PUT method', () => {
    let url = '/posts/2';
    let headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    let requestBody = {
      id: 2,
      title: 'foo',
      body: 'bar',
      userId: 2,
    };

    let requestObject = {
      url: url,
      method: 'PUT',
      headers: headers,
      body: requestBody,
    };

    cy.request(requestObject).then(($response) => {
      let status = $response.status;
      let responseBody = $response.body;
      expect(status).to.eql(200, 'Status is not 200');
      let { id, title, body, userId } = responseBody;
      expect(title).to.eql(requestBody.title, 'Verifying title');
      expect(body).to.eql(requestBody.body, 'Verifying body');
      expect(userId).to.eql(requestBody.userId, 'Verifying userId');
      expect(id).to.eql(requestBody.id, 'Verifying id');
    });
  });
});
