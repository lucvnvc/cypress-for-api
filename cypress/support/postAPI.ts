let headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

declare namespace Cypress {
  interface Chainable {
    /**
     * @memberof cy
     * @method createPost
     * @param {Object} postBody
     */
    createPost(body: object): Chainable<any>;

    /**
     * @memberof cy
     * @method updatePost
     * @param {string} postId
     * @param {Object} updateBody
     */
    updatePost(postId: number, updateBody: object): Chainable<any>;

    /**
     * @memberof cy
     * @method getPost
     * @param {string} postId
     */
    getPost(postId: number): Chainable<any>;

    /**
     * @memberof cy
     * @method deletePost
     * @param {string} postId
     */
    deletePost(postId: number): Chainable<any>;
  }
}

Cypress.Commands.add('createPost', (postBody) => {
  cy.request({
    method: 'POST',
    url: '/posts',
    headers: headers,
    body: postBody,
  });
});

Cypress.Commands.add('updatePost', (postId, updateBody) => {
  cy.request({
    method: 'PUT',
    url: `/posts/${postId}`,
    headers: headers,
    body: updateBody,
  });
});

Cypress.Commands.add('getPost', (postId) => {
  cy.request({
    method: 'GET',
    url: `/posts/${postId}`,
  });
});

Cypress.Commands.add('deletePost', (postId) => {
  cy.request({
    method: 'DELETE',
    url: `/posts/${postId}`,
  });
});
