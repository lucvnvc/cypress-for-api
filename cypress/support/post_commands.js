let headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

/**
 * @memberof cy
 * @method createPost
 * @param {Object} postBody
 */
Cypress.Commands.add('createPost', (postBody) => {
  cy.request({
    method: 'POST',
    url: '/posts',
    headers: headers,
    body: postBody,
  });
});

/**
 * @memberof cy
 * @method updatePost
 * @param {string} postId
 * @param {Object} updateBody
 */
Cypress.Commands.add('updatePost', (postId, updateBody) => {
  cy.request({
    method: 'PUT',
    url: `/posts/${postId}`,
    headers: headers,
    body: updateBody,
  });
});

/**
 * @memberof cy
 * @method getPost
 * @param {string} postId
 */
Cypress.Commands.add('getPost', (postId) => {
  cy.request({
    method: 'GET',
    url: `/posts/${postId}`,
  });
});

/**
 * @memberof cy
 * @method deletePost
 * @param {string} postId
 */
Cypress.Commands.add('deletePost', (postId) => {
  cy.request({
    method: 'DELETE',
    url: `/posts/${postId}`,
  });
});
