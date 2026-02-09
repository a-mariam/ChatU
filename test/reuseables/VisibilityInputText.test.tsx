import React from "react";
import VisibilityInputText from "@/reuseables/VisibilityInputText";
import { render, fireEvent } from "@testing-library/react-native";
import {describe,it, expect} from "@jest/globals";

describe("VisibilityInputText", ()=> {
    const mockFn = jest.fn();

    it('should render input with provided placeholder', () => {
        const {getByPlaceholderText} =  render(<VisibilityInputText placeholder={'Hello'} value={''} onChange={mockFn} />);
       expect(getByPlaceholderText("Hello")).toBeTruthy();
    })

    it('should be secure by default if no value is passed to isSecureText variable ', () => {
        const {getByTestId} =  render(<VisibilityInputText isSecureText={true} placeholder={'Hello'} value={''} onChange={mockFn} />);
        const inputElement = getByTestId('inputElement');
        expect(inputElement.props.secureTextEntry).toBe(true);
    });

    it('should be not  secure when true value is passed to isSecureText variable ', () => {
        const {getByTestId} =  render(<VisibilityInputText placeholder={'Hello'} value={''} onChange={mockFn} />);
        const inputElement = getByTestId('inputElement');
        expect(inputElement.props.secureTextEntry).toBe(false);
    });

    it('should be change secureTextEntry value when icon is toggle ', () => {
        const {getByTestId} =  render(<VisibilityInputText placeholder={'Hello'} value={''} onChange={mockFn}/>);
        const inputElement = getByTestId('inputElement');
        const inputElementSecureTextEntryValue = inputElement.props.secureTextEntry;
        const icon = getByTestId('toggleInputVisibility');
        fireEvent.press(icon);
        expect(inputElement.props.secureTextEntry).toBe(!inputElementSecureTextEntryValue);
    });

    it('should display typed text correctly', () => {
        const mockFn = jest.fn();

        const {getByTestId, getAllByDisplayValue} = render(<VisibilityInputText placeholder={'Hello'} value={''} onChange={mockFn}/>);
        const inputElement = getByTestId('inputElement');
        fireEvent.changeText(inputElement, 'testing');
        // const value = getAllByDisplayValue('testing');
        expect(mockFn).toHaveBeenCalledWith("testing");
    });

});