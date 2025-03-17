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

  // Custom styles for compact layout
  const compactStyles = {
    formGroup: {
      marginBottom: '0.5rem'
    },
    formLabel: {
      marginBottom: '0.15rem',
      fontSize: '0.85rem'
    },
    formControl: {
      padding: '0.25rem 0.5rem',
      height: 'calc(1.5em + 0.5rem + 2px)',
      fontSize: '0.85rem'
    },
    cardHeader: {
      padding: '0.5rem 0.75rem'
    },
    cardBody: {
      padding: '0.75rem'
    },
    card: {
      marginBottom: '0.75rem'
    },
    row: {
      marginBottom: '0.5rem'
    },
    radioGroup: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.85rem'
    },
    radio: {
      marginRight: '1rem'
    },
    sectionTitle: {
      marginBottom: '0.5rem',
      fontSize: '1.5rem'
    },
    textArea: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.85rem'
    }
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
          <Row style={compactStyles.row}>
            <Col>
              <h2 style={compactStyles.sectionTitle}>Item Request</h2>
            </Col>
          </Row>
          
          <Row>
            {/* Left Sidebar */}
            <Col md={3}>
              <Card style={compactStyles.card}>
                <Card.Body style={compactStyles.cardBody}>
                  <div style={compactStyles.formGroup}>
                    <label style={compactStyles.formLabel}>Contract:</label>
                    <div style={{fontSize: '0.85rem'}}>SPE3002603276</div>
                  </div>
                  
                  <div style={compactStyles.formGroup}>
                    <label style={compactStyles.formLabel}>Vendor Name:</label>
                    <div style={{fontSize: '0.85rem'}}>US Foods San Francisco Division</div>
                  </div>
                  
                  <div style={compactStyles.formGroup}>
                    <label style={compactStyles.formLabel}>Service:</label>
                    <div style={{fontSize: '0.85rem'}}>Army</div>
                  </div>
                  
                  <div style={compactStyles.formGroup}>
                    <label style={compactStyles.formLabel}>Status:</label>
                    <div style={{fontSize: '0.85rem'}}>Active/Inactive</div>
                  </div>
                  
                  <div style={compactStyles.formGroup}>
                    <label style={compactStyles.formLabel}>Last Action Date:</label>
                    <div style={{fontSize: '0.85rem'}}>01/01/2024</div>
                  </div>
                  
                  <div style={compactStyles.formGroup}>
                    <label style={compactStyles.formLabel}>Requestor:</label>
                    <div style={{fontSize: '0.85rem'}}>Phillip King</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            {/* Main Form Content */}
            <Col md={9}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  {/* Request Information */}
                  <Col md={6}>
                    <Card style={compactStyles.card}>
                      <Card.Header style={compactStyles.cardHeader}>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0" style={{fontSize: '0.95rem'}}>Request Information</h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body style={compactStyles.cardBody}>
                        <Button variant="outline-primary" size="sm" style={{marginBottom: '0.5rem', padding: '0.15rem 0.5rem', fontSize: '0.8rem'}}>
                          Stock # Look Up
                        </Button>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Request Number</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="requestNumber"
                            value={formState.requestNumber}
                            onChange={handleChange}
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Requestor Type</Form.Label>
                          <Form.Control 
                            type="text"
                            name="requesterType"
                            value={formState.requesterType}
                            onChange={handleChange}
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Catalog Type</Form.Label>
                          <Form.Control 
                            type="text"
                            name="catalogType"
                            value={formState.catalogType}
                            onChange={handleChange}
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Requested Stock Number Exists in STORES?</Form.Label>
                          <div style={compactStyles.radioGroup}>
                            <Form.Check
                              inline
                              type="radio"
                              label="Yes"
                              name="stockExistsInStore"
                              id="stockExists-yes"
                              checked={formState.stockExistsInStore === "Yes"}
                              onChange={() => handleRadioChange("stockExistsInStore", "Yes")}
                              style={compactStyles.radio}
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
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Stock # Being Replaced?</Form.Label>
                          <div style={compactStyles.radioGroup}>
                            <Form.Check
                              inline
                              type="radio"
                              label="Yes"
                              name="stockBeingReplaced"
                              id="stockReplaced-yes"
                              checked={formState.stockBeingReplaced === "Yes"}
                              onChange={() => handleRadioChange("stockBeingReplaced", "Yes")}
                              style={compactStyles.radio}
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
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Replaced Stock # <span className="text-danger">**</span></Form.Label>
                          <Form.Control 
                            type="text"
                            name="replacedStock"
                            value={formState.replacedStock}
                            onChange={handleChange}
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                    
                    {/* Requesting Customer Information */}
                    <Card style={compactStyles.card}>
                      <Card.Header style={compactStyles.cardHeader}>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0" style={{fontSize: '0.95rem'}}>Requesting Customer Information</h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body style={compactStyles.cardBody}>
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Customer POC <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="text"
                            name="customerPOC"
                            value={formState.customerPOC}
                            onChange={handleChange}
                            required
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>POC Email <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="email"
                            name="pocEmail"
                            value={formState.pocEmail}
                            onChange={handleChange}
                            required
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Installation Name <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="text"
                            name="installationName"
                            value={formState.installationName}
                            onChange={handleChange}
                            required
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>POC Phone <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="tel"
                            name="pocPhone"
                            value={formState.pocPhone}
                            onChange={handleChange}
                            required
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Extension</Form.Label>
                          <Form.Control 
                            type="text"
                            name="extension"
                            value={formState.extension}
                            onChange={handleChange}
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>POC DSN</Form.Label>
                          <Form.Control 
                            type="text"
                            name="pocDSN"
                            value={formState.pocDSN}
                            onChange={handleChange}
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Int Call Prefix</Form.Label>
                          <Form.Control 
                            type="text"
                            name="intCallPrefix"
                            value={formState.intCallPrefix}
                            onChange={handleChange}
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Originating Ordering Point</Form.Label>
                          <Form.Control 
                            type="text"
                            name="originatingOrderingPoint"
                            value={formState.originatingOrderingPoint}
                            onChange={handleChange}
                            style={compactStyles.formControl}
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  {/* Right Column */}
                  <Col md={6}>
                    {/* Reason for Item Request */}
                    <Card style={compactStyles.card}>
                      <Card.Header style={compactStyles.cardHeader}>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0" style={{fontSize: '0.95rem'}}>Reason for Item Request <span className="text-danger">*</span></h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body style={compactStyles.cardBody}>
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Control 
                            as="textarea" 
                            rows={4}
                            required
                            style={compactStyles.textArea}
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                    
                    {/* Item Information */}
                    <Card style={compactStyles.card}>
                      <Card.Header style={compactStyles.cardHeader}>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0" style={{fontSize: '0.95rem'}}>Item Information</h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body style={compactStyles.cardBody}>
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Manufacturer <span className="text-danger">**</span></Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Unlisted Manufacturer Name <span className="text-danger">**</span></Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Brand <span className="text-danger">**</span></Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Unlisted Brand <span className="text-danger">**</span></Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>SKU</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>GTIN</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Vendor Part Number</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Labeled Product Number</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Units Per Purchase Pack</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Row style={compactStyles.row}>
                          <Col xs={6}>
                            <Form.Group style={compactStyles.formGroup}>
                              <Form.Label style={compactStyles.formLabel}>Package Size</Form.Label>
                              <Form.Control type="text" style={compactStyles.formControl} />
                            </Form.Group>
                          </Col>
                          <Col xs={3}>
                            <Form.Group style={compactStyles.formGroup}>
                              <Form.Label style={compactStyles.formLabel}>UoM</Form.Label>
                              <Form.Control type="text" style={compactStyles.formControl} />
                            </Form.Group>
                          </Col>
                          <Col xs={3}>
                            <Form.Group style={compactStyles.formGroup}>
                              <Form.Label style={compactStyles.formLabel}>Package Code</Form.Label>
                              <Form.Control type="text" style={compactStyles.formControl} />
                            </Form.Group>
                          </Col>
                        </Row>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Vendor Unit of Measure</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Catch Weight Item</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Catch Weight Min/Max</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Grade of Product</Form.Label>
                          <Form.Control as="select" style={compactStyles.formControl}>
                            <option>Select</option>
                          </Form.Control>
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>NAMP/IMPS</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Minimum Order Quantity</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Storage Type/Condition</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Country of Origin</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Catch Weight Min/Max</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Row style={compactStyles.row}>
                          <Col xs={6}>
                            <Form.Group style={compactStyles.formGroup}>
                              <Form.Label style={compactStyles.formLabel}>Est. Monthly Demand Qty</Form.Label>
                              <Form.Control type="text" style={compactStyles.formControl} />
                            </Form.Group>
                          </Col>
                          <Col xs={6}>
                            <Form.Group style={compactStyles.formGroup}>
                              <Form.Label style={compactStyles.formLabel}>UoM <span className="text-danger">*</span></Form.Label>
                              <Form.Control type="text" required style={compactStyles.formControl} />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    
                    {/* Action Buttons */}
                    <Row style={{marginBottom: '0.5rem'}}>
                      <Col className="d-flex justify-content-center">
                        <Button variant="outline-primary" className="mr-2" style={{padding: '0.25rem 0.5rem', fontSize: '0.85rem'}}>Customer/Vendor Comparison</Button>
                        <Button variant="outline-secondary" style={{padding: '0.25rem 0.5rem', fontSize: '0.85rem'}}>Status/Comment Log</Button>
                      </Col>
                    </Row>
                    
                    {/* DLA Approved Information */}
                    <Card style={compactStyles.card}>
                      <Card.Header style={compactStyles.cardHeader}>
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0" style={{fontSize: '0.95rem'}}>DLA Approved Information</h5>
                          <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-info" />
                        </div>
                      </Card.Header>
                      <Card.Body style={compactStyles.cardBody}>
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Stock Number</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Brand <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" required style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>SKU <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" required style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>IAW Requirements</Form.Label>
                          <Form.Control type="text" style={compactStyles.formControl} />
                        </Form.Group>
                        
                        <Form.Group style={compactStyles.formGroup}>
                          <Form.Label style={compactStyles.formLabel}>Product Requirements Comment</Form.Label>
                          <Form.Control as="textarea" rows={2} style={compactStyles.textArea} />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                    
                    {/* Submit Buttons */}
                    <div className="d-flex justify-content-end mt-2">
                      <Button variant="secondary" className="mr-2" size="sm" style={{padding: '0.25rem 0.75rem', fontSize: '0.85rem'}}>Cancel</Button>
                      <Button variant="primary" type="submit" size="sm" style={{padding: '0.25rem 0.75rem', fontSize: '0.85rem'}}>Submit</Button>
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