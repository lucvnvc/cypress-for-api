describe('CRUD a product with intercept', () => {
  // beforeEach(() => {
  //   cy.intercept('GET', 'http://localhost:3000/products', {
  //     fixture: 'interceptData.json',
  //   }).as('fakeData');
  //   cy.wait('@fakeData');
  // });
  const ENTITY_NAME = 'products';
  const postContent = {
    title: 'iPhone 15',
    description: 'iPhone 15',
    price: '100000',
  };

  const updateContent = {
    title: 'iPhone 14',
    description: 'iPhone 14',
    price: '20000',
  };

  let id1: number;

  it.only('Get all products', () => {
    cy.getAll(ENTITY_NAME).then(($res) => {
      cy.log(JSON.stringify($res.body));
    });
  });

  it('Create a product', () => {
    cy.createEntity(ENTITY_NAME, postContent).then(($res) => {
      let { status, body } = $res;
      expect(status).to.eql(201, 'Verifying status code');
      let { id, title, description, price } = body;
      id1 = Number(id);
      expect(title).to.eql(postContent.title, 'Verifying name of product');
      expect(description).to.eql(
        postContent.description,
        'Verifying description of product'
      );
      expect(price).to.eql(
        postContent.price,
        'Verifying categoryId of product'
      );
    });
  });

  it('Get product detail by id', () => {
    cy.getEntityDetail(ENTITY_NAME, id1).then(($res) => {
      let { status, body } = $res;
      expect(status).to.eql(200, 'Verifying status code');
      let { title, description, price } = body;
      expect(title).to.eql(postContent.title, 'Verifying name of product');
      expect(description).to.eql(
        postContent.description,
        'Verifying description of product'
      );
      expect(price).to.eql(
        postContent.price,
        'Verifying categoryId of product'
      );
    });
  });

  it('Update a product', () => {
    cy.updateEntity(ENTITY_NAME, id1, updateContent).then(($res) => {
      let { status, body } = $res;
      expect(status).to.eql(200, 'Verifying status code');
      let { id, title, description, price } = body;
      expect(id).to.eql(id1);
      expect(title).to.eql(updateContent.title, 'Verifying name of product');
      expect(description).to.eql(
        updateContent.description,
        'Verifying description of product'
      );
      expect(price).to.eql(
        updateContent.price,
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
