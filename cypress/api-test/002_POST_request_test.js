describe('Test POST method request', () => {
  it('should be able send a request with POST method', () => {
    let url = '/posts';
    let headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    let requestBody = {
      title: 'Banh mi',
      body: 'Banh mi Viet Nam that la ngon',
      userId: 1,
    };

    let requestObject = {
      url: url,
      method: 'POST',
      headers: headers,
      body: requestBody,
    };

    cy.request(requestObject).then(($response) => {
      let { status, body } = $response;
      expect(status).to.eql(201, 'Status is not 201');
      let { title, userId } = body;
      let responseBody = body.body;
      expect(title).to.eql(requestBody.title, 'Title is not correct');
      expect(responseBody).to.eql(requestBody.body, 'Body is not correct');
      expect(userId).to.eql(requestBody.userId, 'UserId is not correct');
    });
  });
});
