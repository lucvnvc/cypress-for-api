declare namespace Cypress {
  interface Chainable {
    /**
     *
     * @param entity - makes an entity
     * @param payload - payload is an object
     */
    createEntity(entity: string, payload: object): Chainable<any>;

    /**
     *
     * @param entity
     * @param id
     * @param payload
     */
    updateEntity(entity: string, id: number, payload: object): Chainable<any>;

    /**
     *
     * @param entity
     */
    getAll(entity: string): Chainable<any>;

    /**
     *
     * @param entity
     * @param id
     */
    getEntityDetail(entity: string, id: number): Chainable<any>;

    /**
     *
     * @param entity
     * @param id
     */
    deleteEntity(entity: string, id: number): Chainable<any>;
  }
}

Cypress.Commands.add('createEntity', (entity, payload) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('serverUrl')}/${entity}`,
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: payload,
  });
});

Cypress.Commands.add('updateEntity', (entity, id, payload) => {
  cy.request({
    method: 'PUT',
    url: `${Cypress.env('serverUrl')}/${entity}/${id}`,
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: payload,
  });
});

Cypress.Commands.add('getAll', (entity) => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('serverUrl')}/${entity}`,
  });
});

Cypress.Commands.add('getEntityDetail', (entity, id) => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('serverUrl')}/${entity}/${id}`,
  });
});

Cypress.Commands.add('deleteEntity', (entity, id) => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('serverUrl')}/${entity}/${id}`,
  });
});
