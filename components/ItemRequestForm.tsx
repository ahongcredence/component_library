// ItemRequestForm.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faHome, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';

const ItemRequestForm = () => {
  // State for form values
  const [formState, setFormState] = useState({
    requestNumber: '7930016080485',
    requesterType: 'EA',
    catalogType: 'EA',
    stockExistsInStore: 'Yes',
    stockBeingReplaced: 'No',
    replacedStock: '',
    customerPOC: '',
    pocEmail: '',
    installationName: '',
    pocPhone: '',
    extension: '',
    pocDSN: '',
    intCallPrefix: '',
    originatingOrderingPoint: 'FT9139'
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  // Handle radio button changes
  interface FormState {
    requestNumber: string;
    requesterType: string;
    catalogType: string;
    stockExistsInStore: 'Yes' | 'No';
    stockBeingReplaced: 'Yes' | 'No';
    replacedStock: string;
    customerPOC: string;
    pocEmail: string;
    installationName: string;
    pocPhone: string;
    extension: string;
    pocDSN: string;
    intCallPrefix: string;
    originatingOrderingPoint: string;
  }

  type FormStateKey = keyof FormState;

  const handleRadioChange = (name: FormStateKey, value: 'Yes' | 'No'): void => {
    setFormState({
      ...formState,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <div className="item-request-wrapper">
      {/* Header */}
      <header className="app-header">
        <div className="top-bar">
          <Container fluid>
            <Row>
              <Col xs={4}>
                <div className="brand-logo">
                  <span className="text-white">NEW STORES<br />LOGO HERE</span>
                </div>
              </Col>
              <Col xs={4} className="text-center">
                <h2 className="text-white">CUI</h2>
              </Col>
              <Col xs={4} className="text-right d-flex justify-content-end">
                <div className="header-links">
                  <Link href="/home" className="header-link">
                    <FontAwesomeIcon icon={faHome} />
                    <span>DLA Home</span>
                  </Link>
                  <Link href="/help" className="header-link">
                    <FontAwesomeIcon icon={faQuestion} />
                    <span>Help</span>
                  </Link>
                  <Link href="/profile" className="header-link">
                    <FontAwesomeIcon icon={faUser} />
                    <span>John Smith</span>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        {/* Navigation */}
        <nav className="app-nav">
          <Container fluid>
            <Row>
              <Col>
                <div className="nav-links">
                  <Link href="/home" className="nav-link">Home</Link> |
                  <Link href="/catalogs" className="nav-link">Catalogs</Link> |
                  <Link href="/orders" className="nav-link">Orders</Link> |
                  <Link href="/receipts" className="nav-link">Receipts</Link> |
                  <Link href="/reports" className="nav-link">Reports</Link> |
                  <Link href="/exports" className="nav-link">Exports</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </nav>
        
        {/* User Info */}
        <div className="user-info">
          <Container fluid>
            <Row>
              <Col className="text-right">
                <span className="user-session-info">
                  Logged in as JANE DOE from 11.11.11.111 | 11.11.11.111 | You will be logged out in 48:00
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-content">
        <Container fluid>
          <Row>
            {/* Left Sidebar */}
            <Col md={3}>
              <Card>
                <Card.Body>
                  <div>
                    <label>Contract:</label>
                    <div>SPE3002603276</div>
                  </div>
                  
                  <div>
                    <label>Vendor Name:</label>
                    <div>US Foods San Francisco Division</div>
                  </div>
                  
                  <div>
                    <label>Service:</label>
                    <div>Army</div>
                  </div>
                  
                  <div>
                    <label>Status:</label>
                    <div>Active/Inactive</div>
                  </div>
                  
                  <div>
                    <label>Last Action Date:</label>
                    <div>01/01/2024</div>
                  </div>
                  
                  <div>
                    <label>Requestor:</label>
                    <div>Phillip King</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            {/* Main Form Content */}
            <Col md={9}>
              <h2>Item Request</h2>
              <Form onSubmit={handleSubmit}>
                <Row>
                  {/* Request Information */}
                  <Col md={4}>
                    <Card>
                      <Card.Header>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Request Information</h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Button variant="outline-primary" size="sm">
                          Stock # Look Up
                        </Button>
                        
                        <Form.Group>
                          <Form.Label>Request Number</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="requestNumber"
                            value={formState.requestNumber}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Requestor Type</Form.Label>
                          <Form.Control 
                            type="text"
                            name="requesterType"
                            value={formState.requesterType}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Catalog Type</Form.Label>
                          <Form.Control 
                            type="text"
                            name="catalogType"
                            value={formState.catalogType}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Requested Stock Number Exists in STORES?</Form.Label>
                          <div>
                            <Form.Check
                              inline
                              type="radio"
                              label="Yes"
                              name="stockExistsInStore"
                              id="stockExists-yes"
                              checked={formState.stockExistsInStore === "Yes"}
                              onChange={() => handleRadioChange("stockExistsInStore", "Yes")}
                            />
                            <Form.Check
                              inline
                              type="radio"
                              label="No"
                              name="stockExistsInStore"
                              id="stockExists-no"
                              checked={formState.stockExistsInStore === "No"}
                              onChange={() => handleRadioChange("stockExistsInStore", "No")}
                            />
                          </div>
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Stock # Being Replaced?</Form.Label>
                          <div>
                            <Form.Check
                              inline
                              type="radio"
                              label="Yes"
                              name="stockBeingReplaced"
                              id="stockReplaced-yes"
                              checked={formState.stockBeingReplaced === "Yes"}
                              onChange={() => handleRadioChange("stockBeingReplaced", "Yes")}
                            />
                            <Form.Check
                              inline
                              type="radio"
                              label="No"
                              name="stockBeingReplaced"
                              id="stockReplaced-no"
                              checked={formState.stockBeingReplaced === "No"}
                              onChange={() => handleRadioChange("stockBeingReplaced", "No")}
                            />
                          </div>
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Replaced Stock # <span className="text-danger">**</span></Form.Label>
                          <Form.Control 
                            type="text"
                            name="replacedStock"
                            value={formState.replacedStock}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                    
                    {/* Requesting Customer Information */}
                    <Card>
                      <Card.Header>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Requesting Customer Information</h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Form.Group>
                          <Form.Label>Customer POC <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="text"
                            name="customerPOC"
                            value={formState.customerPOC}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>POC Email <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="email"
                            name="pocEmail"
                            value={formState.pocEmail}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Installation Name <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="text"
                            name="installationName"
                            value={formState.installationName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>POC Phone <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="tel"
                            name="pocPhone"
                            value={formState.pocPhone}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Extension</Form.Label>
                          <Form.Control 
                            type="text"
                            name="extension"
                            value={formState.extension}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>POC DSN</Form.Label>
                          <Form.Control 
                            type="text"
                            name="pocDSN"
                            value={formState.pocDSN}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Int Call Prefix</Form.Label>
                          <Form.Control 
                            type="text"
                            name="intCallPrefix"
                            value={formState.intCallPrefix}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Originating Ordering Point</Form.Label>
                          <Form.Control 
                            type="text"
                            name="originatingOrderingPoint"
                            value={formState.originatingOrderingPoint}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  {/* Right Column */}
                  <Col md={4}>
                    {/* Reason for Item Request */}
                    <Card>
                      <Card.Header>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Reason for Item Request <span className="text-danger">*</span></h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Form.Group>
                          <Form.Control 
                            as="textarea" 
                            rows={4}
                            required
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                    {/* DLA Approved Information */}
                    <Card>
                      <Card.Header>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">DLA Approved Information</h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ms-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Form.Group>
                          <Form.Label>Stock Number</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Brand <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>SKU <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>IAW Requirements</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Product Requirements Comment</Form.Label>
                          <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  </Col>
                    
                  {/* Item Information */}
                  <Col md={4}>
                    <Card>
                      <Card.Header>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Item Information</h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Form.Group>
                          <Form.Label>Manufacturer <span className="text-danger">**</span></Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Unlisted Manufacturer Name <span className="text-danger">**</span></Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Brand <span className="text-danger">**</span></Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Unlisted Brand <span className="text-danger">**</span></Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>SKU</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>GTIN</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Vendor Part Number</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Labeled Product Number</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Units Per Purchase Pack</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Row>
                          <Col xs={6}>
                            <Form.Group>
                              <Form.Label>Package Size</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>
                          </Col>
                          <Col xs={3}>
                            <Form.Group>
                              <Form.Label>UoM</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>
                          </Col>
                          <Col xs={3}>
                            <Form.Group>
                              <Form.Label>Package Code</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>
                          </Col>
                        </Row>
                        
                        <Form.Group>
                          <Form.Label>Vendor Unit of Measure</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Catch Weight Item</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Catch Weight Min/Max</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Grade of Product</Form.Label>
                          <Form.Control as="select">
                            <option>Select</option>
                          </Form.Control>
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>NAMP/IMPS</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Minimum Order Quantity</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Storage Type/Condition</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Country of Origin</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Form.Group>
                          <Form.Label>Catch Weight Min/Max</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        
                        <Row>
                          <Col xs={6}>
                            <Form.Group>
                              <Form.Label>Est. Monthly Demand Qty</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>
                          </Col>
                          <Col xs={6}>
                            <Form.Group>
                              <Form.Label>UoM <span className="text-danger">*</span></Form.Label>
                              <Form.Control type="text" required />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    
                    {/* Action Buttons */}
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <Button variant="outline-primary" className="mr-2">Customer/Vendor Comparison</Button>
                        <Button variant="outline-secondary">Status/Comment Log</Button>
                      </Col>
                    </Row>
                    
                    {/* Submit Buttons */}
                    <div className="d-flex justify-content-end mt-2">
                      <Button variant="secondary" className="mr-2">Cancel</Button>
                      <Button variant="primary" type="submit">Submit</Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default ItemRequestForm;