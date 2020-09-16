import React from 'react';
import renderer from 'react-test-renderer';
import AppButton from '../../app/components/AppButton';

describe('Testing AppButton', () => {
    test('shows AppButton renders correctly', () => {
        const button = renderer.create( < AppButton / > ).toJSON();
        expect(button).toMatchSnapshot();
    });
});