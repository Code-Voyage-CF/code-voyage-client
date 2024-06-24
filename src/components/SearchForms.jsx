import { Button, Form, FormLabel }from 'react-bootstrap';
import '../components/SearchForms.css';

function SearchForms() {
  return (
    <div>
      <Form id='flight-search'>
        <FormLabel className='formlabel'>Flight Search</FormLabel>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labels'>Where are you coming from?</Form.Label>
          <Form.Control type="text" placeholder="Enter your origin" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labels'>Where are you going?</Form.Label>
          <Form.Control type="text" placeholder="Enter a destination" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labels'>When are you going?</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labels'>How many people?</Form.Label>
          <Form.Control type="number" placeholder='Enter # of people'/>
        </Form.Group>
        <Button className='button' variant="primary" type="submit">
          Search Flights
        </Button>
      </Form>
      <Form id='hotel-search'>
        <FormLabel className='formlabel'>Hotel Search</FormLabel>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labels'>Where are you going?</Form.Label>
          <Form.Control type="text" placeholder="Enter your origin" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labels'>When do we start this stay?</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labels'>When do we end this stay?</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labels'>How many people?</Form.Label>
          <Form.Control type="number" placeholder='Enter # of people'/>
        </Form.Group>
        <Button className='button' variant="primary" type="submit">
          Search Flights
        </Button>
      </Form>
    </div>
  );
}

export default SearchForms;