import React from "react";
import {render} from "@testing-library/react";
import Register from "../../pages/register";

describe('Registration', () => { 

  it('should handle render Register page', () => { 
    const {container} = render(<Register/>); 
    expect(container).toMatchSnapshot() 
  });

})

it('should handle text Register page', () => { 
  const { getByText } = render(<Register/>); 
  expect(getByText('Register')).toBeInTheDocument() 
});

it('should handle element use placeholder Register page', () => { 
  const { getByPlaceholderText } = render(<Register/>);  
  expect(getByPlaceholderText('Name')).toBeInTheDocument() 
});

it('should handle element use placeholder Register page', () => { 
  const { getByPlaceholderText } = render(<Register/>);  
  expect(getByPlaceholderText('Email')).toBeInTheDocument() 
});

it('should handle element use placeholder Register page', () => { 
  const { getByPlaceholderText } = render(<Register/>);  
  expect(getByPlaceholderText('Password')).toBeInTheDocument() 
});



