describe('CRUD a product', () => {
  const ENTITY_NAME = 'products';
  const postContent = {
    name: 'iPhone 15',
    description: 'iPhone 15',
    categoryId: '1',
  };

  const updateContent = {
    name: 'iPhone 14',
    description: 'iPhone 14',
    categoryId: '1',
  };

  let id1: number;

  it('Create a product', () => {
    cy.createEntity(ENTITY_NAME, postContent).then(($res) => {
      let { status, body } = $res;
      expect(status).to.eql(201, 'Verifying status code');
      let { id, name, description, categoryId } = body;
      id1 = Number(id);
      expect(name).to.eql(postContent.name, 'Verifying name of product');
      expect(description).to.eql(
        postContent.description,
        'Verifying description of product'
      );
      expect(categoryId).to.eql(
        postContent.categoryId,
        'Verifying categoryId of product'
      );
    });
  });

  it('Get product detail by id', () => {
    cy.getEntityDetail(ENTITY_NAME, id1).then(($res) => {
      let { status, body } = $res;
      expect(status).to.eql(200, 'Verifying status code');
      let { name, description, categoryId } = body;
      expect(name).to.eql(postContent.name, 'Verifying name of product');
      expect(description).to.eql(
        postContent.description,
        'Verifying description of product'
      );
      expect(categoryId).to.eql(
        postContent.categoryId,
        'Verifying categoryId of product'
      );
    });
  });

  it('Update a product', () => {
    cy.updateEntity(ENTITY_NAME, id1, updateContent).then(($res) => {
      let { status, body } = $res;
      expect(status).to.eql(200, 'Verifying status code');
      let { id, name, description, categoryId } = body;
      expect(id).to.eql(id1);
      expect(name).to.eql(updateContent.name, 'Verifying name of product');
      expect(description).to.eql(
        updateContent.description,
        'Verifying description of product'
      );
      expect(categoryId).to.eql(
        updateContent.categoryId,
        'Verifying categoryId of product'
      );
    });
  });

  it('Get product detail by id', () => {
    cy.deleteEntity(ENTITY_NAME, id1).then(($res) => {
      let { status, body } = $res;
      expect(status).to.eql(200, 'Verifying status code');
      expect(body).to.be.empty;
    });
  });
});
