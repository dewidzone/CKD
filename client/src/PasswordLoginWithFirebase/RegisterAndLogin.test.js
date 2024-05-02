import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RegisterAndLogin from './RegisterAndLogin';

// Mock dependencies
jest.mock('./FirebaseConfig', () => ({
  database: jest.fn(),
}));
jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));
jest.mock('jwt-decode', () => ({
  jwtDecode: jest.fn(),
}));

describe('RegisterAndLogin Component', () => {
  test('renders sign up form', () => {
    const { getByText, getByLabelText } = render(<RegisterAndLogin />);
    
    expect(getByText('SignUp')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Forgot Password?')).toBeInTheDocument();
  });

  test('submits sign up form', async () => {
    const { getByText, getByLabelText } = render(<RegisterAndLogin />);

    fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(getByText('SignUp'));

    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith({}, 'test@example.com', 'testpassword');
    });
  });

  test('renders sign in form', () => {
    const { getByText, getByLabelText } = render(<RegisterAndLogin />);
    
    fireEvent.click(getByText('SignIn'));

    expect(getByText('SignIn')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Forgot Password?')).toBeInTheDocument();
  });

  test('submits sign in form', async () => {
    const { getByText, getByLabelText } = render(<RegisterAndLogin />);

    fireEvent.click(getByText('SignIn'));
    fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(getByText('SignIn'));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith({}, 'test@example.com', 'testpassword');
    });
  });
});